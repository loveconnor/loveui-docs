# Contributing to loveui

Thanks for helping improve loveui.

This guide is the current workflow for this repo.

## Before you start

From `apps/ui`:

```bash
bun install
bun run dev
```

Open `http://localhost:4000`.

## Project map

- UI components: `registry/default/ui/*.tsx`
- Examples: `registry/default/examples/*.tsx`
- Particles: `registry/default/particles/*.tsx`
- Example/particle gallery list: `registry/default/particles/index.tsx`
- Registry entries:
  - `registry/registry-ui.ts`
  - `registry/registry-examples.ts`
  - `registry/registry-particles.ts`
- Docs content: `content/docs/**/*.mdx`

Note: `registry/__index__.tsx` is generated. Do not edit it manually.

## Typical contribution flows

### 1) Docs-only changes

Edit MDX files in `content/docs`.

If you add a new page, update the related `meta.json` in that docs folder.

### 2) Add or update a UI component

1. Add/update the file in `registry/default/ui`.
2. Add/update the item in `registry/registry-ui.ts`.
3. Add or update docs in `content/docs/components`.
4. If needed, add examples in `registry/default/examples` and register them in `registry/registry-examples.ts`.

### 3) Add an example

1. Create a component in `registry/default/examples/<name>.tsx`.
2. Add a matching item in `registry/registry-examples.ts`.
   - `type` should be `registry:example`.
   - `files` uses object format, for example:
     - `path: "examples/<name>.tsx"`
     - `type: "registry:example"`
3. If you want it on the particles page, add it to `registry/default/particles/index.tsx`.
4. Optionally reference it in docs with `<ComponentSource name="<name>" />`.

### 4) Add a particle

1. Create a file in `registry/default/particles`, usually named like `particle-<group>-<n>.tsx`.
2. Add an item in `registry/registry-particles.ts`.
   - `type` should be `registry:block`.
   - `files` uses object format, for example:
     - `path: "particles/particle-<group>-<n>.tsx"`
     - `type: "registry:block"`
3. Add it to `registry/default/particles/index.tsx` so it appears on `/particles`.

### 5) Add a page template or example app

These are picked up by the build script automatically.

- Page templates live under: `registry/page-templates/default/templates`
- Example apps live under: `registry/example-apps/default/<app-name>` and must include `metadata.json`

You usually do not need to manually add these to `registry/registry-*.ts`.

## Required checks before opening a PR

Run from `apps/ui`:

```bash
bun run format:write
bun run lint
bun run typecheck
bun run registry:build
```

If you changed files in `registry/default/ui`, also run:

```bash
bun run ui:propagate
```

## Pull request checklist

- Keep changes focused and small.
- Use clear file names and component names.
- Update docs when behavior or API changes.
- Add screenshots for visual changes.
- Include a short summary of what changed and why.

Thanks again for contributing.
