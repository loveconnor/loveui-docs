import {
  getTemplateCategories,
  getTemplateCategory,
  type TemplateCategory,
} from "@/lib/page-templates/registry"

export { type TemplateCategory }

export const categories: TemplateCategory[] = getTemplateCategories()

export function getCategory(slug: string): TemplateCategory | undefined {
  return getTemplateCategory(slug)
}
