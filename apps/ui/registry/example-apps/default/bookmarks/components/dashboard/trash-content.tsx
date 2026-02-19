"use client"

import Image from "next/image"
import {
  ArrowCounterClockwise,
  ArrowSquareOut,
  DotsThree,
  Trash,
  XCircle,
} from "@phosphor-icons/react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@loveui/ui/ui/menu"

import { cn } from "../../lib/utils"
import { type Bookmark } from "../../mock-data/bookmarks"
import { useBookmarksStore } from "../../store/bookmarks-store"
import { Button } from "../ui/button"

function TrashedBookmarkCard({ bookmark }: { bookmark: Bookmark }) {
  const { restoreFromTrash, permanentlyDelete } = useBookmarksStore()

  return (
    <div className="group flex items-center gap-4 rounded-lg border bg-card p-4 opacity-75 transition-colors hover:bg-accent/50 hover:opacity-100">
      <div className="flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-muted">
        <Image
          src={bookmark.favicon}
          alt={bookmark.title}
          width={24}
          height={24}
          className={cn(
            "size-6 grayscale",
            bookmark.hasDarkIcon && "dark:invert"
          )}
        />
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="truncate font-medium">{bookmark.title}</h3>
        <p className="truncate text-sm text-muted-foreground">{bookmark.url}</p>
      </div>

      <div className="flex items-center gap-1">
        <Button
          variant="outline"
          size="sm"
          onClick={() => restoreFromTrash(bookmark.id)}
        >
          <ArrowCounterClockwise className="mr-1 size-4" />
          Restore
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <Button variant="ghost" size="icon-xs">
                <DotsThree className="size-4" weight="bold" />
              </Button>
            }
          />
          <DropdownMenuContent align="end">
            <DropdownMenuGroup>
              <DropdownMenuItem
                onClick={() => window.open(bookmark.url, "_blank")}
              >
                <ArrowSquareOut className="mr-2 size-4" />
                Open URL
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem
                className="text-destructive"
                onClick={() => permanentlyDelete(bookmark.id)}
              >
                <XCircle className="mr-2 size-4" />
                Delete Permanently
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}

export function TrashContent() {
  const { getTrashedBookmarks, trashedBookmarks } = useBookmarksStore()
  const filteredTrash = getTrashedBookmarks()

  return (
    <div className="w-full flex-1 overflow-auto">
      <div className="space-y-6 p-4 md:p-6">
        <div className="flex items-center justify-between gap-4 rounded-xl border bg-card p-4">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-lg bg-destructive/10 text-destructive">
              <Trash className="size-5" />
            </div>
            <div>
              <h2 className="text-lg font-semibold">Trash</h2>
              <p className="text-sm text-muted-foreground">
                {trashedBookmarks.length} bookmark
                {trashedBookmarks.length !== 1 ? "s" : ""} in trash
              </p>
            </div>
          </div>
          {trashedBookmarks.length > 0 && (
            <p className="hidden text-xs text-muted-foreground sm:block">
              Items in trash will be permanently deleted after 30 days
            </p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          {filteredTrash.map((bookmark) => (
            <TrashedBookmarkCard key={bookmark.id} bookmark={bookmark} />
          ))}
        </div>

        {trashedBookmarks.length === 0 && (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-muted">
              <Trash className="size-6 text-muted-foreground" />
            </div>
            <h3 className="mb-1 text-lg font-medium">Trash is empty</h3>
            <p className="max-w-sm text-sm text-muted-foreground">
              Deleted bookmarks will appear here. You can restore them or delete
              them permanently.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
