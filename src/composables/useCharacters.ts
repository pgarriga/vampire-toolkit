import { ref, computed } from 'vue'
import { DISCIPLINES_DATA } from '../content/disciplines'
import { CLANS_DATA } from '../content/clans'
import { readJSON, writeJSON, storageGet, storageSet, storageRemove, storageKeys } from '../storage'
import type { Character, ClanIconType } from '../types'

/**
 * One localStorage entry per character: `v5-character:<id>` holds that character's
 * whole JSON and nothing else. The list is rebuilt by scanning for the prefix, so
 * there is no separate index key that could fall out of step with the entries — and
 * the file under a key is exactly what Export writes to disk.
 */
const KEY_PREFIX         = 'v5-character:'
const STORAGE_KEY_ACTIVE = 'v5-active-character'

/** The single-array layout this replaced, migrated on first load. */
const LEGACY_LIST_KEY = 'v5-characters'

/**
 * The global saved-powers lists from before powers belonged to a character. Named
 * here only so they can be deleted: nothing reads them, and a character is never
 * seeded from them.
 */
const DEAD_KEYS = ['v5-my-powers', 'v5-mis-poderes']

/** `disciplineId:powerId` for every power in the book; anything else is dropped on load. */
const VALID_POWER_KEYS = new Set<string>(
  DISCIPLINES_DATA.disciplines.flatMap(d => d.powers.map(p => `${d.id}:${p.id}`)),
)

const VALID_CLAN_IDS = new Set<string>(CLANS_DATA.clans.map(c => c.id))

/**
 * Every Generation V5 recognises: the 1st is Caine, the 3rd the Antediluvians, and
 * the 16th the thinnest Thin-Blood (14th–16th are the Thin-Blood band). Exported so
 * the create and edit forms offer exactly this range and nothing else.
 */
export const GENERATIONS: number[] = Array.from({ length: 16 }, (_, i) => i + 1)

/** V5's standard starting Generation for a newly Embraced fledgling. */
export const DEFAULT_GENERATION = 13

function validGeneration(g: unknown): g is number {
  return typeof g === 'number' && Number.isInteger(g) && g >= 1 && g <= 16
}

/**
 * Storage is user-editable, survives across releases and — now that a character is a
 * file you can save and put back — may have been hand-edited, so every field is
 * re-checked. Returns null for anything that is not a usable character.
 */
function sanitize(raw: unknown): Character | null {
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return null
  const c = raw as Partial<Character>
  if (typeof c.id !== 'string' || !c.id) return null
  if (typeof c.name !== 'string' || !c.name.trim()) return null
  if (typeof c.clanId !== 'string' || !VALID_CLAN_IDS.has(c.clanId)) return null
  const powers = Array.isArray(c.powers)
    ? c.powers.filter((k): k is string => typeof k === 'string' && VALID_POWER_KEYS.has(k))
    : []
  return {
    id: c.id,
    name: c.name.trim(),
    clanId: c.clanId as ClanIconType,
    ...(validGeneration(c.generation) ? { generation: c.generation } : {}),
    powers,
    createdAt: typeof c.createdAt === 'number' ? c.createdAt : 0,
  }
}

/**
 * A character read back from a saved file. More forgiving than the storage sanitiser
 * in exactly two ways — a file with no `id` or no `createdAt` is given fresh ones, so
 * a hand-written sheet still loads. Everything else must be valid or the file is
 * rejected outright: a bad clan or a generation of 17 is a broken file, not a default
 * to guess at.
 */
export function parseCharacter(text: string): Character | null {
  let raw: unknown
  try { raw = JSON.parse(text) } catch { return null }
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return null
  const draft = raw as Record<string, unknown>
  // A generation that is present but out of range means a broken file. The storage
  // sanitiser only drops the field — right there, since rejecting would cost the
  // whole character — but on load, dropping it would silently lose what the file said.
  if (draft['generation'] !== undefined && !validGeneration(draft['generation'])) return null
  const id        = typeof draft['id'] === 'string' && draft['id'] ? draft['id'] : newId()
  const createdAt = typeof draft['createdAt'] === 'number' && draft['createdAt'] > 0
    ? draft['createdAt'] : Date.now()
  return sanitize({ ...draft, id, createdAt })
}

/** `crypto.randomUUID` is missing outside secure contexts (plain-http LAN testing). */
function newId(): string {
  const c = globalThis.crypto as Crypto | undefined
  if (c && typeof c.randomUUID === 'function') return c.randomUUID()
  return `c${Date.now().toString(36)}${Math.random().toString(36).slice(2, 10)}`
}

// ── Storage housekeeping, oldest layout first ────────────────────────────────

// Powers belong to a character now, so the old global lists are deleted outright
// rather than migrated. This runs on every load, not once, so a stale key cannot
// survive in a browser that missed the release that dropped it.
for (const key of DEAD_KEYS) storageRemove(key)

// The single-array layout: split it into one entry per character.
const legacyList = readJSON(LEGACY_LIST_KEY)
if (Array.isArray(legacyList)) {
  for (const entry of legacyList) {
    const c = sanitize(entry)
    if (c) writeJSON(KEY_PREFIX + c.id, c)
  }
  storageRemove(LEGACY_LIST_KEY)
}

