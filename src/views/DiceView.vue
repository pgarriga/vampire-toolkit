<script setup lang="ts">
import { computed, onBeforeUnmount, ref, watch } from 'vue'
import PageHeader from '../components/PageHeader.vue'
import NumberStepper from '../components/NumberStepper.vue'
import D10Die from '../components/D10Die.vue'
import { useI18n } from '../composables/useI18n'
import { readJSON, writeJSON } from '../storage'
import {
  MAX_HUNGER, MAX_POOL, MAX_SURGE, WILLPOWER_REROLL,
  defaultReroll, evaluate, rerollDice, rollPool, rouseCheck, type Die,
} from '../dice'

const { t } = useI18n()

// ── The numbers, remembered between visits ────────────────────────────────
//
// A player's pool, Hunger and the dice a Rouse adds barely move between rolls in a scene, so they survive a
// reload. Only the numbers are kept — a stale result on return would read as a roll
// that just happened.

const STORAGE_KEY = 'v5-dice'

function stored(key: string, min: number, max: number, fallback: number): number {
  const raw = readJSON(STORAGE_KEY) as Record<string, unknown> | null
  const v = raw?.[key]
  return typeof v === 'number' && Number.isInteger(v) && v >= min && v <= max ? v : fallback
}

const pool       = ref(stored('pool', 1, MAX_POOL, 5))
const hunger     = ref(stored('hunger', 0, MAX_HUNGER, 1))
/** The dice a Rouse check adds to the pool. */
const surge      = ref(stored('surge', 0, MAX_SURGE, 2))

watch([pool, hunger, surge], ([p, h, s]) => {
  writeJSON(STORAGE_KEY, { pool: p, hunger: h, surge: s })
})

// ── Rolling ─────────────────────────────────────────────────────────────────

const dice      = ref<Die[]>([])
/** One key per die. A die whose key changes remounts, which is what makes it tumble —
 *  so a Willpower reroll gives new keys to the rerolled dice only. */
const dieKeys   = ref<number[]>([])
let nextKey = 0
/** Once per roll: Willpower cannot reroll a roll twice. */
const rerolled  = ref(false)
/** The dice picked for a Willpower reroll, while the player is choosing. */
const picking   = ref<number[] | null>(null)
const rouse     = ref<{ key: number; value: number; hungerUp: boolean; atMax: boolean; added: number } | null>(null)
/** What the player did last, which is what the live region reads out. */
const lastAction = ref<'roll' | 'rouse' | null>(null)

const result = computed(() => (dice.value.length ? evaluate(dice.value) : null))

// ── Letting the dice land ───────────────────────────────────────────────────
//
// The outcome is decided the moment the button is pressed; the tumble only shows it.
// But reading "messy critical" while the dice are still in the air gives the game
// away, so the headline, the Willpower button and the announcement wait for them.

/** Matches `.d10-body`'s animation, plus the stagger between dice. */
const TUMBLE_MS  = 950
const STAGGER_MS = 45
const MAX_STAGGER_MS = 300

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
const settled = ref(true)
/** The dice still in the air. Their tiles hide success, ✦ and ☠ until they land. */
const rolling = ref<Set<number>>(new Set())
let settleTimer: ReturnType<typeof setTimeout> | undefined

function stagger(i: number): number {
  return Math.min(i * STAGGER_MS, MAX_STAGGER_MS)
}

/**
 * Holds the read-out back until the last of the dice at `indexes` has landed.
 * `staggered` matches whether those dice were given `stagger()` delays.
 */
function land(indexes: number[], staggered = true): void {
  clearTimeout(settleTimer)
  if (reducedMotion.matches || !indexes.length) { rolling.value = new Set(); settled.value = true; return }
  settled.value = false
  rolling.value = new Set(indexes)
  settleTimer = setTimeout(() => {
    settled.value = true
    rolling.value = new Set()
  }, TUMBLE_MS + (staggered ? stagger(indexes.length - 1) : 0))
}
onBeforeUnmount(() => clearTimeout(settleTimer))

function roll(): void {
  dice.value    = rollPool(pool.value, hunger.value)
  dieKeys.value = dice.value.map(() => nextKey++)
  rerolled.value = false
  picking.value  = null
  rouse.value    = null
  lastAction.value = 'roll'
  land(dice.value.map((_, i) => i))
}

