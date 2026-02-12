import buildingBlocksRegistry from "@/registry.json"
import { clsx, type ClassValue } from "clsx"
import type { RegistryItem } from "shadcn/registry"
import { twMerge } from "tailwind-merge"

import { categories } from "@/lib/building-blocks-config/components"
import type { RegistryTag } from "@/registry/registry-tags"

const createFallbackTags = (slug: string, name: string) => {
  const tags = new Set<string>([slug, ...slug.split("-").filter(Boolean)])

  for (const token of name.toLowerCase().match(/[a-z0-9]+/g) ?? []) {
    tags.add(token)
  }

  return Array.from(tags)
}

const createFallbackComponents = (): RegistryItem[] => {
  const map = new Map<string, RegistryItem>()

  for (const category of categories) {
    const tags = createFallbackTags(category.slug, category.name)

    for (const item of category.components) {
      const existing = map.get(item.name)

      if (existing) {
        const existingTags = (existing.meta?.tags ?? []) as string[]
        existing.meta = {
          ...existing.meta,
          tags: Array.from(new Set([...existingTags, ...tags])),
        }
        continue
      }

      map.set(item.name, {
        name: item.name,
        type: "registry:component",
        files: [
          {
            path: `registry/building-blocks/default/components/${item.name}.tsx`,
            type: "registry:component",
          },
        ],
        meta: {
          tags,
        },
      } as RegistryItem)
    }
  }

  return Array.from(map.values())
}

const fallbackComponents = createFallbackComponents()
const registryItems = buildingBlocksRegistry.items as unknown as RegistryItem[]
const hasBuildingBlocksInRegistry = registryItems.some((component) =>
  component.name?.startsWith("comp-")
)
const components = hasBuildingBlocksInRegistry
  ? registryItems
  : fallbackComponents
const basePath =
  (process.env.NEXT_PUBLIC_BASE_PATH || "/ui").replace(/\/$/, "")

export const getComponents = (
  selectedTags: RegistryTag[] = []
): RegistryItem[] => {
  return selectedTags.length
    ? components.filter((component) =>
        selectedTags.every(
          (tag) => component.meta?.tags?.includes(tag) ?? false
        )
      )
    : components
}

export const getComponentsByNames = (names: string[]): RegistryItem[] => {
  const componentsMap = new Map(components.map((comp) => [comp.name, comp]))
  const fallbackMap = new Map(
    fallbackComponents.map((comp) => [comp.name, comp])
  )

  return names
    .map((name) => componentsMap.get(name) ?? fallbackMap.get(name))
    .filter((comp): comp is RegistryItem => comp !== undefined)
}

export const getAvailableTags = (
  selectedTags: RegistryTag[]
): RegistryTag[] => {
  if (!selectedTags.length) return []

  // Get all components that have all the selected tags
  const matchingComponents = components.filter((component) =>
    selectedTags.every((tag) => component.meta?.tags?.includes(tag) ?? false)
  )

  // Get all unique tags from the matching components
  const availableTags = new Set<RegistryTag>()
  matchingComponents.forEach((component) => {
    component.meta?.tags?.forEach((tag: RegistryTag) => {
      if (!selectedTags.includes(tag)) {
        availableTags.add(tag)
      }
    })
  })

  return Array.from(availableTags)
}

export const convertRegistryPaths = (content: string): string => {
  return content
    .replace(/@\/registry\/default\/ui/g, "@/components/building-blocks/ui")
    .replace(/@\/registry\/default\/compositions/g, "@/components")
    .replace(/@\/registry\/default\/hooks/g, "@/hooks")
    .replace(/@\/registry\/default\/lib/g, "@/lib")
    .replace(/\/(?:origin)\//g, "/building-blocks/")
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const assetPath = (path: string): string => {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`

  return `${basePath}${normalizedPath}`
}
