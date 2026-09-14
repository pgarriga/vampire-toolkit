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
