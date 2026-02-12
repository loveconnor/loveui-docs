import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { getTemplateByName } from "@/lib/page-templates/registry"
import { getTemplateRegistryPath } from "@/lib/page-templates/utils"

type Props = {
  params: Promise<{ name: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { name } = await params
  const template = getTemplateByName(name)

  return {
    title: `${template?.title || name} - Template Preview`,
    description: `Full page preview of ${template?.title || name} template`,
  }
}

export default async function PreviewPage({ params }: Props) {
  const { name } = await params

  // Find the template to get the main component path
  const template = getTemplateByName(name)

  if (!template) {
    notFound()
  }

  let TemplateComponent: React.ComponentType

  try {
    const mainComponentPath = template.mainComponent || "app/page"
    const templateRegistryPath = getTemplateRegistryPath(template)
    TemplateComponent = require(
      `@/registry/page-templates/default/templates/${templateRegistryPath}/${mainComponentPath}`
    ).default
  } catch (error) {
    console.error(`Template ${name} not found:`, error)
    notFound()
  }

  return (
    <div className="h-screen w-full">
      <TemplateComponent />
    </div>
  )
}
