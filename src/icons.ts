import type { IconType } from './types'

export const DISCIPLINE_ICONS: Record<IconType, string> = {

  // ── ANIMALISM — Beast paw slash: 4 sharp talons over a palm pad ─────────
  wolf: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 54 C 30 54 18 64 18 78 C 18 90 30 96 50 96 C 70 96 82 90 82 78 C 82 64 70 54 50 54 Z" fill="currentColor"/>
    <path d="M14 66 Q 12 40 20 12 Q 26 40 22 66 Z" fill="currentColor"/>
    <path d="M36 60 Q 34 32 42 6 Q 48 32 44 60 Z" fill="currentColor"/>
    <path d="M64 60 Q 66 32 58 6 Q 52 32 56 60 Z" fill="currentColor"/>
    <path d="M86 66 Q 88 40 80 12 Q 74 40 78 66 Z" fill="currentColor"/>
    <path d="M14 66 L 18 62 L 18 34 L 14 44 Z" fill="rgba(255,255,255,0.10)"/>
    <path d="M36 60 L 40 56 L 40 22 L 36 34 Z" fill="rgba(255,255,255,0.10)"/>
  </svg>`,

  // ── AUSPEX — Almond eye with vertical vampiric pupil ────────────────────
  eye: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 50 Q 28 20 50 20 Q 72 20 96 50 Q 72 80 50 80 Q 28 80 4 50 Z
             M 30 50 Q 40 32 50 32 Q 60 32 70 50 Q 60 68 50 68 Q 40 68 30 50 Z"
          fill="currentColor" fill-rule="evenodd"/>
    <ellipse cx="50" cy="50" rx="12" ry="16" fill="currentColor"/>
    <ellipse cx="50" cy="50" rx="3.5" ry="13" fill="rgba(0,0,0,0.85)"/>
    <ellipse cx="47" cy="45" rx="1.8" ry="3" fill="rgba(255,255,255,0.40)"/>
  </svg>`,

  // ── CELERITY — Angular lightning bolt with a single motion ghost ────────
  bolt: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <polygon points="58,4 22,54 44,54 38,96 82,42 58,42 68,4" fill="currentColor" opacity="0.22" transform="translate(-12,0)"/>
    <polygon points="58,4 22,54 44,54 38,96 82,42 58,42 68,4" fill="currentColor"/>
    <path d="M58 4 L 44 54 L 48 54 L 60 8 Z" fill="rgba(255,255,255,0.14)"/>
  </svg>`,

  // ── DOMINATE — Growing hierarchy of bars (dominion pyramid) ─────────────
  crown: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect x="30" y="14" width="40" height="12" fill="currentColor"/>
    <rect x="20" y="34" width="60" height="12" fill="currentColor"/>
    <rect x="10" y="54" width="80" height="12" fill="currentColor"/>
    <rect x="4"  y="74" width="92" height="12" fill="currentColor"/>
    <rect x="30" y="14" width="40" height="3" fill="rgba(255,255,255,0.12)"/>
    <rect x="20" y="34" width="60" height="3" fill="rgba(255,255,255,0.12)"/>
    <rect x="10" y="54" width="80" height="3" fill="rgba(255,255,255,0.12)"/>
    <rect x="4"  y="74" width="92" height="3" fill="rgba(255,255,255,0.12)"/>
    <rect x="30" y="23" width="40" height="3" fill="rgba(0,0,0,0.22)"/>
    <rect x="20" y="43" width="60" height="3" fill="rgba(0,0,0,0.22)"/>
    <rect x="10" y="63" width="80" height="3" fill="rgba(0,0,0,0.22)"/>
    <rect x="4"  y="83" width="92" height="3" fill="rgba(0,0,0,0.22)"/>
  </svg>`,

  // ── FORTITUDE — Diamond with inscribed gothic cross ─────────────────────
  shield: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <polygon points="50,6 94,50 50,94 6,50" fill="currentColor"/>
    <polygon points="50,6 94,50 50,50" fill="rgba(255,255,255,0.10)"/>
    <polygon points="50,94 6,50 50,50" fill="rgba(0,0,0,0.22)"/>
    <rect x="45" y="22" width="10" height="56" fill="rgba(0,0,0,0.60)"/>
    <rect x="26" y="45" width="48" height="10" fill="rgba(0,0,0,0.60)"/>
  </svg>`,

  // ── OBFUSCATION — Hooded figure with glowing crimson eyes in shadow ─────
  ghost: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 4 C 30 4 18 22 18 46 L 18 96 L 82 96 L 82 46 C 82 22 70 4 50 4 Z" fill="currentColor"/>
    <path d="M50 4 C 40 4 30 14 26 28 Q 34 12 50 10 Z" fill="rgba(255,255,255,0.10)"/>
    <path d="M28 22 C 28 16 36 12 50 12 C 64 12 72 16 72 22 L 72 46 C 72 54 62 60 50 60 C 38 60 28 54 28 46 Z" fill="rgba(0,0,0,0.85)"/>
    <ellipse cx="41" cy="34" rx="3" ry="5" fill="rgba(200,40,40,0.95)"/>
    <ellipse cx="59" cy="34" rx="3" ry="5" fill="rgba(200,40,40,0.95)"/>
    <ellipse cx="41" cy="33" rx="1" ry="2.5" fill="rgba(255,220,180,0.85)"/>
    <ellipse cx="59" cy="33" rx="1" ry="2.5" fill="rgba(255,220,180,0.85)"/>
  </svg>`,

  // ── POTENCE — Clenched fist, monstrous proportions ──────────────────────
  fist: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 32 Q 18 20 26 20 Q 34 20 34 32 L 34 46 L 18 46 Z" fill="currentColor"/>
    <path d="M34 28 Q 34 16 42 16 Q 50 16 50 28 L 50 46 L 34 46 Z" fill="currentColor"/>
    <path d="M50 28 Q 50 16 58 16 Q 66 16 66 28 L 66 46 L 50 46 Z" fill="currentColor"/>
    <path d="M66 32 Q 66 20 74 20 Q 82 20 82 32 L 82 46 L 66 46 Z" fill="currentColor"/>
    <rect x="16" y="44" width="68" height="30" rx="6" fill="currentColor"/>
    <path d="M16 52 L 4 56 L 4 68 L 16 72 Z" fill="currentColor"/>
    <rect x="30" y="72" width="42" height="24" rx="3" fill="currentColor"/>
    <path d="M22 58 Q 34 62 50 62 Q 66 62 78 58" fill="none" stroke="rgba(0,0,0,0.35)" stroke-width="1.5"/>
    <line x1="34" y1="46" x2="34" y2="60" stroke="rgba(0,0,0,0.28)" stroke-width="1"/>
    <line x1="50" y1="46" x2="50" y2="60" stroke="rgba(0,0,0,0.28)" stroke-width="1"/>
    <line x1="66" y1="46" x2="66" y2="60" stroke="rgba(0,0,0,0.28)" stroke-width="1"/>
  </svg>`,

  // ── PRESENCE — 4-point compass burst with blood-red core ────────────────
  rose: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <polygon points="50,4 58,42 96,50 58,58 50,96 42,58 4,50 42,42" fill="currentColor"/>
    <polygon points="50,4 54,42 50,42" fill="rgba(255,255,255,0.18)"/>
    <polygon points="50,4 46,42 50,42" fill="rgba(0,0,0,0.10)"/>
    <polygon points="50,96 54,58 50,58" fill="rgba(0,0,0,0.15)"/>
    <circle cx="50" cy="50" r="7" fill="rgba(0,0,0,0.55)"/>
    <circle cx="50" cy="50" r="4.5" fill="rgba(139,0,0,0.95)"/>
    <circle cx="48" cy="48" r="1.2" fill="rgba(255,255,255,0.35)"/>
  </svg>`,

  // ── PROTEAN — Drop with curved fangs of transformation within ───────────
  claws: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 4 C 50 4 20 42 20 66 C 20 82 34 94 50 94 C 66 94 80 82 80 66 C 80 42 50 4 50 4 Z" fill="currentColor"/>
    <path d="M50 20 C 50 20 30 48 30 66 C 30 78 40 87 50 87 Z" fill="rgba(0,0,0,0.20)"/>
    <path d="M42 44 Q 34 60 44 84 L 48 82 Q 42 62 46 46 Z" fill="rgba(0,0,0,0.55)"/>
    <path d="M58 44 Q 66 60 56 84 L 52 82 Q 58 62 54 46 Z" fill="rgba(0,0,0,0.55)"/>
    <ellipse cx="40" cy="52" rx="2.5" ry="5" fill="rgba(255,255,255,0.22)" transform="rotate(-20 40 52)"/>
  </svg>`,

  // ── BLOOD SORCERY — Ankh (Egyptian cross of life) with a blood drop ─────
  blood: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 4 C 34 4 24 18 24 32 C 24 44 34 52 50 56 C 66 52 76 44 76 32 C 76 18 66 4 50 4 Z
             M 50 14 C 60 14 66 22 66 32 C 66 40 60 44 50 46 C 40 44 34 40 34 32 C 34 22 40 14 50 14 Z"
          fill="currentColor" fill-rule="evenodd"/>
    <rect x="14" y="60" width="72" height="14" rx="1" fill="currentColor"/>
    <rect x="42" y="54" width="16" height="38" rx="1" fill="currentColor"/>
    <path d="M50 4 C 40 4 32 12 28 22 C 34 14 42 12 50 12 Z" fill="rgba(255,255,255,0.14)"/>
    <path d="M50 92 Q 46 96 50 100 Q 54 96 50 92 Z" fill="rgba(139,0,0,0.95)"/>
    <ellipse cx="50" cy="96" rx="4" ry="4" fill="rgba(139,0,0,0.95)"/>
  </svg>`,

  // ── THIN-BLOOD ALCHEMY — Round-bottomed flask with blood potion ─────────
  flask: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect x="38" y="6" width="24" height="10" rx="2" fill="currentColor"/>
    <rect x="42" y="14" width="16" height="26" fill="currentColor"/>
    <path d="M42 38 L 20 62 Q 8 82 22 92 L 78 92 Q 92 82 80 62 L 58 38 Z" fill="currentColor"/>
    <path d="M42 8 L 42 14 L 58 14 L 58 8 Z" fill="rgba(255,255,255,0.14)"/>
    <path d="M44 40 L 24 62 Q 12 80 20 88" fill="none" stroke="rgba(255,255,255,0.16)" stroke-width="1.2"/>
    <path d="M22 72 Q 22 92 50 92 Q 78 92 78 72 Q 78 62 50 62 Q 22 62 22 72 Z" fill="rgba(139,0,0,0.88)"/>
    <path d="M22 72 Q 34 66 50 66 Q 66 66 78 72" fill="none" stroke="rgba(255,255,255,0.20)" stroke-width="1"/>
    <circle cx="36" cy="78" r="3" fill="rgba(255,255,255,0.22)"/>
    <circle cx="58" cy="82" r="2.2" fill="rgba(255,255,255,0.18)"/>
    <circle cx="66" cy="74" r="1.5" fill="rgba(255,255,255,0.18)"/>
  </svg>`,
}