function rouseTheBlood(): void {
  const r = rouseCheck()
  const atMax = r.hungerUp && hunger.value >= MAX_HUNGER
  if (r.hungerUp && !atMax) hunger.value++
  // Blood Surge: the dice join the pool whatever the Rouse die shows.
  const before = pool.value
  pool.value = Math.min(MAX_POOL, pool.value + surge.value)
  rouse.value = { key: nextKey++, ...r, atMax, added: pool.value - before }
  lastAction.value = 'rouse'
  land([-1], false)
}

const canReroll = computed(() =>
  settled.value && dice.value.length > 0 && !rerolled.value && dice.value.some(d => !d.hunger),
)

function startReroll(): void {
  picking.value = defaultReroll(dice.value)
}

function togglePick(i: number): void {
  const picked = picking.value
  if (!picked || dice.value[i]?.hunger) return
  const at = picked.indexOf(i)
  if (at >= 0) picked.splice(at, 1)
  else if (picked.length < WILLPOWER_REROLL) picked.push(i)
}

function confirmReroll(): void {
  if (!picking.value?.length) return
  const picked = picking.value
  dice.value     = rerollDice(dice.value, picked)
  dieKeys.value  = dieKeys.value.map((k, i) => (picked.includes(i) ? nextKey++ : k))
  rerolled.value = true
  picking.value  = null
  lastAction.value = 'roll'
  // Only the rerolled dice tumble, all at once.
  land(picked, false)
}

// ── Reading the result ──────────────────────────────────────────────────────

/** Without a Difficulty the roll's fate is unknown, so the warnings are conditional. */
const notes = computed(() => {
  const r = result.value
  if (!r) return []
  const notes: string[] = []
  if (r.messy) notes.push(t.value.dice.ifWinMessy)
  else if (r.criticals) notes.push(t.value.dice.ifWinCritical)
  if (r.bestialRisk) notes.push(t.value.dice.ifLoseBestial)
  return notes
})

/**
 * What a screen reader hears after a roll or a Rouse check. One region that is always
 * in the page, because a live region that arrives *with* its content is often not
 * announced at all.
 */
const announcement = computed(() => {
  if (!settled.value) return ''
  const d = t.value.dice
  if (lastAction.value === 'rouse' && rouse.value) {
    const r = rouse.value
    const what = !r.hungerUp ? d.rouseStay : r.atMax ? d.rouseMax : `${d.rouseUp} ${hunger.value}.`
    const added = r.added ? ` ${d.poolUp} ${pool.value}.` : ''
    return `${d.rouse}: ${r.value}. ${what}${added}`
  }
  const r = result.value
  if (lastAction.value !== 'roll' || !r) return ''
  return [`${r.successes} ${r.successes === 1 ? d.success : d.successes}.`, ...notes.value].join(' ')
})

function dieLabel(d: Die): string {
  return `${d.value}, ${d.hunger ? t.value.dice.hungerDie : t.value.dice.regularDie}`
}
</script>

