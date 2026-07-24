<script setup lang="ts">
import { computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useFavorites } from './composables/useFavorites'
import { useI18n } from './composables/useI18n'

const route   = useRoute()
const router  = useRouter()
const { favoriteCount } = useFavorites()
const { t } = useI18n()

const isHome       = computed(() => route.path === '/' || route.path.startsWith('/discipline'))
const isMyPowers   = computed(() => route.path === '/my-powers')
const isSettings   = computed(() => route.path === '/settings')

// Close navbar on navigation
watch(() => route.path, () => {
  const nav = document.getElementById('mainNav')
  if (nav && nav.classList.contains('show')) {
    const toggler = document.querySelector('.navbar-toggler') as HTMLElement | null
    toggler?.click()
  }
})
</script>

<template>
  <nav class="navbar navbar-expand-md app-navbar sticky-top">
    <div class="container-fluid px-3 px-sm-4">

      <!-- Brand -->
      <a class="navbar-brand app-navbar-brand font-title" href="#/" @click.prevent="router.push('/')">
        Vampire Toolkit
      </a>

      <!-- Toggler -->
      <button class="navbar-toggler app-navbar-toggler" type="button"
              data-bs-toggle="collapse" data-bs-target="#mainNav"
              aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Links -->
      <div class="collapse navbar-collapse" id="mainNav">
        <ul class="navbar-nav ms-auto gap-1 py-2 py-md-0">

          <li class="nav-item">
            <a class="nav-link app-nav-link" :class="{ active: isHome }"
               href="#/" @click.prevent="router.push('/')">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="16" height="16" class="me-1">
                <circle cx="12" cy="12" r="3"/>
                <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
              </svg>
              {{ t.nav.disciplines }}
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link app-nav-link" :class="{ active: isMyPowers }"
               href="#/my-powers" @click.prevent="router.push('/my-powers')">
              <svg viewBox="0 0 24 24" width="16" height="16" class="me-1"
                   :fill="isMyPowers ? 'currentColor' : 'none'"
                   stroke="currentColor" stroke-width="1.5">
                <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
              </svg>
              {{ t.nav.myPowers }}
              <span v-if="favoriteCount" class="app-nav-badge ms-1">{{ favoriteCount }}</span>
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link app-nav-link" :class="{ active: isSettings }"
               href="#/settings" @click.prevent="router.push('/settings')">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="16" height="16" class="me-1">
                <circle cx="12" cy="12" r="3"/>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
              </svg>
              {{ t.nav.settings }}
            </a>
          </li>

        </ul>
      </div>
    </div>
  </nav>

  <router-view v-slot="{ Component }">
    <transition name="page" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>
