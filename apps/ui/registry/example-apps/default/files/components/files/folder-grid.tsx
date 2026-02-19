"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Folder01Icon, MoreVerticalIcon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { Button } from "@loveui/ui/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@loveui/ui/ui/menu"

import { cn } from "../../lib/utils"
import { useFilesStore } from "../../store/files-store"

export function FolderGrid() {
  const { folders } = useFilesStore()
  const pathname = usePathname()

  if (pathname !== "/") {
    return null
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-medium text-muted-foreground">Folders</h2>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {folders.map((folder) => (
          <Link
            key={folder.id}
            href={`/folder/${folder.id}`}
            className={cn(
              "group block cursor-pointer rounded-xl border bg-card p-4 transition-all hover:bg-accent/50"
            )}
          >
            <div className="mb-3 flex items-start justify-between">
              <div
                className="flex size-10 items-center justify-center rounded-lg"
                style={{ backgroundColor: `${folder.color}15` }}
              >
                <HugeiconsIcon
                  icon={Folder01Icon}
                  className="size-5"
                  style={{ color: folder.color }}
                />
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger
                  render={
                    <Button
                      variant="ghost"
                      size="icon"
                      className="size-7"
                      onClick={(e) => e.preventDefault()}
                    >
                      <HugeiconsIcon
                        icon={MoreVerticalIcon}
                        className="size-4"
                      />
                    </Button>
                  }
                />
                <DropdownMenuContent align="end">
                  <DropdownMenuGroup>
                    <DropdownMenuItem>Open</DropdownMenuItem>
                    <DropdownMenuItem>Rename</DropdownMenuItem>
                    <DropdownMenuItem>Share</DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem variant="destructive">
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <p className="mb-0.5 truncate text-sm font-medium">{folder.name}</p>
            <p className="text-xs text-muted-foreground">
              {folder.filesCount} files · {folder.size}
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}
