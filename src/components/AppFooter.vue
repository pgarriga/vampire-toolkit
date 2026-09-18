<script setup lang="ts">
import { version } from '../../package.json'
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()
</script>

<template>
  <!-- Site footer: the same on every page, so the notice and the version are in
       reach from wherever the reader is. It is the last flex child of #app, and the
       views flex to fill, so it sits at the bottom of a short page instead of
       floating mid-screen. The repository keeps its own section in Settings. -->
  <footer class="app-footer">
    <div class="app-footer-inner">
      <p class="ornament-divider app-footer-ornament" aria-hidden="true">✦ ✦ ✦</p>

      <p class="app-footer-brand font-title">
        Vampire V5 Toolkit
        <!-- Two spellings of the same number: screen readers get "Version 3.0.2",
             the eye gets the "v" prefix. Reading out the prefix gave "v three point
             zero point two". -->
        <span class="app-footer-version">
          <span class="visually-hidden">{{ t.footer.version }} {{ version }}</span>
          <span aria-hidden="true">v{{ version }}</span>
        </span>
      </p>

      <p class="app-footer-text">{{ t.footer.disclaimer }}</p>
    </div>
  </footer>
</template>
