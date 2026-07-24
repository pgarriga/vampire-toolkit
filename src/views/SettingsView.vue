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

      <div class="ornament-divider my-5">✦ ✦ ✦</div>

      <!-- Repository -->
      <section class="settings-section">
        <div class="settings-section-head">
          <h2 class="settings-section-title font-title">{{ t.settings.repo }}</h2>
          <p class="settings-section-desc">{{ t.settings.repoDesc }}</p>
        </div>
        <div class="settings-options" role="group">
          <a
            class="settings-option"
            href="https://github.com/pgarriga/vampire-toolkit"
            target="_blank"
            rel="noopener"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.55v-2.02c-3.2.7-3.87-1.37-3.87-1.37-.52-1.32-1.28-1.67-1.28-1.67-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.51-1.47.11-3.07 0 0 .97-.31 3.18 1.18.92-.26 1.9-.39 2.88-.39s1.96.13 2.88.39c2.21-1.49 3.18-1.18 3.18-1.18.62 1.6.23 2.78.11 3.07.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.4-5.27 5.69.41.35.77 1.05.77 2.12v3.14c0 .3.21.66.8.55C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z"/>
            </svg>
            {{ t.settings.repoButton }}
          </a>
        </div>
      </section>

    </div>

    <footer class="text-center pb-5 opacity-50" style="font-size: 1.05rem; font-weight: 600;">
      v{{ version }}
    </footer>
  </div>
</template>
