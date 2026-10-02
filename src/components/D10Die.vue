<script setup lang="ts">
import { computed } from 'vue'
import { D10_FACES as FACES } from '../d10'
import { DICE_ICONS, diceSymbol } from '../icons/dice'

/**
 * A d10 in CSS 3D, resting on `value`. It tumbles in when it mounts, so a new roll is
 * a new key in the parent: only the dice whose key changed roll again (a Willpower
 * reroll leaves the others lying still). Purely decorative — the parent labels the
 * die for assistive tech.
 */
const props = withDefaults(defineProps<{
  value: number
  /** A Hunger die: red, a skull on its 1 and fangs on its 10. */
  hunger?: boolean
  /** Stagger, so a handful of dice do not all land in the same frame. */
  delay?: number
}>(), {
  hunger: false,
  delay: 0,
})

/** Every face's symbol, as the die's own faces print them: 1–5 blank but for the
 *  Hunger skull, an ankh on 6–9, a starred or fanged ankh on the 10. */
const symbols = computed(() => FACES.map(f => {
  const sym = diceSymbol(f.value, props.hunger)
  return sym ? DICE_ICONS[sym] : ''
}))

const restIndex = computed(() => Math.max(0, FACES.findIndex(f => f.value === props.value)))

/** One to three turns round each axis, either way — a new tumble on every mount. */
function spin(): string {
  const turns = 1 + Math.floor(Math.random() * 3)
  return `${(Math.random() < 0.5 ? -1 : 1) * turns * 360 + Math.round(Math.random() * 90 - 45)}deg`
}
const tumble = { '--sx': spin(), '--sy': spin(), '--sz': spin() }
</script>

<template>
  <span class="d10" aria-hidden="true">
    <span class="d10-body"
          :style="{ '--rest': FACES[restIndex]!.rest, animationDelay: `${delay}ms`, ...tumble }">
      <span v-for="(f, i) in FACES" :key="f.value"
            class="d10-face"
            :class="{ 'd10-face--front': i === restIndex }"
            :style="{
              width: `${f.width}px`, height: `${f.height}px`,
              clipPath: f.clipPath, transform: f.transform,
              '--lit': FACES[restIndex]!.light[i],
            }">
        <span v-if="symbols[i]" class="d10-sym" :style="{ top: f.labelTop }" v-html="symbols[i]"></span>
      </span>
    </span>
  </span>
</template>
