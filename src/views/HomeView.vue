<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from '../composables/useI18n'
import { useFavorites } from '../composables/useFavorites'

const router = useRouter()
const { t } = useI18n()
const { favoriteCount } = useFavorites()

const tools = computed(() => [
  {
    key: 'disciplines',
    title: t.value.home.disciplinesTitle,
    description: t.value.home.disciplinesDesc,
    accent: 'var(--tool-disciplines)',
    onClick: () => router.push('/disciplines'),
  },
  {
    key: 'my-powers',
    title: t.value.home.myPowersTitle,
    description: t.value.home.myPowersDesc,
    accent: 'var(--tool-my-powers)',
    badge: favoriteCount.value || null,
    onClick: () => router.push('/my-powers'),
  },
])
</script>

<template>
  <div class="min-vh-100 bg-void font-body text-parchment">

    <!-- ── Header ── -->
    <header class="page-header text-center px-4 pt-5 pb-4 position-relative overflow-hidden">
      <div class="position-absolute top-0 start-0 w-100 h-100 pe-none"
           style="background: radial-gradient(ellipse 60% 40% at 50% 0%, rgba(139,0,0,0.15) 0%, transparent 70%);"></div>
      <p class="text-parchment fst-italic mb-0 position-relative lh-sm"
         style="font-size: clamp(1.4rem,4vw,2.2rem); max-width: 32rem; margin-inline: auto;">
        {{ t.home.subtitle }}
      </p>
    </header>

    <!-- ── Tools grid ── -->
    <main class="tools-wrap mx-auto px-4 py-4">
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
            <span class="tool-card-title font-title">{{ tool.title }}</span>
            <span v-if="tool.badge" class="tool-card-badge">{{ tool.badge }}</span>
          </div>
          <p class="tool-card-desc">{{ tool.description }}</p>
        </button>
      </div>
    </main>

  </div>
</template>
