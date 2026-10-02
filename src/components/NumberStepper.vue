<script setup lang="ts">
import { useId } from 'vue'
import { useI18n } from '../composables/useI18n'

/**
 * A number picked with − / + buttons rather than a text field: at the table it is
 * tapped with a thumb, and a numeric keyboard popping up over the dice would hide
 * the result. Each button is a 44px target and names what it changes.
 */
const model = defineModel<number>({ required: true })

const props = defineProps<{
  label: string
  min: number
  max: number
}>()

const { t } = useI18n()
const id = useId()

function step(by: number): void {
  model.value = Math.min(props.max, Math.max(props.min, model.value + by))
}
</script>

<template>
  <div class="num-stepper" role="group" :aria-labelledby="id">
    <span :id="id" class="num-stepper-label font-title">{{ label }}</span>
    <div class="num-stepper-controls">
      <button type="button" class="num-stepper-btn"
              :aria-label="`${t.dice.decrease} ${label}`"
              :disabled="model <= min" @click="step(-1)">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
             stroke-linecap="round" aria-hidden="true"><path d="M5 12h14"/></svg>
      </button>
      <output class="num-stepper-value" aria-live="polite">{{ model }}</output>
      <button type="button" class="num-stepper-btn"
              :aria-label="`${t.dice.increase} ${label}`"
              :disabled="model >= max" @click="step(1)">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
             stroke-linecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>
      </button>
    </div>
  </div>
</template>
