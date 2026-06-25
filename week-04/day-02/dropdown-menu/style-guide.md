# Style Guide — Light/Dark Theme Switcher

## Colors

### Light Theme
| Token | Value | Usage |
| --- | --- | --- |
| `--color-bg` | `hsl(0, 0%, 97%)` | Page background |
| `--color-surface` | `hsl(0, 0%, 100%)` | Cards, navbar |
| `--color-text` | `hsl(220, 15%, 15%)` | Body text |
| `--color-text-muted` | `hsl(220, 10%, 50%)` | Secondary text |
| `--color-border` | `hsl(220, 10%, 88%)` | Borders, dividers |
| `--color-accent` | `hsl(220, 80%, 55%)` | Buttons, links, active states |
| `--color-accent-hover` | `hsl(220, 80%, 45%)` | Button hover |

### Dark Theme
| Token | Value | Usage |
| --- | --- | --- |
| `--color-bg` | `hsl(220, 15%, 10%)` | Page background |
| `--color-surface` | `hsl(220, 15%, 16%)` | Cards, navbar |
| `--color-text` | `hsl(0, 0%, 93%)` | Body text |
| `--color-text-muted` | `hsl(220, 10%, 60%)` | Secondary text |
| `--color-border` | `hsl(220, 15%, 24%)` | Borders, dividers |
| `--color-accent` | `hsl(220, 80%, 65%)` | Buttons, links, active states |
| `--color-accent-hover` | `hsl(220, 80%, 75%)` | Button hover |

---

## Typography

- **Font**: System stack — `-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`
- **Base size**: `16px`
- **Scale**: `0.875rem` (small) → `1rem` (body) → `1.25rem` (h3) → `1.5rem` (h2) → `2rem` (h1)
- **Line height**: `1.6` for body, `1.2` for headings
- **Weight**: 400 (body), 600 (headings, buttons)

---

## Spacing

Uses a base-4 scale:

| Token | Value |
| --- | --- |
| `--space-xs` | `0.25rem` (4px) |
| `--space-sm` | `0.5rem` (8px) |
| `--space-md` | `1rem` (16px) |
| `--space-lg` | `1.5rem` (24px) |
| `--space-xl` | `2rem` (32px) |
| `--space-2xl` | `3rem` (48px) |

---

## Border Radius

| Usage | Value |
| --- | --- |
| Buttons, inputs | `0.375rem` |
| Cards | `0.75rem` |
| Pills / badges | `100px` |

---

## Shadows

```css
/* Light theme */
--shadow-sm: 0 1px 3px hsla(220, 15%, 15%, 0.08);
--shadow-md: 0 4px 12px hsla(220, 15%, 15%, 0.12);

/* Dark theme */
--shadow-sm: 0 1px 3px hsla(0, 0%, 0%, 0.3);
--shadow-md: 0 4px 12px hsla(0, 0%, 0%, 0.4);
```

---

## Transitions

All interactive elements use a consistent transition:

```css
transition: all 0.2s ease;
```

Theme switching uses a slower transition on `background-color` and `color`:

```css
transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
```

---

## Component Rules

### Buttons
- Minimum height: `2.5rem`
- Horizontal padding: `1.25rem`
- Always show `:hover` and `:focus-visible` states
- Use `cursor: pointer`

### Cards
- Padding: `var(--space-lg)`
- Border: `1px solid var(--color-border)`
- Box shadow: `var(--shadow-sm)`
- Scale on hover: `transform: translateY(-2px)` with shadow upgrade to `--shadow-md`

### Links
- Default: `var(--color-accent)`, no underline
- Hover: underline + `var(--color-accent-hover)`

### Dropdown
- Animated with `opacity` + `transform: translateY(-8px)` → `translateY(0)`
- Duration: `0.25s ease`
- Use `pointer-events: none` when hidden

---

## Theme Toggle

- Toggle button sits in the navbar
- Switches a `data-theme="dark"` attribute on `<html>`
- All CSS variables live on `:root` and `[data-theme="dark"]`