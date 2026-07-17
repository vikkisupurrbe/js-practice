# Portfolio style guide

**Vibe:** modern · business · calm
**Typefaces:** Plus Jakarta Sans (headings/UI) × Lora (body)
**Companion file:** `theme.css` — drop this in before your existing stylesheet and swap class names over gradually.

---

## 1. What changed from the original, and why

The original site (`style.css`) leaned bright and playful: a saturated sky-teal (`#6DB5CA`) as the dominant background color, a warm orange accent (`#F99136`), Ubuntu/Orienta headings, and a hover state that inverted whole cards from cream to dark teal. That reads as friendly and casual — great for a personal brand, but it fights "business and calm," because:

- **Saturated teal as a *background* color** (not just an accent) raises visual energy and makes long reading sessions tiring.
- **The hard color-invert hover** (`.work-card:hover`) is a strong, sudden change — the opposite of calm.
- **Two competing sans faces** (Ubuntu for headings, Orienta for nav/UI, Hind Siliguri for body) don't share a clear hierarchy.
- Line-heights were set in raw pixels (`line-height: 56px`) rather than unitless ratios, which breaks as soon as font size changes responsively.

The revamp keeps the bones you already built — the same card/navbar/footer structure, the same 800px content column on project pages — but shifts the palette to a quiet ink-and-paper foundation with a single restrained "harbor" blue-teal as the primary color, replaces the hover-invert with elevation (shadow + lift), and gives type a real scale built on `clamp()` so it's fluid instead of breakpoint-jumpy.

---

## 2. Color

### Principles
- **One primary, one accent, used unevenly.** Primary (harbor blue-teal) carries links, buttons, active states. Accent (muted brass) is reserved for eyebrows, tags, and single highlight moments — never a full background.
- **Backgrounds are neutral, not colored.** Calm comes from restraint: the page is paper/ink, not teal-on-cream.
- **Every text/background pairing meets WCAG AA (4.5:1) at minimum**, most exceed AAA (7:1).

### Light theme

| Token | Hex | Role | Contrast vs. its pair |
|---|---|---|---|
| `--color-bg` | `#F7F5F1` | Page background — warm paper, not stark white | — |
| `--color-surface` | `#FFFFFF` | Cards, nav, elevated panels | — |
| `--color-surface-alt` | `#EFEBE3` | Alternating section background | — |
| `--color-border` | `#DDD7CC` | Hairlines, dividers | — |
| `--color-text` | `#1E2A32` | Body/heading text | ~13.4:1 on `--color-bg` (AAA) |
| `--color-text-secondary` | `#55636C` | Captions, meta, secondary copy | ~5.7:1 on `--color-bg` (AA) |
| `--color-primary` | `#2F4C5A` | Links, CTAs, active nav | ~9.1:1 with white text (AAA) |
| `--color-accent` | `#A9762F` | Eyebrows, tags, single highlights | Use for small/bold text only |
| `--color-success` | `#3F7D53` | Confirmations | — |
| `--color-error` | `#B5502E` | Errors, warnings | — |

### Dark theme

| Token | Hex | Role | Contrast vs. its pair |
|---|---|---|---|
| `--color-bg` | `#14191C` | Page background — soft charcoal-navy, never pure black | — |
| `--color-surface` | `#1B2226` | Cards, nav, elevated panels | — |
| `--color-surface-alt` | `#202830` | Alternating section background | — |
| `--color-border` | `#2E373C` | Hairlines, dividers | — |
| `--color-text` | `#EDEAE2` | Body/heading text — warm off-white, not `#fff` | ~14.7:1 on `--color-bg` (AAA) |
| `--color-text-secondary` | `#A8AFB3` | Captions, meta | ~7:1 on `--color-bg` (AA/AAA) |
| `--color-primary` | `#7FA8B8` | Links, CTAs, active nav — brightened so it still reads on dark | ~7:1 on `--color-bg` |
| `--color-accent` | `#D3A96A` | Eyebrows, tags | ~9:1 on `--color-bg` |

**Why these hexes and not pure black/white:** pure `#000`/`#fff` pairs create the highest possible contrast, which is technically "accessible" but can feel harsh and vibrate on screen during long reading — the opposite of "soft on the eyes." Off-black ink and off-white paper soften that without sacrificing the ratio.

### Usage rules
1. Never place `--color-accent` behind large blocks of text — it's a highlight color, not a surface color.
2. `--color-primary` is the only color allowed on interactive elements (links, buttons, focus rings) so users learn one visual language for "this is clickable."
3. Toggle dark mode with `data-theme="dark"` on `<html>`; it also falls back to the OS preference automatically if no explicit choice is stored.

---

## 3. Typography

