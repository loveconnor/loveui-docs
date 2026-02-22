# apps/ui

The documentation and component preview site for LoveUI. It runs with Next.js and serves the component registry, docs, examples, particles, page templates, and example apps.

Live at: `http://localhost:4000/ui`

---

## What's in here

| Folder / File | What it does |
|---|---|
| `app/` | Next.js app router pages |
| `content/docs/` | MDX documentation pages |
| `registry/default/ui/` | UI component source files |
| `registry/default/examples/` | Example components shown in docs |
| `registry/default/particles/` | Particle / background animations |
| `registry/page-templates/` | Full page templates |
| `registry/example-apps/` | Standalone example apps |
| `registry/registry-ui.ts` | Manifest for UI components |
| `registry/registry-examples.ts` | Manifest for examples |
| `registry/registry-particles.ts` | Manifest for particles |
| `scripts/` | Build scripts for the registry |

> `registry/__index__.tsx` is auto-generated. Don't edit it by hand.

---

## Getting started

From the repo root, install dependencies first:

```bash
bun install
```

Then start the dev server from this folder:

```bash
cd apps/ui
bun run dev
```

Open [http://localhost:4000/ui](http://localhost:4000/ui).

---

## Scripts

| Command | What it does |
|---|---|
| `bun run dev` | Start the dev server on port 4000 |
| `bun run build` | Build for production |
| `bun run start` | Start the production server |
| `bun run lint` | Check for lint errors |
| `bun run lint:fix` | Auto-fix lint errors |
| `bun run typecheck` | Run TypeScript type checks |
| `bun run format:write` | Format all `.ts`, `.tsx`, and `.mdx` files |
| `bun run registry:build` | Rebuild the component registry |
| `bun run ui:propagate` | Push UI component changes to other packages |

---

## How the registry works

The registry powers the `npx love-ui add <component>` CLI command.

- Each component, example, particle, or template has a source file and a matching entry in one of the `registry-*.ts` manifest files.
- Running `bun run registry:build` reads those manifests and writes the final registry output.
- If you change any file in `registry/default/ui/`, run `bun run ui:propagate` afterward to sync it to the right packages.

---

## Making changes

For a full guide on adding components, examples, particles, and page templates, see [CONTRIBUTING.md](./CONTRIBUTING.md).

Quick checklist before opening a pull request:

```bash
bun run format:write
bun run lint
bun run typecheck
bun run registry:build

# If you changed any UI component:
bun run ui:propagate
```
