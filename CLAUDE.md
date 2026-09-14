# Vampire Toolkit — Vampire: The Masquerade 5th Edition

A toolkit to speed up **Vampire: The Masquerade 5th Edition** tabletop sessions. Pure static PWA with no backend: browse the 12 disciplines and ~152 powers, look up the 14 clans, and save the powers your character has for quick lookup at the table. No account required, works offline once loaded.

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
    ├── data.ts                  # DISCIPLINES_DATA: 12 disciplines and ~152 powers (Spanish source)
    ├── translations-en.ts       # English translations overlay for all disciplines and powers
    ├── translations-ca.ts       # Catalan translations overlay for all disciplines and powers
    ├── icons.ts                 # DISCIPLINE_ICONS: inline SVGs per discipline
    ├── helpers.ts               # levelDots, disciplineById, powerById, factHead, shortCost, shortDicePool, shortDuration, artGradient, colorGradient, parseAmalgama
    ├── renderPowerCard.ts       # Canvas 2D renderer — draws a power card and returns a PNG Blob for sharing
    ├── composables/
    │   ├── useFavorites.ts      # My Powers singleton state — persists in localStorage
    │   ├── useSettings.ts       # Theme (auto/dark/light) and language (auto/es/en/ca) preferences
    │   ├── useI18n.ts           # UI string translations based on resolved language
    │   ├── useData.ts           # Localized discipline/power data — applies EN or CA overlay when needed
    │   └── useMyPowers.ts       # Saved powers grouped by discipline + the flat order PowerView swipes through
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
  Every id resolves, `oblivion` included, so all of them are ordinary links. (Until the
  Players Guide powers landed, Oblivion had no page and `ClanView` drew it as a dashed
  non-interactive card; that fallback, `.disc-mini-card--plain` and `t.clan.oblivionNote`
  are all gone.)
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

## Swiping between powers (`PowerView.vue` + `composables/useMyPowers.ts`)

On the power sheet a horizontal drag steps to a sibling power, carousel-style: **dragging
left pulls the next power in, dragging right goes back**. The list it steps through is the
one the reader came
from — `discipline.powers` in `data.ts` order, or the flattened My Powers list when the route
carries `?from=my-powers`. It stops at both ends rather than wrapping.

- The ordering lives in `useMyPowers()` because `MyPowersView` renders the groups and
  `PowerView` walks the flattened version; if they disagreed, swiping would skip powers.
- A drag counts only past `SWIPE_MIN_PX` (60) **and** when the horizontal component beats
  the vertical by `SWIPE_SLOPE` (1.4). Without the slope test a diagonal flick during a
  normal scroll navigates away. The handlers are `.passive` and never `preventDefault`, so
  vertical scrolling is untouched.
- `ArrowLeft` / `ArrowRight` do the same thing, so the gesture is not the only way in.
  They keep the *opposite* mapping to the drag on purpose — ArrowRight moves forward,
  which is what a keyboard expects, while a drag moves the content, not the cursor.
- Un-starring the power you are reading drops it out of the My Powers list; `siblings` then
  falls back to the discipline order instead of going dead.

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
- Header: linear gradient using `discipline.color`/`colorDark`, level dots, big icon, discipline pill.
- Body: title with a coloured glow shadow, stats table, ornament divider, description, optional amalgama box, "Vampire Toolkit" footer.
- Colours are pinned to the dark palette (`#0d0b14`, `#d4c9b8`, `#c9a84c`, …) regardless of the user's theme so the shared image always looks the same.
- Text wrapping is done by `wrapText(ctx, text, maxWidth)` — greedy word-fit with paragraph breaks on `\n`.

`sharePower()` builds a `File` from the blob and calls `navigator.share({files, title, text})`. `AbortError` (user dismisses the share sheet) is swallowed; other failures show `t.power.shareError` via `alert`.

Requires a **secure context (HTTPS or `localhost`)** — the Web Share API is gated by browsers.

## Internationalisation (`composables/useI18n.ts` + `src/translations-en.ts` + `src/translations-ca.ts`)

