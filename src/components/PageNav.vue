<script setup lang="ts">
/**
 * The breadcrumb bar at the top of every detail page: a back button naming where it
 * goes, then the page the reader is on.
 */
defineProps<{
  backLabel: string
  current: string
  /** Ellipsise the current page's name instead of letting it wrap. */
  truncate?: boolean
}>()

defineEmits<{ back: [] }>()
</script>

<template>
  <nav class="d-flex align-items-center flex-wrap gap-2 px-3 px-sm-4 py-3 border-bottom border-void-border"
       style="font-size:.9rem;">
    <button class="back-btn" @click="$emit('back')">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <path d="m15 18-6-6 6-6"/>
      </svg>
      {{ backLabel }}
    </button>
    <span class="text-parchment-faint" aria-hidden="true">›</span>
    <span class="text-parchment" :class="{ 'text-truncate': truncate }">{{ current }}</span>
  </nav>
</template>
