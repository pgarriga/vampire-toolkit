# Vampire Toolkit · Vampire: The Masquerade

A support tool for **Vampire: The Masquerade 5th Edition** tabletop sessions. Quickly browse disciplines and powers, save your character's powers for easy reference at the table — no registration or account required.

**🌐 Live:** https://pgarriga.github.io/vampire-toolkit/

> For detailed rules and lore, always refer to the official **Vampire: The Masquerade 5th Edition** rulebook.

---

![Version](https://img.shields.io/badge/version-1.12.2-8b0000?style=flat-square)
![Vue](https://img.shields.io/badge/Vue-3.5.13-4FC08D?style=flat-square&logo=vue.js&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.3-7952B3?style=flat-square&logo=bootstrap&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6.3.1-646CFF?style=flat-square&logo=vite&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7.3-3178C6?style=flat-square&logo=typescript&logoColor=white)

---

## Features

- **11 disciplines** with gothic SVG iconography
- **~96 powers** with dice pool, cost, duration and description
- **Search** by discipline name, clan or type
- **My Powers** — bookmark your character's powers with a star; persists in `localStorage`
- **No registration required** — pure static web app, no server, works offline
- **Bilingual** — Spanish and English (auto-detected from browser language)
- **Theming** — dark, light and auto (follows system preference)
- Responsive with Bootstrap 5 (2 → 5 columns depending on screen size)
- Accessible: keyboard navigation, ARIA labels

## Tech Stack

| Technology | Version | Role |
|------------|---------|------|
| Vue 3 | 3.5.13 | Reactive framework (SFCs + Composition API + TypeScript) |
| Vue Router | 4.5.0 | Hash navigation (`#/route`) |
| Bootstrap | 5.3.3 | Navbar, responsive grid and CSS utilities |
| Vite | 6.3.1 | Bundler and dev server |
| TypeScript | 5.7.3 | Static typing |

## Project Structure

```
Vampire Toolkit/
├── index.html                 # Vite entry point
├── vite.config.ts
├── tsconfig.json
├── package.json
└── src/
    ├── main.ts                # Bootstrap CSS/JS + Vue app
    ├── App.vue                # Bootstrap navbar + page transitions
    ├── router.ts              # Hash routes
    ├── types.ts               # TypeScript interfaces (Discipline, Power)
    ├── data.ts                # The 11 disciplines and ~96 powers (Spanish source)
    ├── translations-en.ts     # English translations overlay
    ├── icons.ts               # Gothic SVGs per discipline
    ├── helpers.ts             # Pure functions (shortCost, artGradient…)
    ├── composables/
    │   ├── useFavorites.ts    # My Powers state (localStorage)
    │   ├── useSettings.ts     # Theme and language preferences
    │   ├── useI18n.ts         # UI string translations
    │   └── useData.ts         # Localized discipline/power data
    ├── css/
    │   └── main.css           # Custom gothic styles + Bootstrap overrides
    └── views/
        ├── HomeView.vue       # Discipline grid with search
        ├── DisciplineView.vue # Power grid for a discipline
        ├── PowerView.vue      # Power detail card
        ├── MyPowersView.vue   # Saved powers grouped by discipline and level
        └── SettingsView.vue   # Theme and language settings
```

## Routes

| Hash | View | Description |
|------|------|-------------|
| `#/` | HomeView | Grid of all 11 disciplines with search |
| `#/discipline/:id` | DisciplineView | Power grid with star to save |
| `#/discipline/:id/power/:powerId` | PowerView | Power detail card |
| `#/my-powers` | MyPowersView | Saved powers by discipline and level |
| `#/settings` | SettingsView | Theme and language settings |

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
```

> **WSL2 note:** Scripts use `node node_modules/vite/bin/vite.js` instead of the `vite` binary to avoid file system permission issues on Windows.

## Data

Source: official Spanish PDF *Vampiro La Mascarada 5ª Edición — Disciplinas*.

Data lives in `src/data.ts`. English translations are in `src/translations-en.ts`. To add or edit a power, update those files directly, following the types defined in `src/types.ts`.

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
