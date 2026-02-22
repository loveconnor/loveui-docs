# LoveUI

A collection of beautifully designed, accessible React components built on [Base UI](https://base-ui.com/) and styled with [Tailwind CSS](https://tailwindcss.com/). Copy, paste, and own — no black-box library to fight with.

## What's inside

This is a Bun + Turborepo monorepo.

### Apps

| App | Description |
|-----|-------------|
| `apps/ui` | The component documentation site. Browse components, copy code, and read usage guides. Runs on port `4000`. |
| `apps/www` | The public marketing website. |

### Packages

| Package | Description |
|---------|-------------|
| `packages/loveui` | The CLI. Run `npx love-ui add <component>` to add any component to your project, shadcn-style. |
| `packages/<component>` | Individual component source packages (e.g. `button`, `calendar`, `kanban`). Each is self-contained and can be added via the CLI or copied manually. |

## Getting started

```sh
# Install dependencies
bun install

# Start all dev servers
bun run dev
```

## Adding a component

```sh
npx love-ui add button
```

## Why LoveUI?

- **Ownership** — you get the source, not a dependency. Customize freely.
- **Solid foundation** — built on Base UI primitives, which handle accessibility and behavior correctly.
- **Real-world tested** — being progressively adopted at [cal.com](https://cal.com).

## License

AGPL-3.0-or-later

