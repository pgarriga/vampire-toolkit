# Vampire Toolkit — Vampire: The Masquerade 5th Edition

A support tool for **Vampire: The Masquerade 5th Edition** tabletop sessions. Pure static web app with no backend, designed to look up disciplines and powers and manage a character's powers at the table. No registration required.

## Stack

- **Vue 3** + **TypeScript** — SFCs with Composition API (`<script setup>`)
- **Vue Router 4** with hash history (`#/route`)
- **Bootstrap 5** — navbar, responsive grid and CSS utilities (CSS + JS bundle)
- **Vite 6** — bundler and dev server
- **Google Fonts**: Cinzel Decorative (headings) + Cormorant Garamond (body)

## File Structure

```
Vampire Toolkit/
├── index.html                   # Vite entry point
├── vite.config.ts               # base: './', vue plugin
├── tsconfig.json
├── package.json                 # Scripts: dev / build / preview
└── src/
    ├── main.ts                  # Imports Bootstrap CSS+JS, main.css, mounts app
    ├── App.vue                  # Collapsible Bootstrap navbar + <router-view> with transition
    ├── router.ts                # Hash routes: /, /disciplina/:id, /disciplina/:id/poder/:powerId, /mis-poderes, /ajustes
    ├── types.ts                 # Interfaces: Discipline, Power, DisciplinesData
    ├── data.ts                  # DISCIPLINES_DATA: 11 disciplines and ~96 powers (Spanish source)
    ├── translations-en.ts       # English translations overlay for all disciplines and powers
    ├── icons.ts                 # DISCIPLINE_ICONS: inline SVGs per discipline
    ├── helpers.ts               # levelDots, disciplineById, powerById, shortCost, shortDuration, artGradient
    ├── composables/
    │   ├── useFavorites.ts      # My Powers singleton state — persists in localStorage
    │   ├── useSettings.ts       # Theme (auto/dark/light) and language (auto/es/en) preferences
    │   ├── useI18n.ts           # UI string translations based on resolved language
    │   └── useData.ts           # Localized discipline/power data — applies EN overlay when needed
    ├── css/
    │   └── main.css             # Custom gothic styles + Bootstrap overrides + light theme vars
    └── views/
        ├── HomeView.vue         # Discipline grid with search
        ├── DisciplineView.vue   # Power grid + star to save to My Powers
        ├── PowerView.vue        # Power detail card
        ├── MisPoderesView.vue   # Saved powers grouped by discipline and sorted by level
        └── SettingsView.vue     # Theme and language settings
```

## Routes

| Hash | View | Description |
|------|------|-------------|
| `#/` | `HomeView` | Grid of all 11 disciplines with search |
| `#/disciplina/:id` | `DisciplineView` | Power grid for the discipline |
| `#/disciplina/:id/poder/:powerId` | `PowerView` | Detail card for a specific power |
| `#/mis-poderes` | `MisPoderesView` | User's saved powers |
| `#/ajustes` | `SettingsView` | Theme and language settings |

## Navigation (`App.vue`)

Sticky top Bootstrap navbar with `navbar-expand-md`:
- Collapses to hamburger on mobile
- Closes automatically on navigation (watch on `route.path`)
- Red badge on "My Powers" / "Mis Poderes" showing the number of saved powers
- Brand: "Vampire Toolkit"

## My Powers (`composables/useFavorites.ts`)

Reactive singleton using `ref<string[]>`. Each favourite is stored as `"disciplineId:powerId"` in `localStorage` under the key `v5-mis-poderes`. Exposes `toggle`, `isFavorite` and the `favorites` ref.

In `DisciplineView.vue` each power card has a star button (`.star-btn`) in the top-right corner that calls `toggle`. In `MisPoderesView.vue` powers are grouped by discipline (in the order from `data.ts`) and sorted by level within each group.

## Settings (`composables/useSettings.ts`)

