import "server-only"

import fs from "node:fs"
import path from "node:path"

import type { PageTemplate, TemplateFile } from "@/lib/page-templates/utils"

export interface TemplateCategory {
  slug: string
  name: string
  templates: { name: string }[]
  isNew?: boolean
}

const TEMPLATE_ROOT_CANDIDATES = [
  path.join(
    process.cwd(),
    "registry",
    "page-templates",
    "default",
    "templates"
  ),
  path.join(
    process.cwd(),
    "apps",
    "ui",
    "registry",
    "page-templates",
    "default",
    "templates"
  ),
  path.join(
    process.cwd(),
    "..",
    "apps",
    "ui",
    "registry",
    "page-templates",
    "default",
    "templates"
  ),
  path.join(
    process.cwd(),
    "..",
    "..",
    "apps",
    "ui",
    "registry",
    "page-templates",
    "default",
    "templates"
  ),
]

const MAIN_COMPONENT_CANDIDATES = [
  "app/page.tsx",
  "app/page.ts",
  "app/page.jsx",
  "app/page.js",
]

const SOURCE_FILE_EXTENSIONS = new Set([
  ".tsx",
  ".ts",
  ".jsx",
  ".js",
  ".css",
  ".json",
  ".mdx",
  ".md",
  ".txt",
])

const KNOWN_TEMPLATE_META: Record<
  string,
  Pick<PageTemplate, "title" | "description">
> = {
  "template-auth-01": {
    title: "Sign In",
    description:
      "A clean and modern sign-in page with email/password fields, social login options, and dark mode support.",
  },
  "auth/one": {
    title: "Sign In",
    description:
      "A clean and modern sign-in page with email/password fields, social login options, and dark mode support.",
  },
  "template-auth-02": {
    title: "Login",
    description:
      "A clean and modern login page with card-based design and animated background effects.",
  },
  "auth/two": {
    title: "Login",
    description:
      "A clean and modern login page with card-based design and animated background effects.",
  },
  "template-auth-03": {
    title: "Login with Fields",
    description:
      "A centered login form using the Field component with proper validation and GitHub authentication.",
  },
  "auth/three": {
    title: "Login with Fields",
    description:
      "A centered login form using the Field component with proper validation and GitHub authentication.",
  },
  "auth/four": {
    title: "Welcome Back",
    description:
      "A polished sign-in page with an outlined card, email/password fields, and Google/GitHub social actions.",
  },
  "auth/five": {
    title: "Sign In (Soft Card)",
    description:
      "A compact sign-in layout inside a muted card with email-first entry and social login alternatives.",
  },
  "auth/six": {
    title: "Sign In (Minimal)",
    description:
      "A minimal sign-in template with email/password fields, social buttons, and streamlined account links.",
  },
  "auth/seven": {
    title: "Create Account",
    description:
      "A sign-up page with an outlined card, email/password registration, and Google/GitHub social actions.",
  },
  "auth/eight": {
    title: "Get Started (Soft Card)",
    description:
      "A soft-card sign-up template with email-first onboarding and social provider continuation options.",
  },
  "auth/nine": {
    title: "Sign Up (Minimal)",
    description:
      "A minimal sign-up layout with email/password fields, social actions, and a clear sign-in path.",
  },
}

const WORD_NUMBER_ORDER: Record<string, number> = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10,
  eleven: 11,
  twelve: 12,
  thirteen: 13,
  fourteen: 14,
  fifteen: 15,
  sixteen: 16,
  seventeen: 17,
  eighteen: 18,
  nineteen: 19,
  twenty: 20,
}

type RegistryData = {
  templates: PageTemplate[]
  categories: TemplateCategory[]
}

let cachedRegistryData: RegistryData | null = null

const isDirectory = (entryPath: string): boolean => {
  try {
    return fs.statSync(entryPath).isDirectory()
  } catch {
    return false
  }
}

