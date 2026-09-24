<script setup lang="ts">
import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { NAV_ICONS } from './icons/nav'
import { CLAN_ICONS } from './icons/clans'
import { useI18n } from './composables/useI18n'
import { useClans } from './composables/useClans'
import { useCharacters } from './composables/useCharacters'
import AppFooter from './components/AppFooter.vue'

const route  = useRoute()
const router = useRouter()
const { t } = useI18n()
const { clanById } = useClans()
const { characters } = useCharacters()

const menuOpen = ref(false)

const isHome        = computed(() => route.path === '/')
const isDisciplines = computed(() => route.path === '/disciplines' || route.path.startsWith('/discipline'))
const isClans       = computed(() => route.path === '/clans' || route.path.startsWith('/clan/'))
const isTraits      = computed(() => route.path === '/traits' || route.path.startsWith('/trait/'))
const isSettings    = computed(() => route.path === '/settings')

/** One entry per character, mirroring the home page's own list. */
const characterEntries = computed(() =>
  characters.value.map(c => ({
    id: c.id,
    name: c.name,
    svg: CLAN_ICONS[c.clanId],
    color: clanById(c.clanId)?.color ?? 'var(--gold)',
    path: `/character/${c.id}`,
  })),
)

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
      Vampire V5 Toolkit
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

      <!-- ── Compendium. A role="menu" takes only menuitems, so each section is a
               role="group" carrying the name and the visible heading is decorative. ── -->
      <div class="app-menu-group" role="group" :aria-label="t.home.compendium">
        <p class="app-menu-heading font-title" aria-hidden="true">{{ t.home.compendium }}</p>

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
          :class="{ active: isTraits }"
          role="menuitem"
          @click="go('/traits')"
        >
          <span class="app-menu-icon" v-html="NAV_ICONS.traits"></span>
          {{ t.nav.traits }}
        </button>
      </div>

      <!-- ── My characters: the same list the home page shows ── -->
      <div class="app-menu-group" role="group" :aria-label="t.home.myCharacters">
        <p class="app-menu-heading font-title" aria-hidden="true">{{ t.home.myCharacters }}</p>

        <button
          v-for="c in characterEntries"
          :key="c.id"
          class="app-menu-item"
          :class="{ active: route.path === c.path }"
          role="menuitem"
          @click="go(c.path)"
        >
          <span class="app-menu-icon app-menu-sigil sigil"
                :style="{ '--card-color': c.color }"
                v-html="c.svg"></span>
          <span class="text-truncate">{{ c.name }}</span>
        </button>

        <button
          class="app-menu-item app-menu-item--new"
          :class="{ active: route.path === '/character/new' }"
          role="menuitem"
          @click="go('/character/new')"
        >
          <span class="app-menu-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                 stroke-linecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>
          </span>
          {{ t.characters.create }}
        </button>
      </div>

      <!-- ── Settings, last ── -->
      <hr class="app-menu-divider" aria-hidden="true" />

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

  <AppFooter />
</template>
