import { computed } from 'vue'
import { DISCIPLINES_DATA } from '../data'
import { EN, type DisciplineTranslation } from '../translations-en'
import { CA } from '../translations-ca'
import { useSettings } from './useSettings'
import type { Discipline } from '../types'

function applyOverlay(disciplines: Discipline[], overlay: Record<string, DisciplineTranslation>): Discipline[] {
  return disciplines.map(d => {
    const tr = overlay[d.id]
    if (!tr) return d
    return {
      ...d,
      name: tr.name,
      description: tr.description,
      tipo: tr.tipo,
      amenaza: tr.amenaza,
      resonancia: tr.resonancia,
      clanes: tr.clanes ?? d.clanes,
      powers: d.powers.map(p => {
        const pt = tr.powers[p.id]
        return pt ? { ...p, ...pt } : p
      }),
    }
  })
}

export function useData() {
  const { resolvedLang } = useSettings()

  const disciplines = computed<Discipline[]>(() => {
    if (resolvedLang.value === 'en') return applyOverlay(DISCIPLINES_DATA.disciplines, EN)
    if (resolvedLang.value === 'ca') return applyOverlay(DISCIPLINES_DATA.disciplines, CA)
    return DISCIPLINES_DATA.disciplines
  })

  function disciplineById(id: string): Discipline | undefined {
    return disciplines.value.find(d => d.id === id)
  }

  return { disciplines, disciplineById }
}
