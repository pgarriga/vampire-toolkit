# Vampire Toolkit — Vampire: The Masquerade 5th Edition

A toolkit to speed up **Vampire: The Masquerade 5th Edition** tabletop sessions. Pure static PWA with no backend: browse the 11 disciplines and ~96 powers, look up the 14 clans, and save the powers your character has for quick lookup at the table. No account required, works offline once loaded.

## Stack

- **Vue 3** + **TypeScript** — SFCs with Composition API (`<script setup>`)
- **Vue Router 5** with hash history (`#/route`)
- **Bootstrap 5** — responsive grid and CSS utilities (Bootstrap's navbar JS is **not** used any more; see Navigation)
- **Vite 7** — bundler and dev server
- **vite-plugin-pwa** — service worker + `manifest.webmanifest`
- **Google Fonts**: Cinzel Decorative (headings) + Cormorant Garamond (body)

## File Structure

```
Vampire Toolkit/
├── index.html                   # Vite entry point
├── vite.config.ts               # base: './' locally, '/vampire-toolkit/' on GH Actions; PWA plugin
├── tsconfig.json
├── package.json                 # Scripts: dev / build / preview
├── scripts/
│   └── generate-icons.mjs       # Regenerates PWA PNGs from public/favicon.svg (sharp)
└── src/
    ├── main.ts                  # Imports Bootstrap CSS+JS, main.css, mounts app
    ├── App.vue                  # Sticky navbar with hamburger + full-screen overlay menu + <router-view> with transition
    ├── router.ts                # Hash routes: /, /disciplines, /discipline/:id, /discipline/:id/power/:powerId, /my-powers, /settings
    ├── types.ts                 # Interfaces: Discipline, Power, DisciplinesData
    ├── data.ts                  # DISCIPLINES_DATA: 11 disciplines and ~96 powers (Spanish source)
    ├── translations-en.ts       # English translations overlay for all disciplines and powers
    ├── translations-ca.ts       # Catalan translations overlay for all disciplines and powers
    ├── icons.ts                 # DISCIPLINE_ICONS: inline SVGs per discipline
    ├── helpers.ts               # levelDots, disciplineById, powerById, shortCost, shortDuration, artGradient, colorGradient, parseAmalgama
    ├── renderPowerCard.ts       # Canvas 2D renderer — draws a power card and returns a PNG Blob for sharing
    ├── composables/
    │   ├── useFavorites.ts      # My Powers singleton state — persists in localStorage
    │   ├── useSettings.ts       # Theme (auto/dark/light) and language (auto/es/en/ca) preferences
    │   ├── useI18n.ts           # UI string translations based on resolved language
    │   └── useData.ts           # Localized discipline/power data — applies EN or CA overlay when needed
    ├── css/
    │   └── main.css             # Custom gothic styles + Bootstrap overrides + light theme vars
    └── views/
        ├── HomeView.vue         # Landing page — tool-card grid (Disciplines, My Powers)
        ├── DisciplinesView.vue  # Discipline grid with search
        ├── DisciplineView.vue   # Power grid + star to save to My Powers
        ├── PowerView.vue        # Power detail card + mobile Share button
        ├── MyPowersView.vue     # Saved powers grouped by discipline and sorted by level
        └── SettingsView.vue     # Theme, language and repository info
```

## Routes

| Hash | View | Description |
|------|------|-------------|
| `#/` | `HomeView` | Landing page — tool card grid (Clans, Disciplines, My Powers) |
| `#/disciplines` | `DisciplinesView` | Grid of all 11 disciplines with search |
| `#/discipline/:id` | `DisciplineView` | Power grid for the discipline |
| `#/discipline/:id/power/:powerId` | `PowerView` | Detail card for a specific power |
| `#/clans` | `ClansView` | Grid of all 14 clans with search |
| `#/clan/:id` | `ClanView` | Clan detail — description, in-clan Disciplines, Bane, Compulsion |
| `#/my-powers` | `MyPowersView` | User's saved powers |
| `#/settings` | `SettingsView` | Theme, language and repository info |

## Navigation (`App.vue`)

Custom sticky top bar (56px) — Bootstrap's navbar collapse is no longer used:
- Left: "Vampire Toolkit" brand — clicking it goes home
- Right: hamburger button (always visible, on every viewport)
- Clicking the hamburger opens a full-screen overlay menu below the bar with all nav items (Home, Clans, Disciplines, My Powers, Settings) as full-width buttons
- Menu and home-card icons both come from `src/nav-icons.ts`, so a tool's card always shows the same icon as its menu entry. The star fills in on the active My Powers entry via `.app-menu-item.active .app-menu-icon svg polygon`, which is safe because only that icon is drawn with a `<polygon>`
- Menu closes on route change, on Escape, and on click outside the panel
- Body scroll is locked while the menu is open
- Red badge on "My Powers" showing the number of saved powers

## My Powers (`composables/useFavorites.ts`)

Reactive singleton using `ref<string[]>`. Each favourite is stored as `"disciplineId:powerId"` in `localStorage` under the key `v5-my-powers` (with a one-time migration from the older `v5-mis-poderes`). Exposes `toggle`, `isFavorite`, `clearAll`, `favorites` and `favoriteCount`.

In `DisciplineView.vue` each power card has a star button (`.star-btn`) in the top-right corner that calls `toggle`. In `MyPowersView.vue` powers are grouped by discipline (in the order from `data.ts`) and sorted by level within each group.

## Clans (`src/clans.ts` + `src/clan-icons.ts` + `composables/useClans.ts`)

`CLANS_DATA.clans` holds the 14 V5 clans, each with `nickname`, `verbs`, `description`,
`disciplines` (discipline **ids**), `bane`, `compulsion` and its own colour triplet.

- **Icons are traced from the official *Hoja de Clanes* sheet**, not drawn by hand, so
  each sigil is the clan's real symbol. Pipeline: crop the glyph out of the sheet →
  threshold to a bitmap → vectorise with potrace → normalise into `0 0 100 100` through
  the wrapping `<g transform="translate(tx,ty) scale(s)">`. If a sigil ever needs
  redoing, re-trace from the sheet — do not redraw it freehand.
  `CLAN_ICONS` is keyed by clan `id` (the `id` doubles as the icon key — unlike
  `iconType` for disciplines there is no indirection). Same conventions as `icons.ts`:
  `viewBox="0 0 100 100"`, `currentColor`, `fill-rule="evenodd"` for the interior holes.
  The traced paths are detailed, which is why `clan-icons.ts` is ~150 KB.
- `disciplines` stores ids so `ClanView` can render each one as a `.disc-mini-card`
  (badge, name, type, power count) that navigates to its discipline page.
  **`oblivion` is deliberately not a discipline in this app** — `ClanView` renders it as a
  dashed, non-interactive card carrying the `olvido` badge and `t.clan.oblivionNote` as its
  meta line. Hecata and Lasombra are the two clans affected.
- Bane and Compulsion rules text comes from the V5 corebook / Camarilla / Anarch /
  Companion; the sheet only supplies their names.
- **Grid card art uses `colorGradient()` from `helpers.ts`** (shared with `artGradient`).
  Its mid stop is the accent at 33% alpha (`${c}55`) on purpose — at full strength the
  backdrop swallows the sigil. The clan *sheet* uses `.clan-medallion` instead.
- **Emblem contrast is handled by two rules — don't paint the sigil inline.**
  The trap: a glyph in the raw clan colour on a backdrop mixed from that *same* colour
  can't contrast, whatever the clan colour is (Lasombra measured 1.71:1, Salubri 1.63:1).
  - `.clan-sigil` pushes the glyph to near-white on dark / near-black on light with
    `color-mix()`, keeping a hint of the clan hue.
  - `.clan-medallion` (the clan sheet's disc) tints `--void-card` with ~12–26% clan
    colour instead of using the plain clan gradient, which sits at mid luminance and
    muddies the emblem.
  Together they measure 10–12:1 (dark) and 6–9:1 (light), and reproduce the source
  sheet's look: a white emblem on a dark band, with the clan colour in the ring and glow.
- **Contrast:** the clan palette is saturated mid-tones, so no clan colour clears 4.5:1 on
  *both* theme backgrounds (Lasombra bottoms out at 2.04:1 on dark). Clan colour is
  therefore used only for sigils, gradients and borders — never as body text. Text uses
  `--gold`, `--parchment` and the per-theme `--bane-accent` (`--blood` is #8b0000 in
  *both* themes and only reaches 1.79:1 on the dark panel, so it cannot be used as text).

## Settings (`composables/useSettings.ts`)

Reactive singleton exposing `theme` (`auto | dark | light`), `lang` (`auto | es | en | ca`) and `resolvedLang` (`es | en | ca`).

- Theme `auto` follows `window.matchMedia('(prefers-color-scheme: dark)')`.
- Language `auto` detects the browser language: Catalan (`/^ca\b/i`) resolves to `ca`, other Iberian Peninsula languages (`/^(es|gl|eu|pt)/i`) resolve to `es`, everything else to `en`.
- Both preferences persist in `localStorage` (`v5-theme`, `v5-lang`).
- Theme is applied via `data-theme` attribute on `<html>`.
- `SettingsView` also has a Repository section that links to the GitHub repo.

## Share power as image (`src/renderPowerCard.ts` + `PowerView.vue`)

`PowerView` shows a Share button in the top-left of the art header — only when `navigator.share` is available (and when `navigator.canShare({files:[…]})` accepts a small PNG probe if that API exists). Detection is done in `onMounted`; if `canShare` isn't implemented (older iOS Safari), the button is shown anyway and the actual share call is wrapped in a try/catch.

`renderPowerCard(discipline, power, strings)` draws a 1080px-wide portrait PNG on an offscreen `<canvas>` and returns a `Blob`:

- Waits for Cinzel Decorative + Cormorant Garamond via `document.fonts.load()` before measuring/drawing.
- Loads the discipline SVG icon (with `currentColor` swapped for the discipline colour) through a blob URL and paints it with a glow.
- Header: linear gradient using `discipline.color`/`colorDark`, level dots, big icon, discipline · level pill.
- Body: title with a coloured glow shadow, stats table, ornament divider, description, optional amalgama box, "Vampire Toolkit" footer.
- Colours are pinned to the dark palette (`#0d0b14`, `#d4c9b8`, `#c9a84c`, …) regardless of the user's theme so the shared image always looks the same.
- Text wrapping is done by `wrapText(ctx, text, maxWidth)` — greedy word-fit with paragraph breaks on `\n`.

`sharePower()` builds a `File` from the blob and calls `navigator.share({files, title, text})`. `AbortError` (user dismisses the share sheet) is swallowed; other failures show `t.power.shareError` via `alert`.

Requires a **secure context (HTTPS or `localhost`)** — the Web Share API is gated by browsers.

## Internationalisation (`composables/useI18n.ts` + `src/translations-en.ts` + `src/translations-ca.ts`)

UI strings (nav labels, section headings, field labels) are translated in `useI18n.ts` and selected via `resolvedLang`. The Spanish block is the shape source (`typeof es`) — every other language must match its keys exactly, which the TypeScript compiler enforces.

Power and discipline content (names, descriptions, costs, dice pools, durations) is translated in `translations-en.ts` and `translations-ca.ts`. The `useData.ts` composable applies the appropriate overlay over the Spanish base data when `resolvedLang === 'en'` or `resolvedLang === 'ca'`. All views consume `useData()` instead of importing `DISCIPLINES_DATA` directly.

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

## Icons (`src/icons.ts` + `src/clan-icons.ts`)

Both icon sets are **traced from the official sheet, not drawn freehand**. Pipeline for
each glyph: crop it out of the sheet → upscale the *source* crop with lanczos (thresholding
at native resolution leaves stair-stepping) → threshold → vectorise with potrace → normalise
into `0 0 100 100` through a wrapping `<g transform="translate(tx,ty) scale(s)">`. If a glyph
ever needs redoing, re-trace it — do not redraw it by hand.

`DISCIPLINE_ICONS` comes from the sheet's *"LEYENDA DE LAS DISCIPLINAS"* panel: a filled
diamond with the glyph knocked out via `fill-rule="evenodd"`. Notes:

- **Obfuscation's badge is blank on the sheet** — an empty diamond. That is the symbol.
- **Thin-Blood Alchemy has no symbol in the legend.** The panel carries Oblivion instead,
  which this app has no discipline for, so the previous hand-drawn flask was set inside the
  same diamond frame to keep the set consistent.
- The Oblivion glyph was traced and is available if Oblivion is ever added as a discipline.
- The `iconType` keys are unchanged (`wolf`, `crown`, …) so `data.ts` still addresses icons
  by the same key, even though the keys describe the old artwork rather than the new.

`CLAN_ICONS` is keyed by clan `id` (no indirection) and holds the 14 clan sigils from the
clan bands of the same sheet. When re-tracing those, the crop window must stop just short
of the clan name — the verbs line starts at ~x132 on the left page and the script name at
~x1024 on the right — and blobs are then clustered outward from the largest one.
**Do not split sigil from text by an x-fraction or by blob height:** the first clipped
Hecata's third mask and Toreador's right-hand petals, the second fails because the clan
names are set in large display type.

Both files are large (~120 KB and ~150 KB) because the traced paths carry real detail.

### Emblem contrast — `.sigil`

Every icon sits on a backdrop built from its own accent colour, so painting the glyph in
that raw colour cannot contrast with it, whatever the accent is (measured 1.6–3.0:1 before
the fix). **Never set the icon colour inline.** Views pass the accent as `--card-color` and
add the `.sigil` class, which shifts the glyph towards white on dark and black on light with
`color-mix()`, keeping the hue. `@supports` carries a flat fallback for engines without
`color-mix()` — it must stay a feature query, because a duplicate `color:` on the same rule
is stripped by the CSS minifier.

Measured after the fix: disciplines 8.7–10.2:1 (dark) and 5.5–6.4:1 (light); clans
10–12:1 and 6–9:1.

`renderPowerCard.ts` draws to canvas and cannot use the class, so it mirrors the same
maths in `sigilColor()`.

**Do not use `artGradient()` behind a small sigil.** Its end stops are the fixed
`colorDark`, so it stays dark on the light theme while `.sigil` flips the glyph to
near-black — dark on dark. The big discipline cards are fine because they are tall enough
that the glyph sits over the light middle of the gradient; anything small (`.clan-medallion`,
`.disc-mini-art`) uses the theme-following tinted card surface instead.

## CSS (`src/css/main.css`)

Custom gothic styles on top of Bootstrap's grid + utilities. CSS custom properties (`--void`, `--parchment`, `--gold`, `--tool-disciplines`, `--tool-my-powers`, `--card-color`, `--card-glow`, etc.) drive both dark (default) and light themes via `[data-theme="light"]` overrides.

Relevant classes:

- `.app-navbar` / `.app-menu-toggler` / `.app-menu-overlay` / `.app-menu-panel` / `.app-menu-item` / `.app-menu-badge` — custom top bar and overlay menu
- `.clan-sigil` / `.clan-medallion` / `.clan-nickname` / `.clan-verbs` / `.clan-verb` / `.clan-section` / `.clan-section-title` / `.clan-disc-chip` / `.clan-trait` / `.clan-trait-name` — Clans tool
- `.tool-card` / `.tool-card-head` / `.tool-card-icon` / `.tool-card-title` / `.tool-card-badge` / `.tool-card-desc` — Home tool cards (accent driven by `--tool-accent`). `.tools-grid` is one card per row at every width.
- `.discipline-card` / `.power-card` — cards driven by `--card-color` and `--card-glow`
- `.star-btn` / `.star-btn--filled` — favourites star button (top-right on the power art).
  The two states differ by **shape as well as colour** — a hollow outlined star when off, a
  solid gold one with a glow when on — because a colour-only shift was hard to tell apart
  and unreadable for anyone who cannot separate the two hues. The glyph is an inline SVG
  whose `fill` toggles between `none` and `currentColor`; the button carries `aria-pressed`.
  The visible chip stays 28px but `::before { inset: -8px }` gives it a 44px hit area
- `.share-btn` / `.share-btn--detail` / `.share-btn-spinner` — Share button + loading spinner (top-left on the power detail art)
- `.disc-group-icon` — discipline icon in MyPowersView
- `.power-detail-card` / `.pst` — power detail view
- `.settings-section` / `.settings-option` / `.ornament-divider` — settings page

`--card-color` and `--card-glow` are injected inline from Vue; `--tool-accent` is set inline per tool card while the underlying accent value is read from the theme vars `--tool-disciplines` / `--tool-clans` / `--tool-my-powers`.

## PWA / Home-screen install (`vite.config.ts` + `index.html`)

Generated by `vite-plugin-pwa` (workbox `generateSW`). Precaches JS/CSS/HTML/SVG/PNG/WOFF/WOFF2 and runtime-caches Google Fonts stylesheets + font files.

- Manifest `name` **and** `short_name` are both set to `Vampire Toolkit`. iOS and Android both prefer `short_name` for the home-screen shortcut label — if `short_name` is shorter than `name` (as it was originally, `"Vampire"`), the shortcut reads as that shorter one. Home-screen labels are visually truncated to ~11-12 characters by both OSes even when the full name is stored.
- `index.html` adds the iOS-specific meta tags: `apple-mobile-web-app-capable`, `apple-mobile-web-app-title` (pins the label to `Vampire Toolkit` on iOS Safari), and `apple-mobile-web-app-status-bar-style="black-translucent"`.
- The `base` in `vite.config.ts` switches between `./` (local) and `/vampire-toolkit/` (GitHub Actions build), which is what feeds `start_url` and `scope` in the manifest.

---

## Rules

These are non-negotiable for any change to the codebase.

### Accessibility (a11y)

1. **Every interactive element must be keyboard-operable.** Buttons/anchors handle this natively; when a non-interactive element (`div`, `article`) acts as a control, add `role="button"`, `tabindex="0"`, and Enter+Space `@keydown` handlers (see `discipline-card` in `DisciplinesView.vue` for the pattern).
2. **Icons must be labelled.** Decorative SVGs get `aria-hidden="true"`. Meaningful icon-only buttons get an `aria-label` (see `.app-menu-toggler` and `.star-btn`).
3. **Never remove focus outlines** without providing a replacement. `:focus-visible` is styled explicitly where the default outline is suppressed (e.g. `.app-menu-toggler`, `.tool-card`).
4. **Color contrast must meet WCAG AA** (4.5:1 for body text, 3:1 for large/bold text ≥ 18.66px). Verify accents against **both** dark and light theme backgrounds. When an accent is too light for a badge with white text, give the badge a stable dark background (`--blood`) rather than reusing the accent.
5. **Overlays are dismissible.** The menu closes on Escape, click outside, and route change. Body scroll is locked while the overlay is open and restored on close.
6. **ARIA state matches reality.** `aria-expanded`, `aria-controls`, and dynamic `aria-label` on the hamburger toggler must stay in sync with the menu state. `active` classes on nav items must reflect the current route.
7. **Touch targets ≥ 44×44 CSS pixels.** The menu items enforce `min-height: 52px`; smaller controls must not fall below the 44px floor.

### Translations

1. **No hardcoded UI strings in views.** Every user-visible label, placeholder, aria-label and empty-state message comes from `useI18n().t.value.<section>.<key>`.
2. **All three languages stay in sync.** When adding a UI string, add it to `es`, `en` **and** `ca` blocks in `useI18n.ts` in the same commit. TypeScript will fail the build if `en` or `ca` drift from `es`'s shape.
3. **Discipline, power and clan content lives in the overlays.** Whenever `data.ts` gets a new discipline or power, add matching entries with the same `id` key to `translations-en.ts` **and** `translations-ca.ts`; whenever `clans.ts` changes, do the same in `translations-clans-en.ts` **and** `translations-clans-ca.ts`. Missing keys silently fall back to the Spanish source — treat that as a bug, not a feature. Clan names that differ by language (`El Ministerio` / `The Ministry` / `El Ministeri`, `Hécata` / `Hecata`) also need `clanes` overrides in the discipline overlays.
4. **Language `auto` order matters.** `CATALAN` (`/^ca\b/i`) is checked before the general `IBERIAN` regex; keep it that way so `ca-*` browsers don't fall into the `es` bucket.
5. **To add a language:** create `translations-<lang>.ts` mirroring the EN structure, add the code to `Lang`/`VALID_LANGS`/`resolvedLang` in `useSettings.ts`, add a `<lang>` dict block plus `lang<Lang>` label to every language block in `useI18n.ts`, wire the overlay in `useData.ts`, and add the option (alphabetically after `auto`) to `SettingsView.vue`.

### Responsive

1. **Mobile-first.** Base styles target small screens; wider layouts are additive via `@media (min-width: …)` or Bootstrap's `sm/md/lg/xl` utility classes. The `.tools-grid` and `row row-cols-2 row-cols-sm-3 …` patterns show the direction.
2. **No horizontal scroll on the page body.** `html`/`body` set `overflow-x: hidden`. Wide content (long dice-pool strings, tables) scrolls inside its own container instead of pushing the page.
3. **Use `clamp()` for headline sizes** so they scale between mobile and desktop without a wall of media queries (see the home subtitle and the `page-title-main`).
4. **Test at ≥ 320px width.** The menu overlay, tool cards, settings section, and search input must all remain usable at that width — nothing gets cut off, nothing overlaps.
5. **The overlay menu is full-screen** on every viewport and its `.app-menu-panel` caps at `28rem` so it stays comfortable on wide displays.
6. **Both themes must be readable.** Any new component defines its colours through the theme CSS vars (or per-theme values in `:root` / `[data-theme="light"]`) — never hardcode a hex that only works in one theme.

---

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

# Regenerate PWA icons from public/favicon.svg (only when the favicon changes)
node scripts/generate-icons.mjs
```
