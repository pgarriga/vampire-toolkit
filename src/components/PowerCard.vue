<script setup lang="ts">
import { DISCIPLINE_ICONS } from '../icons/disciplines'
import { artGradient, shortCost, shortDicePool, shortDuration } from '../helpers'
import { useI18n } from '../composables/useI18n'
import type { Discipline, Power } from '../types'

/**
 * One power on a grid: the discipline's art with the level badge, then the name, the
 * cost / dice pool / duration lines and the clamped description. Shared by the
 * Discipline page and the character sheet so the two grids cannot drift apart —
 * their fixed block heights (see `.power-card-title` in main.css) are load-bearing.
 */
withDefaults(defineProps<{
  discipline: Discipline
  power: Power
  /** The name's heading rank, so it nests under whatever heading the grid sits in. */
  headingLevel?: 3 | 4
}>(), {
  headingLevel: 3,
})

defineEmits<{ open: [] }>()

const { t } = useI18n()
</script>

<template>
  <article
    class="power-card d-flex flex-column h-100"
    :style="{ '--card-color': discipline.color, '--card-glow': discipline.colorGlow }"
    @click="$emit('open')"
    @keydown.enter.prevent="$emit('open')"
    @keydown.space.prevent="$emit('open')"
    tabindex="0"
    role="button"
    :aria-label="`${power.name}, ${t.discipline.level} ${power.level}, ${t.discipline.cost}: ${power.cost}`"
  >
    <!-- Art -->
    <div class="power-card-art"
         :style="{ background: artGradient(discipline) }" aria-hidden="true">
      <div v-html="DISCIPLINE_ICONS[discipline.iconType]"
           :style="{ '--card-color': discipline.color }"
           class="power-art-icon sigil"></div>
      <div class="power-level-badge">{{ t.discipline.level }} {{ power.level }}</div>
      <div class="art-overlay" style="background: linear-gradient(180deg, transparent 30%, var(--void-card) 100%);"></div>
    </div>

    <!-- Body -->
    <div class="d-flex flex-column gap-1 p-2 p-sm-3 flex-fill">
      <div class="power-card-title">
        <component :is="`h${headingLevel}`" class="font-title fw-bold text-white">{{ power.name }}</component>
      </div>
      <div class="power-facts">
        <p class="power-fact text-parchment-dim">
          <svg class="power-fact-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.6c0 0-6.4 7.3-6.4 11.2a6.4 6.4 0 0 0 12.8 0C18.4 9.9 12 2.6 12 2.6z"/></svg>
          <span class="visually-hidden">{{ t.discipline.cost }}:</span>
          <span class="power-fact-val">{{ shortCost(power.cost) }}</span>
        </p>
        <p class="power-fact text-parchment-dim" v-if="shortDicePool(power.dicePool)">
          <svg class="power-fact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2.2 3 9.4l9 12.4 9-12.4z"/><path d="M3 9.4 12 13l9-3.6M12 13v8.8"/></svg>
          <span class="visually-hidden">{{ t.discipline.dicePool }}:</span>
          <span class="power-fact-val">{{ shortDicePool(power.dicePool) }}</span>
        </p>
        <p class="power-fact text-parchment-dim" v-if="shortDuration(power.duration)">
          <svg class="power-fact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7.2V12l3 2"/></svg>
          <span class="visually-hidden">{{ t.discipline.duration }}:</span>
          <span class="power-fact-val">{{ shortDuration(power.duration) }}</span>
        </p>
      </div>
      <p class="power-card-desc text-parchment-dim fst-italic leading-snug mb-0 d-none d-sm-block line-clamp-3">
        {{ power.description }}
      </p>
    </div>
  </article>
</template>