const resolveMainComponent = (files: TemplateFile[]): string | undefined => {
  const paths = new Set(files.map((file) => file.path))

  for (const candidate of MAIN_COMPONENT_CANDIDATES) {
    if (paths.has(candidate)) {
      return candidate.replace(/\.[^/.]+$/, "")
    }
  }

  const fallback = files.find((file) =>
    /(^|\/)page\.(tsx|ts|jsx|js)$/.test(file.path)
  )

  return fallback?.path.replace(/\.[^/.]+$/, "")
}

const toPosixPath = (filePath: string): string =>
  filePath.split(path.sep).join("/")

const extractOrderToken = (value: string): string =>
  value.toLowerCase().split(/[-_/]/).filter(Boolean).at(-1) ||
  value.toLowerCase()

const parseOrderValue = (value: string): number | null => {
  const token = extractOrderToken(value)

  if (/^\d+$/.test(token)) {
    return Number(token)
  }

  return WORD_NUMBER_ORDER[token] ?? null
}

const compareByOrderThenLabel = (a: string, b: string): number => {
  const aOrder = parseOrderValue(a)
  const bOrder = parseOrderValue(b)

  if (aOrder !== null && bOrder !== null && aOrder !== bOrder) {
    return aOrder - bOrder
  }

  if (aOrder !== null && bOrder === null) return -1
  if (aOrder === null && bOrder !== null) return 1

  return a.localeCompare(b, undefined, { numeric: true })
}

const collectTemplateFiles = (dirPath: string): TemplateFile[] => {
  const files: TemplateFile[] = []

  const walk = (currentDir: string) => {
    const entries = fs.readdirSync(currentDir, { withFileTypes: true })

    for (const entry of entries) {
      if (entry.name.startsWith(".")) continue
      if (entry.name === "node_modules") continue

      const absolutePath = path.join(currentDir, entry.name)

      if (entry.isDirectory()) {
        walk(absolutePath)
        continue
      }

      const extension = path.extname(entry.name).toLowerCase()
      if (!SOURCE_FILE_EXTENSIONS.has(extension)) continue

      const relativePath = toPosixPath(path.relative(dirPath, absolutePath))
      files.push({ path: relativePath })
    }
  }

  walk(dirPath)

  return files.sort((a, b) =>
    a.path.localeCompare(b.path, undefined, { numeric: true })
  )
}

