<script setup lang="ts">
/** The search box under a compendium index's title. */
const model = defineModel<string>({ required: true })

defineProps<{
  placeholder: string
  label: string
}>()
</script>

<template>
  <div class="mx-auto px-4 pt-4 pb-1" style="max-width: 28rem;">
    <input
      v-model="model"
      class="search-input"
      type="text"
      :placeholder="placeholder"
      autocomplete="off"
      :aria-label="label"
    />
  </div>
</template>