// ── Singleton state: shared by every component ───────────────────────────────

/** Every `v5-character:*` entry, oldest first so the index order is stable. */
function loadAll(): Character[] {
  return storageKeys()
    .filter(key => key.startsWith(KEY_PREFIX))
    .flatMap(key => sanitize(readJSON(key)) ?? [])
    .sort(byCreated)
}

function byCreated(a: Character, b: Character): number {
  return a.createdAt - b.createdAt || a.name.localeCompare(b.name)
}

const characters = ref<Character[]>(loadAll())

/**
 * The last character sheet opened. `PowerView` follows it for `?from=character`
 * links — back goes to that sheet and swiping walks its powers. Persisted so a
 * reload of such a link keeps pointing at the same character.
 */
const activeId = ref<string | null>(loadActiveId())

function loadActiveId(): string | null {
  const stored = storageGet(STORAGE_KEY_ACTIVE)
  if (stored && characters.value.some(c => c.id === stored)) return stored
  return characters.value[0]?.id ?? null
}

/** Writes one character's own entry — no other character's key is touched. */
function persist(c: Character): void {
  writeJSON(KEY_PREFIX + c.id, c)
}

function persistActive(): void {
  if (activeId.value) storageSet(STORAGE_KEY_ACTIVE, activeId.value)
  else storageRemove(STORAGE_KEY_ACTIVE)
}

export function useCharacters() {
  const activeCharacter = computed<Character | null>(
    () => characters.value.find(c => c.id === activeId.value) ?? null,
  )

  function characterById(id: string): Character | undefined {
    return characters.value.find(c => c.id === id)
  }

  function setActive(id: string | null): void {
    activeId.value = id && characters.value.some(c => c.id === id) ? id : null
    persistActive()
  }

  function createCharacter(name: string, clanId: ClanIconType, generation?: number): Character {
    const character: Character = {
      id: newId(),
      name: name.trim(),
      clanId,
      ...(validGeneration(generation) ? { generation } : {}),
      powers: [],
      createdAt: Date.now(),
    }
    characters.value.push(character)
    persist(character)
    setActive(character.id)
    return character
  }

  function deleteCharacter(id: string): void {
    const i = characters.value.findIndex(c => c.id === id)
    if (i === -1) return
    characters.value.splice(i, 1)
    storageRemove(KEY_PREFIX + id)
    if (activeId.value === id) setActive(characters.value[0]?.id ?? null)
  }

  /**
   * Edit a character's identity. The powers are untouched: changing clan does not
   * re-check them against the new clan's in-clan Disciplines, because V5 characters
   * routinely learn powers outside their clan.
   */
  function updateCharacter(
    id: string,
    patch: { name?: string; clanId?: ClanIconType; generation?: number },
  ): void {
    const c = characterById(id)
    if (!c) return
    if (patch.name !== undefined) {
      const name = patch.name.trim()
      if (name) c.name = name
    }
    if (patch.clanId !== undefined && VALID_CLAN_IDS.has(patch.clanId)) c.clanId = patch.clanId
    if (validGeneration(patch.generation)) c.generation = patch.generation
    persist(c)
  }

  /**
   * Put a parsed file into storage. A file whose id matches a character already here
   * replaces it — that is what restoring a backup means — so the caller must confirm
   * before calling with one. Returns which of the two happened.
   */
  function importCharacter(c: Character): 'added' | 'replaced' {
    const i = characters.value.findIndex(x => x.id === c.id)
    if (i >= 0) characters.value.splice(i, 1, c)
    else characters.value.push(c)
    characters.value.sort(byCreated)
    persist(c)
    setActive(c.id)
    return i >= 0 ? 'replaced' : 'added'
  }

  /** The character exactly as its localStorage entry holds it, pretty-printed. */
  function characterJSON(id: string): string | null {
    const c = characterById(id)
    return c ? JSON.stringify(c, null, 2) : null
  }

  // ── Powers ──────────────────────────────────────────────────────────────────
  //
  // Both take the character explicitly. They used to write to whichever character was
  // "active", which meant a star on a Discipline page landed on a sheet the reader
  // could not see from there; powers are now only ever added from inside a sheet, so
  // the owner is always known at the call site.

  function togglePower(characterId: string, disciplineId: string, powerId: string): void {
    const c = characterById(characterId)
    if (!c) return
    const key = `${disciplineId}:${powerId}`
    const i = c.powers.indexOf(key)
    if (i >= 0) c.powers.splice(i, 1)
    else c.powers.push(key)
    persist(c)
  }

  function hasPower(characterId: string, disciplineId: string, powerId: string): boolean {
    return characterById(characterId)?.powers.includes(`${disciplineId}:${powerId}`) ?? false
  }

  return {
    characters,
    activeCharacter,
    characterById,
    characterJSON,
    importCharacter,
    setActive,
    createCharacter,
    deleteCharacter,
    updateCharacter,
    togglePower,
    hasPower,
  }
}
