import { exec } from "child_process"
import { promises as fs } from "fs"
import path from "path"
import { rimraf } from "rimraf"

import { registry } from "../registry/index.js"

const REGISTRY_ITEM_SCHEMA = "https://ui.shadcn.com/schema/registry-item.json"
const MAIN_COMPONENT_CANDIDATES = [
  "app/page.tsx",
  "app/page.ts",
  "app/page.jsx",
  "app/page.js",
  "index.tsx",
  "index.ts",
  "index.jsx",
  "index.js",
]

const TEXT_EXTENSIONS = new Set([
  ".tsx",
  ".ts",
  ".jsx",
  ".js",
  ".css",
  ".scss",
  ".sass",
  ".json",
  ".mdx",
  ".md",
  ".txt",
])

const IGNORED_DIRS = new Set([
  ".git",
  ".next",
  ".turbo",
  "node_modules",
  "dist",
  "build",
  "coverage",
])

const EXAMPLE_APP_ROOTS = new Set([
  "components",
  "hooks",
  "lib",
  "store",
  "mock-data",
  "index.tsx",
  "index.ts",
  "index.jsx",
  "index.js",
])

const EXCLUDED_EXAMPLE_APP_FILES = new Set([
  ".DS_Store",
  "metadata.json",
  "package.json",
  "tsconfig.json",
  "next.config.ts",
  "next.config.js",
  "next.config.mjs",
  "postcss.config.mjs",
  "eslint.config.mjs",
])

const EXCLUDED_DEPENDENCIES = new Set([
  "react",
  "react-dom",
  "next",
  "typescript",
  "@types/react",
  "@types/react-dom",
  "@types/node",
  "@types/next",
])

type RegistryFile = {
  path: string
  type?: string
  target?: string
  content?: string
}

type RegistryItem = {
  $schema?: string
  name: string
  type: string
  title?: string
  description?: string
  files?: RegistryFile[]
  categories?: string[]
  dependencies?: string[]
  registryDependencies?: string[]
  meta?: Record<string, unknown>
}

const toPosix = (value: string) => value.replace(/\\/g, "/")

const extractPackageName = (specifier: string) => {
  if (specifier.startsWith("@")) {
    const [scope, name] = specifier.split("/")
    if (scope && name) {
      return `${scope}/${name}`
    }

    return specifier
  }

  return specifier.split("/")[0] ?? specifier
}

const stripFileContentFromItem = (item: RegistryItem): RegistryItem => {
  const files = item.files?.map((file) => ({
    path: file.path,
    type: file.type,
    target: file.target,
  }))

  return {
    ...item,
    files,
  }
}

const makeUniqueName = (base: string, usedNames: Set<string>) => {
  let candidate = base
  let index = 2

  while (usedNames.has(candidate)) {
    candidate = `${base}-${index}`
    index += 1
  }

  usedNames.add(candidate)
  return candidate
}

const detectRegistryFileType = (relativePath: string) => {
  const normalized = toPosix(relativePath)
  const extension = path.extname(normalized).toLowerCase()

  if (normalized.startsWith("components/ui/")) {
    return "registry:ui"
  }

  if (normalized.startsWith("components/")) {
    return "registry:component"
  }

  if (normalized.startsWith("hooks/")) {
    return "registry:hook"
  }

  if (
    normalized.startsWith("lib/") ||
    normalized.startsWith("store/") ||
    normalized.startsWith("mock-data/")
  ) {
    return "registry:lib"
  }

  if (normalized.startsWith("app/")) {
    return "registry:page"
  }

  if (extension === ".css" || extension === ".scss" || extension === ".sass") {
    return "registry:style"
  }

  return "registry:file"
}

const getSubdirectories = async (dirPath: string) => {
  const entries = await fs.readdir(dirPath, { withFileTypes: true })
  return entries
    .filter((entry) => entry.isDirectory() && !entry.name.startsWith("."))
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
}

const directoryLooksLikeTemplate = async (directoryPath: string) => {
  for (const candidate of MAIN_COMPONENT_CANDIDATES) {
    try {
      await fs.access(path.join(directoryPath, candidate))
      return true
    } catch {
      continue
    }
  }

  return false
}

