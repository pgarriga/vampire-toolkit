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
  /** Discipline ids, matching `src/data.ts`. */
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
