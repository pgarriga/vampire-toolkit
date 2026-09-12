/**
 * Line icons for navigation. Shared by the overlay menu in App.vue and the tool cards on
 * the home page so the two can never drift apart — the home card for a tool shows exactly
 * the icon its menu entry shows.
 *
 * Stroked 24x24 outlines (unlike the filled DISCIPLINE_ICONS / CLAN_ICONS sigils), sized
 * by the caller through CSS.
 */
export type NavIconType = 'home' | 'clans' | 'disciplines' | 'myPowers' | 'settings'

const OPEN = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">'

export const NAV_ICONS: Record<NavIconType, string> = {
  home: `${OPEN}
    <path d="M3 12l9-9 9 9"/>
    <path d="M5 10v10h14V10"/>
  </svg>`,

  clans: `${OPEN}
    <path d="M12 2l8 4v6c0 4.5-3.2 8.6-8 10-4.8-1.4-8-5.5-8-10V6z"/>
    <path d="M12 8v6M9 11h6"/>
  </svg>`,

  disciplines: `${OPEN}
    <circle cx="12" cy="12" r="3"/>
    <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
  </svg>`,

  myPowers: `${OPEN}
    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
  </svg>`,

  settings: `${OPEN}
    <circle cx="12" cy="12" r="3"/>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
  </svg>`,
}
