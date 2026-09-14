import { computed } from 'vue'
import { useData } from './useData'
import { useFavorites } from './useFavorites'
import type { Discipline, Power } from '../types'

export interface PowerGroup {
  discipline: Discipline
  powers: Power[]
}

export interface FlatPower {
  disciplineId: string
  power: Power
}

/**
 * The saved powers in the one canonical order: grouped by discipline in `data.ts`
 * order, sorted by level inside each group. `MyPowersView` renders the groups and
 * `PowerView` swipes through the flattened list, so both must agree — hence this
 * lives here rather than in either view.
 */
export function useMyPowers() {
  const { disciplines } = useData()
  const { isFavorite } = useFavorites()

  const groupedPowers = computed<PowerGroup[]>(() =>
    disciplines.value
      .map(disc => ({
        discipline: disc,
        powers: disc.powers
          .filter(p => isFavorite(disc.id, p.id))
          .sort((a, b) => a.level - b.level),
      }))
      .filter(g => g.powers.length > 0),
  )

  const totalCount = computed(() =>
    groupedPowers.value.reduce((sum, g) => sum + g.powers.length, 0),
  )

  const flatPowers = computed<FlatPower[]>(() =>
    groupedPowers.value.flatMap(g =>
      g.powers.map(power => ({ disciplineId: g.discipline.id, power })),
    ),
  )

  return { groupedPowers, totalCount, flatPowers }
}
