import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { getExampleAppByName } from "@/lib/example-apps"

type Props = {
  params: Promise<{ name: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { name } = await params
  const app = getExampleAppByName(name)

  if (!app) {
    return {
      title: "App Not Found",
    }
  }

  return {
    title: `${app.title} - Example App Preview`,
    description: app.description,
  }
}

export default async function ExampleAppPreviewPage({ params }: Props) {
  const { name } = await params
  const app = getExampleAppByName(name)

  if (!app) {
    notFound()
  }

  let AppComponent: React.ComponentType

  try {
    // Load the instruction/wrapper component from index.tsx
    // Dashboard apps are standalone and should be run independently
    AppComponent = require(
      `@/registry/example-apps/default/${name}/index`
    ).default
  } catch (error) {
    console.error(`Failed to load example app ${name}:`, error)
    notFound()
  }

  return (
    <div className="h-[calc(100svh-var(--header-height))] w-full overflow-y-auto overflow-x-hidden [--sidebar-top-offset:var(--header-height)]">
      <AppComponent />
    </div>
  )
}
