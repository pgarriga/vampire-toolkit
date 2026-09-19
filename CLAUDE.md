# Vampire V5 Toolkit — Vampire: The Masquerade 5th Edition

A toolkit to speed up **Vampire: The Masquerade 5th Edition** tabletop sessions. Pure static PWA with no backend: browse the 12 disciplines and 152 powers, look up the 14 clans, read up on the 9 Attributes and 27 Skills, and keep a sheet per character with the powers they know. No account required, works offline once loaded.

## Stack

- **Vue 3** + **TypeScript** — SFCs with Composition API (`<script setup>`)
- **Vue Router 5** with hash history (`#/route`)
- **Bootstrap 5** — responsive grid and CSS utilities. **CSS only**: `main.ts` does not import
  `bootstrap.bundle.min.js`. Every overlay in the app (menu, dropdown) is hand-written, so
  nothing used it, and dropping the import cut 79 kB from the bundle. Do not add `data-bs-*`
  attributes or Bootstrap JS components without re-adding the import.
- **Vite 8** — bundler and dev server
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
    ├── main.ts                  # Imports Bootstrap CSS (no JS bundle), main.css, mounts app
    ├── App.vue                  # Sticky navbar + overlay menu + <router-view> + <AppFooter>
    ├── router.ts                # Hash routes (see Routes below)
    ├── types.ts                 # Interfaces: Discipline, Power, DisciplinesData, Clan, Character
    ├── data.ts                  # DISCIPLINES_DATA: 12 disciplines and 152 powers (Spanish source)
    ├── clans.ts                 # CLANS_DATA: the 14 clans (Spanish source)
    ├── translations-en.ts       # English overlay for disciplines and powers
    ├── translations-ca.ts       # Catalan overlay for disciplines and powers
    ├── translations-clans-en.ts # English overlay for clans
    ├── translations-clans-ca.ts # Catalan overlay for clans
    ├── icons.ts                 # DISCIPLINE_ICONS: traced diamond badge per discipline
    ├── clan-icons.ts            # CLAN_ICONS + THIN_BLOOD_ICON / THIN_BLOOD_NAMES
    ├── nav-icons.ts             # NAV_ICONS: stroked line icons for the menu and home cards
    ├── helpers.ts               # levelDots, disciplineById, powerById, factHead, shortCost,
    │                            #   shortDicePool, shortDuration, artGradient, colorGradient, parseAmalgama
    ├── renderPowerCard.ts       # Canvas 2D renderer — draws a power card and returns a PNG Blob
    ├── components/
    │   ├── AppFooter.vue        # Site footer — notice + version pill
    │   └── ClanPicker.vue       # The 14 clan sigils as a single-choice grid with search
    ├── composables/
    │   ├── useCharacters.ts     # Characters: storage, CRUD, powers, import/export
    │   ├── useCharacterPowers.ts# One character's powers grouped by discipline + the flat swipe order
    │   ├── useSettings.ts       # Theme (auto/dark/light) and language (auto/es/en/ca) preferences
    │   ├── useI18n.ts           # UI string translations based on resolved language
    │   ├── useData.ts           # Localized discipline/power data — applies EN or CA overlay
    │   └── useClans.ts          # Localized clan data + clanSigil / clanIdByName
    ├── css/
    │   └── main.css             # Custom gothic styles + Bootstrap overrides + light theme vars
    └── views/
        ├── HomeView.vue         # Landing page — Compendium section + My Characters section
        ├── DisciplinesView.vue  # Discipline grid with search
        ├── DisciplineView.vue   # Power grid for a discipline (reference only — no editing)
        ├── PowerView.vue        # Power detail card + mobile Share button
        ├── ClansView.vue        # Clan grid with search
        ├── ClanView.vue         # Clan detail — description, in-clan Disciplines, Bane, Compulsion
        ├── CharacterCreateView.vue # Two-step wizard: name + generation, then clan
        ├── CharacterView.vue    # Character sheet — identity, actions, powers by discipline
        ├── CharacterAddView.vue # Power picker: choose a Discipline, then tick its powers
        └── SettingsView.vue     # Theme, language, cache and repository info
```

## Routes

| Hash | View | Description |
|------|------|-------------|
| `#/` | `HomeView` | Landing page — Compendium cards + one row per character |
| `#/disciplines` | `DisciplinesView` | Grid of all 12 disciplines with search |
| `#/discipline/:id` | `DisciplineView` | Power grid for the discipline |
| `#/discipline/:id/power/:powerId` | `PowerView` | Detail card for a specific power |
| `#/traits` | `TraitsView` | Core Traits — the 9 Attributes, then the 27 Skills |
| `#/trait/:id` | `TraitView` | One Attribute or Skill in full |
| `#/clans` | `ClansView` | Grid of all 14 clans with search |
| `#/clan/:id` | `ClanView` | Clan detail — description, in-clan Disciplines, Bane, Compulsion |
| `#/character/new` | `CharacterCreateView` | Create a character: name + generation, then clan |
| `#/character/:id` | `CharacterView` | Character sheet and their powers |
| `#/character/:id/add` | `CharacterAddView` | Add or remove that character's powers |
| `#/settings` | `SettingsView` | Theme, language, cache and repository info |