UI strings (nav labels, section headings, field labels) are translated in `useI18n.ts` and selected via `resolvedLang`. The Spanish block is the shape source (`typeof es`) — every other language must match its keys exactly, which the TypeScript compiler enforces.

Power and discipline content (names, descriptions, costs, dice pools, durations) is translated in `translations-en.ts` and `translations-ca.ts`. The `useData.ts` composable applies the appropriate overlay over the Spanish base data when `resolvedLang === 'en'` or `resolvedLang === 'ca'`. All views consume `useData()` instead of importing `DISCIPLINES_DATA` directly.

## Data (`src/data.ts`)

Sources: the official Spanish PDFs *Vampiro La Mascarada 5 edición - Disciplinas.pdf*
(corebook Disciplines) and *…Disciplinas 2.pdf* (the Players Guide chapter, which adds 39
powers to the nine existing Disciplines plus the whole **Oblivion** Discipline, 18 powers).
The Players Guide's Blood Sorcery Rituals and Oblivion Ceremonies are **not** in the app —
the data model has no place for them yet.

`DISCIPLINES_DATA.disciplines` is an array where each discipline has:

```ts
{
  id: "animalismo",           // slug used in routes
  name: "Animalismo",
  description: "...",
  tipo: "Mental",             // Mental | Físico | Social — **empty** for Blood Sorcery and
                              // Thin-Blood Alchemy, whose book "types" (Hechicería,
                              // Especial…) only restated the discipline name. Every reader
                              // must cope with `''`: the badge, the card aria-label, the
                              // clan mini-card meta and the power sheet's Tipo row.
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
  amalgama?: "..."            // optional — the *discipline and dot rating*, e.g. "Ofuscación 2"
}
```

`amalgama` is a real field in **all three** languages and renders as the linked note box in
`PowerView`. It used to be inline in the Spanish description as a `(Amalgama: X)` prefix and
duplicated in the EN/CA note box; that is fixed — never put it back in the description.

### Normalised `cost` / `duration`

These two fields are **not** free prose — they come from a fixed short vocabulary so the
grid cards stay one line and the detail sheet never grows past two. Costs are
`Ninguno` · `1 Enardecimiento` · `2 Enardecimientos` · `3 Enardecimientos` · `1+ …` ·
`1-3 …` · `0 o 1 …` · `+1 Enardecimiento` · `El del Poder base`; durations are
`Pasiva` · `Una escena` · `Un turno` · `Una noche` · `Indefinida` · `Permanente` ·
`A voluntad` · `La del Poder base` · `N/A` and a handful of one-offs (`Un ataque`,
`Una acción`, `Una alimentación`, `Un uso`, `Un día o más`, `Hasta la muerte`, …).

Any nuance that survived the squeeze goes in a **trailing parenthetical** —
`1 Enardecimiento (ninguno con el famulus)`, `Una escena (o hasta cumplir la orden)`,
`Una noche (vampiros: hasta alimentarse)`. `factHead()` in `helpers.ts` strips it, which
is what `shortCost`/`shortDuration` hand to the cramped grid cards; `PowerView` and
`renderPowerCard` print the whole string.

### `dicePool` on the grid cards

`shortDicePool(pool)` derives the card line from the full `dicePool`, by structure rather
than by vocabulary: it cuts at the opposed pool (` contra ` / ` vs. ` / ` vs `), then the
parenthetical, then an alternative pool (`, ` / ` o ` / ` or `). **Attribute and skill both
stay** — "Carisma + Animalismo" is the roll, and half of it is not; only what the player
does not need mid-roll comes off; skill names are left exactly as written. `N/A` returns
`null` and the row disappears (37 of the 95 powers need no roll).

Four pools were reworded so they read the same way as the rest: `split-second` and
`lightning-strike` say `Reserva de … normal` (Spanish said "Pool" in one and not the other),
and `terminal-decree` / `mass-manipulation` reuse `Como el Poder base` with the detail in a
parenthetical. The longest pool left is `Resolución + Hechicería de Sangre`, which takes 3
of the card's 5 reserved fact lines at the narrow breakpoints — the reason `.power-fact-val`
clamps at 3 and not 2.

