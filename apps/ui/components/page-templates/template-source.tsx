import fs from "node:fs/promises"
import path from "node:path"
import * as React from "react"

import { resolveTemplateRegistryRoot } from "@/lib/page-templates/registry"
import type { PageTemplate } from "@/lib/page-templates/utils"
import { getTemplateRegistryPath } from "@/lib/page-templates/utils"
import { cn } from "@/lib/utils"

import { TemplateSourceClient } from "./template-source-client"

export async function TemplateSource({
  template,
  className,
}: React.ComponentProps<"div"> & {
  template: PageTemplate
}) {
  const templateRoot = resolveTemplateRegistryRoot()
  const templateRegistryPath = getTemplateRegistryPath(template)

  // Load all file contents
  const filesWithContent = await Promise.all(
    template.files.map(async (file) => {
      try {
        const filePath = path.join(
          templateRoot,
          templateRegistryPath,
          file.path
        )
        const content = await fs.readFile(filePath, "utf-8")
        return { ...file, content }
      } catch (error) {
        console.error(`Failed to read file ${file.path}:`, error)
        return { ...file, content: `// Error loading file: ${file.path}` }
      }
    })
  )

  if (!filesWithContent.length) {
    return (
      <div className="flex items-center justify-center p-10">
        <p className="text-sm text-muted-foreground">
          Code not available for this template.
        </p>
      </div>
    )
  }

  return (
    <div className={cn("relative h-full", className)}>
      <TemplateSourceClient files={filesWithContent} />
    </div>
  )
}