const collectImportDependencies = (
  content: string,
  dependencies: Set<string>,
  uiRegistryDependencies: Set<string>,
  uiSvgDependencies: Set<string>,
  hasTemplateUtils: { value: boolean }
) => {
  const importSpecifiers = new Set<string>()
  const staticImportRegex = /\b(?:import|export)\s+(?:[^"']*?\s+from\s+)?["']([^"']+)["']/g
  const dynamicImportRegex = /\bimport\(\s*["']([^"']+)["']\s*\)/g

  for (const match of content.matchAll(staticImportRegex)) {
    const specifier = match[1]
    if (specifier) importSpecifiers.add(specifier)
  }

  for (const match of content.matchAll(dynamicImportRegex)) {
    const specifier = match[1]
    if (specifier) importSpecifiers.add(specifier)
  }

  for (const specifier of importSpecifiers) {
    if (specifier === "@/lib/page-templates/utils") {
      hasTemplateUtils.value = true
    }

    const registryUiMatch =
      specifier.match(/^@\/registry\/default\/ui\/([a-z0-9-]+)$/i) ||
      specifier.match(/^@loveui\/ui\/ui\/([a-z0-9-]+)$/i) ||
      specifier.match(/^@\/ui\/([a-z0-9-]+)$/i)

    if (registryUiMatch?.[1]) {
      uiRegistryDependencies.add(registryUiMatch[1])
    }

    const registrySvgMatch = specifier.match(/^@\/ui\/svgs\/([a-z0-9-]+)$/i)
    if (registrySvgMatch?.[1]) {
      uiSvgDependencies.add(registrySvgMatch[1])
    }

    if (
      specifier.startsWith(".") ||
      specifier.startsWith("@/") ||
      specifier.startsWith("~/")
    ) {
      continue
    }

    const pkg = extractPackageName(specifier)
    if (!pkg || EXCLUDED_DEPENDENCIES.has(pkg)) {
      continue
    }

    if (
      pkg.startsWith("@loveui/") ||
      pkg.startsWith("@love-ui/") ||
      pkg.startsWith("@repo/")
    ) {
      continue
    }

    dependencies.add(pkg)
  }
}

const collectFilesWithContent = async ({
  sourceRoot,
  virtualPathPrefix,
  targetPrefix,
  includePath,
}: {
  sourceRoot: string
  virtualPathPrefix: string
  targetPrefix: string
  includePath?: (relativePath: string) => boolean
}) => {
  const files: RegistryFile[] = []
  const dependencies = new Set<string>()
  const uiRegistryDependencies = new Set<string>()
  const uiSvgDependencies = new Set<string>()
  const hasTemplateUtils = { value: false }

  const walk = async (currentDir: string) => {
    const entries = await fs.readdir(currentDir, { withFileTypes: true })

    for (const entry of entries) {
      if (entry.name.startsWith(".")) continue
      if (IGNORED_DIRS.has(entry.name)) continue

      const absolutePath = path.join(currentDir, entry.name)

      if (entry.isDirectory()) {
        await walk(absolutePath)
        continue
      }

      if (EXCLUDED_EXAMPLE_APP_FILES.has(entry.name)) {
        continue
      }

      const extension = path.extname(entry.name).toLowerCase()
      if (!TEXT_EXTENSIONS.has(extension)) {
        continue
      }

      const relativePath = toPosix(path.relative(sourceRoot, absolutePath))
      if (includePath && !includePath(relativePath)) {
        continue
      }

      const content = await fs.readFile(absolutePath, "utf8")
      collectImportDependencies(
        content,
        dependencies,
        uiRegistryDependencies,
        uiSvgDependencies,
        hasTemplateUtils
      )

      files.push({
        path: `${virtualPathPrefix}/${relativePath}`.replace(/\/+/g, "/"),
        type: detectRegistryFileType(relativePath),
        target: `${targetPrefix}/${relativePath}`.replace(/\/+/g, "/"),
        content,
      })
    }
  }

  await walk(sourceRoot)

  return {
    files,
    dependencies,
    uiRegistryDependencies,
    uiSvgDependencies,
    hasTemplateUtils: hasTemplateUtils.value,
  }
}

const buildRegistryDependencyUrls = (dependencies: Iterable<string>) =>
  Array.from(new Set(Array.from(dependencies)))
    .map((dependency) => `https://www.loveui.dev/r/${dependency}.json`)
    .sort((a, b) => a.localeCompare(b))

const mergeUniqueItems = (baseItems: RegistryItem[], additionalItems: RegistryItem[]) => {
  const names = new Set(baseItems.map((item) => item.name).filter(Boolean))
  const merged = [...baseItems]

  for (const item of additionalItems) {
    if (!item.name || names.has(item.name)) {
      continue
    }

    names.add(item.name)
    merged.push(item)
  }

  return merged
}

async function verifyUiRegistryCoverage() {
  const uiDir = path.join(process.cwd(), "registry", "default", "ui")
  const entries = await fs.readdir(uiDir, { withFileTypes: true })

  const uiFileNames = entries
    .filter((entry) => entry.isFile() && entry.name.endsWith(".tsx"))
    .map((entry) => entry.name.replace(/\.tsx$/, ""))
    .sort((a, b) => a.localeCompare(b))

  const declaredUiNames = new Set(
    registry.items
      .filter((item) => item.type === "registry:ui")
      .flatMap((item) => item.files ?? [])
      .map((file: any) => (typeof file === "string" ? file : file.path))
      .filter((filePath: string) => filePath.startsWith("ui/"))
      .map((filePath: string) => path.basename(filePath, ".tsx"))
  )

  const missing = uiFileNames.filter((name) => !declaredUiNames.has(name))
  if (missing.length > 0) {
    throw new Error(
      `registry-ui.ts is missing registry entries for ui files: ${missing.join(", ")}`
    )
  }
}

async function buildRegistryIndex() {
  let index = `/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
// @ts-nocheck
// This file is autogenerated by scripts/build-registry.ts
// Do not edit this file directly.
import * as React from "react"

export const Index: Record<string, any> = {`
  for (const item of registry.items) {
    const resolveFiles = item.files?.map(
      (file: any) => `registry/default/${file.path}`
    )
    if (!resolveFiles) {
      continue
    }

    const componentPath = item.files?.[0]?.path
      ? `@/registry/default/${item.files[0].path}`
      : ""

    index += `
  "${item.name}": {
    name: "${item.name}",
    description: "${item.description ?? ""}",
    type: "${item.type}",
    registryDependencies: ${JSON.stringify(item.registryDependencies)},
    files: [${item.files?.map((file: any) => {
      const filePath = `registry/default/${typeof file === "string" ? file : file.path}`
      const resolvedFilePath = path.resolve(filePath)
      return typeof file === "string"
        ? `"${resolvedFilePath}"`
        : `{
      path: "${filePath}",
      type: "${file.type}",
      target: "${file.target ?? ""}"
    }`
    })}],
    component: ${
      componentPath
        ? `React.lazy(async () => {
      const mod = await import("${componentPath}")
      const exportName = Object.keys(mod).find(key => typeof mod[key] === 'function' || typeof mod[key] === 'object') || item.name
      return { default: mod.default || mod[exportName] }
    })`
        : "null"
    },
    categories: ${JSON.stringify(item.categories)},
    meta: ${JSON.stringify(item.meta)},
  },`
  }

  index += `
  }`

  console.log(`#️⃣  ${Object.keys(registry.items).length} items found`)

  rimraf.sync(path.join(process.cwd(), "registry/__index__.tsx"))
  await fs.writeFile(path.join(process.cwd(), "registry/__index__.tsx"), index)
}

async function buildRegistryJsonFile() {
  const fixedRegistry = {
    ...registry,
    items: registry.items.map((item: any) => {
      const files = item.files?.map((file: any) => {
        return {
          ...file,
          path: `registry/default/${file.path}`,
        }
      })

      return {
        ...item,
        files,
      }
    }),
  }

  rimraf.sync(path.join(process.cwd(), "registry.json"))
  await fs.writeFile(
    path.join(process.cwd(), "registry.json"),
    JSON.stringify(fixedRegistry, null, 2)
  )

  await fs.cp(path.join(process.cwd(), "registry.json"), path.join(process.cwd(), "public/r/registry.json"), {
    recursive: true,
  })
}

async function buildRegistry() {
  return new Promise((resolve, reject) => {
    const process = exec(`bunx --bun shadcn build registry.json --output public/r`)

    process.on("exit", (code) => {
      if (code === 0) {
        resolve(undefined)
      } else {
        reject(new Error(`Process exited with code ${code}`))
      }
    })
  })
}

async function loadBuildingBlockItems(usedNames: Set<string>) {
  const buildingBlocksDir = path.join(process.cwd(), "public", "building-blocks")
  const entries = await fs.readdir(buildingBlocksDir, { withFileTypes: true })
  const items: RegistryItem[] = []

  for (const entry of entries) {
    if (!entry.isFile() || !entry.name.endsWith(".json")) {
      continue
    }

    const sourcePath = path.join(buildingBlocksDir, entry.name)
    let parsed: RegistryItem

    try {
      parsed = JSON.parse(await fs.readFile(sourcePath, "utf8")) as RegistryItem
    } catch {
      continue
    }

    if (!parsed?.name) {
      continue
    }

    if (usedNames.has(parsed.name)) {
      continue
    }

    usedNames.add(parsed.name)
    items.push({
      ...parsed,
      $schema: parsed.$schema ?? REGISTRY_ITEM_SCHEMA,
      type: parsed.type ?? "registry:component",
    })
  }

  return items
}

async function buildExampleAppItems(usedNames: Set<string>) {
  const exampleAppsRoot = path.join(process.cwd(), "registry", "example-apps", "default")
  const appDirs = await getSubdirectories(exampleAppsRoot)
  const items: RegistryItem[] = []

  for (const appName of appDirs) {
    const appDir = path.join(exampleAppsRoot, appName)
    const metadataPath = path.join(appDir, "metadata.json")

    let metadata: Record<string, any> = {}
    try {
      metadata = JSON.parse(await fs.readFile(metadataPath, "utf8")) as Record<string, any>
    } catch {
      continue
    }

    const includePath = (relativePath: string) => {
      const normalized = toPosix(relativePath)
      const firstSegment = normalized.split("/")[0]
      return firstSegment ? EXAMPLE_APP_ROOTS.has(firstSegment) : false
    }

    const collected = await collectFilesWithContent({
      sourceRoot: appDir,
      virtualPathPrefix: `registry/example-apps/default/${appName}`,
      targetPrefix: `components/example-apps/${appName}`,
      includePath,
    })

    if (collected.files.length === 0) {
      continue
    }

    const preferredName = usedNames.has(appName) ? `example-app-${appName}` : appName
    const name = makeUniqueName(preferredName, usedNames)
    const registryDependencies = buildRegistryDependencyUrls(
      collected.uiRegistryDependencies
    )

    items.push({
      $schema: REGISTRY_ITEM_SCHEMA,
      name,
      type: "registry:block",
      title: metadata.title ?? appName,
      description: metadata.description ?? `Example app "${appName}"`,
      files: collected.files,
      categories: Array.from(
        new Set(["example-app", metadata.category, ...(metadata.tags ?? [])].filter(Boolean))
      ),
      dependencies:
        collected.dependencies.size > 0
          ? Array.from(collected.dependencies).sort((a, b) => a.localeCompare(b))
          : undefined,
      registryDependencies:
        registryDependencies.length > 0 ? registryDependencies : undefined,
      meta: {
        source: "example-app",
        appName,
        routes: metadata.routes ?? [],
      },
    })
  }

  return items
}

async function discoverTemplatePaths(templateRoot: string) {
  const templatePaths: string[] = []
  const topLevel = await getSubdirectories(templateRoot)

  for (const dirName of topLevel) {
    const absolute = path.join(templateRoot, dirName)
    const isTemplate = await directoryLooksLikeTemplate(absolute)

    if (isTemplate) {
      templatePaths.push(dirName)
      continue
    }

    const nested = await getSubdirectories(absolute)
    for (const nestedDir of nested) {
      const nestedPath = path.join(absolute, nestedDir)
      const looksLikeTemplate = await directoryLooksLikeTemplate(nestedPath)
      if (looksLikeTemplate) {
        templatePaths.push(toPosix(path.join(dirName, nestedDir)))
      }
    }
  }

  return templatePaths
}

async function buildPageTemplateItems(usedNames: Set<string>) {
  const templatesRoot = path.join(
    process.cwd(),
    "registry",
    "page-templates",
    "default",
    "templates"
  )
  const templatePaths = await discoverTemplatePaths(templatesRoot)
  const items: RegistryItem[] = []
  const templateUtilsPath = path.join(process.cwd(), "lib", "page-templates", "utils.ts")
  const svgRoot = path.join(process.cwd(), "registry", "default", "ui", "svgs")
  let templateUtilsContent: string | null = null

  for (const templatePath of templatePaths) {
    const absoluteTemplatePath = path.join(templatesRoot, templatePath)
    const slug = templatePath.replace(/\//g, "-")
    const collected = await collectFilesWithContent({
      sourceRoot: absoluteTemplatePath,
      virtualPathPrefix: `registry/page-templates/default/templates/${templatePath}`,
      targetPrefix: `components/page-templates/${templatePath}`,
    })

    if (collected.files.length === 0) {
      continue
    }

    if (collected.hasTemplateUtils) {
      if (templateUtilsContent === null) {
        templateUtilsContent = await fs.readFile(templateUtilsPath, "utf8")
      }

      collected.files.push({
        path: "registry/page-templates/default/lib/page-templates/utils.ts",
        type: "registry:lib",
        target: "lib/page-templates/utils.ts",
        content: templateUtilsContent,
      })
    }

    for (const svgName of collected.uiSvgDependencies) {
      const svgPath = path.join(svgRoot, `${svgName}.tsx`)
      try {
        const svgContent = await fs.readFile(svgPath, "utf8")
        collected.files.push({
          path: `registry/default/ui/svgs/${svgName}.tsx`,
          type: "registry:ui",
          target: `components/ui/svgs/${svgName}.tsx`,
          content: svgContent,
        })
      } catch {
        continue
      }
    }

    const name = makeUniqueName(`template-${slug}`, usedNames)
    const registryDependencies = buildRegistryDependencyUrls(
      collected.uiRegistryDependencies
    )
    const category = templatePath.split("/")[0] ?? "template"

    items.push({
      $schema: REGISTRY_ITEM_SCHEMA,
      name,
      type: "registry:block",
      title: templatePath,
      description: `Page template "${templatePath}"`,
      files: collected.files,
      categories: ["page-template", category],
      dependencies:
        collected.dependencies.size > 0
          ? Array.from(collected.dependencies).sort((a, b) => a.localeCompare(b))
          : undefined,
      registryDependencies:
        registryDependencies.length > 0 ? registryDependencies : undefined,
      meta: {
        source: "page-template",
        templatePath,
      },
    })
  }

  return items
}

async function mergeAdditionalRegistrySources() {
  const rootRegistryPath = path.join(process.cwd(), "registry.json")
  const publicRegistryPath = path.join(process.cwd(), "public", "r", "registry.json")
  const publicRegistryDir = path.join(process.cwd(), "public", "r")

  const rootRegistry = JSON.parse(
    await fs.readFile(rootRegistryPath, "utf8")
  ) as { name?: string; homepage?: string; items: RegistryItem[] }

  const publicRegistry = JSON.parse(
    await fs.readFile(publicRegistryPath, "utf8")
  ) as { name?: string; homepage?: string; items: RegistryItem[] }

  const usedNames = new Set(
    (publicRegistry.items ?? [])
      .map((item) => item?.name)
      .filter((name): name is string => typeof name === "string" && name.length > 0)
  )

  const [buildingBlocks, exampleApps, pageTemplates] = await Promise.all([
    loadBuildingBlockItems(usedNames),
    buildExampleAppItems(usedNames),
    buildPageTemplateItems(usedNames),
  ])

  const additionalItems = [...buildingBlocks, ...exampleApps, ...pageTemplates]
  if (additionalItems.length === 0) {
    return
  }

  for (const item of additionalItems) {
    const itemPath = path.join(publicRegistryDir, `${item.name}.json`)
    await fs.writeFile(itemPath, JSON.stringify(item, null, 2))
  }

  const indexItems = additionalItems.map(stripFileContentFromItem)

  publicRegistry.items = mergeUniqueItems(publicRegistry.items ?? [], indexItems)
  rootRegistry.items = mergeUniqueItems(rootRegistry.items ?? [], indexItems)

  await fs.writeFile(publicRegistryPath, JSON.stringify(publicRegistry, null, 2))
  await fs.writeFile(rootRegistryPath, JSON.stringify(rootRegistry, null, 2))
}

try {
  console.log("🧪 Verifying ui registry coverage...")
  await verifyUiRegistryCoverage()

  console.log("🗂️ Building registry/__index__.tsx...")
  await buildRegistryIndex()

  console.log("💅 Building registry.json...")
  await buildRegistryJsonFile()

  console.log("🏗️ Building registry...")
  await buildRegistry()

  console.log("🧩 Merging building blocks, example apps, and templates into registry...")
  await mergeAdditionalRegistrySources()

  console.log("✅ Registry build completed successfully!")
} catch (error) {
  console.error(error)
  process.exit(1)
}
