export type IconType =
  | 'wolf' | 'eye' | 'bolt' | 'crown' | 'shield'
  | 'ghost' | 'fist' | 'rose' | 'claws' | 'blood' | 'alchemy'
  | 'olvido'

export interface Power {
  id: string
  name: string
  level: number
  cost: string
  dicePool: string
  duration: string
  description: string
  amalgama?: string
}

export interface Discipline {
  id: string
  name: string
  description: string
  tipo: string
  amenaza: string
  resonancia: string
  color: string
  colorDark: string
  colorGlow: string
  clanes: string[]
  iconType: IconType
  powers: Power[]
  metodos?: AlchemyMethod[]
}

export interface AlchemyMethod {
  id: string
  name: string
  description: string
}

export interface DisciplinesData {
  disciplines: Discipline[]
}

export type ClanIconType =
  | 'banu-haqim' | 'brujah'  | 'gangrel'  | 'hecata' | 'lasombra' | 'malkavian'
  | 'ministry'   | 'nosferatu' | 'ravnos' | 'salubri' | 'toreador' | 'tremere'
  | 'tzimisce'   | 'ventrue'

/** A Bane or a Compulsion: a named clan trait with its rules text. */
export interface ClanTrait {
  name: string
  description: string
}

export interface Clan {
  id: ClanIconType
  name: string
  nickname: string
  verbs: string[]
  description: string
  /** Discipline ids, matching `src/content/disciplines.ts`. */
  disciplines: string[]
  bane: ClanTrait
  compulsion: ClanTrait
  color: string
  colorDark: string
  colorGlow: string
}

export interface ClansData {
  clans: Clan[]
}

/**
 * A player character. Powers are stored as the same `disciplineId:powerId` keys the
 * app has always used for saved powers — the list just belongs to a character now
 * instead of being global.
 */
export interface Character {
  id: string
  name: string
  clanId: ClanIconType
  /**
   * 1–16. V5 runs from the 1st (Caine) down to the 16th, the thinnest Thin-Blood;
   * 14th–16th are Thin-Bloods. Optional because characters created before the field
   * existed have none — nothing backfills a generation the player never chose.
   */
  generation?: number
  powers: string[]
  createdAt: number
}

// ── Core Traits (Rasgos centrales) ───────────────────────────────────────────

/** Attributes and Skills are the same shape; only what they carry differs. */
export type TraitKind = 'attribute' | 'skill'

/** The three columns of a V5 sheet. Attributes and Skills share them. */
export type TraitCategory = 'fisico' | 'social' | 'mental'

/**
 * One "Attribute + Skill" roll. The attribute is stored as a trait **id**, not a
 * name, so the overlays only have to translate the example — the attribute's own
 * name comes from its own entry and can never drift from it.
 */
export interface TraitCombo {
  attributeId: string
  example: string
}

export interface Trait {
  id: string
  name: string
  kind: TraitKind
  category: TraitCategory
  description: string
  /** The corebook's five readings of the score, dots 1–5. Always five entries. */
  dots: string[]
  /**
   * What the score feeds outside its own rolls — Health, Willpower. Only three
   * Attributes have one; every other trait leaves it out.
   */
  note?: string
  /** Skills only: the corebook's example Specialties. */
  specialties?: string[]
  /** Skills only: the three Attribute + Skill rolls the Skill shows up in. */
  combos?: TraitCombo[]
  /**
   * Other names the same trait is printed under, so a search for the wording a
   * player remembers still finds it. Never rendered.
   */
  aka?: string[]
}

export interface TraitsData {
  traits: Trait[]
}