Anything unmatched redirects to `/`. `#/my-powers` is **gone** — powers belong to a
character now, so there is no global saved-powers screen.

## Navigation (`App.vue`)

Custom sticky top bar (56px) — Bootstrap's navbar collapse is not used:
- Left: "Vampire V5 Toolkit" brand — clicking it goes home
- Right: hamburger button (always visible, on every viewport)
- Clicking it opens a full-screen overlay menu **laid out like the home page**: a plain
  Home item, then a **Compendium** section (Clans, Disciplines, Core Traits) and a **My Characters**
  section listing every character by name with their own clan sigil, then the create-
  character row, then a divider and **Settings** last
- Section headings reuse the home page's look (`.app-menu-heading` ≈ `.home-section-title`).
  A `role="menu"` accepts only `menuitem` children, so each section is a `role="group"`
  carrying the name and the visible heading is `aria-hidden`
- Menu and home-card icons both come from `src/nav-icons.ts`, so a tool's card always
  shows the same icon as its menu entry
- Menu closes on route change, on Escape, and on click outside the panel
- Body scroll is locked while the menu is open
- `.app-menu-panel` and the home page share `--content-width` (44rem) and the same side
  padding, so the menu column lines up with the page behind it at every width. The type
  steps up at `min-width: 768px` — a media query, not `clamp()`, because the panel stops
  growing at the cap while a vw-driven size would not

## Characters (`composables/useCharacters.ts`)

The app's writable half. Everything a player edits lives on a character; Disciplines and
Clans are read-only reference.

```ts
{
  id: string            // crypto.randomUUID(), with a fallback outside secure contexts
  name: string
  clanId: ClanIconType  // one of the 14 clans
  generation?: number   // 1–16; optional, see below
  powers: string[]      // "disciplineId:powerId"
  createdAt: number
}
```

**One localStorage entry per character**, keyed `v5-character:<id>`, holding that
character's whole JSON and nothing else. The list is rebuilt by scanning for the prefix,
so there is no index key that could fall out of step with the entries — and a write only
ever touches its own character's key. `v5-active-character` holds the id of the last sheet
opened, which is what the power detail's swipe list follows.

- `sanitize()` re-checks every field on load: storage is user-editable, survives releases,
  and a character is now a file that can be hand-edited and put back.
- **Generation is optional on purpose.** Characters created before the field existed have
  none, and nothing backfills one — the sheet just omits the row until you edit it, where
  the select offers V5's standard 13th for you to confirm by saving. Valid range is 1–16:
  the 1st is Caine, the 3rd the Antediluvians, and 14th–16th are the Thin-Bloods.
- `GENERATIONS` and `DEFAULT_GENERATION` are exported so the create and edit forms offer
  exactly that range.

### Migrations and dead keys

Runs at module load, oldest layout first:
- `v5-characters` (the single-array layout) is split into one entry per character, then removed.
- `v5-my-powers` and `v5-mis-poderes`, the global saved-powers lists from before characters
  existed, are **deleted outright** every load — not migrated. Nothing reads them; they are
  named only so they can be removed, and the deletion repeats on every load so a browser
  that skipped the release that dropped them cannot keep a stale key.

### Powers belong to a character, explicitly

`togglePower(characterId, disciplineId, powerId)` and `hasPower(characterId, …)` both take
the character. They used to write to whichever character was "active", which meant a star
on a Discipline page landed on a sheet the reader could not see from there. Powers are now
only ever added from inside a sheet, so the owner is always known at the call site.

`useCharacterPowers(character)` takes the character as a ref rather than reading a global,
so a view can never render one character's sheet while listing another's powers. It returns
`groupedPowers` (by discipline in `data.ts` order, sorted by level inside each group) and
`flatPowers` (what `PowerView` swipes through) — both must agree or swiping would skip powers.

### Adding and removing powers (`CharacterAddView`)

There is **no star on the Discipline or Power pages** — the compendium is reference only.
From the sheet, **+ Add** opens `#/character/:id/add`: pick a Discipline (each row shows its
type, power count and, in gold, how many the character already has), then tick its powers.
Ticking and un-ticking are the same control, so the picker is also how a power is removed.
Changes save immediately.

### Export and import

