"use client"

import Image from "next/image"
import {
  Archive,
  ArrowCounterClockwise,
  ArrowSquareOut,
  DotsThree,
  Trash,
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
import { tags as allTags, type Bookmark } from "../../mock-data/bookmarks"
import { useBookmarksStore } from "../../store/bookmarks-store"
import { Button } from "../ui/button"

function ArchivedBookmarkCard({ bookmark }: { bookmark: Bookmark }) {
  const { restoreFromArchive, trashBookmark } = useBookmarksStore()
  const bookmarkTags = allTags.filter((tag) => bookmark.tags.includes(tag.id))

  return (
    <div className="group flex items-center gap-4 rounded-lg border bg-card p-4 transition-colors hover:bg-accent/50">
      <div className="flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-muted">
        <Image
          src={bookmark.favicon}
          alt={bookmark.title}
          width={24}
          height={24}
          className={cn("size-6", bookmark.hasDarkIcon && "dark:invert")}
        />
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <h3 className="truncate font-medium">{bookmark.title}</h3>
          {bookmarkTags.length > 0 && (
            <div className="hidden items-center gap-1 sm:flex">
              {bookmarkTags.slice(0, 2).map((tag) => (
                <span
                  key={tag.id}
                  className={cn(
                    "inline-flex items-center rounded px-1.5 py-0.5 text-[10px] font-medium",
                    tag.color
                  )}
                >
                  {tag.name}
                </span>
              ))}
            </div>
          )}
        </div>
        <p className="truncate text-sm text-muted-foreground">{bookmark.url}</p>
      </div>

      <div className="flex items-center gap-1">
        <Button
          variant="outline"
          size="sm"
          onClick={() => restoreFromArchive(bookmark.id)}
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
                onClick={() => {
                  restoreFromArchive(bookmark.id)
                  setTimeout(() => trashBookmark(bookmark.id), 0)
                }}
              >
                <Trash className="mr-2 size-4" />
                Move to Trash
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}

export function ArchiveContent() {
  const { getArchivedBookmarks } = useBookmarksStore()
  const archivedBookmarks = getArchivedBookmarks()

  return (
    <div className="w-full flex-1 overflow-auto">
      <div className="space-y-6 p-4 md:p-6">
        <div className="flex items-center gap-3 rounded-xl border bg-card p-4">
          <div className="flex size-10 items-center justify-center rounded-lg bg-violet-500/10 text-violet-500">
            <Archive className="size-5" />
          </div>
          <div>
            <h2 className="text-lg font-semibold">Archived Bookmarks</h2>
            <p className="text-sm text-muted-foreground">
              {archivedBookmarks.length} bookmark
              {archivedBookmarks.length !== 1 ? "s" : ""} in archive
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          {archivedBookmarks.map((bookmark) => (
            <ArchivedBookmarkCard key={bookmark.id} bookmark={bookmark} />
          ))}
        </div>

        {archivedBookmarks.length === 0 && (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-muted">
              <Archive className="size-6 text-muted-foreground" />
            </div>
            <h3 className="mb-1 text-lg font-medium">Archive is empty</h3>
            <p className="max-w-sm text-sm text-muted-foreground">
              Archived bookmarks will appear here. Archive bookmarks you want to
              keep but don&apos;t need right now.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
