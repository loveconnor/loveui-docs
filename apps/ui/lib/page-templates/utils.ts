import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

const basePath = (process.env.NEXT_PUBLIC_BASE_PATH || "/ui").replace(/\/$/, "")

// Template file structure
export interface TemplateFile {
  path: string // e.g., "app/page.tsx" or "components/auth-page.tsx"
  content?: string // Will be loaded dynamically
}

// Placeholder template data structure
export interface PageTemplate {
  name: string // Route-safe identifier (used in URLs)
  title: string
  description?: string
  files: TemplateFile[] // Array of files that make up this template
  mainComponent?: string // Path to the main component file (for preview)
  registryPath?: string // Path under registry/page-templates/default/templates
  category?: string
}

export const getTemplateRegistryPath = (template: PageTemplate): string =>
  template.registryPath || template.name

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const assetPath = (path: string): string => {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`

  return `${basePath}${normalizedPath}`
}
