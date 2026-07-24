<script setup lang="ts">
import { computed } from 'vue'
import { version } from '../../package.json'
import { useSettings, type Theme, type Lang } from '../composables/useSettings'
import { useI18n } from '../composables/useI18n'

const { theme, lang } = useSettings()
const { t } = useI18n()

const themeOptions = computed(() => [
  { value: 'auto'  as Theme, label: t.value.settings.themeAuto  },
  { value: 'dark'  as Theme, label: t.value.settings.themeDark  },
  { value: 'light' as Theme, label: t.value.settings.themeLight },
])

const langOptions = computed(() => [
  { value: 'auto' as Lang, label: t.value.settings.langAuto },
  { value: 'ca'   as Lang, label: t.value.settings.langCa   },
  { value: 'en'   as Lang, label: t.value.settings.langEn   },
  { value: 'es'   as Lang, label: t.value.settings.langEs   },
])
</script>

<template>
  <div class="min-vh-100 bg-void font-body text-parchment">

    <!-- ── Header ── -->
    <header class="page-header text-center px-4 pt-5 pb-4 position-relative overflow-hidden">
      <div class="position-absolute top-0 start-0 w-100 h-100 pe-none"
           style="background: radial-gradient(ellipse 60% 40% at 50% 0%, rgba(139,0,0,0.15) 0%, transparent 70%);"></div>
      <h1 class="font-title fw-black tracking-widest text-uppercase lh-sm position-relative page-title-main"
          style="font-size: clamp(1.4rem,4vw,2.4rem);">
        {{ t.settings.title }}
      </h1>
    </header>

    <!-- ── Settings ── -->
    <div class="settings-wrap mx-auto px-4 py-5">

      <!-- Theme -->
      <section class="settings-section">
        <div class="settings-section-head">
          <h2 class="settings-section-title font-title">{{ t.settings.theme }}</h2>
          <p class="settings-section-desc">{{ t.settings.themeDesc }}</p>
        </div>
        <div class="settings-options" role="group">
          <button
            v-for="opt in themeOptions" :key="opt.value"
            class="settings-option"
            :class="{ active: theme === opt.value }"
            @click="theme = opt.value"
          >
            <!-- icons -->
            <svg v-if="opt.value === 'auto'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="18" height="18">
              <circle cx="12" cy="12" r="5"/>
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
            </svg>
            <svg v-else-if="opt.value === 'dark'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="18" height="18">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
            <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="18" height="18">
              <circle cx="12" cy="12" r="4"/>
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
            </svg>
            {{ opt.label }}
          </button>
        </div>
      </section>

      <div class="ornament-divider my-5">✦ ✦ ✦</div>

      <!-- Language -->
      <section class="settings-section">
        <div class="settings-section-head">
          <h2 class="settings-section-title font-title">{{ t.settings.language }}</h2>
          <p class="settings-section-desc">{{ t.settings.langDesc }}</p>
        </div>
        <div class="settings-options" role="group">
          <button
            v-for="opt in langOptions" :key="opt.value"
            class="settings-option"
            :class="{ active: lang === opt.value }"
            @click="lang = opt.value"
          >
            {{ opt.label }}
          </button>
        </div>
      </section>

    </div>

    <footer class="text-center pb-5 opacity-50" style="font-size: 1.05rem; font-weight: 600;">
      v{{ version }} &nbsp;·&nbsp;
      <a href="https://github.com/pgarriga/vampire-toolkit" target="_blank" rel="noopener">GitHub</a>
    </footer>
  </div>
</template>
