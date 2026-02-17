import "server-only"

import fs from "node:fs"
import path from "node:path"

import type { ExampleApp, ExampleAppCategory } from "./types"

const EXAMPLE_APPS_ROOT = path.join(
  process.cwd(),
  "registry",
  "example-apps",
  "default"
)

/**
 * Registry of all example app categories
 */
export const EXAMPLE_APP_CATEGORIES: ExampleAppCategory[] = [
  {
    slug: "dashboards",
    name: "Dashboards",
    description: "Full-featured dashboard applications with data visualization and analytics",
    apps: [
      { name: "dashboard-1" },
      { name: "dashboard-2" },
      { name: "dashboard-3" },
    ],
  },
  {
    slug: "project-management",
    name: "Project Management",
    description: "Project and task management applications",
    apps: [{ name: "leads" }],
  },
  {
    slug: "e-commerce",
    name: "E-Commerce",
    description: "Online shopping and product catalog applications",
    apps: [{ name: "rentals" }],
  },
  {
    slug: "social",
    name: "Social Media",
    description: "Social networking and community applications",
    apps: [{ name: "maps" }],
  },
  {
    slug: "productivity",
    name: "Productivity",
    description: "Tools for productivity and workflow management",
    apps: [
      { name: "bookmarks" },
      { name: "calendar" },
      { name: "emails" },
      { name: "files" },
    ],
  },
]

/**
 * Registry of all example apps with their metadata
 */
export const EXAMPLE_APPS: Record<string, ExampleApp> = {
  "dashboard-1": {
    name: "dashboard-1",
    slug: "dashboard-1",
    title: "Analytics Dashboard",
    description:
      "A comprehensive analytics dashboard with financial charts, employee management, and customizable stats cards",
    category: "dashboards",
    tags: ["analytics", "charts", "tables", "data-visualization"],
    isNew: true,
    files: [
      {
        path: "app/page.tsx",
        type: "page",
      },
      {
        path: "app/layout.tsx",
        type: "layout",
      },
      {
        path: "components/dashboard/sidebar.tsx",
        type: "component",
      },
      {
        path: "components/dashboard/header.tsx",
        type: "component",
      },
      {
        path: "components/dashboard/content.tsx",
        type: "component",
      },
      {
        path: "store/dashboard-store.ts",
        type: "lib",
      },
    ],
    routes: [
      {
        path: "/",
        title: "Dashboard",
        description: "Main analytics dashboard with charts and tables",
      },
    ],
  },
  "dashboard-2": {
    name: "dashboard-2",
    slug: "dashboard-2",
    title: "Business Dashboard",
    description:
      "A business-focused dashboard application with metrics, charts, and data management features",
    category: "dashboards",
    tags: ["business", "analytics", "metrics"],
    isNew: true,
    files: [
      {
        path: "app/page.tsx",
        type: "page",
      },
      {
        path: "app/layout.tsx",
        type: "layout",
      },
      {
        path: "components/dashboard/sidebar.tsx",
        type: "component",
      },
      {
        path: "components/dashboard/header.tsx",
        type: "component",
      },
      {
        path: "components/dashboard/content.tsx",
        type: "component",
      },
    ],
    routes: [
      {
        path: "/",
        title: "Dashboard",
        description: "Business dashboard overview",
      },
    ],
  },
  "dashboard-3": {
    name: "dashboard-3",
    slug: "dashboard-3",
    title: "Modern Dashboard",
    description:
      "A modern dashboard design with clean layout and intuitive navigation",
    category: "dashboards",
    tags: ["modern", "clean", "minimalist"],
    isNew: true,
    files: [
      {
        path: "app/page.tsx",
        type: "page",
      },
      {
        path: "app/layout.tsx",
        type: "layout",
      },
      {
        path: "components/dashboard/sidebar.tsx",
        type: "component",
      },
      {
        path: "components/dashboard/header.tsx",
        type: "component",
      },
      {
        path: "components/dashboard/content.tsx",
        type: "component",
      },
    ],
    routes: [
      {
        path: "/",
        title: "Dashboard",
        description: "Modern dashboard interface",
      },
    ],
  },
}

function getRegisteredExampleApps(): Record<string, ExampleApp> {
  const discovered = discoverExampleApps()
  const discoveredByName = Object.fromEntries(
    discovered.map((app) => [app.name, app])
  )

  return {
    ...EXAMPLE_APPS,
    ...discoveredByName,
  }
}

/**
 * Get all example app categories
 */
export function getExampleAppCategories(): ExampleAppCategory[] {
  return EXAMPLE_APP_CATEGORIES
}

/**
 * Get a specific category by slug
 */
export function getExampleAppCategory(
  slug: string
): ExampleAppCategory | undefined {
  return EXAMPLE_APP_CATEGORIES.find((cat) => cat.slug === slug)
}

/**
 * Get all example apps
 */
export function getAllExampleApps(): ExampleApp[] {
  return Object.values(getRegisteredExampleApps())
}

/**
 * Get an example app by name
 */
export function getExampleAppByName(name: string): ExampleApp | undefined {
  return getRegisteredExampleApps()[name]
}

/**
 * Get all example apps in a category
 */
export function getExampleAppsByCategory(category: string): ExampleApp[] {
  return getAllExampleApps().filter((app) => app.category === category)
}

/**
 * Check if an example app exists in the file system
 */
export function exampleAppExists(name: string): boolean {
  const appPath = path.join(EXAMPLE_APPS_ROOT, name)
  return fs.existsSync(appPath)
}

/**
 * Get the file system path for an example app
 */
export function getExampleAppPath(name: string): string {
  return path.join(EXAMPLE_APPS_ROOT, name)
}

/**
 * Discover all example apps from the file system
 */
export function discoverExampleApps(): ExampleApp[] {
  if (!fs.existsSync(EXAMPLE_APPS_ROOT)) {
    return []
  }

  const discovered: ExampleApp[] = []
  const entries = fs.readdirSync(EXAMPLE_APPS_ROOT, { withFileTypes: true })

  for (const entry of entries) {
    if (entry.isDirectory()) {
      const appPath = path.join(EXAMPLE_APPS_ROOT, entry.name)
      const metadataPath = path.join(appPath, "metadata.json")

      if (fs.existsSync(metadataPath)) {
        try {
          const metadata = JSON.parse(fs.readFileSync(metadataPath, "utf-8"))
          discovered.push({
            name: entry.name,
            slug: entry.name,
            ...metadata,
            files: metadata.files || [],
            routes: metadata.routes || [],
          })
        } catch (error) {
          console.error(`Failed to parse metadata for ${entry.name}:`, error)
        }
      }
    }
  }

  return discovered
}
