# Vampire Toolkit · Vampire: The Masquerade

A toolkit to speed up your **Vampire: The Masquerade 5th Edition** tabletop sessions — browse the 11 disciplines and every power, and save the ones your character has for quick lookup at the table. Pure static PWA, no account required, works offline.

**🌐 Live:** https://pgarriga.github.io/vampire-toolkit/

> For detailed rules and lore, always refer to the official **Vampire: The Masquerade 5th Edition** rulebook.

---

![Version](https://img.shields.io/badge/version-2.0.9-8b0000?style=flat-square)
![Vue](https://img.shields.io/badge/Vue-3.5-4FC08D?style=flat-square&logo=vue.js&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-7952B3?style=flat-square&logo=bootstrap&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.3-646CFF?style=flat-square&logo=vite&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?style=flat-square&logo=typescript&logoColor=white)
![PWA](https://img.shields.io/badge/PWA-installable-5A0FC8?style=flat-square)

---

## Features

- **Tools-list home** — landing page with a card per tool (Disciplines browser, My Powers), ready to grow with more.
- **11 disciplines** with gothic SVG iconography and per-discipline theme colours.
- **~96 powers** with dice pool, cost, duration, description and (when present) the amalgam requirement.
- **Search** the discipline catalogue by name, clan or type.
- **My Powers** — bookmark your character's powers with a star; persists in `localStorage` and shows a live count badge in the menu.
- **Share a power as an image** — on mobile browsers with the Web Share API, a share button renders the power card as a PNG and hands it off to WhatsApp, Mail, Messages, etc.
- **Trilingual UI and content** — Spanish, English and Catalan, both for the interface and for every discipline/power. Auto-detects the browser language.
- **Theming** — dark, light and auto (follows system preference).
- **Installable PWA** — service worker + web manifest via `vite-plugin-pwa`; usable offline after the first load, installs on iOS and Android home screens under the full "Vampire Toolkit" name.
- **Accessible** — keyboard navigation on every control, ARIA labels on icon-only buttons, WCAG AA contrast in both themes, dismissible menu overlay.
- **Responsive** — mobile-first layout, 1 → 5 columns on the discipline grid depending on viewport, full-screen overlay menu that stays comfortable on any width.

## Tech Stack

| Technology | Version | Role |
|------------|---------|------|
| Vue 3 | 3.5 | Reactive framework (SFCs + Composition API + TypeScript) |
| Vue Router | 5 | Hash navigation (`#/route`) |
| Bootstrap | 5.3 | Responsive grid and CSS utilities |
| Vite | 7.3 | Bundler and dev server |
| vite-plugin-pwa | 1.2 | Service worker + web manifest |
| TypeScript | 6.0 | Static typing |

## Project Structure

```
Vampire Toolkit/
├── index.html                # Vite entry point
├── vite.config.ts
├── tsconfig.json
├── package.json
├── scripts/
│   └── generate-icons.mjs    # Regenerates PWA PNGs from public/favicon.svg (sharp)
└── src/
    ├── main.ts               # Bootstrap CSS/JS + Vue app
    ├── App.vue               # Custom sticky navbar + hamburger overlay menu + page transitions
    ├── router.ts             # Hash routes
    ├── types.ts              # TypeScript interfaces (Discipline, Power)
    ├── data.ts               # The 11 disciplines and ~96 powers (Spanish source)
    ├── translations-en.ts    # English translations overlay (disciplines + powers)
    ├── translations-ca.ts    # Catalan translations overlay (disciplines + powers)
    ├── icons.ts              # Gothic SVGs per discipline
    ├── helpers.ts            # Pure functions (shortCost, artGradient…)
    ├── renderPowerCard.ts    # Canvas renderer — draws a power card to a PNG Blob for sharing
    ├── composables/
    │   ├── useFavorites.ts   # My Powers state (localStorage)
    │   ├── useSettings.ts    # Theme and language preferences
    │   ├── useI18n.ts        # UI string translations
    │   └── useData.ts        # Localized discipline/power data
    ├── css/
    │   └── main.css          # Custom gothic styles + Bootstrap overrides + light theme vars
    └── views/
        ├── HomeView.vue      # Landing page — tool card grid
        ├── DisciplinesView.vue # Discipline grid with search
        ├── DisciplineView.vue  # Power grid for a discipline
        ├── PowerView.vue     # Power detail card + mobile Share button
        ├── MyPowersView.vue  # Saved powers grouped by discipline and level
        └── SettingsView.vue  # Theme, language and repository info
```

## Routes

| Hash | View | Description |
|------|------|-------------|
| `#/` | HomeView | Landing page — tool card grid |
| `#/disciplines` | DisciplinesView | Grid of all 11 disciplines with search |
| `#/discipline/:id` | DisciplineView | Power grid with star to save |
| `#/discipline/:id/power/:powerId` | PowerView | Power detail card + mobile Share button |
| `#/my-powers` | MyPowersView | Saved powers by discipline and level |
| `#/settings` | SettingsView | Theme, language and repository info |

## Local Development

```bash
# Install dependencies (WSL2 on Windows)
npm install --no-bin-links --ignore-scripts

# Dev server
npm run dev
# → http://localhost:5173

# Production build
npm run build
# → dist/

# Preview build
npm run preview

# Regenerate PWA icons from public/favicon.svg (only when the favicon changes)
node scripts/generate-icons.mjs
```

> **WSL2 note:** Scripts use `node node_modules/vite/bin/vite.js` instead of the `vite` binary to avoid file system permission issues on Windows.

## Data and translations

Source: official Spanish PDF *Vampiro La Mascarada 5ª Edición — Disciplinas*.

- The Spanish content lives in `src/data.ts`.
- English translations are in `src/translations-en.ts`, Catalan in `src/translations-ca.ts`. Both are overlays keyed by the same power `id` — the `useData` composable picks the right one based on the resolved language.
- To add or edit a power, update all three files in the same commit (types are defined in `src/types.ts`).
- UI strings (nav, headings, buttons) live in `src/composables/useI18n.ts`; every string must exist in the `es`, `en` and `ca` blocks — TypeScript enforces the shape.

## Contributing

Contributions are welcome — open an issue or a pull request. Before submitting a change, please keep the project's baseline promises intact:

- **Accessibility** — keyboard-operable controls, ARIA labels on icon-only buttons, visible focus outlines, WCAG AA contrast in both themes.
- **Translations** — no hardcoded UI strings in views; every new label is added to Spanish, English and Catalan. New disciplines or powers ship with EN and CA overlays.
- **Responsive** — mobile-first, no horizontal page scroll, comfortable at ≥ 320px width, both themes readable.

See [`CLAUDE.md`](./CLAUDE.md) for the full, prescriptive version of these rules and for the project's architecture notes.

## Icons

SVG icons are in `src/icons.ts`. Each icon uses `currentColor` to inherit the discipline's theme color. ViewBox `0 0 100 100`.

| Key | Discipline |
|-----|-----------|
| `wolf` | Animalism |
| `eye` | Auspex |
| `bolt` | Celerity |
| `crown` | Dominate |
| `shield` | Fortitude |
| `ghost` | Obfuscation |
| `fist` | Potence |
| `rose` | Presence |
| `claws` | Protean |
| `blood` | Blood Sorcery |
| `flask` | Thin-Blood Alchemy |