Rules for new or edited powers:

1. **Reuse an existing phrase** rather than inventing a synonym — "Una escena o hasta que
   termine voluntariamente", "No más de una escena" and "Una escena, a menos que uno
   quiera terminar antes" all collapsed to `Una escena` on purpose.
2. Keep the head under ~20 characters (Spanish), and put the qualifier in `(…)`. This is
   load-bearing, not cosmetic: the card reserves 4 fact lines, so a head that wraps where
   another field already wraps overflows the reserve and breaks the equal card heights.
   `1 Enardecimiento (por escena)` and `1 minuto (por Enardecimiento; …)` are written that
   way for exactly this reason — the qualifier used to sit in the head and cost a line.
3. `N/A` means "this power has no duration"; it is the only value the views hide.
4. The EN and CA overlays carry the same shape — same head, same parenthetical.

## Icons (`src/icons.ts` + `src/clan-icons.ts`)

Both icon sets are **traced from the official sheet, not drawn freehand**. Pipeline for
each glyph: crop it out of the sheet → upscale the *source* crop with lanczos (thresholding
at native resolution leaves stair-stepping) → threshold → vectorise with potrace → normalise
into `0 0 100 100` through a wrapping `<g transform="translate(tx,ty) scale(s)">`. If a glyph
ever needs redoing, re-trace it — do not redraw it by hand.

`DISCIPLINE_ICONS` comes from the sheet's *"LEYENDA DE LAS DISCIPLINAS"* panel: a filled
diamond with the glyph knocked out via `fill-rule="evenodd"`. Notes:

- **Obfuscation's badge is blank on the sheet** — an empty diamond. That is the symbol.
- **Thin-Blood Alchemy's symbol is not in the discipline legend** — it is in the legend of
  the *Hoja de resumen de los descastados*, as an hourglass in the same diamond frame. That
  one is now traced (`alchemy`, which replaced the placeholder `flask` key and its
  hand-drawn artwork).
- The Oblivion glyph is now in use: `oblivion` is a real discipline (`iconType: 'olvido'`).
- The `iconType` keys are unchanged (`wolf`, `crown`, …) so `data.ts` still addresses icons
  by the same key, even though the keys describe the old artwork rather than the new.

`CLAN_ICONS` is keyed by clan `id` (no indirection) and holds the 14 clan sigils from the
clan bands of the same sheet. `clan-icons.ts` also exports `THIN_BLOOD_ICON` and
`THIN_BLOOD_NAMES`: the Thin-Bloods have a mark on the *descastados* sheet but are not a
clan (no `clans.ts` entry, no `/clan/…` page), and they are the only name in any
Discipline's `clanes` list that is not a clan. `useClans().clanSigil(name)` resolves both
cases — it returns the clan alongside the sigil only when there is one, and `DisciplineView`
renders a chip without a clan as dashed and `disabled`. **Adding a language means adding
that language's spelling to `THIN_BLOOD_NAMES`.**

`THIN_BLOOD_ICON` is the one glyph built from measurements instead of traced, and the
comment above it says why: the source is a screenshot whose rescaling flattened the
circle's right edge, and the mark is simple enough (a circle, a concentric circle and a
vertical diameter) to rebuild exactly from measurements taken off that same image. Every
other glyph in the app is a trace, and re-tracing this one from a clean source would be an
improvement. When re-tracing those, the crop window must stop just short
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
- `.clan-sigil` / `.clan-medallion` / `.clan-nickname` / `.clan-verbs` / `.clan-verb` / `.clan-section` / `.clan-section-title` / `.clan-trait` / `.clan-trait-name` — Clans tool
- `.tool-card` / `.tool-card-head` / `.tool-card-icon` / `.tool-card-title` / `.tool-card-badge` / `.tool-card-desc` — Home tool cards (accent driven by `--tool-accent`). `.tools-grid` is one card per row at every width.
- `.discipline-card` / `.power-card` — cards driven by `--card-color` and `--card-glow`
- `.disc-clans` / `.disc-clan-sigil` — the in-clan clans on a discipline card, drawn as the
  clans' own traced sigils instead of a wide uppercase pill of names (Dominate lists six).
  They are painted `--parchment-dim`, not the clan colour: at 16px a hue reads as noise, and
  the neutral clears 3:1 on both themes. `discipline.clanes` stores display *names*, so
  `useClans().clanIdByName()` resolves them; anything that is not a clan (Thin-Blood Alchemy
  lists "Sangre Débil") falls back to a `.badge-clanes` text chip. The row is `aria-hidden` —
  the names are in the card's `aria-label`
