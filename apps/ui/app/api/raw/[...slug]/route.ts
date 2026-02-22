import fs from "fs/promises"
import path from "path"
import { NextRequest, NextResponse } from "next/server"

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string[] }> }
) {
  const { slug } = await params
  const safeSlug = slug
    .map((segment) => decodeURIComponent(segment))
    .filter((segment) => segment && segment !== "." && segment !== "..")

  if (safeSlug.length === 0 || safeSlug.length !== slug.length) {
    return NextResponse.json({ error: "Invalid path" }, { status: 400 })
  }

  const root = process.cwd()

  const candidatePaths: string[] = []

  // Keep existing docs short-path behavior: /api/raw/docs/<name>
  if (safeSlug.length === 2 && safeSlug[0] === "docs") {
    candidatePaths.push(path.join(root, "content", "docs", "(root)", safeSlug[1]!))
  }

  // Existing behavior: files under /content
  candidatePaths.push(path.join(root, "content", ...safeSlug))

  // New behavior: allow top-level markdown files like /api/raw/CONTRIBUTING.md
  candidatePaths.push(path.join(root, ...safeSlug))

  // Monorepo fallback: when Next runs from repo root, app-level files live under apps/ui
  candidatePaths.push(path.join(root, "apps", "ui", ...safeSlug))

  try {
    let content: string | null = null

    for (const filePath of candidatePaths) {
      const mdxPath = filePath.endsWith(".mdx") ? filePath : `${filePath}.mdx`
      const mdPath = filePath.endsWith(".md") ? filePath : `${filePath}.md`

      try {
        content = await fs.readFile(mdxPath, "utf-8")
        break
      } catch {
        try {
          content = await fs.readFile(mdPath, "utf-8")
          break
        } catch {
          continue
        }
      }
    }

    if (!content) {
      return NextResponse.json({ error: "File not found" }, { status: 404 })
    }

    // Return raw markdown with appropriate headers
    return new NextResponse(content, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "public, max-age=3600",
      },
    })
  } catch {
    return NextResponse.json({ error: "File not found" }, { status: 404 })
  }
}
