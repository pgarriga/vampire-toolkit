<script setup lang="ts">
/**
 * One tool on the home page: its menu icon and name in the tool's accent, then a
 * line of description. The click falls through to the root <button>.
 */
defineProps<{
  icon: string
  title: string
  description: string
  /** A CSS colour, normally one of the `--tool-*` theme vars. */
  accent: string
}>()
</script>

<template>
  <button type="button" class="tool-card" :style="{ '--tool-accent': accent }">
    <div class="tool-card-head">
      <span class="tool-card-icon" v-html="icon" aria-hidden="true"></span>
      <span class="tool-card-title font-title">{{ title }}</span>
    </div>
    <p class="tool-card-desc">{{ description }}</p>
  </button>
</template>
