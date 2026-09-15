<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { NAV_ICONS } from '../nav-icons'
import { CLAN_ICONS } from '../clan-icons'
import { useI18n } from '../composables/useI18n'
import { useClans } from '../composables/useClans'
import type { Character } from '../types'
import { useCharacters, parseCharacter } from '../composables/useCharacters'

const router = useRouter()
const { t } = useI18n()
const { clanById } = useClans()
const { characters, characterById, importCharacter } = useCharacters()

// ── Loading a saved character file ───────────────────────────────────────────

const fileInput = ref<HTMLInputElement | null>(null)
const loadError = ref(false)
/** A parsed file whose id is already here — held until the user confirms the replace. */
const pending   = ref<Character | null>(null)

function pickFile(): void {
  loadError.value = false
  pending.value   = null
  fileInput.value?.click()
}

async function onFilePicked(e: Event): Promise<void> {
  const input = e.target as HTMLInputElement
  const file  = input.files?.[0]
  // Cleared straight away so picking the same file twice still fires a change event.
  input.value = ''
  if (!file) return

  let character = null
  try {
    character = parseCharacter(await file.text())
  } catch { /* unreadable file — handled as invalid below */ }

  if (!character) { loadError.value = true; return }

  // Replacing a character the user already has is destructive, so it is confirmed.
  if (characterById(character.id)) { pending.value = character; return }
  open(importAndGet(character))
}

function confirmReplace(): void {
  const c = pending.value
  pending.value = null
  if (c) open(importAndGet(c))
}

function importAndGet(c: Character): string {
  importCharacter(c)
  return c.id
}

function open(id: string): void {
  router.push(`/character/${id}`)
}

/** The compendium: reference material that ships with the app. */
const tools = computed(() => [
  {
    key: 'clans',
    icon: NAV_ICONS.clans,
    title: t.value.home.clansTitle,
    description: t.value.home.clansDesc,
    accent: 'var(--tool-clans)',
    onClick: () => router.push('/clans'),
  },
  {
    key: 'disciplines',
    icon: NAV_ICONS.disciplines,
    title: t.value.home.disciplinesTitle,
    description: t.value.home.disciplinesDesc,
    accent: 'var(--tool-disciplines)',
    onClick: () => router.push('/disciplines'),
  },
])

/** One row per saved character, each carrying its clan's sigil and colour. */
const rows = computed(() =>
  characters.value.map(c => {
    const clan = clanById(c.clanId)
    return {
      id: c.id,
      name: c.name,
      // "Toreador · Gen. 13" — the short form, since the row is one line on a phone.
      meta: [clan?.name, c.generation ? `${t.value.characters.generationShort} ${c.generation}` : null]
        .filter(Boolean).join(' · '),
      color: clan?.color ?? 'var(--tool-my-powers)',
      colorGlow: clan?.colorGlow ?? 'transparent',
      svg: CLAN_ICONS[c.clanId],
    }
  }),
)
</script>

<template>
  <div class="min-vh-100 bg-void font-body text-parchment">

    <main class="tools-wrap mx-auto px-4 pt-5 pb-5">

      <!-- ── Compendium ── -->
      <section class="home-section" aria-labelledby="home-compendium">
        <h2 id="home-compendium" class="home-section-title font-title">{{ t.home.compendium }}</h2>
        <div class="tools-grid">
          <button
            v-for="tool in tools"
            :key="tool.key"
            type="button"
            class="tool-card"
            :style="{ '--tool-accent': tool.accent }"
            @click="tool.onClick"
          >
            <div class="tool-card-head">
              <span class="tool-card-icon" v-html="tool.icon" aria-hidden="true"></span>
              <span class="tool-card-title font-title">{{ tool.title }}</span>
            </div>
            <p class="tool-card-desc">{{ tool.description }}</p>
          </button>
        </div>
      </section>

      <!-- ── My characters ── -->
      <section class="home-section" aria-labelledby="home-characters">
        <h2 id="home-characters" class="home-section-title font-title">{{ t.home.myCharacters }}</h2>

        <div class="tools-grid">
          <button
            v-for="row in rows"
            :key="row.id"
            type="button"
            class="char-row"
            :style="{ '--card-color': row.color, '--card-glow': row.colorGlow }"
            @click="router.push(`/character/${row.id}`)"
          >
            <span class="char-row-medallion clan-medallion" aria-hidden="true">
              <span class="char-row-sigil sigil" v-html="row.svg"></span>
            </span>
            <span class="char-row-text">
              <span class="char-row-name font-title">{{ row.name }}</span>
              <span class="char-row-meta">{{ row.meta }}</span>
            </span>
          </button>

          <!-- Placeholder when there are none, and the way to add more once there are -->
          <button
            type="button"
            class="char-row char-row--new"
            @click="router.push('/character/new')"
          >
            <span class="char-row-medallion char-row-medallion--new" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M12 5v14M5 12h14"/>
              </svg>
            </span>
            <span class="char-row-text">
              <span class="char-row-name font-title">{{ t.characters.create }}</span>
              <span v-if="!rows.length" class="char-row-meta">{{ t.characters.empty }}</span>
            </span>
          </button>

          <!-- Load a character back from a file saved with the sheet's Save button -->
          <button type="button" class="char-row char-row--new" @click="pickFile">
            <span class="char-row-medallion char-row-medallion--new" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                   stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 15V3"/><path d="m7 8 5-5 5 5"/><path d="M4 20h16"/>
              </svg>
            </span>
            <span class="char-row-text">
              <span class="char-row-name font-title">{{ t.characters.load }}</span>
              <span class="char-row-meta">{{ t.characters.loadHint }}</span>
            </span>
          </button>

          <p v-if="loadError" class="char-load-error" role="alert">{{ t.characters.loadError }}</p>

          <div v-if="pending" class="char-load-confirm" role="alert">
            <p class="mb-0">{{ t.characters.loadReplace }}</p>
            <p class="char-load-name font-title mb-0">{{ pending.name }}</p>
            <div class="d-flex flex-wrap gap-2">
              <button class="char-action char-action--danger" @click="confirmReplace">
                {{ t.characters.replace }}
              </button>
              <button class="char-action" @click="pending = null">{{ t.characters.cancel }}</button>
            </div>
          </div>
        </div>

        <!-- Outside .tools-grid on purpose: Bootstrap's .visually-hidden has no
             position:absolute, so as a grid item iOS Safari sized the track to this
             control's intrinsic width and pushed every row past the viewport. -->
        <input ref="fileInput" class="visually-hidden" type="file"
               accept="application/json,.json" @change="onFilePicked" />
      </section>

    </main>

  </div>
</template>
