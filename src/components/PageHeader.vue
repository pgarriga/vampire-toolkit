<script setup lang="ts">
/**
 * The title band of the top-level pages (the three compendium indexes and Settings):
 * the page name over a faint blood-red glow. Anything under the title — a subtitle —
 * goes in the default slot.
 */
withDefaults(defineProps<{
  title: string
  /** `clamp()` so the title scales between phone and desktop. */
  size?: string
}>(), {
  size: 'clamp(1.8rem,5vw,3.2rem)',
})
</script>

<template>
  <header class="page-header text-center px-4 pt-5 pb-4 position-relative overflow-hidden">
    <div class="position-absolute top-0 start-0 w-100 h-100 pe-none"
         style="background: radial-gradient(ellipse 60% 40% at 50% 0%, rgba(139,0,0,0.15) 0%, transparent 70%);"></div>

    <h1 class="font-title fw-black tracking-widest text-uppercase lh-sm position-relative page-title-main"
        :style="{ fontSize: size }">
      {{ title }}
    </h1>
    <slot />
  </header>
</template>
