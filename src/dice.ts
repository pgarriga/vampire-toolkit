/**
 * V5 dice: the pure half of the dice roller, with no Vue in it so the rules can be
 * read — and checked — on their own.
 *
 * The rules, as the corebook's Rolling Dice chapter has them:
 * - Every die is a d10. 6–9 is one success, and so is a 10 on its own.
 * - Each **pair** of 10s is a critical: the pair counts four successes, not two.
 * - Hunger replaces that many dice of the pool; it never adds to it, so with a
 *   Hunger above the pool every die is a Hunger die.
 * - A critical that has a 10 on a Hunger die is a **messy critical** if the roll wins.
 * - A 1 on a Hunger die is a **bestial failure** if the roll fails.
 * - Willpower rerolls up to three dice once, and never a Hunger die.
 * - A Rouse check is one die: 6+ and nothing happens, otherwise Hunger rises by one.
 * - A Rouse check also adds dice to the pool (Blood Surge): the player sets how many.
 */

export interface Die {
  value: number
  hunger: boolean
}

export const MAX_POOL        = 20
export const MAX_HUNGER      = 5
/** The most dice a Rouse check can add to the pool (Blood Surge at its highest). */
export const MAX_SURGE       = 6
/** How many dice a Willpower reroll may take. */
export const WILLPOWER_REROLL = 3

/** A d10, 1–10. Rejection sampling keeps `crypto` output uniform over ten faces. */
export function rollD10(): number {
  const c = globalThis.crypto as Crypto | undefined
  if (c && typeof c.getRandomValues === 'function') {
    const buf = new Uint8Array(1)
    // 250 is the largest multiple of 10 under 256; anything above it would bias
    // the low faces.
    do { c.getRandomValues(buf) } while (buf[0]! >= 250)
    return (buf[0]! % 10) + 1
  }
  return Math.floor(Math.random() * 10) + 1
}

/** A fresh pool: the Hunger dice first, then the regular ones. */
export function rollPool(pool: number, hunger: number, roll: () => number = rollD10): Die[] {
  const hungerDice = Math.min(hunger, pool)
  return Array.from({ length: pool }, (_, i) => ({ value: roll(), hunger: i < hungerDice }))
}

/** The same dice with the given (regular) ones rolled again. Hunger dice are never touched. */
export function rerollDice(dice: Die[], indexes: number[], roll: () => number = rollD10): Die[] {
  const pick = new Set(indexes)
  return dice.map((d, i) => (pick.has(i) && !d.hunger ? { ...d, value: roll() } : d))
}

/**
 * The dice a Willpower reroll offers by default: the failed regular dice, up to three.
 * The player can change the choice — rerolling a lone 10 to chase a critical is legal.
 */
export function defaultReroll(dice: Die[]): number[] {
  return dice
    .map((d, i) => ({ d, i }))
    .filter(({ d }) => !d.hunger && d.value < 6)
    .slice(0, WILLPOWER_REROLL)
    .map(({ i }) => i)
}

export interface RollResult {
  successes: number
  /** Pairs of 10s. */
  criticals: number
  /** A critical with a 10 on a Hunger die — a messy critical, if the roll wins. */
  messy: boolean
  /** A 1 on a Hunger die — a bestial failure, if the roll fails. */
  bestialRisk: boolean
}

/**
 * Reads a roll. There is no Difficulty: many tables keep it behind the screen, so the
 * roller reports what the dice say and leaves winning or losing to the Storyteller.
 */
export function evaluate(dice: Die[]): RollResult {
  const tens      = dice.filter(d => d.value === 10).length
  const criticals = Math.floor(tens / 2)
  const successes = dice.filter(d => d.value >= 6).length + criticals * 2
  const messy       = criticals > 0 && dice.some(d => d.hunger && d.value === 10)
  const bestialRisk = dice.some(d => d.hunger && d.value === 1)
  return { successes, criticals, messy, bestialRisk }
}

/** A Rouse check: one die, and Hunger rises unless it shows 6 or more. */
export function rouseCheck(roll: () => number = rollD10): { value: number; hungerUp: boolean } {
  const value = roll()
  return { value, hungerUp: value < 6 }
}
