# slidev-theme-zdl

A neo-brutalist [Slidev](https://sli.dev) theme based on the [zen design labs](https://zenlabs.design) design system. Stamp shadows, sharp corners, bold borders, Space Grotesk typography, and a warm ink/parchment palette — with full light and dark mode support.

---

## Install

Add to your slide's frontmatter:

```yaml
---
theme: zdl
---
```

Then install the theme:

```bash
npm install slidev-theme-zdl
```

## Fonts

The theme uses **Space Grotesk** (sans) and **Space Mono** (mono), loaded automatically from Google Fonts. No setup required.

---

## Layouts

### `cover`

Title slide with an aura accent bar, three-dot signature, and optional metadata.

```yaml
---
layout: cover
author: zen design labs
date: 2026
---

# Presentation Title
## Optional subtitle line
```

| Prop | Type | Description |
|---|---|---|
| `author` | string | Author name shown in the slide footer |
| `date` | string | Date or year shown in the slide footer |

---

### `default`

Standard content slide. Supports all Markdown — headings, lists, code blocks, tables, blockquotes. Includes a three-dot footer and slide number.

```yaml
---
layout: default
---

# Slide Title

Your content here.
```

---

### `section`

Section divider with an aura divider bar, optional stamp label, and large heading.

```yaml
---
layout: section
label: Chapter One
---

# Section Title
```

| Prop | Type | Description |
|---|---|---|
| `label` | string | Uppercase stamp label shown above the heading |

---

### `two-cols`

Two-column layout. Use the `::right::` delimiter to split content.

```yaml
---
layout: two-cols
---

# Left Column

Left side content here.

::right::

## Right Column

Right side content here.
```

---

### `quote`

Centered quote in a stamp-shadow box with optional attribution.

```yaml
---
layout: quote
author: Dieter Rams
title: Industrial Designer
---

Good design is as little design as possible.
```

| Prop | Type | Description |
|---|---|---|
| `author` | string | Attribution name, displayed in aura stamp label style |
| `title` | string | Author's title or role, shown in muted italics |

---

### `fact`

Big number or stat with a label and supporting description.

```yaml
---
layout: fact
number: "97%"
label: Satisfaction Rate
---

Based on post-workshop surveys across 40+ sessions.
```

| Prop | Type | Description |
|---|---|---|
| `number` | string | The large display number or value |
| `label` | string | Uppercase stamp label below the number |

The slide body becomes the supporting description text.

---

### `end`

Closing slide with centered content and optional website line.

```yaml
---
layout: end
website: zenlabs.design
---

# Thank You
```

| Prop | Type | Description |
|---|---|---|
| `website` | string | Shown as muted text below the main content |

---

## Components

Theme components are available globally in all slides.

### `<DotSignature>`

The three-dot brand motif (ember / spark / aura).

```md
<DotSignature />
<DotSignature :horizontal="true" />
<DotSignature size="14px" />
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `horizontal` | boolean | `false` | Arrange dots in a row instead of a column |
| `size` | string | `10px` | Diameter of each dot |

---

### `<StampCard>`

Neo-brutalist card with 3px border and 4px offset stamp shadow.

```md
<StampCard>
  Your card content here.
</StampCard>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `hover` | boolean | `true` | Enable accent shadow on hover |

---

### `<DividerBar>`

The 48px aura accent line used as a section marker.

```md
<DividerBar />
<DividerBar width="96px" />
<DividerBar color="#FFB800" />
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `width` | string | `48px` | Width of the bar |
| `color` | string | aura `#7B61FF` | Override the bar color |

---

### `<StampLabel>`

Uppercase wide-tracked label text in aura.

```md
<StampLabel>Workshop Materials</StampLabel>
<StampLabel color="#E85D3A">Urgent</StampLabel>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `color` | string | aura `#7B61FF` | Override the text color |

---

## UnoCSS Shortcuts

The theme provides utility shortcuts for use directly in slides:

| Shortcut | Description |
|---|---|
| `stamp-shadow` | 4px hard offset shadow |
| `stamp-shadow-lg` | 6px hard offset shadow |
| `stamp-shadow-accent` | 4px aura-colored shadow |
| `stamp-border` | 3px solid border |
| `text-stamp` | Uppercase, 0.15em tracking, medium weight |
| `text-display` | 64px bold display heading |
| `text-aura` | Violet `#7B61FF` |
| `text-spark` | Gold `#FFB800` |
| `text-ember` | Terracotta `#E85D3A` |
| `text-muted` | Muted text color |
| `bg-main` | Theme background + text color |

---

## Design Tokens

All visual properties are available as CSS custom properties:

```css
/* Brand colors */
--zdl-color-aura: #7B61FF;
--zdl-color-spark: #FFB800;
--zdl-color-ember: #E85D3A;

/* Neutrals */
--zdl-color-ink: #0F0E0C;
--zdl-color-parchment: #FFFEF9;

/* Semantic */
--zdl-bg        /* slide background */
--zdl-text      /* primary text */
--zdl-text-muted

/* Shadows */
--zdl-shadow-stamp
--zdl-shadow-stamp-lg
--zdl-shadow-stamp-accent
```

---

## Color Modes

The theme supports both light and dark modes. Slides toggle with the moon icon in the Slidev toolbar, or set a default in the frontmatter:

```yaml
---
colorSchema: dark   # or 'light' or 'auto'
---
```

---

## License

MIT © [zen design labs](https://zenlabs.design)
