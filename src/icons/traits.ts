/**
 * Icons for Core Traits — one per category (Physical, Social, Mental), not one per
 * trait. There is no symbol for a Skill on the official sheet the way there is for a
 * Discipline or a Clan, and inventing 36 glyphs would break the rule that every mark
 * in this app is traced. What the reader needs to tell apart at a glance is the column
 * a trait sits in, and that is three marks, not thirty-six.
 *
 * **They are built in the sigil register, not the nav one.** These sit in the same slot
 * a clan sigil or a discipline badge sits in — a tinted medallion, wearing `.sigil` —
 * so they are drawn the way those are: `viewBox="0 0 100 100"`, one `currentColor` path,
 * `fill-rule="evenodd"`, a filled diamond frame with the glyph knocked out of it, the
 * same frame `DISCIPLINE_ICONS` carries. An earlier set was drawn as thin 24x24 strokes
 * like `NAV_ICONS`; they were legible but read as generic app furniture next to the
 * engraved sigils, because line art is the language of the app's chrome and not of its
 * content. **If these ever get redrawn, keep the diamond and keep them filled.**
 *
 * The frame is authored rather than traced, since the sheet has no symbol to trace here.
 * Its geometry is matched to the traced badges by eye: outer diamond at 3.5–96.5, inner
 * at 15–85, glyph inside the inner diamond. Because the diamond pinches at top and
 * bottom, a glyph that is tall and narrow breaks out of it — the alchemical Mercury and
 * Salt marks were tried and both spilled past the frame. Keep a glyph wide and centred
 * on the waist of the diamond.
 *
 * Subject matter: a claw for the body, a mask for the Masquerade, a grimoire for what
 * the Mental Skills are all made of.
 */
import type { TraitCategory } from '../types'

/** Outer diamond, then the inner one as a hole. Prefixed to every glyph. */
const RING = 'M50 3.5 L96.5 50 L50 96.5 L3.5 50 Z M50 15 L85 50 L50 85 L15 50 Z '

const badge = (glyph: string) =>
  `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path fill="currentColor" fill-rule="evenodd" d="${RING}${glyph.replace(/\s+/g, ' ').trim()}"/>
  </svg>`

export const TRAIT_ICONS: Record<TraitCategory, string> = {
  // Three raked claw marks — the Physical column.
  fisico: badge(`
    M35 34 C40 42, 44 53, 45.5 66 C41.5 61, 36 49, 33 39 Z
    M48.5 31 C53.5 40, 56.5 52, 57 66 C53 60, 48.5 47, 46 35 Z
    M62 34 C65 43, 66.5 55, 65.5 67 C62 61, 59.5 49, 58.5 38 Z`),

  // A masquerade mask — the Social column, and the thing the whole game is named for.
  // The eye holes are deliberately large: at 24px a smaller pair silts up and the mask
  // turns into a featureless blob.
  social: badge(`
    M26 40.5 C34 34, 44.5 32, 50 36.5 C55.5 32, 66 34, 74 40.5
      C74 54.5, 65.5 66, 55.5 66 C51 66, 50 61.5, 50 58
      C50 61.5, 49 66, 44.5 66 C34.5 66, 26 54.5, 26 40.5 Z
    M34 43 C40.5 40, 46 43, 46 48.5 C46 53.5, 39.5 55.5, 35.5 51.5 C32.5 48.5, 31.5 44.2, 34 43 Z
    M66 43 C59.5 40, 54 43, 54 48.5 C54 53.5, 60.5 55.5, 64.5 51.5 C67.5 48.5, 68.5 44.2, 66 43 Z`),

  // An open grimoire — the Mental column. The spine stops level with the pages; when it
  // ran past them it read as a little tail hanging off the book. The whole book is short
  // and wide so it clears the diamond, which pinches hard above y=39 and below y=65.
  mental: badge(`
    M29 39 C35.5 36, 43 36, 48.6 39.5 L48.6 65 C43 61.5, 35.5 61.5, 30.5 64.5 Z
    M71 39 C64.5 36, 57 36, 51.4 39.5 L51.4 65 C57 61.5, 64.5 61.5, 69.5 64.5 Z
    M48.9 40.5 L51.1 40.5 L51.1 65 L48.9 65 Z`),
}
