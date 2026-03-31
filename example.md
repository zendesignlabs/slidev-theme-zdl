---
theme: ./
title: zen design labs — Theme Demo
author: zen design labs
colorSchema: both
---

# zen design labs
## slidev theme

A neo-brutalist presentation theme built on the ZDL design system.

---

# Default Layout

This is the **default** slide layout. It supports all standard Markdown.

- Bullet points get **aura** colored markers
- Links like [zen design labs](https://zenlabs.design) use brand colors
- `Inline code` gets the stamp treatment

> Blockquotes use the aura left border accent.

---
layout: section
label: Design System
---

# Typography & Color

---

# Headings & Text

## This is an H2 heading

### This is an H3 heading

#### This is an H4 heading

Body text uses **Space Grotesk** at regular weight with comfortable 1.5 line-height. *Muted text* provides secondary emphasis. Everything references the ZDL design token system.

---

# Code Blocks

Stamp-shadowed code blocks with syntax highlighting:

```ts
// ZDL design tokens in action
const theme = {
  colors: {
    aura: '#7B61FF',
    spark: '#FFB800',
    ember: '#E85D3A',
  },
  fonts: {
    primary: 'Space Grotesk',
    mono: 'Space Mono',
  },
}
```

---
layout: two-cols
---

# Two Columns

The left column gets the default slot content. Great for comparisons or side-by-side layouts.

- Point one
- Point two
- Point three

::right::

## Right Side

The right column uses the `::right::` delimiter. A subtle border separates the columns.

```css
.stamp-card {
  border: 3px solid;
  box-shadow: 4px 4px 0 0;
}
```

---
layout: quote
author: Dieter Rams
title: Industrial Designer
---

Good design is as little design as possible.

---
layout: fact
number: "4px"
label: Grid Unit
---

Every spacing value in the ZDL design system is built on a 4px base grid, creating consistent visual rhythm across all elements.

---
layout: section
label: Components
---

# Theme Components

---

# Custom Components

Use the built-in theme components in your slides:

<DotSignature :horizontal="true" size="12px" />

<div style="margin-top: 24px" />

<StampCard>
  This is a **StampCard** component with the signature neo-brutalist offset shadow and 3px border.
</StampCard>

<div style="margin-top: 24px" />

<DividerBar />

<div style="margin-top: 16px" />

<StampLabel>Stamp Label Component</StampLabel>

---

# Tables

| Token | Light | Dark |
|---|---|---|
| Background | Parchment `#FFFEF9` | Ink `#0F0E0C` |
| Text | Ink `#0F0E0C` | Parchment `#FFFEF9` |
| Accent | Aura `#7B61FF` | Aura `#7B61FF` |
| Highlight | Spark `#FFB800` | Spark `#FFB800` |
| Energy | Ember `#E85D3A` | Ember `#E85D3A` |

---
layout: end
website: zenlabs.design
---

# Thank You

---