- **Export** (in the sheet's "More options" menu) writes the character's own localStorage
  entry to a file, byte for byte — a saved file and a stored character are the same JSON.
- **Load character** on the home page reads one back. `parseCharacter()` is more forgiving
  than the storage sanitiser in exactly two ways: a file with no `id` or no `createdAt` gets
  fresh ones, so a hand-written sheet loads. Everything else is rejected outright — a bad
  clan or a generation of 17 is a broken file, not a default to guess at. Note the asymmetry
  with `sanitize()`, which only *drops* an invalid generation: dropping is right for storage,
  where rejecting would cost the whole character, but on load it would silently lose what the
  file said.
- A file whose id matches a character already present **replaces** it — that is what restoring
  a backup means — so the home page confirms before importing one.

### The character sheet (`CharacterView`)

- Header: clan medallion, name, then clan and generation on one line (`.clan-line`).
- Actions sit under the name, right-aligned, as small chips: **Edit** and **More options**
  (a dropdown holding Export and Delete). The dropdown closes on Escape, on click outside
  and on leaving the sheet, and keeps `aria-expanded`/`aria-controls` in sync. Delete does
  not confirm inside the menu — choosing it closes the dropdown and turns the whole row into
  the confirmation, because a destructive action should not be confirmed somewhere that
  dismisses itself.
- Editing swaps the header for a panel with the name field, the generation select and a
  `ClanPicker`. Changing clan leaves the powers alone: V5 characters routinely learn powers
  outside their clan.
- Powers are grouped under a **Disciplines** heading. Each group header carries the
  discipline's rating as V5 dots (`.disc-rating`) — the count of powers the character has in
  it, capped at 5 like a real rating, with the exact number in a `.visually-hidden` label so
  nothing is lost past the fifth dot.

## Core Traits (`src/traits.ts` + `src/trait-icons.ts` + `composables/useTraits.ts`)

The third leg of the compendium, alongside Disciplines and Clans, and read-only like
them. Source: the official Spanish PDF *Vampiro La Mascarada 5ª edición - Rasgos
Centrales.pdf*. `TRAITS_DATA.traits` is one flat array of 36 entries — 9 Attributes and
27 Skills — because the two are the same shape and only differ in what they carry:

```ts
{
  id: 'latrocinio',
  name: 'Latrocinio',
  kind: 'skill',              // attribute | skill
  category: 'fisico',         // fisico | social | mental — the sheet's three columns
  description: '...',
  dots: [ ... ],              // the book's five readings of the score. ALWAYS five.
  note?: '...',               // what the score feeds outside its own rolls
  specialties?: [ ... ],      // Skills only
  combos?: [ { attributeId, example } ],  // Skills only, always three
  aka?: [ 'Crimen', 'Seguridad' ],        // searched, never rendered
}
```

- **Follow the book closely, but reword it.** The content tracks *Rasgos Centrales*
  faithfully — same reading of each score, same examples (the kg figures on Strength,
  the Winchester line, the Gangrel packs), same level of detail — while the phrasing is
  ours. It is a paraphrase, not a transcription, and that is the line to hold in all
  three languages: **a new trait says what the book says, in words that are not the
  book's.** The same applies to `data.ts`'s powers, and for the same reason the footer
  gives: this supports play at the table, it does not replace the manual.
- **Names are the ones the corebook prints**, so `Latrocinio` not "Crimen", `Pelea con
  Armas` not "Armas cuerpo a cuerpo", `Consciencia` not "Alerta", `Ciencias` not
  "Ciencia". The wordings a player may remember instead live in `aka`, which
  `TraitsView`'s search matches and no view draws. **Adding a Skill means deciding its
  printed name first and pushing every alternative into `aka`** — not renaming the id,
  which is the route and the overlay key.
- **`combos` stores the attribute's id, not its name.** The overlays therefore only
  translate the `example`; the attribute's own entry owns its name, so a roll can never
  read "Dexterity + Latrocinio". It also means an overlay cannot invent a pairing or
  reorder them — `useTraits` maps over the *base* combos and looks the example up.
- **An Attribute's rolls are the Skills' `combos` read backwards** (`skillsUsing()`), not
  a second list. One source, so `#/trait/destreza` and `#/trait/sigilo` cannot disagree
  about whether Dexterity + Stealth is a roll. Composure pairs with no Skill in the
  table the data was built from, so its page simply has no rolls section — that is the
  `v-if`, not a bug.
- `specialties` carries the book's example lists, which are already explicitly
  non-exhaustive there; they are proper nouns of the system, not prose.
- `dots` is always exactly five entries and the views index it by position, so the dot
  count is `i + 1`. A trait with four would silently draw a four-dot rating.

### Icons — three, not thirty-six

`TRAIT_ICONS` is keyed by **category**, not by trait. There is no symbol for a Skill on
the official sheet the way there is for a Discipline or a Clan, and drawing 36 glyphs
freehand would break the rule that every mark in this app is traced. What the reader
needs to tell apart at a glance is which column a trait sits in, and that is three
marks: a claw for the body, a masquerade mask for the Social column, an open grimoire
for the Mental one.

**They are in the sigil register, not the nav one.** They sit where a clan sigil or a
discipline badge sits, so they are built the way those are — `viewBox="0 0 100 100"`,
one `currentColor` path, `fill-rule="evenodd"`, the same filled diamond frame
`DISCIPLINE_ICONS` carries, with the glyph knocked out of it. They carry `.sigil` over
the tinted `.trait-card-art` surface like every other glyph — **never an inline colour**.

An earlier set was drawn as thin 24x24 strokes like `NAV_ICONS` and was rejected on
sight: perfectly legible, but line art is the language of this app's *chrome*, so next
to the engraved sigils it read as generic app furniture rather than as content. **A
redraw keeps the diamond and keeps the glyph filled.**

The frame is authored rather than traced, since there is nothing to trace for it. Its
one trap is that a diamond pinches at top and bottom, so a tall narrow glyph bursts out
of it — the alchemical Salt and Mercury marks were tried and both spilled past the
frame, and the first claw and grimoire had to be pulled in at the corners. Keep a glyph
wide and centred on the waist of the diamond, and check it at 80px where the overflow
shows.

### Colour

`--trait-fisico` / `--trait-social` / `--trait-mental`, defined per theme. Same rule as
the clan palette: saturated mid-tones, used for sigils, the medallion tint and card
edges only. The Attributes a Skill rolls with (`.trait-card-meta`) are `--gold`, and the
dot-level text is `--parchment-dim` — a column accent would not clear 4.5:1 on both
grounds.

### The two views

- `TraitsView` (`#/traits`) — search, then **Attributes**, then **Skills**, each split
  into the sheet's three columns. A card carries the icon, the name and the blurb clamped
  to two lines, and nothing else: **the Attributes a Skill rolls with are deliberately
  not on the card**, only on the trait's own page. The search still matches name, `aka`,
  blurb, Specialties and the names of the Attributes a Skill rolls with, so typing
  "Destreza" lists every Skill that pairs with it — that last one is now a match with no
  visible cue on the card, which is the trade for the quieter grid.
- `TraitView` (`#/trait/:id`) — header (medallion, name, `Habilidad Física`, blurb,
  optional note), the five dot levels as V5 dots with the number in a `.visually-hidden`
  label, the rolls as linked rows, and the Specialties as chips. Every roll row
  navigates to the trait on the other side of the `+`.

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
  - `.sigil` — the shared rule, see Icons below — pushes the glyph to near-white on dark
    / near-black on light with `color-mix()`, keeping a hint of the clan hue. Every place
    that draws a clan glyph (`.disc-clan-sigil`, `.char-row-sigil`, `.clan-pick-sigil`,
    `.app-menu-sigil`) carries it; there is no `.clan-sigil` of its own.
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

## Swiping between powers (`PowerView.vue` + `composables/useCharacterPowers.ts`)

On the power sheet a horizontal drag steps to a sibling power, carousel-style: **dragging
left pulls the next power in, dragging right goes back**. The list it steps through is the
one the reader came from — `discipline.powers` in `data.ts` order, or the active character's
flattened power list when the route carries `?from=character`. It stops at both ends rather
than wrapping.

- The ordering lives in `useCharacterPowers()` because `CharacterView` renders the groups and
  `PowerView` walks the flattened version; if they disagreed, swiping would skip powers.
- `?from=character` resolves against the **active** character (`v5-active-character`). Opening
  a sheet is the only way to reach such a link, and the active id is persisted, so reloading
  the URL still resolves it.
- A drag counts only past `SWIPE_MIN_PX` (60) **and** when the horizontal component beats
  the vertical by `SWIPE_SLOPE` (1.4). Without the slope test a diagonal flick during a
  normal scroll navigates away. The handlers are `.passive` and never `preventDefault`, so
  vertical scrolling is untouched.
- `ArrowLeft` / `ArrowRight` do the same thing, so the gesture is not the only way in.
  They keep the *opposite* mapping to the drag on purpose — ArrowRight moves forward,
  which is what a keyboard expects, while a drag moves the content, not the cursor.
- Removing the power you are reading from the character drops it out of that list;
  `siblings` then falls back to the discipline order instead of going dead.

## Settings (`composables/useSettings.ts`)

Reactive singleton exposing `theme` (`auto | dark | light`), `lang` (`auto | es | en | ca`) and `resolvedLang` (`es | en | ca`).

- Theme `auto` follows `window.matchMedia('(prefers-color-scheme: dark)')`.
- Language `auto` detects the browser language: Catalan (`/^ca\b/i`) resolves to `ca`, other Iberian Peninsula languages (`/^(es|gl|eu|pt)/i`) resolve to `es`, everything else to `en`.
- Both preferences persist in `localStorage` (`v5-theme`, `v5-lang`).
- Theme is applied via `data-theme` attribute on `<html>`.
- `SettingsView` also has a Cache section and a Repository section that links to the GitHub repo.

### Clear cache (`SettingsView.clearAppCache`)

Unregisters every service worker registration, deletes every Cache Storage entry, then
reloads. It is the **precached app files** that go — `localStorage` is untouched, so saved
powers, theme and language survive; that is the whole point of the button and the section's
copy says so. Unregistering comes before deleting, because a live worker would refill the
caches it owns, and the reload runs from a `finally` so a partial failure still lands the
app on network files.

## Share power as image (`src/renderPowerCard.ts` + `PowerView.vue`)

`PowerView` shows a Share button in the top-right of the art header — only when `navigator.share` is available (and when `navigator.canShare({files:[…]})` accepts a small PNG probe if that API exists). Detection is done in `onMounted`; if `canShare` isn't implemented (older iOS Safari), the button is shown anyway and the actual share call is wrapped in a try/catch.

`renderPowerCard(discipline, power, strings)` draws a 1080px-wide portrait PNG on an offscreen `<canvas>` and returns a `Blob`:

- Waits for Cinzel Decorative + Cormorant Garamond via `document.fonts.load()` before measuring/drawing.
- Loads the discipline SVG icon (with `currentColor` swapped for the discipline colour) through a blob URL and paints it with a glow.
- Header: linear gradient using `discipline.color`/`colorDark`, the discipline pill top-left,
  the big icon centred, and the level label bottom-right — mirroring `PowerView`'s own art.
- Body: title with a coloured glow shadow, stats table, ornament divider, description, optional amalgama box, "Vampire V5 Toolkit" footer.
- Colours are pinned to the dark palette (`#0d0b14`, `#d4c9b8`, `#c9a84c`, …) regardless of the user's theme so the shared image always looks the same.
- Text wrapping is done by `wrapText(ctx, text, maxWidth)` — greedy word-fit with paragraph breaks on `\n`.

`sharePower()` builds a `File` from the blob and calls `navigator.share({files, title, text})`. `AbortError` (user dismisses the share sheet) is swallowed; other failures show `t.power.shareError` via `alert`.

Requires a **secure context (HTTPS or `localhost`)** — the Web Share API is gated by browsers.

## Internationalisation (`composables/useI18n.ts` + `src/translations-en.ts` + `src/translations-ca.ts`)

UI strings (nav labels, section headings, field labels) are translated in `useI18n.ts` and selected via `resolvedLang`. The Spanish block is the shape source (`typeof es`) — every other language must match its keys exactly, which the TypeScript compiler enforces.

Power and discipline content (names, descriptions, costs, dice pools, durations) is translated in `translations-en.ts` and `translations-ca.ts`. The `useData.ts` composable applies the appropriate overlay over the Spanish base data when `resolvedLang === 'en'` or `resolvedLang === 'ca'`. All views consume `useData()` instead of importing `DISCIPLINES_DATA` directly.

## Site footer (`components/AppFooter.vue`)

Rendered once in `App.vue` under the `<router-view>`, so it is the same on every page.
As the last flex child of `#app` — whose views carry `min-vh-100` and flex to fill — it
lands at the bottom of a short page rather than halfway up the screen.

It holds the **notice** (`t.footer.disclaimer`) that this is a fan-made tool which does not
replace the official books, only supports play at the table where not every player has one,
and the **version**, read from `package.json` and shown as a pill beside the brand.
`SettingsView` no longer prints the version itself; the GitHub link stays in its Repository
section rather than being repeated here.

- Nothing in it is interactive, so there is no focus order and no 44px target to hold — the
  a11y work is contrast and what gets spoken. Contrast on the footer's own `--void-card`
  ground, both themes: notice and version `--parchment-dim` 4.8:1 (dark) / 5.0:1 (light),
  brand `--gold` 8.2:1 / 5.4:1. The ornament is `--parchment-faint` at 2.1:1 and is
  `aria-hidden` for that reason.
- The **version is written twice**: `Versión 3.0.2` in a `.visually-hidden` span and
  `v3.0.2` `aria-hidden` beside it. Reading the drawn string aloud gave "v three point zero
  point two".
- The `<footer>` is a direct child of `#app` and the only one in the app, so it is the
  single `contentinfo` landmark — a view must not add one of its own.
- Responsive: the brand size is a `clamp()` so the name and the pill still share a line at
  320px (Cinzel is a wide display face), and the row is `flex-wrap` for when they cannot.
  The notice caps at `34rem` for measure inside the `--content-width` column and carries
  `overflow-wrap: break-word`, since it is translated copy and must break rather than push
  the page sideways.

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
`null` and the row disappears (62 of the 152 powers need no roll).

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
`.disc-mini-art`, `.trait-card-art`) uses the theme-following tinted card surface instead.

