import { promises as fs } from "node:fs"
import path from "node:path"
import { NextResponse } from "next/server"

export async function GET() {
  const cwd = process.cwd()

  const candidates = [
    path.join(cwd, "public", "building-blocks"),
    path.join(cwd, "apps", "ui", "public", "building-blocks"),
    path.join(cwd, "..", "public", "building-blocks"),
    path.join(cwd, "..", "apps", "ui", "public", "building-blocks"),
    path.join(cwd, "..", "..", "apps", "ui", "public", "building-blocks"),
  ]

  const results = []
  for (const candidate of candidates) {
    try {
      await fs.access(candidate)
      results.push({ path: candidate, exists: true })
    } catch {
      results.push({ path: candidate, exists: false })
    }
  }

  return NextResponse.json({
    cwd,
    candidates: results,
    testFile: path.join(cwd, "apps", "ui", "public", "building-blocks", "comp-542.json")
  })
}

export const runtime = "nodejs"
