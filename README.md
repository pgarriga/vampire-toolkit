# Vampire V5 Toolkit · Vampire: The Masquerade

A toolkit to speed up your **Vampire: The Masquerade 5th Edition** tabletop sessions — browse the 12 disciplines and every power, look up the 14 clans, and keep a sheet per character with the powers they know. Pure static PWA, no account required, works offline.

**🌐 Live:** https://pgarriga.github.io/vampire-toolkit/

> **Unofficial, fan-made tool.** It in no way replaces the official **Vampire: The Masquerade
> 5th Edition** books and supplements, which remain the only rules reference — it just speeds
> up play at the table when not every player has a copy to hand. The app states the same in
> its footer, next to the version it is running.

---

![Version](https://img.shields.io/badge/version-3.1.0-8b0000?style=flat-square)
![Vue](https://img.shields.io/badge/Vue-3.5-4FC08D?style=flat-square&logo=vue.js&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-7952B3?style=flat-square&logo=bootstrap&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?style=flat-square&logo=vite&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?style=flat-square&logo=typescript&logoColor=white)
![PWA](https://img.shields.io/badge/PWA-installable-5A0FC8?style=flat-square)

---

## Features

- **Two-part home** — a **Compendium** section (Clans, Disciplines, Core Traits) for reference, and **My Characters** with a row per character showing their clan sigil, name, clan and generation.
- **Characters** — create one with a name, a generation (1–16) and a clan, then build their power list. Edit the name, generation and clan at any time. Everything is stored locally; no account, nothing leaves the device.
- **Export and import a character** — save a character to a `.json` file and load it back on any device. Re-importing your own file restores that character in place, after a confirmation.
- **Pick powers by Discipline** — from a character's sheet, choose a Discipline and tick the powers they know. Each Discipline shows its rating as V5 dots, derived from how many of its powers the character has.
- **12 disciplines** with their official diamond badges (traced from the clan sheet's discipline legend) and per-discipline theme colours.
- **152 powers** with dice pool, cost, duration, description and (when present) the amalgam requirement.
- **14 clans** — each with its real clan sigil (traced from the official clan sheet, not redrawn), archetype, description, in-clan Disciplines (linked through to the discipline pages), Bane and Compulsion.
- **Core Traits** — the 9 Attributes and 27 Skills: what each one measures, what every dot from 1 to 5 means, the corebook's example Specialties, and the three **Attribute + Skill** rolls each Skill turns up in. Every roll is a link, so an Attribute's page lists the Skills that roll off it and vice versa. The index keeps the cards quiet — name and blurb only; the rolls live on the trait's own page.
- **Search** the discipline catalogue by name, clan or type, the clan catalogue by name, archetype or Discipline, and the Core Traits by name, blurb, Specialty or the Attributes a Skill rolls with — so `Destreza` lists every Skill that pairs with it. Accent-insensitive, so `hecata` finds Hécata.
- **Swipe between powers** — on a power sheet, drag left or right (or use the arrow keys) to step through the Discipline's powers, or through the character's own list when you arrived from their sheet.
- **Share a power as an image** — on mobile browsers with the Web Share API, a share button renders the power card as a PNG and hands it off to WhatsApp, Mail, Messages, etc.
- **Trilingual UI and content** — Spanish, English and Catalan, both for the interface and for every discipline, power, clan, Attribute and Skill. Auto-detects the browser language.
- **Theming** — dark, light and auto (follows system preference).
- **Footer on every page** — the unofficial-tool notice and the running version, so the
  version is always at hand when reporting something.
- **Installable PWA** — service worker + web manifest via `vite-plugin-pwa`; usable offline after the first load, installs on iOS and Android home screens under the full "Vampire V5 Toolkit" name.
- **Accessible** — keyboard navigation on every control, ARIA labels on icon-only buttons, WCAG AA contrast in both themes, dismissible menu and dropdown overlays.
- **Responsive** — mobile-first layout: the discipline, power and clan grids run 2 columns on
  a phone and 3 → 4 → 5 as the viewport grows, and the cards drop their secondary lines at
  phone width so the name always fits. Full-screen overlay menu that matches the page width
  and steps its type up on desktop.

## Tech Stack

| Technology | Version | Role |
|------------|---------|------|
| Vue 3 | 3.5 | Reactive framework (SFCs + Composition API + TypeScript) |
| Vue Router | 5 | Hash navigation (`#/route`) |
| Bootstrap | 5.3 | Responsive grid and CSS utilities (CSS only — its JS bundle is not shipped) |
| Vite | 8.3 | Bundler and dev server |
| vite-plugin-pwa | 1.3 | Service worker + web manifest |
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
    ├── main.ts               # Bootstrap CSS (no JS bundle) + main.css + mounts the app
    ├── App.vue               # Custom sticky navbar + sectioned overlay menu + page transitions + footer
    ├── router.ts             # Hash routes
    ├── types.ts              # TypeScript interfaces (Discipline, Power, Clan, Trait, Character)
    ├── data.ts               # The 12 disciplines and 152 powers (Spanish source)
    ├── clans.ts              # The 14 clans (Spanish source)
    ├── traits.ts             # The 9 Attributes and 27 Skills (Spanish source)
    ├── translations-en.ts    # English translations overlay (disciplines + powers)
    ├── translations-ca.ts    # Catalan translations overlay (disciplines + powers)
    ├── translations-clans-en.ts # English translations overlay (clans)
    ├── translations-clans-ca.ts # Catalan translations overlay (clans)
    ├── translations-traits-en.ts # English translations overlay (Attributes + Skills)
    ├── translations-traits-ca.ts # Catalan translations overlay (Attributes + Skills)
    ├── icons.ts              # Discipline badges traced from the official legend
    ├── clan-icons.ts         # SVG sigil per clan
    ├── nav-icons.ts          # Line icons shared by the menu and the home cards
    ├── trait-icons.ts        # One line icon per trait category (Physical/Social/Mental)
    ├── helpers.ts            # Pure functions (shortCost, artGradient…)
    ├── renderPowerCard.ts    # Canvas renderer — draws a power card to a PNG Blob for sharing
    ├── components/
    │   ├── AppFooter.vue     # Site footer — unofficial-tool notice + version
    │   └── ClanPicker.vue    # The 14 clan sigils as a single-choice grid with search
    ├── composables/
    │   ├── useCharacters.ts  # Characters: storage, CRUD, powers, import/export
    │   ├── useCharacterPowers.ts # One character's powers grouped by discipline
    │   ├── useSettings.ts    # Theme and language preferences
    │   ├── useI18n.ts        # UI string translations
    │   ├── useData.ts        # Localized discipline/power data
    │   ├── useClans.ts       # Localized clan data
    │   └── useTraits.ts      # Localized Attributes and Skills
    ├── css/
    │   └── main.css          # Custom gothic styles + Bootstrap overrides + light theme vars
    └── views/
        ├── HomeView.vue      # Landing page — Compendium + My Characters
        ├── ClansView.vue     # Clan grid with search
        ├── ClanView.vue      # Clan detail (disciplines, Bane, Compulsion)
        ├── TraitsView.vue    # Core Traits index — Attributes, then Skills
        ├── TraitView.vue     # One Attribute or Skill in full
        ├── DisciplinesView.vue # Discipline grid with search
        ├── DisciplineView.vue  # Power grid for a discipline
        ├── PowerView.vue     # Power detail card + mobile Share button
        ├── CharacterCreateView.vue # Create a character (name + generation, then clan)
        ├── CharacterView.vue # Character sheet and their powers
        ├── CharacterAddView.vue # Add or remove a character's powers
        └── SettingsView.vue  # Theme, language, cache and repository info
```

## Routes

| Hash | View | Description |
|------|------|-------------|
| `#/` | HomeView | Landing page — Compendium cards + one row per character |
| `#/disciplines` | DisciplinesView | Grid of all 12 disciplines with search |
| `#/discipline/:id` | DisciplineView | Power grid for a discipline |
| `#/discipline/:id/power/:powerId` | PowerView | Power detail card + mobile Share button |
| `#/traits` | TraitsView | Core Traits — the 9 Attributes, then the 27 Skills |
| `#/trait/:id` | TraitView | One Attribute or Skill in full |
| `#/clans` | ClansView | Grid of all 14 clans with search |
| `#/clan/:id` | ClanView | Clan detail — Disciplines, Bane and Compulsion |
| `#/character/new` | CharacterCreateView | Create a character: name + generation, then clan |
| `#/character/:id` | CharacterView | Character sheet and their powers |
| `#/character/:id/add` | CharacterAddView | Add or remove that character's powers |
| `#/settings` | SettingsView | Theme, language, cache reset and repository info |

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

Disciplines and powers: the official Spanish PDFs *Vampiro La Mascarada 5ª Edición — Disciplinas* (corebook) and *— Disciplinas 2* (Players Guide), the latter adding 39 powers to the existing Disciplines plus the whole **Oblivion** Discipline. Its Blood Sorcery Rituals and Oblivion Ceremonies are not included.

Core Traits: the official Spanish PDF *Vampiro La Mascarada 5ª Edición — Rasgos Centrales* (corebook). The content follows the chapter closely — the same reading of each dot, the same examples, the same detail — but it is **reworded rather than transcribed**. Names are the ones the book prints (`Latrocinio`, `Pelea con Armas`, `Consciencia`), with the wordings players may remember instead kept in an `aka` list that the search matches but no page draws.

Clans: the official *Hoja de Clanes* reference sheet (archetype, verbs, Disciplines, Bane and Compulsion names), with the Bane and Compulsion mechanics from the V5 corebook, Camarilla, Anarch and Companion.

- The Spanish content lives in `src/data.ts`.
- English translations are in `src/translations-en.ts`, Catalan in `src/translations-ca.ts`. Both are overlays keyed by the same power `id` — the `useData` composable picks the right one based on the resolved language.
- Attributes and Skills live in `src/traits.ts`, with `src/translations-traits-en.ts` and `src/translations-traits-ca.ts` as overlays keyed by the same trait `id`; `useTraits` applies the right one. A Skill's rolls store the *attribute id*, so an overlay only translates the example sentence.
- To add or edit a power, update all three files in the same commit (types are defined in `src/types.ts`).
- UI strings (nav, headings, buttons) live in `src/composables/useI18n.ts`; every string must exist in the `es`, `en` and `ca` blocks — TypeScript enforces the shape.

## Your data

Nothing leaves your device and there is no account. Everything lives in the browser's
`localStorage`:

| Key | Holds |
|-----|-------|
| `v5-character:<id>` | One character — name, clan, generation and their powers. One entry each. |
| `v5-active-character` | The last character sheet you opened. |
| `v5-theme` · `v5-lang` | Your theme and language preferences. |

Each character is a self-contained JSON, which is exactly what **Export** writes to a file
and what **Load character** reads back — so a saved file is a portable backup you can move
to another device. Clearing the cache from Settings re-downloads the app's files and leaves
all of this untouched; clearing your browser's site data does delete it.

## Contributing

Contributions are welcome — open an issue or a pull request. The version in the app's footer
is the one to quote when reporting something. Before submitting a change, please keep the
project's baseline promises intact:

- **Accessibility** — keyboard-operable controls, ARIA labels on icon-only buttons, visible focus outlines, WCAG AA contrast in both themes.
- **Translations** — no hardcoded UI strings in views; every new label is added to Spanish, English and Catalan. New disciplines, powers, clans or traits ship with EN and CA overlays.
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
| `alchemy` | Thin-Blood Alchemy |
| `olvido` | Oblivion |