## CSS (`src/css/main.css`)

Custom gothic styles on top of Bootstrap's grid + utilities. CSS custom properties (`--void`, `--parchment`, `--gold`, `--tool-disciplines`, `--tool-my-powers`, `--card-color`, `--card-glow`, etc.) drive both dark (default) and light themes via `[data-theme="light"]` overrides.

Relevant classes:

- `.app-navbar` / `.app-menu-toggler` / `.app-menu-overlay` / `.app-menu-panel` /
  `.app-menu-group` / `.app-menu-heading` / `.app-menu-item` (+ `--new`) / `.app-menu-sigil` /
  `.app-menu-divider` — custom top bar and sectioned overlay menu. The gap between sections
  sits on `.app-menu-group`, never on the heading: a heading belongs to the items under it,
  and as a group's first child its own `margin-top` was being zeroed by a `:first-child`
  rule left over from the old flat layout
- `.clan-medallion` / `.clan-nickname` / `.clan-verbs` / `.clan-verb` / `.clan-section` / `.clan-section-title` / `.clan-trait` / `.clan-trait-name` — Clans tool
- `.traits-subtitle` / `.trait-section` / `.trait-section-title` / `.trait-group` — the Core
  Traits index. `.trait-section-title` ("Atributos", "Habilidades") sits a rank above the
  column headings under it, which reuse `.clan-section-title`
