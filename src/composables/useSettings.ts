import { ref, computed, watch } from 'vue'

export type Theme = 'auto' | 'dark' | 'light'
export type Lang  = 'auto' | 'es'  | 'en' | 'ca'

const VALID_THEMES: Theme[] = ['auto', 'dark', 'light']
const VALID_LANGS:  Lang[]  = ['auto', 'es', 'en', 'ca']
const CATALAN = /^ca\b/i
const IBERIAN = /^(es|gl|eu|pt)/i

// ── localStorage with availability guard ──────────────────
function storageGet(key: string): string | null {
  try { return localStorage.getItem(key) } catch { return null }
}
function storageSet(key: string, value: string): void {
  try { localStorage.setItem(key, value) } catch { /* unavailable */ }
}

function validateTheme(value: string | null): Theme {
  return VALID_THEMES.includes(value as Theme) ? (value as Theme) : 'auto'
}
function validateLang(value: string | null): Lang {
  return VALID_LANGS.includes(value as Lang) ? (value as Lang) : 'auto'
}

// ── Singleton ─────────────────────────────────────────────
const theme = ref<Theme>(validateTheme(storageGet('v5-theme')))
const lang  = ref<Lang> (validateLang (storageGet('v5-lang')))

const resolvedLang = computed<'es' | 'en' | 'ca'>(() => {
  if (lang.value !== 'auto') return lang.value
  if (CATALAN.test(navigator.language)) return 'ca'
  if (IBERIAN.test(navigator.language)) return 'es'
  return 'en'
})

function applyTheme(t: Theme) {
  const resolved = t === 'auto'
    ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    : t
  document.documentElement.setAttribute('data-theme', resolved)
}

watch(theme, (t) => { applyTheme(t); storageSet('v5-theme', t) }, { immediate: true })
watch(lang,  (l) => { storageSet('v5-lang', l) })

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
  if (theme.value === 'auto') applyTheme('auto')
})

export function useSettings() {
  return { theme, lang, resolvedLang }
}
