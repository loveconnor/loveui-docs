"use client"

import { Star } from "@phosphor-icons/react"

import { useBookmarksStore } from "../../store/bookmarks-store"
import { BookmarkCard } from "./bookmark-card"

export function FavoritesContent() {
  const { getFavoriteBookmarks, viewMode } = useBookmarksStore()
  const favoriteBookmarks = getFavoriteBookmarks()

  return (
    <div className="w-full flex-1 overflow-auto">
      <div className="space-y-6 p-4 md:p-6">
        <div className="flex items-center gap-3 rounded-xl border bg-card p-4">
          <div className="flex size-10 items-center justify-center rounded-lg bg-amber-500/10 text-amber-500">
            <Star className="size-5" />
          </div>
          <div>
            <h2 className="text-lg font-semibold">Favorite Bookmarks</h2>
            <p className="text-sm text-muted-foreground">
              {favoriteBookmarks.length} bookmark
              {favoriteBookmarks.length !== 1 ? "s" : ""} marked as favorite
            </p>
          </div>
        </div>

        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {favoriteBookmarks.map((bookmark) => (
              <BookmarkCard key={bookmark.id} bookmark={bookmark} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            {favoriteBookmarks.map((bookmark) => (
              <BookmarkCard
                key={bookmark.id}
                bookmark={bookmark}
                variant="list"
              />
            ))}
          </div>
        )}

        {favoriteBookmarks.length === 0 && (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-muted">
              <Star className="size-6 text-muted-foreground" />
            </div>
            <h3 className="mb-1 text-lg font-medium">No favorites yet</h3>
            <p className="max-w-sm text-sm text-muted-foreground">
              Mark bookmarks as favorites by clicking the heart icon to see them
              here.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