- `.trait-card` / `.trait-card-art` / `.trait-card-icon` (28px in a 42px badge, the ratio
  `.disc-mini-icon` uses) / `.trait-card-body` /
  `.trait-card-name` / `.trait-card-desc` — one trait on the index.
  Same anatomy as `.disc-mini-card` but with a description, so it is its own rule rather
  than that one stretched over both. Items align to the **top**, not centre: the card is
  two or three lines tall and a centred badge would float in the middle. The blurb clamps
  at 2 lines
- `.trait-note` — the Health / Willpower / free-Specialty line in a trait's header
- `.trait-levels` / `.trait-level` / `.trait-level-dots` / `.trait-level-text` — the five
  dot readings. `.trait-level-dots` is a fixed 65px (five 9px `.power-dot`s plus their
  gaps) so every row's text starts at the same x, whatever the rating
- `.trait-roll` / `.trait-roll-pool` / `.trait-roll-example` — an "Attribute + Skill" row.
  It holds 44px outright via `min-height: 52px`; unlike `.char-action` there is no
  neighbour to crowd, so the target needs no `::before`
- `.home-section` / `.home-section-title` — the home page's two sections (Compendium, My
  Characters), whose headings the overlay menu mirrors
- `.tool-card` / `.tool-card-head` / `.tool-card-icon` / `.tool-card-title` / `.tool-card-desc` — Home tool cards (accent driven by `--tool-accent`). `.tools-grid` is one card per row at every width.
- `.char-row` (+ `--new`) / `.char-row-medallion` (+ `--new`) / `.char-row-sigil` /
  `.char-row-text` / `.char-row-name` / `.char-row-meta` — a character
  on the index: clan sigil left, name and `clan · Gen. N` right. The clan colour only reaches
  the left edge, the medallion and the glow — the saturated clan palette never clears 4.5:1
  as text, so the name stays `--parchment`. The create and load rows are dashed, so they read
  as actions rather than characters
