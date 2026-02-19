"use client"

import { FileList } from "./file-list"
import { FolderGrid } from "./folder-grid"
import { RecentActivity } from "./recent-activity"
import { SharedWithMe } from "./shared-with-me"
import { StorageCards } from "./storage-cards"
import { StorageOverview } from "./storage-overview"

export type ViewType =
  | "all"
  | "starred"
  | "recent"
  | "shared"
  | "trash"
  | "folder"

interface FilesContentProps {
  view: ViewType
  folderId?: string
}

export function FilesContent({ view, folderId }: FilesContentProps) {
  const showStorageCards = view === "all" || view === "recent"
  const showSidePanels = view === "all"
  const showFolders = view === "all"

  return (
    <div className="w-full flex-1 overflow-auto">
      <div className="flex flex-col gap-6 p-4 md:p-6 xl:flex-row">
        <div className="min-w-0 flex-1 space-y-6">
          {showStorageCards && <StorageCards />}
          {showFolders && <FolderGrid />}
          <FileList view={view} folderId={folderId} />
        </div>

        {showSidePanels && (
          <div className="w-full shrink-0 space-y-4 xl:w-80">
            <StorageOverview />
            <SharedWithMe />
            <RecentActivity />
          </div>
        )}
      </div>
    </div>
  )
}
