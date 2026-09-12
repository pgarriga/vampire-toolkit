import { computed } from 'vue'
import { CLANS_DATA } from '../clans'
import { CLANS_EN, type ClanTranslation } from '../translations-clans-en'
import { CLANS_CA } from '../translations-clans-ca'
import { useSettings } from './useSettings'
import type { Clan, ClanIconType } from '../types'

function applyOverlay(clans: Clan[], overlay: Record<ClanIconType, ClanTranslation>): Clan[] {
  return clans.map(c => {
    const tr = overlay[c.id]
    if (!tr) return c
    return { ...c, ...tr }
  })
}

export function useClans() {
  const { resolvedLang } = useSettings()

  const clans = computed<Clan[]>(() => {
    if (resolvedLang.value === 'en') return applyOverlay(CLANS_DATA.clans, CLANS_EN)
    if (resolvedLang.value === 'ca') return applyOverlay(CLANS_DATA.clans, CLANS_CA)
    return CLANS_DATA.clans
  })

  function clanById(id: string): Clan | undefined {
    return clans.value.find(c => c.id === id)
  }

  return { clans, clanById }
}