- `.char-load-error` / `.char-load-confirm` / `.char-load-name` — feedback when loading a
  character file, including the confirm before replacing an existing character
- `.discipline-card` / `.power-card` — cards driven by `--card-color` and `--card-glow`
- **The discipline card sheds its middle on phones.** Below `sm` the type badge, the clan
  name chips, the clan sigils and the resonance line are all `d-none`: at 320px the card has
  ~122px of text to share, and the badge beside the title left the name 67px — less than its
  own longest word. Name, level/power count and art stay. The badge is not stacked under the
  name either; that was tried and cost a line the card's fixed heights do not have
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
- `.power-level-badge` (+ `--detail`, `--row`) — **a power's level**, as a white "NIVEL N"
  pill. Dots used to carry this; the label replaced them by request. Ground and text are
  fixed (`#fff` / `#14101f`), not theme vars, because the art behind it is `artGradient()`,
  whose end stops are the fixed `colorDark` and so stays dark in **both** themes — a
  `--parchment` that flips to near-black on light would vanish against it. Fixed colours also
  give one look everywhere, including the picker rows that sit over the page rather than over
  art. Height is explicit with `line-height: 1`: Cormorant Garamond's tall ascender leaves
  all-caps text visibly off-centre when the box is sized by its line box instead.
  `renderPowerCard` mirrors it, centring off `actualBoundingBoxAscent` rather than
  `textBaseline: 'middle'` for the same reason. Because the art blocks are `aria-hidden`, the
  readable level stays in the card `aria-label` and, on the detail page, in a
  `.visually-hidden` span after the `<h1>`
