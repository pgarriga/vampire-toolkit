import { computed } from 'vue'
import { useSettings } from './useSettings'
import { es } from '../i18n/es'
import { en } from '../i18n/en'
import { ca } from '../i18n/ca'

const dict = { es, en, ca }

const { resolvedLang } = useSettings()
const t = computed(() => dict[resolvedLang.value])

export function useI18n() {
  return { t }
}
