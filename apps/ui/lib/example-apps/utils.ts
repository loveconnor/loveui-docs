import type { ExampleApp } from "./types"

/**
 * Format an example app name to a readable title
 */
export function formatAppName(name: string): string {
  return name
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}

/**
 * Get the preview URL for an example app
 */
export function getAppPreviewUrl(appName: string): string {
  return `/examples/preview/${appName}`
}

/**
 * Get the source view URL for an example app
 */
export function getAppSourceUrl(appName: string, filePath?: string): string {
  if (filePath) {
    return `/examples/${appName}?file=${encodeURIComponent(filePath)}`
  }
  return `/examples/${appName}`
}

/**
 * Get all files for an example app from the file system
 */
export function getAppFiles(app: ExampleApp): string[] {
  return app.files.map((file) => file.path)
}

/**
 * Check if a file path is a valid source file
 */
export function isSourceFile(filePath: string): boolean {
  const SOURCE_FILE_EXTENSIONS = [
    ".tsx",
    ".ts",
    ".jsx",
    ".js",
    ".css",
    ".json",
    ".mdx",
    ".md",
  ]
  return SOURCE_FILE_EXTENSIONS.some((ext) => filePath.endsWith(ext))
}

/**
 * Group files by type/directory
 */
export function groupFilesByDirectory(files: string[]): Record<string, string[]> {
  const grouped: Record<string, string[]> = {}

  for (const file of files) {
    const dir = file.includes("/") ? file.split("/")[0]! : "root"
    if (!grouped[dir]) {
      grouped[dir] = []
    }
    grouped[dir].push(file)
  }

  return grouped
}
