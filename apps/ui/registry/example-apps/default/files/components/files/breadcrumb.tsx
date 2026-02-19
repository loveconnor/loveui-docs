"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowRight01Icon, Home01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { cn } from "../../lib/utils"
import { useFilesStore } from "../../store/files-store"

export function Breadcrumb() {
  const pathname = usePathname()
  const { folders } = useFilesStore()

  const getViewName = () => {
    if (pathname === "/starred") return "Starred"
    if (pathname === "/recent") return "Recent"
    if (pathname === "/shared") return "Shared"
    if (pathname === "/trash") return "Trash"
    if (pathname.startsWith("/folder/")) {
      const folderId = pathname.split("/folder/")[1]
      const folder = folders.find((f) => f.id === folderId)
      return folder?.name || "Folder"
    }
    return null
  }

  const viewName = getViewName()

  return (
    <nav className="flex items-center gap-1 text-sm">
      <Link
        href="/"
        className={cn(
          "flex items-center gap-1.5 rounded-md px-2 py-1 transition-colors",
          pathname === "/"
            ? "font-medium text-foreground"
            : "text-muted-foreground hover:bg-muted hover:text-foreground"
        )}
      >
        <HugeiconsIcon icon={Home01Icon} className="size-4" />
        <span>Asset Vault</span>
      </Link>
      {viewName && (
        <>
          <HugeiconsIcon
            icon={ArrowRight01Icon}
            className="size-4 text-muted-foreground"
          />
          <span className="px-2 py-1 font-medium">{viewName}</span>
        </>
      )}
    </nav>
  )
}
