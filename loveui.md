# LoveUI — UI Parts Reference

LoveUI is organized into distinct layers, from atomic primitives up to full application templates. Each layer is independently usable — pick what you need.

---

## Components (`registry/default/ui`)

~60 base components: the atoms of the system. These are the low-level, styled primitives you compose everything else from.

**Examples:** `button`, `input`, `dialog`, `select`, `combobox`, `table`, `tabs`, `toast`, `accordion`, `sheet`, `tooltip`, `slider`, `badge`, `avatar`, `checkbox`, `switch`, `menu`, `popover`, `card`, `calendar`, and more.

**Why useful:** Each component is accessible by default (built on Base UI), styled with Tailwind, and yours to own — no runtime library dependency after you add it.

**Install any component:**
```sh
npx love-ui add button
```

---

## Examples (`registry/default/examples`)

Dozens of usage examples for every component — covering variants, sizes, states, form integration, and real-world patterns.

**Examples include:** `button-loading`, `combobox-multiple`, `dialog-nested`, `form-zod`, `table-framed`, `kanban`, `gantt`, `code-block-diff`, and many more.

**Why useful:** Instead of reading docs to understand props, you see the exact code for the exact variant you need. Copy it directly.

---

## Building Blocks (`registry/building-blocks`)

617+ pre-composed UI sections (`comp-01` through `comp-617`). These are complete, self-contained UI chunks ready to drop into any page — not raw primitives, but real sections built from them.

**Includes:** pricing sections, stat cards, hero variants, sidebars, navbars, forms, data displays, empty states, dashboards sections, and more.

**Why useful:** Skip the assembly step. Grab a building block, drop it in, and customize the copy and data. Ideal for moving fast without starting from scratch.

---

## Page Templates (`registry/page-templates`)

Full-page sections composed from building blocks.

**Includes:** `auth` (sign-in, sign-up), `hero`, `logo-cloud`.

**Why useful:** Production-ready page layouts — useful as a starting point for landing pages or app shells without needing to wire up the structure yourself.

---

## Example Apps (`registry/example-apps`)

10 complete mini-applications demonstrating how everything fits together at the app level.

| App | Description |
|-----|-------------|
| `dashboard-1/2/3` | Analytics/admin dashboards with different layouts |
| `calendar` | Full calendar application |
| `emails` | Email client interface |
| `files` | File manager UI |
| `leads` | CRM-style leads table |
| `bookmarks` | Bookmark manager |
| `maps` | Map-based layout |
| `rentals` | Listing/rental browse UI |

**Why useful:** See how components, building blocks, and templates work together in a realistic context. Great for understanding patterns before building your own app.

---

## Motion Primitives (`registry/default/motion-primitives`)

Small animation utilities built on top of the component system.

**Includes:** `animated-group`, `infinite-slider`, `progressive-blur`, `text-effect`.

**Why useful:** Add polish and motion without reaching for a full animation library. Drop-in and composable.

---

## Particles (`registry/default/particles`)

Visual effect components for decorative backgrounds and hero sections.

**Includes:** 11 particle variants across button, frame, and page styles.

**Why useful:** Eye-catching effects for landing pages and marketing sections, self-contained and easy to integrate.

---

## Summary

| Layer | What it is | Best for |
|-------|-----------|----------|
| Components | Atomic UI primitives | Building anything from scratch |
| Examples | Per-component code samples | Finding the exact variant you need |
| Building Blocks | Pre-composed UI sections (617+) | Assembling pages quickly |
| Page Templates | Full-page layouts | Jumpstarting pages without design work |
| Example Apps | Complete mini-apps | Reference architecture and patterns |
| Motion Primitives | Animation utilities | Adding motion to any component |
| Particles | Visual decorative effects | Hero sections and marketing pages |