- `.clan-chip` (+ `--plain`) / `.clan-chip-sigil` — the same clans on the discipline *page*,
  as links to each clan's sheet: sigil, name, the clan's own colour in the border and glow.
  The sigil carries `.sigil`, never an inline colour. A name with no clan behind it gets a
  dashed, `disabled` chip rather than a link that goes nowhere
- `.power-dot` / `.power-level-dots-card` — **the one and only level indicator.** The grid
  card used to carry a `NIVEL n` badge *and* the dots, the detail art a `discipline · level`
  pill *and* the dots; the dots won because they are V5's own notation for a rating and need
  no translated string on the art. They are painted in `--gold` / `--gold-dim`, not in the
  discipline accent: as a meaningful graphical object they owe 3:1, and 6 of the 11 accents
  land between 2.26:1 (Potencia `#9a1a1a`) and 2.84:1 on the dark card — on art mixed from
  that same accent. `renderPowerCard` mirrors both decisions. Because the art blocks are
  `aria-hidden`, the level lives in the card `aria-label` and, on the detail page, in a
  `.visually-hidden` span after the `<h1>`
- `.power-fact` / `.power-fact-icon` / `.power-fact-val` — the cost, dice pool and duration
  lines on a grid card. A word label does not fit: at 320px a card has ~122px of text and
  `Coste: ` alone costs a third of it, so a gold drop (cost), d10 (dice pool) and clock
  (duration) carry the label and the real wording stays in a `.visually-hidden` span.
  `.power-fact-val` clamps at two lines
- `.power-card-title` / `.power-facts` / `.power-card-desc` — **every power card is the same
  height.** Bootstrap only equalises the cards within one wrapped row, so each block instead
  takes a fixed `height` (not `min-height`) of a set number of lines: 2 for the title, 4 for
  the facts, 3 for the description. The description does **not** use `mt-auto`, so it starts
  at the same y on every card rather than at the bottom of whatever slack the row had.
  The fact ceiling is measured with the real font metrics across es/en/ca from 320 to
  1200px: cost + dice pool + duration never total more than 4, one of the three may wrap,
  never two. Several cost and duration strings were reworded to hold it (see the
  cost/duration section below). The title's 2 is a deliberate trade — a 3-line reserve left
  a visible hole above the cost line on nearly every card — so a longer name is ellipsised
  instead: 15 of the 441 names in es/en/ca at 320px, 2 at 1200px, "Coaccionar el
  Temperamento Bestial" being the one that never fits. The title is vertically centred in
  its box, so a one-line name splits the leftover half-line evenly.
  **Sizes are load-bearing**: `--card-title-size`, `--card-meta-size` and
  `--card-desc-size` in `:root` are the one type scale for both card grids (the discipline
  cards read them through `.disc-card-title` / `.disc-card-desc` / `.disc-card-meta`).
  Raising one, or lengthening a name, cost, pool or duration, means measuring both ceilings
  again before shipping
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
5. **To add a language:** create `translations-<lang>.ts` mirroring the EN structure, add the code to `Lang`/`VALID_LANGS`/`resolvedLang` in `useSettings.ts`, add a `<lang>` dict block plus `lang<Lang>` label to every language block in `useI18n.ts`, wire the overlay in `useData.ts`, add that language's spelling of the Thin-Bloods to `THIN_BLOOD_NAMES` in `clan-icons.ts`, and add the option (alphabetically after `auto`) to `SettingsView.vue`.

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
