import type { Discipline } from './types'

export function levelDots(level: number, max = 5): boolean[] {
  return Array.from({ length: max }, (_, i) => i < level)
}

/**
 * Lower-cased with the diacritics stripped, so a search for "hecata" finds "Hécata"
 * and "dominacion" finds "Dominación". Every search box in the app matches on this.
 */
export function foldForSearch(s: string): string {
  return s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}

/**
 * Whether a power fact carries anything. `N/A` is how the data says "no roll" or
 * "no duration", and it is the only value the views hide.
 */
export function hasFact(value: string | undefined | null): value is string {
  return !!value && value !== 'N/A'
}

/**
 * Head of a normalised cost/duration value: everything before the parenthetical
 * qualifier. `content/disciplines.ts` and both overlays store these facts in a fixed short
 * vocabulary (`1 Enardecimiento`, `Una escena`, …) with any nuance kept in a
 * trailing `(…)`. The detail sheet prints the whole string; the small grid cards
 * print just this head so the line never grows past two rows on a phone.
 */
export function factHead(value: string): string {
  const i = value.indexOf(' (')
  return i === -1 ? value : value.slice(0, i)
}

export function shortCost(cost: string | undefined | null): string {
  return cost ? factHead(cost) : '\u2014'
}

/** `null` when the power has no meaningful duration, so the row can be dropped. */
export function shortDuration(dur: string | undefined | null): string | null {
  return hasFact(dur) ? factHead(dur) : null
}

/** Separators a dice pool uses before naming the *opposing* pool, per language. */
const POOL_OPPOSED = [' contra ', ' vs. ', ' vs ']
/** Separators before an alternative pool ("Astucia + Auspex o Resolución + Auspex"). */
const POOL_ALT = [' o ', ' or ']

/**
 * The rolling character's own pool, short enough for a grid card. Only what the
 * player does not need mid-roll is dropped: the *opposed* pool, the parenthetical
 * and any alternative pool. The attribute and the skill both stay — "Carisma +
 * Animalismo" is the roll, and half of it is not.
 * Returns `null` for powers that need no roll.
 */
export function shortDicePool(pool: string | undefined | null): string | null {
  if (!hasFact(pool)) return null
  let v = pool
  for (const sep of POOL_OPPOSED) {
    const i = v.indexOf(sep)
    if (i > 0) { v = v.slice(0, i); break }
  }
  v = factHead(v)
  const comma = v.indexOf(', ')
  if (comma > 0) v = v.slice(0, comma)
  for (const sep of POOL_ALT) {
    const i = v.indexOf(sep)
    if (i > 0) { v = v.slice(0, i); break }
  }
  // "Como el Poder base, contra …" loses its clause but keeps the comma
  return v.replace(/[,;:]\s*$/, '')
}

export function artGradient(discipline: Discipline): string {
  return colorGradient(discipline.color, discipline.colorDark)
}

/**
 * Card art backdrop. The mid stop is the accent at 33% alpha (`55`) on purpose:
 * at full strength it swallows the icon, which is painted in that same colour.
 */
export function colorGradient(color?: string, colorDark?: string): string {
  const c = color || '#4a2a6a'
  const cd = colorDark || '#1a0a2a'
  return `linear-gradient(145deg, ${cd} 0%, ${c}55 50%, ${cd} 100%)`
}

// ── Amalgam link parsing ──────────────────────────────────────────────────────

export interface AmalgamaSegment {
  text: string
  disciplineId?: string
}

export function parseAmalgama(
  text: string,
  disciplines: Array<{ id: string; name: string }>,
): AmalgamaSegment[] {
  if (!text) return []
  // Match longer names first to avoid partial matches
  const sorted = [...disciplines].sort((a, b) => b.name.length - a.name.length)
  let segments: AmalgamaSegment[] = [{ text }]

  for (const disc of sorted) {
    const next: AmalgamaSegment[] = []
    for (const seg of segments) {
      if (seg.disciplineId !== undefined) { next.push(seg); continue }
      const idx = seg.text.indexOf(disc.name)
      if (idx === -1) { next.push(seg); continue }
      if (idx > 0) next.push({ text: seg.text.slice(0, idx) })
      next.push({ text: disc.name, disciplineId: disc.id })
      const rest = seg.text.slice(idx + disc.name.length)
      if (rest) next.push({ text: rest })
    }
    segments = next
  }
  return segments
}
