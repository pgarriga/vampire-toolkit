import { computed } from 'vue'
import { TRAITS_DATA } from '../content/traits'
import { TRAITS_EN, type TraitTranslation } from '../content/traits.en'
import { TRAITS_CA } from '../content/traits.ca'
import { useSettings } from './useSettings'
import type { Trait, TraitCategory } from '../types'

/**
 * The overlay only carries the wording. `combos` comes back keyed by attribute id,
 * so the base data keeps deciding *which* attributes pair with the Skill and in what
 * order — an overlay can neither add a pairing nor reorder them, and a missing example
 * falls back to the Spanish one rather than emptying the row.
 */
function applyOverlay(traits: Trait[], overlay: Record<string, TraitTranslation>): Trait[] {
  return traits.map(tr => {
    const o = overlay[tr.id]
    if (!o) return tr
    return {
      ...tr,
      name: o.name,
      description: o.description,
      dots: o.dots,
      note: o.note ?? tr.note,
      specialties: o.specialties ?? tr.specialties,
      aka: o.aka ?? tr.aka,
      combos: tr.combos?.map(c => ({
        ...c,
        example: o.combos?.[c.attributeId] ?? c.example,
      })),
    }
  })
}

/** The order the three columns are printed in on a V5 sheet. */
export const TRAIT_CATEGORIES: TraitCategory[] = ['fisico', 'social', 'mental']

const OVERLAYS = { en: TRAITS_EN, ca: TRAITS_CA }

// Module-level and shared, like `useData`: the overlay is applied once per language.
const { resolvedLang } = useSettings()
const traits = computed<Trait[]>(() =>
  resolvedLang.value === 'es'
    ? TRAITS_DATA.traits
    : applyOverlay(TRAITS_DATA.traits, OVERLAYS[resolvedLang.value]),
)

const skills = computed(() => traits.value.filter(t => t.kind === 'skill'))

function traitById(id: string): Trait | undefined {
  return traits.value.find(t => t.id === id)
}

/**
 * The Skills that roll off a given Attribute, with the example for that pairing.
 * Derived from the Skills' own `combos` rather than stored twice, so the Attribute
 * page and the Skill page can never disagree about a roll.
 */
function skillsUsing(attributeId: string): Array<{ skill: Trait; example: string }> {
  return skills.value.flatMap(s => {
    const combo = s.combos?.find(c => c.attributeId === attributeId)
    return combo ? [{ skill: s, example: combo.example }] : []
  })
}

export function useTraits() {
  return { traits, traitById, skillsUsing }
}
