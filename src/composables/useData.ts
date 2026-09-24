import { computed } from 'vue'
import { DISCIPLINES_DATA } from '../content/disciplines'
import { EN, type DisciplineTranslation } from '../content/disciplines.en'
import { CA } from '../content/disciplines.ca'
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

const OVERLAYS = { en: EN, ca: CA }

// Module-level, so the overlay is applied once per language change and shared by
// every component, rather than rebuilt by each one that asks for the data.
const { resolvedLang } = useSettings()
const disciplines = computed<Discipline[]>(() =>
  resolvedLang.value === 'es'
    ? DISCIPLINES_DATA.disciplines
    : applyOverlay(DISCIPLINES_DATA.disciplines, OVERLAYS[resolvedLang.value]),
)

function disciplineById(id: string): Discipline | undefined {
  return disciplines.value.find(d => d.id === id)
}

export function useData() {
  return { disciplines, disciplineById }
}
