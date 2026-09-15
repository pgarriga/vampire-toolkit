<script setup lang="ts">
import { computed, ref } from 'vue'
import { CLAN_ICONS } from '../clan-icons'
import { useI18n } from '../composables/useI18n'
import { useClans } from '../composables/useClans'
import type { ClanIconType } from '../types'

/**
 * The 14 clan sigils as a single-choice grid, shared by the create wizard and the
 * character sheet's edit panel so the two can never drift apart.
 */
const model = defineModel<ClanIconType | null>({ required: true })

const { t } = useI18n()
const { clans } = useClans()

const search = ref('')

/** Strips diacritics so "hecata" matches "Hécata", as the clans list does. */
function norm(s: string): string {
  return s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
}

const shown = computed(() => {
  const q = norm(search.value).trim()
  if (!q) return clans.value
  return clans.value.filter(c => norm(c.name).includes(q) || norm(c.nickname).includes(q))
})
</script>

<template>
  <div class="d-flex flex-column gap-3">
    <input
      v-model="search"
      class="search-input"
      type="text"
      autocomplete="off"
      :placeholder="t.characters.clanSearch"
      :aria-label="t.characters.clanSearch"
    />

    <!-- Toggle buttons rather than a listbox: each tile is its own tab stop, which
         is what a plain group of buttons promises and a listbox does not. -->
    <div v-if="shown.length" class="clan-picker" role="group" :aria-label="t.characters.clanLabel">
      <button
        v-for="c in shown"
        :key="c.id"
        type="button"
        class="clan-pick"
        :class="{ selected: model === c.id }"
        :aria-pressed="model === c.id"
        :style="{ '--card-color': c.color, '--card-glow': c.colorGlow }"
        @click="model = c.id"
      >
        <span class="clan-pick-art clan-medallion" aria-hidden="true">
          <span class="clan-pick-sigil sigil" v-html="CLAN_ICONS[c.id]"></span>
        </span>
        <span class="clan-pick-name font-title">{{ c.name }}</span>
        <!-- Selection shows as a mark as well as a colour shift, so it does not
             rest on hue alone (same reason .star-btn changes shape). -->
        <svg v-if="model === c.id" class="clan-pick-check" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"
             aria-hidden="true">
          <path d="m5 13 4.5 4.5L19 7"/>
        </svg>
      </button>
    </div>

    <p v-else class="text-parchment-dim fst-italic mb-0">
      {{ t.characters.clanNoResults }} “{{ search }}”.
    </p>
  </div>
</template>