- `.power-dot` / `.disc-rating` — V5's dot rating, now used **only** for a Discipline's rating
  on a character sheet: the number of powers the character has in it, capped at 5 like a real
  rating, with the exact count in a `.visually-hidden` label. Painted `--gold` / `--gold-dim`,
  not a discipline accent — as a meaningful graphical object it owes 3:1, and 6 of the 11
  accents land between 2.26:1 (Potencia `#9a1a1a`) and 2.84:1 on the dark surface
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
  instead: 15 of the then 441 names in es/en/ca at 320px, 2 at 1200px, "Coaccionar el
  Temperamento Bestial" being the one that never fits. That tally was taken before the
  Players Guide powers landed (456 names now) and has not been retaken — the 2-line
  reserve has not moved, so it is a floor rather than a current count. The title is vertically centred in
  its box, so a one-line name splits the leftover half-line evenly.
  **Sizes are load-bearing**: `--card-title-size`, `--card-meta-size` and
  `--card-desc-size` in `:root` are the one type scale for both card grids (the discipline
  cards read them through `.disc-card-title` / `.disc-card-desc` / `.disc-card-meta`).
  Raising one, or lengthening a name, cost, pool or duration, means measuring both ceilings
  again before shipping
- `.char-actions` / `.char-action` (+ `--danger`) / `.char-actions-confirm` — the sheet's
  action row under the name, right-aligned. The chips are 34px so they read small next to the
  character's name, and `::before { inset: -5px 0 }` pads the hit area out to 44px —
  **vertically only**, because expanding sideways would overlap the neighbouring chip and
  steal its taps (the row's gap is 0.4rem)
- `.char-menu` / `.char-menu-panel` / `.char-menu-item` (+ `--danger`) — the "More options"
  dropdown holding Export and Delete. Its rows hold 44px outright: unlike the chips there is
  no neighbour to crowd
- `.char-edit-panel` / `.char-form-wrap` / `.char-form-step` / `.char-form-label` /
  `.char-form-actions` / `.char-form-primary` / `.char-steps` / `.char-step` / `.char-step-num`
  — the create wizard and the sheet's edit panel
- `.clan-picker` / `.clan-pick` / `.clan-pick-art` / `.clan-pick-sigil` / `.clan-pick-name` /
  `.clan-pick-check` — `ClanPicker.vue`. Toggle buttons with `aria-pressed`, not a listbox:
  each tile is its own tab stop, which is what a group of buttons promises and a listbox does
  not. Selection shows as a check mark *and* a gold ring, never colour alone
- `.power-pick` / `.power-pick-box` / `.power-pick-name` / `.disc-owned-badge` — the power
  picker's tick-box rows and the gold count of powers already owned in a Discipline
- `.field-input` / `.field-select` — plain form fields. `.search-input` carries a baked-in
  magnifier that only belongs on an actual search box; these share its look without it. The
  select's arrow is drawn by hand because the native one uses an OS colour that disappears on
  the dark theme
- `.clan-line` / `.clan-link` / `.clan-link-nickname` / `.char-generation` — clan and
  generation on one line on the sheet. The separator is a `::before` on the generation that
  only renders when a clan precedes it, so there is never an orphan `·`
- `.share-btn` / `.share-btn--detail` / `.share-btn-spinner` — Share button + loading spinner
  (top-right on the power detail art)
- `.disc-group-icon` — discipline icon on the character sheet's group headers
- `.power-detail-card` / `.pst` / `.power-detail-discipline-tag` — power detail view. The
  discipline tag sits top-left opposite the Share button and is sized to match
  `.power-level-badge--detail`. Its text is `--parchment` on a scrim that **flips with the
  theme** (black on dark, white on light) — both halves must flip together, and pinning the
  text to one palette makes it vanish on the other
- `.settings-section` / `.settings-option` / `.ornament-divider` — settings page
- `.app-footer` / `.app-footer-inner` / `.app-footer-ornament` / `.app-footer-brand` /
  `.app-footer-version` / `.app-footer-text` — the site footer. The
  notice is `--parchment-dim`, the dimmest step that still clears 4.5:1 on the footer's
  `--void-card` ground in both themes (4.8:1 / 5.0:1); `--parchment-faint` would measure
  2.1:1

`--card-color` and `--card-glow` are injected inline from Vue; `--tool-accent` is set inline per tool card while the underlying accent value is read from the theme vars `--tool-disciplines` / `--tool-clans` / `--tool-my-powers`.

`--content-width` (44rem) is the width of the single-column pages — home, settings and the
overlay menu that mirrors home. It is shared so the menu and the page behind it cannot drift
apart; the overlay's side padding matches the pages' `px-4` for the same reason.

## Build chunks (`vite.config.ts`)

`build.rollupOptions.output.manualChunks` splits the bundle in three:

| Chunk | Holds | Size (gzip) |
|-------|-------|-------------|
| `index` | app code — views, composables, router | ~64 kB |
| `game-content` | `data.ts`, `clans.ts`, `traits.ts`, the six translation overlays | ~118 kB |
| `game-icons` | `icons.ts`, `clan-icons.ts` (traced sigils) | ~105 kB |

The content is ~80% of the bundle and almost never changes, while the app code changes every
release. Split, a release only invalidates the small chunk, so the service worker
re-downloads ~60 kB instead of ~271 kB. First load is unchanged — all three are
modulepreloaded from `index.html` and precached.

**Rolldown (Vite 8) only accepts the function form of `manualChunks`**, not the object map;
the object form fails the build with `manualChunks is not a function`.

## PWA / Home-screen install (`vite.config.ts` + `index.html`)

Generated by `vite-plugin-pwa` (workbox `generateSW`). Precaches JS/CSS/HTML/SVG/PNG/WOFF/WOFF2 and runtime-caches Google Fonts stylesheets + font files.

- Manifest `name` **and** `short_name` are both set to `Vampire V5 Toolkit`. iOS and Android both prefer `short_name` for the home-screen shortcut label — if `short_name` is shorter than `name` (as it was originally, `"Vampire"`), the shortcut reads as that shorter one. Home-screen labels are visually truncated to ~11-12 characters by both OSes even when the full name is stored.
- `index.html` adds the iOS-specific meta tags: `apple-mobile-web-app-capable`, `apple-mobile-web-app-title` (pins the label to `Vampire V5 Toolkit` on iOS Safari), and `apple-mobile-web-app-status-bar-style="black-translucent"`.
- The `base` in `vite.config.ts` switches between `./` (local) and `/vampire-toolkit/` (GitHub Actions build), which is what feeds `start_url` and `scope` in the manifest.

---

## Rules

These are non-negotiable for any change to the codebase.

### Accessibility (a11y)

1. **Every interactive element must be keyboard-operable.** Buttons/anchors handle this natively; when a non-interactive element (`div`, `article`) acts as a control, add `role="button"`, `tabindex="0"`, and Enter+Space `@keydown` handlers (see `discipline-card` in `DisciplinesView.vue` for the pattern).
2. **Icons must be labelled.** Decorative SVGs get `aria-hidden="true"`. Meaningful icon-only buttons get an `aria-label` (see `.app-menu-toggler` and `.share-btn`).
3. **Never remove focus outlines** without providing a replacement. `:focus-visible` is styled explicitly where the default outline is suppressed (e.g. `.app-menu-toggler`, `.tool-card`).
4. **Color contrast must meet WCAG AA** (4.5:1 for body text, 3:1 for large/bold text ≥ 18.66px). Verify accents against **both** dark and light theme backgrounds. When an accent is too light for a badge with white text, give the badge a stable dark background (`--blood`) rather than reusing the accent.
5. **Overlays are dismissible.** The menu closes on Escape, click outside, and route change. Body scroll is locked while the overlay is open and restored on close.
6. **ARIA state matches reality.** `aria-expanded`, `aria-controls`, and dynamic `aria-label` on the hamburger toggler must stay in sync with the menu state. `active` classes on nav items must reflect the current route.
7. **Touch targets ≥ 44×44 CSS pixels.** The menu items enforce `min-height: 52px`. A control
   that must look smaller keeps the floor with a `::before` that pads the hit area out —
   but expand it only in a direction with no neighbour, or the two targets overlap and the
   later one in the DOM steals the taps (see `.char-action`, which grows vertically only).

### Translations

1. **No hardcoded UI strings in views.** Every user-visible label, placeholder, aria-label and empty-state message comes from `useI18n().t.value.<section>.<key>`.
2. **All three languages stay in sync.** When adding a UI string, add it to `es`, `en` **and** `ca` blocks in `useI18n.ts` in the same commit. TypeScript will fail the build if `en` or `ca` drift from `es`'s shape.
3. **Discipline, power and clan content lives in the overlays.** Whenever `data.ts` gets a new discipline or power, add matching entries with the same `id` key to `translations-en.ts` **and** `translations-ca.ts`; whenever `clans.ts` changes, do the same in `translations-clans-en.ts` **and** `translations-clans-ca.ts`; whenever `traits.ts` changes, do the same in `translations-traits-en.ts` **and** `translations-traits-ca.ts`. Missing keys silently fall back to the Spanish source — treat that as a bug, not a feature. Clan names that differ by language (`El Ministerio` / `The Ministry` / `El Ministeri`, `Hécata` / `Hecata`) also need `clanes` overrides in the discipline overlays.
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