<template>
  <div class="min-vh-100 bg-void font-body text-parchment">

    <PageHeader :title="t.dice.title" />

    <main class="dice-wrap mx-auto px-4 py-4 pb-5">

      <!-- ── The two numbers ── -->
      <section class="dice-controls">
        <NumberStepper v-model="pool" :label="t.dice.pool" :min="1" :max="MAX_POOL" />
        <NumberStepper v-model="hunger" :label="t.dice.hunger" :min="0" :max="MAX_HUNGER" />
      </section>

      <!-- ── Rouse check, with how many dice it adds to the pool ── -->
      <section class="dice-rouse-row" :aria-label="t.dice.rouse">
        <button type="button" class="settings-option dice-rouse-btn" @click="rouseTheBlood">
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2.6c0 0-6.4 7.3-6.4 11.2a6.4 6.4 0 0 0 12.8 0C18.4 9.9 12 2.6 12 2.6z"/>
          </svg>
          {{ t.dice.rouse }}
        </button>
        <NumberStepper v-model="surge" :label="t.dice.surge" :min="0" :max="MAX_SURGE" />
      </section>

      <!-- Always in the page, so the announcement is not lost with a region that
           arrives together with its content. The visible results stay readable too. -->
      <p class="visually-hidden" aria-live="polite">{{ announcement }}</p>

      <!-- ── Rouse check: one die, so one compact line rather than a full result card ── -->
      <section v-if="rouse" class="dice-rouse" :aria-label="t.dice.rouse">
        <span class="die die--hunger die--small"
              :class="!settled ? 'die--rolling' : rouse.hungerUp ? 'die--fail' : 'die--success'"
              aria-hidden="true">
          <D10Die :key="rouse.key" :value="rouse.value" hunger />
        </span>
        <p class="dice-rouse-text" :class="{ 'dice-pending': !settled }">
          <strong class="dice-rouse-label font-title">{{ t.dice.rouse }}</strong>
          <span class="visually-hidden">{{ rouse.value }}.</span>
          <template v-if="!rouse.hungerUp">{{ t.dice.rouseStay }}</template>
          <template v-else-if="rouse.atMax">{{ t.dice.rouseMax }}</template>
          <template v-else>{{ t.dice.rouseUp }} {{ hunger }}.</template>
          <template v-if="rouse.added"> {{ t.dice.poolUp }} {{ pool }}.</template>
        </p>
      </section>

      <!-- Under the Rouse result: a Rouse is what feeds the pool, so it comes first. -->
      <div class="dice-actions">
        <button type="button" class="settings-option char-form-primary dice-roll-btn" @click="roll">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
               stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M12 2.2 3 9.4l9 12.4 9-12.4z"/><path d="M3 9.4 12 13l9-3.6M12 13v8.8"/>
          </svg>
          {{ t.dice.roll }}
        </button>
      </div>

      <!-- ── The roll ── -->
      <section v-if="result" class="dice-result" :aria-label="t.dice.result">
        <div :class="{ 'dice-pending': !settled }">
          <p class="dice-headline font-title">
            <span class="dice-count">{{ result.successes }}</span>
            {{ result.successes === 1 ? t.dice.success : t.dice.successes }}
          </p>
          <p v-for="note in notes" :key="note" class="dice-note">{{ note }}</p>
          <p v-if="rerolled" class="dice-margin fst-italic">{{ t.dice.willpowerDone }}</p>
        </div>

        <!-- The dice. While picking a Willpower reroll the regular ones become toggles;
             Hunger dice never do, since Willpower cannot touch them. -->
        <ul class="dice-row list-unstyled" :class="{ 'dice-row--picking': picking }">
          <!-- The tile is the same element whether or not it is pickable: swapping it
               for a <button> would remount the die and roll it again. The pick control
               is laid over the top instead. -->
          <li v-for="(d, i) in dice" :key="i">
            <span class="die"
                  :class="rolling.has(i)
                    ? ['die--rolling', { 'die--hunger': d.hunger }]
                    : [d.value >= 6 ? 'die--success' : 'die--fail',
                       { 'die--hunger': d.hunger,
                         'die--picked': picking?.includes(i) }]"
                  :role="picking && !d.hunger ? undefined : 'img'"
                  :aria-label="picking && !d.hunger ? undefined : dieLabel(d)">
              <D10Die :key="dieKeys[i]" :value="d.value" :hunger="d.hunger" :delay="rerolled ? 0 : stagger(i)" />
              <button v-if="picking && !d.hunger" type="button" class="die-pick"
                      :aria-pressed="picking.includes(i)"
                      :aria-label="dieLabel(d)"
                      @click="togglePick(i)"></button>
            </span>
          </li>
        </ul>

        <!-- Willpower -->
        <div v-if="picking" class="dice-reroll">
          <p class="dice-hint">{{ t.dice.willpowerHint }}</p>
          <div class="char-form-actions mt-0">
            <button type="button" class="settings-option" @click="picking = null">{{ t.dice.cancel }}</button>
            <button type="button" class="settings-option char-form-primary"
                    :disabled="!picking.length" @click="confirmReroll">
              {{ t.dice.willpowerGo }} ({{ picking.length }})
            </button>
          </div>
        </div>
        <button v-else-if="canReroll" type="button" class="settings-option align-self-start"
                @click="startReroll">
          {{ t.dice.willpower }}
        </button>
      </section>

      <!-- ── How to read it ── -->
      <details class="dice-rules">
        <summary class="font-title">{{ t.dice.rulesTitle }}</summary>
        <ul>
          <li v-for="rule in t.dice.rules" :key="rule">{{ rule }}</li>
        </ul>
      </details>

    </main>
  </div>
</template>