**Plus Jakarta Sans** carries headings and UI chrome (nav, buttons, tags, captions) — it's geometric and confident, which reads as "business." **Lora** carries body copy and long-form reading (project descriptions, case study text) — a humanist serif keeps extended reading calm and warm instead of clinical.

### Type scale

| Token | Size | Family | Weight | Use |
|---|---|---|---|---|
| `--fs-h1` | 36–56px fluid | Jakarta | 800 | Page hero title |
| `--fs-h2` | 28–40px fluid | Jakarta | 700 | Section titles |
| `--fs-h3` | 22–28px fluid | Jakarta | 600 | Card titles, subsections |
| `--fs-h4` | 20px | Jakarta | 600 | Small headings |
| `--fs-h5` | 17px | Jakarta | 500 | Lede/intro paragraphs |
| `--fs-body-lg` | 18px | Lora | 400 | Default paragraph size |
| `--fs-body` | 16px | Lora | 400 | Dense/secondary paragraphs |
| `--fs-small` | 14px | Jakarta | 500 | Nav links, buttons, labels |
| `--fs-caption` | 12px | Jakarta | 600 | Eyebrows, meta, captions |

### Rhythm
- Headings: `line-height: 1.2`, tight letter-spacing (`-0.01em`) — keeps big type feeling controlled.
- Body: `line-height: 1.7` — serif body text needs more air than sans; this is what keeps Lora "easy to read" instead of dense.
- Eyebrows/labels: uppercase, `0.08em` tracking, always in Jakarta even next to serif body — a small signal that this is UI, not prose.

### Why fluid sizes (`clamp()`)
The original scale jumped hard at the 1200px breakpoint (`h1`: 60px → 39px). `clamp(min, preferred, max)` scales continuously with viewport width, so type never "snaps" at an arbitrary pixel — it feels calmer on resize and on in-between screen sizes (foldables, small laptops).

---

## 4. Grid & layout

- **12-column grid**, `max-width: 1320px`, centered, fluid gutter (`clamp(1rem, 2vw, 2rem)`).
- **Container padding** is fluid too (`clamp(1.25rem, 4vw, 3rem)`) so content never touches the viewport edge on mobile, and never floats absurdly narrow-margined on ultrawide screens.
- **Breakpoints:**
  - Mobile: 0–599px — everything stacks full-width (`.col-*` defaults to `span 12`).
  - Tablet: 600–1023px — `.col-sm-*` activates.
  - Desktop: 1024–1439px — `.col-md-*` activates.
  - Wide: 1440px+ — container simply stops growing past `--container-max`.
- Project/case-study pages keep your original 800px reading column for long-form text — that width is close to the ~65–75 characters-per-line sweet spot for serif body text, so it's kept deliberately rather than stretched to the full grid.

---

## 5. Spacing, radius, motion

- **Spacing scale** is 4px-based (`--space-1` = 4px up to `--space-32` = 128px) so every margin/padding in the site is a multiple of 4 — this is what makes a layout look "designed" rather than eyeballed.
- **Radius:** `--radius-sm` (6px) for inputs/small chips, `--radius-md` (12px) for cards, `--radius-lg` (20px) for large panels/images, `--radius-pill` for buttons.
- **Shadows replace the old hover-invert.** Instead of a card flipping from cream to dark teal on hover (high-energy), cards now lift 2px and gain a soft shadow (`--shadow-md`) — a calmer, more "considered" interaction typical of business/SaaS products.
- **Motion** is short and eased (`0.15–0.3s`, `cubic-bezier(0.16,1,0.3,1)`), and fully respects `prefers-reduced-motion`.

---

## 6. Accessibility checklist

- [x] All text/background pairs verified at ≥4.5:1 (body copy is 5.7:1–14.7:1 across both themes).
- [x] Visible `:focus-visible` outline on every interactive element, not just `:hover`.
- [x] Dark mode isn't just an inverted light mode — colors were independently tuned (e.g. primary brightens from `#2F4C5A` to `#7FA8B8` so it still passes contrast on a dark background).
- [x] `prefers-reduced-motion` respected globally.
- [x] Type never goes below 12px.

---

## 7. How to use `theme.css`

1. Add the font `<link>` (or keep the `@import` at the top of `theme.css`) before any other stylesheet.
2. Include `theme.css` first, then your existing `style.css` — override old hardcoded colors/fonts by swapping them for the tokens above (e.g. replace `var(--clr-primary)` with `var(--color-primary)`).
3. To ship dark mode, add a small toggle script that sets `document.documentElement.dataset.theme = 'dark' | 'light'` and persists it (e.g. `localStorage`). With no toggle at all, it still respects the visitor's OS setting automatically.
4. Migrate components gradually using the worked examples at the bottom of `theme.css` (`.navbar`, `.work-card`, `.button`, `.footer`) as the pattern for the rest of the site.
