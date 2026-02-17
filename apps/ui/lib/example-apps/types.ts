/**
 * Type definitions for example apps
 */

export interface ExampleApp {
  name: string
  slug: string
  title: string
  description: string
  category: string
  image?: string
  tags?: string[]
  files: ExampleAppFile[]
  routes?: ExampleAppRoute[]
  isNew?: boolean
}

export interface ExampleAppFile {
  path: string
  type: "component" | "page" | "layout" | "config" | "style" | "lib" | "other"
  target?: string
}

export interface ExampleAppRoute {
  path: string
  title: string
  description?: string
}

export interface ExampleAppCategory {
  slug: string
  name: string
  description: string
  apps: { name: string }[]
  isNew?: boolean
}
