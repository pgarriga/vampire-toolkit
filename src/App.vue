<script setup lang="ts">
import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useFavorites } from './composables/useFavorites'
import { NAV_ICONS } from './nav-icons'
import { useI18n } from './composables/useI18n'

const route  = useRoute()
const router = useRouter()
const { favoriteCount } = useFavorites()
const { t } = useI18n()

const menuOpen = ref(false)

const isHome        = computed(() => route.path === '/')
const isDisciplines = computed(() => route.path === '/disciplines' || route.path.startsWith('/discipline'))
const isClans       = computed(() => route.path === '/clans' || route.path.startsWith('/clan/'))
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
        <span class="app-menu-icon" v-html="NAV_ICONS.home"></span>
        {{ t.nav.home }}
      </button>

      <button
        class="app-menu-item"
        :class="{ active: isClans }"
        role="menuitem"
        @click="go('/clans')"
      >
        <span class="app-menu-icon" v-html="NAV_ICONS.clans"></span>
        {{ t.nav.clans }}
      </button>

      <button
        class="app-menu-item"
        :class="{ active: isDisciplines }"
        role="menuitem"
        @click="go('/disciplines')"
      >
        <span class="app-menu-icon" v-html="NAV_ICONS.disciplines"></span>
        {{ t.nav.disciplines }}
      </button>

      <button
        class="app-menu-item"
        :class="{ active: isMyPowers }"
        role="menuitem"
        @click="go('/my-powers')"
      >
        <span class="app-menu-icon" v-html="NAV_ICONS.myPowers"></span>
        {{ t.nav.myPowers }}
        <span v-if="favoriteCount" class="app-menu-badge">{{ favoriteCount }}</span>
      </button>

      <button
        class="app-menu-item"
        :class="{ active: isSettings }"
        role="menuitem"
        @click="go('/settings')"
      >
        <span class="app-menu-icon" v-html="NAV_ICONS.settings"></span>
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
