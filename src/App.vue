<script setup lang="ts">
import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useFavorites } from './composables/useFavorites'
import { useI18n } from './composables/useI18n'

const route  = useRoute()
const router = useRouter()
const { favoriteCount } = useFavorites()
const { t } = useI18n()

const menuOpen = ref(false)

const isHome        = computed(() => route.path === '/')
const isDisciplines = computed(() => route.path === '/disciplines' || route.path.startsWith('/discipline'))
const isMyPowers    = computed(() => route.path === '/my-powers')
const isSettings    = computed(() => route.path === '/settings')

function go(path: string) {
  menuOpen.value = false
  if (route.path !== path) router.push(path)
}

// Close on route change
watch(() => route.path, () => { menuOpen.value = false })

// Close on Escape
function onKey(e: KeyboardEvent) {
  if (e.key === 'Escape') menuOpen.value = false
}
onMounted(() => document.addEventListener('keydown', onKey))
onBeforeUnmount(() => document.removeEventListener('keydown', onKey))

// Lock body scroll while menu is open
watch(menuOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})
</script>

<template>
  <nav class="app-navbar" role="navigation" :aria-label="t.nav.home">
    <a
      class="app-navbar-brand font-title"
      href="#/"
      @click.prevent="go('/')"
    >
      Vampire Toolkit
    </a>

    <button
      class="app-menu-toggler"
      type="button"
      :aria-expanded="menuOpen"
      aria-controls="app-menu"
      :aria-label="menuOpen ? t.nav.closeMenu : t.nav.openMenu"
      @click="menuOpen = !menuOpen"
    >
      <svg v-if="!menuOpen" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="24" height="24" aria-hidden="true">
        <path d="M4 6h16M4 12h16M4 18h16"/>
      </svg>
      <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="24" height="24" aria-hidden="true">
        <path d="M6 6l12 12M6 18L18 6"/>
      </svg>
    </button>
  </nav>

  <!-- Menu overlay -->
  <div
    v-if="menuOpen"
    id="app-menu"
    class="app-menu-overlay"
    role="menu"
    :aria-label="t.nav.home"
    @click.self="menuOpen = false"
  >
    <div class="app-menu-panel">
      <button
        class="app-menu-item"
        :class="{ active: isHome }"
        role="menuitem"
        @click="go('/')"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="20" height="20" aria-hidden="true">
          <path d="M3 12l9-9 9 9"/>
          <path d="M5 10v10h14V10"/>
        </svg>
        {{ t.nav.home }}
      </button>

      <button
        class="app-menu-item"
        :class="{ active: isDisciplines }"
        role="menuitem"
        @click="go('/disciplines')"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="20" height="20" aria-hidden="true">
          <circle cx="12" cy="12" r="3"/>
          <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
        </svg>
        {{ t.nav.disciplines }}
      </button>

      <button
        class="app-menu-item"
        :class="{ active: isMyPowers }"
        role="menuitem"
        @click="go('/my-powers')"
      >
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"
             :fill="isMyPowers ? 'currentColor' : 'none'"
             stroke="currentColor" stroke-width="1.5">
          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
        </svg>
        {{ t.nav.myPowers }}
        <span v-if="favoriteCount" class="app-menu-badge">{{ favoriteCount }}</span>
      </button>

      <button
        class="app-menu-item"
        :class="{ active: isSettings }"
        role="menuitem"
        @click="go('/settings')"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="20" height="20" aria-hidden="true">
          <circle cx="12" cy="12" r="3"/>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
        </svg>
        {{ t.nav.settings }}
      </button>
    </div>
  </div>

  <router-view v-slot="{ Component }">
    <transition name="page" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>
