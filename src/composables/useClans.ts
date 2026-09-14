import { computed } from 'vue'
import { CLANS_DATA } from '../clans'
import { CLANS_EN, type ClanTranslation } from '../translations-clans-en'
import { CLANS_CA } from '../translations-clans-ca'
import { CLAN_ICONS, THIN_BLOOD_ICON, THIN_BLOOD_NAMES } from '../clan-icons'
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

  /**
   * Localised clan name → id, so `discipline.clanes` (which stores display names,
   * not ids) can be resolved to a sigil. Returns `undefined` for anything that is
   * not a clan — Thin-Blood Alchemy lists "Sangre Débil", which has no sigil.
   */
  function clanIdByName(name: string): ClanIconType | undefined {
    return clans.value.find(c => c.name === name)?.id
  }

  /**
   * The sigil for a name out of `discipline.clanes`, with the clan behind it when
   * there is one. The Thin-Bloods have a mark but no clan page, so they come back
   * with a sigil and no `clan` — the caller renders them unlinked.
   */
  function clanSigil(name: string): { svg: string; clan?: Clan } | undefined {
    const id = clanIdByName(name)
    if (id) return { svg: CLAN_ICONS[id], clan: clanById(id) }
    if (THIN_BLOOD_NAMES.has(name)) return { svg: THIN_BLOOD_ICON }
    return undefined
  }

  return { clans, clanById, clanIdByName, clanSigil }
}