Reactive singleton exposing `theme` (`auto | dark | light`), `lang` (`auto | es | en`) and `resolvedLang` (`es | en`).

- Theme `auto` follows `window.matchMedia('(prefers-color-scheme: dark)')`.
- Language `auto` detects the browser language: Iberian Peninsula languages (`/^(es|ca|gl|eu|pt)/i`) resolve to `es`, everything else to `en`.
- Both preferences persist in `localStorage` (`v5-theme`, `v5-lang`).
- Theme is applied via `data-theme` attribute on `<html>`.

## Internationalisation (`composables/useI18n.ts` + `src/translations-en.ts`)

UI strings (nav labels, section headings, field labels) are translated in `useI18n.ts` and selected via `resolvedLang`.

Power and discipline content (names, descriptions, costs, dice pools, durations) is translated in `translations-en.ts`. The `useData.ts` composable applies this overlay over the Spanish base data when `resolvedLang === 'en'`. All views consume `useData()` instead of importing `DISCIPLINES_DATA` directly.

## Data (`src/data.ts`)

Source: official Spanish PDF *Vampiro La Mascarada 5 edición - Disciplinas.pdf*.

`DISCIPLINES_DATA.disciplines` is an array where each discipline has:

```ts
{
  id: "animalismo",           // slug used in routes
  name: "Animalismo",
  description: "...",
  tipo: "Mental",             // Mental | Físico | Social
  amenaza: "...",
  resonancia: "...",
  color: "#4a7c3f",           // theme colour (gradients and borders)
  colorDark: "#2d4a25",       // darker variant for gradients
  colorGlow: "rgba(...)",     // colour for box-shadow glow
  clanes: ["Gangrel", ...],
  iconType: "wolf",           // key in DISCIPLINE_ICONS
  powers: [ ... ]
}
```

Each power:

```ts
{
  id: "sentir-a-la-bestia",
  name: "Sentir a la Bestia",
  level: 1,                   // 1–5
  cost: "Ninguno",
  dicePool: "Resolución + Animalismo contra ...",
  duration: "Pasiva",
  description: "...",
  amalgama?: "..."            // optional
}
```

To add or edit a power, edit `src/data.ts` directly, keeping the types defined in `src/types.ts`. Add the English translation in `src/translations-en.ts` using the same power `id` as key.

## Icons (`src/icons.ts`)

`DISCIPLINE_ICONS` is an object `{ [iconType]: svgString }`. Each SVG uses `currentColor`. ViewBox `0 0 100 100`.

| iconType | Discipline |
|----------|-----------|
| `wolf`   | Animalism |
| `eye`    | Auspex |
| `bolt`   | Celerity |
| `crown`  | Dominate |
| `shield` | Fortitude |
| `ghost`  | Obfuscation |
| `fist`   | Potence |
| `rose`   | Presence |
| `claws`  | Protean |
| `blood`  | Blood Sorcery |
| `flask`  | Thin-Blood Alchemy |

## CSS (`src/css/main.css`)

Custom gothic styles on top of Bootstrap. CSS custom properties (`--void`, `--parchment`, `--card-color`, `--card-glow`, etc.) drive both dark (default) and light themes via `[data-theme="light"]` overrides.

Relevant classes:

- `.app-navbar` / `.app-nav-link` / `.app-nav-badge` — custom navbar
- `.discipline-card` / `.power-card` — cards using CSS vars `--card-color` and `--card-glow`
- `.star-btn` / `.star-btn--filled` — favourites star button
- `.disc-group-icon` — discipline icon in MisPoderesView
- `.power-detail-card` / `.pst` — power detail view
- `.settings-section` / `.settings-btn` — settings page

`--card-color` and `--card-glow` are injected inline from Vue.

## Local Development

```bash
# Install dependencies (first time — WSL2 on Windows)
npm install --no-bin-links --ignore-scripts

# Dev server
npm run dev
# → http://localhost:5173

# Production build
npm run build
# → dist/

# Preview build
npm run preview
```
