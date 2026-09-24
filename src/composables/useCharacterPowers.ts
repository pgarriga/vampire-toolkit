import { computed, type Ref } from 'vue'
import { useData } from './useData'
import type { Character, Discipline, Power } from '../types'

export interface PowerGroup {
  discipline: Discipline
  powers: Power[]
}

export interface FlatPower {
  disciplineId: string
  power: Power
}

/**
 * One character's powers in the one canonical order: grouped by discipline in
 * `content/disciplines.ts` order, sorted by level inside each group. `CharacterView` renders the
 * groups and `PowerView` swipes through the flattened list, so both must agree —
 * hence this lives here rather than in either view.
 *
 * The character is passed in rather than read from a global "active" one, so a view
 * can never render one character's sheet while listing another's powers.
 */
export function useCharacterPowers(character: Ref<Character | null | undefined>) {
  const { disciplines } = useData()

  const groupedPowers = computed<PowerGroup[]>(() => {
    const owned = character.value?.powers
    if (!owned?.length) return []
    const has = new Set(owned)
    return disciplines.value
      .map(disc => ({
        discipline: disc,
        powers: disc.powers
          .filter(p => has.has(`${disc.id}:${p.id}`))
          .sort((a, b) => a.level - b.level),
      }))
      .filter(g => g.powers.length > 0)
  })

  const flatPowers = computed<FlatPower[]>(() =>
    groupedPowers.value.flatMap(g =>
      g.powers.map(power => ({ disciplineId: g.discipline.id, power })),
    ),
  )

  return { groupedPowers, flatPowers }
}