const titleCase = (value: string): string =>
  value
    .split(/[-_]/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ")

const slugify = (value: string): string =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")

const isVariantToken = (token: string): boolean =>
  /^(?:\d+|one|two|three|four|five|six|seven|eight|nine|ten)$/i.test(token)

const inferCategoryFromTemplateName = (templateName: string): string => {
  const normalized = templateName.replace(/^template-/, "")
  const parts = normalized.split("-").filter(Boolean)

  if (parts.length <= 1) {
    return slugify(normalized)
  }

  const last = parts.at(-1)
  if (last && isVariantToken(last)) {
    return slugify(parts.slice(0, -1).join("-"))
  }

  return slugify(normalized)
}

const findTemplateRoot = (): string | null => {
  for (const candidate of TEMPLATE_ROOT_CANDIDATES) {
    if (isDirectory(candidate)) {
      return candidate
    }
  }

  return null
}

export const resolveTemplateRegistryRoot = (): string => {
  const root = findTemplateRoot()

  if (!root) {
    throw new Error("Could not locate page templates registry directory.")
  }

  return root
}

const directoryLooksLikeTemplate = (directoryPath: string): boolean =>
  MAIN_COMPONENT_CANDIDATES.some((filePath) =>
    fs.existsSync(path.join(directoryPath, filePath))
  )

const getSubdirectories = (dirPath: string): string[] =>
  fs
    .readdirSync(dirPath, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && !entry.name.startsWith("."))
    .map((entry) => entry.name)
    .sort(compareByOrderThenLabel)

const buildTemplate = ({
  id,
  registryPath,
  categorySlug,
  titleSource,
}: {
  id: string
  registryPath: string
  categorySlug: string
  titleSource: string
}): PageTemplate | null => {
  const root = findTemplateRoot()
  if (!root) return null

  const absoluteTemplatePath = path.join(root, registryPath)
  const files = collectTemplateFiles(absoluteTemplatePath)
  const mainComponent = resolveMainComponent(files)

  const knownMeta = KNOWN_TEMPLATE_META[id] || KNOWN_TEMPLATE_META[registryPath]
  const categoryName = titleCase(categorySlug).toLowerCase()

  return {
    name: id,
    registryPath,
    category: categorySlug,
    title: knownMeta?.title || titleCase(titleSource),
    description:
      knownMeta?.description ||
      `A ${categoryName} template built with React and Tailwind CSS.`,
    files,
    mainComponent,
  }
}

const getRegistryData = (): RegistryData => {
  if (cachedRegistryData) {
    return cachedRegistryData
  }

  const root = findTemplateRoot()
  if (!root) {
    cachedRegistryData = { templates: [], categories: [] }
    return cachedRegistryData
  }

  const templates: PageTemplate[] = []
  const topLevelDirs = getSubdirectories(root)

  for (const topLevelDir of topLevelDirs) {
    const topLevelPath = path.join(root, topLevelDir)

    if (directoryLooksLikeTemplate(topLevelPath)) {
      const categorySlug = inferCategoryFromTemplateName(topLevelDir)
      const template = buildTemplate({
        id: topLevelDir,
        registryPath: topLevelDir,
        categorySlug,
        titleSource: topLevelDir,
      })

      if (template) templates.push(template)
      continue
    }

    const categorySlug = slugify(topLevelDir)
    const nestedTemplateDirs = getSubdirectories(topLevelPath)

    for (const nestedTemplateDir of nestedTemplateDirs) {
      const nestedPath = path.join(topLevelPath, nestedTemplateDir)
      if (!directoryLooksLikeTemplate(nestedPath)) continue

      const template = buildTemplate({
        id: `${categorySlug}-${slugify(nestedTemplateDir)}`,
        registryPath: toPosixPath(path.join(topLevelDir, nestedTemplateDir)),
        categorySlug,
        titleSource: nestedTemplateDir,
      })

      if (template) templates.push(template)
    }
  }

  const uniqueTemplates: PageTemplate[] = []
  const seen = new Map<string, number>()

  for (const template of templates) {
    const previousCount = seen.get(template.name) ?? 0
    const nextCount = previousCount + 1
    seen.set(template.name, nextCount)

    if (nextCount === 1) {
      uniqueTemplates.push(template)
      continue
    }

    uniqueTemplates.push({
      ...template,
      name: `${template.name}-${nextCount}`,
    })
  }

  const categoryMap = new Map<string, TemplateCategory>()

  for (const template of uniqueTemplates) {
    const categorySlug =
      template.category || inferCategoryFromTemplateName(template.name)
    const existing = categoryMap.get(categorySlug)

    if (existing) {
      existing.templates.push({ name: template.name })
      continue
    }

    categoryMap.set(categorySlug, {
      slug: categorySlug,
      name: titleCase(categorySlug),
      templates: [{ name: template.name }],
    })
  }

  const categories = Array.from(categoryMap.values())
    .map((category) => ({
      ...category,
      templates: category.templates.sort((a, b) =>
        compareByOrderThenLabel(a.name, b.name)
      ),
    }))
    .sort((a, b) => compareByOrderThenLabel(a.slug, b.slug))

  cachedRegistryData = {
    templates: uniqueTemplates.sort((a, b) =>
      compareByOrderThenLabel(
        a.registryPath || a.name,
        b.registryPath || b.name
      )
    ),
    categories,
  }

  return cachedRegistryData
}

export const getTemplateCategories = (): TemplateCategory[] =>
  getRegistryData().categories

export const getTemplateCategory = (
  slug: string
): TemplateCategory | undefined =>
  getRegistryData().categories.find((category) => category.slug === slug)

export const getTemplates = (): PageTemplate[] => getRegistryData().templates

export const getTemplateByName = (name: string): PageTemplate | undefined =>
  getRegistryData().templates.find((template) => template.name === name)

export const getTemplatesByNames = (names: string[]): PageTemplate[] => {
  const templatesByName = new Map(
    getRegistryData().templates.map((template) => [template.name, template])
  )

  return names
    .map((name) => templatesByName.get(name))
    .filter((template): template is PageTemplate => template !== undefined)
}
