import type { Metadata } from "next"
import { notFound } from "next/navigation"

import {
  getTemplateCategories,
  getTemplateCategory,
  getTemplatesByNames,
} from "@/lib/page-templates/registry"
import PageHeader from "@/components/page-templates/page-header"
import { TemplatePreview } from "@/components/page-templates/template-preview"

type Props = {
  params: Promise<{ category: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = getTemplateCategory((await params).category)

  if (!category) {
    return {}
  }

  // Get templates to check count
  const templates = getTemplatesByNames(
    category.templates.map((item) => item.name)
  )

  const isSingleTemplate = templates.length === 1

  return {
    title: isSingleTemplate
      ? `${category.name} template built with React and Tailwind CSS - loveui Templates`
      : `${category.name} templates built with React and Tailwind CSS - loveui Templates`,
    description: isSingleTemplate
      ? `A beautiful and accessible ${category.name.toLowerCase()} template built with React and Tailwind CSS.`
      : `A collection of beautiful and accessible ${category.name.toLowerCase()} templates built with React and Tailwind CSS.`,
  }
}

export async function generateStaticParams() {
  return getTemplateCategories().map((category) => ({
    category: category.slug,
  }))
}

export default async function Page({ params }: Props) {
  const category = getTemplateCategory((await params).category)

  if (!category) {
    notFound()
  }

  const templates = getTemplatesByNames(
    category.templates.map((item) => item.name)
  )

  // Determine the description text based on category
  const getDescriptionText = () => {
    return templates.length === 1
      ? `A ${category.name.toLowerCase()} template built with React and Tailwind CSS.`
      : `A growing collection of ${templates.length} ${category.name.toLowerCase()} templates built with React and Tailwind CSS.`
  }

  return (
    <div className="container py-12">
      <PageHeader title={category.name}>{getDescriptionText()}</PageHeader>
      <div className="space-y-16">
        {templates.map((template) => (
          <TemplatePreview key={template.name} template={template} />
        ))}
      </div>
    </div>
  )
}
