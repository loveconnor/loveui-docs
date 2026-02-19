"use client"

import Image from "next/image"
import {
  Archive,
  ArrowSquareOut,
  Copy,
  DotsThree,
  Heart,
  PencilSimple,
  Tag,
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

interface BookmarkCardProps {
  bookmark: Bookmark
  variant?: "grid" | "list"
}

export function BookmarkCard({
  bookmark,
  variant = "grid",
}: BookmarkCardProps) {
  const { toggleFavorite, archiveBookmark, trashBookmark } = useBookmarksStore()
  const bookmarkTags = allTags.filter((tag) => bookmark.tags.includes(tag.id))

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(bookmark.url)
  }

  const handleOpenUrl = () => {
    window.open(bookmark.url, "_blank")
  }

  if (variant === "list") {
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
                {bookmarkTags.length > 2 && (
                  <span className="text-[10px] text-muted-foreground">
                    +{bookmarkTags.length - 2}
                  </span>
                )}
              </div>
            )}
          </div>
          <p className="truncate text-sm text-muted-foreground">
            {bookmark.url}
          </p>
        </div>

        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon-xs"
            onClick={() => toggleFavorite(bookmark.id)}
          >
            <Heart
              className={cn(
                "size-4",
                bookmark.isFavorite && "fill-red-500 text-red-500"
              )}
              weight={bookmark.isFavorite ? "fill" : "regular"}
            />
          </Button>
          <Button variant="ghost" size="icon-xs" onClick={handleOpenUrl}>
            <ArrowSquareOut className="size-4" />
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
                <DropdownMenuItem onClick={handleCopyUrl}>
                  <Copy className="mr-2 size-4" />
                  Copy URL
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <PencilSimple className="mr-2 size-4" />
                  Edit
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Tag className="mr-2 size-4" />
                  Add Tags
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem onClick={() => archiveBookmark(bookmark.id)}>
                  <Archive className="mr-2 size-4" />
                  Archive
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="text-destructive"
                  onClick={() => trashBookmark(bookmark.id)}
                >
                  <Trash className="mr-2 size-4" />
                  Delete
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    )
  }

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border bg-card transition-colors hover:bg-accent/30">
      <div className="absolute top-3 right-3 z-10 flex items-center gap-1">
        <Button
          variant="secondary"
          size="icon-xs"
          className="bg-background/80 backdrop-blur-sm"
          onClick={() => toggleFavorite(bookmark.id)}
        >
          <Heart
            className={cn(
              "size-4",
              bookmark.isFavorite && "fill-red-500 text-red-500"
            )}
            weight={bookmark.isFavorite ? "fill" : "regular"}
          />
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <Button
                variant="secondary"
                size="icon-xs"
                className="bg-background/80 backdrop-blur-sm"
              >
                <DotsThree className="size-4" weight="bold" />
              </Button>
            }
          />
          <DropdownMenuContent align="end">
            <DropdownMenuGroup>
              <DropdownMenuItem onClick={handleCopyUrl}>
                <Copy className="mr-2 size-4" />
                Copy URL
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleOpenUrl}>
                <ArrowSquareOut className="mr-2 size-4" />
                Open in new tab
              </DropdownMenuItem>
              <DropdownMenuItem>
                <PencilSimple className="mr-2 size-4" />
                Edit
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Tag className="mr-2 size-4" />
                Add Tags
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem onClick={() => archiveBookmark(bookmark.id)}>
                <Archive className="mr-2 size-4" />
                Archive
              </DropdownMenuItem>
              <DropdownMenuItem
                className="text-destructive"
                onClick={() => trashBookmark(bookmark.id)}
              >
                <Trash className="mr-2 size-4" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <button
        className="w-full cursor-pointer text-left"
        onClick={handleOpenUrl}
      >
        <div className="flex h-32 items-center justify-center bg-linear-to-br from-muted/50 to-muted">
          <div className="flex size-12 items-center justify-center rounded-xl bg-background shadow-sm">
            <Image
              src={bookmark.favicon}
              alt={bookmark.title}
              width={32}
              height={32}
              className={cn("size-8", bookmark.hasDarkIcon && "dark:invert")}
            />
          </div>
        </div>

        <div className="space-y-2 p-4">
          <div className="flex items-start justify-between gap-2">
            <h3 className="line-clamp-1 font-medium">{bookmark.title}</h3>
          </div>
          <p className="line-clamp-2 text-sm text-muted-foreground">
            {bookmark.description}
          </p>
          {bookmarkTags.length > 0 && (
            <div className="flex flex-wrap gap-1 pt-1">
              {bookmarkTags.slice(0, 3).map((tag) => (
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
              {bookmarkTags.length > 3 && (
                <span className="py-0.5 text-[10px] text-muted-foreground">
                  +{bookmarkTags.length - 3} more
                </span>
              )}
            </div>
          )}
        </div>
      </button>
    </div>
  )
}
