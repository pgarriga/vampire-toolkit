import { computed } from 'vue'
import { TRAITS_DATA } from '../traits'
import { TRAITS_EN, type TraitTranslation } from '../translations-traits-en'
import { TRAITS_CA } from '../translations-traits-ca'
import { useSettings } from './useSettings'
import type { Trait, TraitCategory, TraitKind } from '../types'

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

export function useTraits() {
  const { resolvedLang } = useSettings()

  const traits = computed<Trait[]>(() => {
    if (resolvedLang.value === 'en') return applyOverlay(TRAITS_DATA.traits, TRAITS_EN)
    if (resolvedLang.value === 'ca') return applyOverlay(TRAITS_DATA.traits, TRAITS_CA)
    return TRAITS_DATA.traits
  })

  const attributes = computed(() => traits.value.filter(t => t.kind === 'attribute'))
  const skills     = computed(() => traits.value.filter(t => t.kind === 'skill'))

  function traitById(id: string): Trait | undefined {
    return traits.value.find(t => t.id === id)
  }

  /** The traits of one kind, split into the sheet's three columns and in sheet order. */
  function byCategory(kind: TraitKind): Array<{ category: TraitCategory; traits: Trait[] }> {
    return TRAIT_CATEGORIES.map(category => ({
      category,
      traits: traits.value.filter(t => t.kind === kind && t.category === category),
    })).filter(g => g.traits.length > 0)
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

  return { traits, attributes, skills, traitById, byCategory, skillsUsing }
}
