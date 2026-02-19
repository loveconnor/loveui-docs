"use client"

import {
  Clock01Icon,
  Delete01Icon,
  FavouriteIcon,
  FolderOpenIcon,
  MoreVerticalIcon,
  Share01Icon,
  UserGroupIcon,
} from "@hugeicons/core-free-icons"
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
import { Tooltip, TooltipContent, TooltipTrigger } from "@loveui/ui/ui/tooltip"

import { cn } from "../../lib/utils"
import { useFilesStore } from "../../store/files-store"
import { ViewType } from "./content"
import { FileIcon } from "./file-icon"

interface FileListProps {
  view: ViewType
  folderId?: string
}

export function FileList({ view, folderId }: FileListProps) {
  const {
    viewMode,
    toggleStarred,
    getFilteredFiles,
    getStarredFiles,
    getRecentFiles,
    getSharedFiles,
    getFilesByFolder,
  } = useFilesStore()

  let files = getFilteredFiles()
  let title = "All Assets"

  if (view === "starred") {
    files = getStarredFiles()
    title = "Pinned Assets"
  } else if (view === "recent") {
    files = getRecentFiles()
    title = "Latest Assets"
  } else if (view === "shared") {
    files = getSharedFiles()
    title = "Shared Assets"
  } else if (view === "trash") {
    files = []
    title = "Archive Bin"
  } else if (view === "folder" && folderId) {
    files = getFilesByFolder(folderId)
    title = "Collection"
  }

  if (files.length === 0) {
    const emptyStates = {
      starred: {
        icon: FavouriteIcon,
        title: "No pinned assets",
        description: "Pin important assets to keep them on top",
      },
      recent: {
        icon: Clock01Icon,
        title: "No recent assets",
        description: "Assets you open will appear here",
      },
      shared: {
        icon: UserGroupIcon,
        title: "No shared assets",
        description: "Assets shared with you will appear here",
      },
      trash: {
        icon: Delete01Icon,
        title: "Archive bin is empty",
        description: "Removed assets will appear here for 30 days",
      },
      default: {
        icon: FolderOpenIcon,
        title: "This collection is empty",
        description: "Upload assets or drag and drop them here",
      },
    }

    const state =
      emptyStates[view as keyof typeof emptyStates] || emptyStates.default
    const Icon = state.icon

    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="mb-4 flex size-16 items-center justify-center rounded-2xl bg-muted">
          <HugeiconsIcon icon={Icon} className="size-7 text-muted-foreground" />
        </div>
        <h3 className="mb-1 text-lg font-medium">{state.title}</h3>
        <p className="max-w-xs text-sm text-muted-foreground">
          {state.description}
        </p>
      </div>
    )
  }

  if (viewMode === "grid") {
    return (
      <div className="space-y-4">
        <h2 className="text-sm font-medium text-muted-foreground">{title}</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {files.map((file) => (
            <div
              key={file.id}
              className="group cursor-pointer rounded-xl border bg-card p-4 transition-all hover:bg-accent/50"
            >
              <div className="mb-3 flex items-start justify-between">
                <FileIcon type={file.type} />
                <div className="flex items-center gap-1">
                  <Tooltip>
                    <TooltipTrigger
                      render={
                        <Button
                          variant="ghost"
                          size="icon"
                          className={cn(
                            "size-7 transition-opacity",
                            file.starred
                              ? "opacity-100"
                              : "opacity-0 group-hover:opacity-100"
                          )}
                          onClick={(e) => {
                            e.stopPropagation()
                            toggleStarred(file.id)
                          }}
                        >
                          <HugeiconsIcon
                            icon={FavouriteIcon}
                            className={cn(
                              "size-4",
                              file.starred && "fill-amber-400 text-amber-400"
                            )}
                          />
                        </Button>
                      }
                    />
                    <TooltipContent>
                      {file.starred ? "Remove from starred" : "Add to starred"}
                    </TooltipContent>
                  </Tooltip>
                  <DropdownMenu>
                    <DropdownMenuTrigger
                      render={
                        <Button
                          variant="ghost"
                          size="icon"
                          className="size-7"
                          onClick={(e) => e.stopPropagation()}
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
                        <DropdownMenuItem>Download</DropdownMenuItem>
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
              </div>
              <p className="mb-0.5 truncate text-sm font-medium">{file.name}</p>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span>{file.size}</span>
                {file.shared && (
                  <HugeiconsIcon icon={Share01Icon} className="size-3" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <h2 className="text-sm font-medium text-muted-foreground">{title}</h2>
      <div className="overflow-hidden rounded-xl border bg-card">
        <div className="hidden grid-cols-[1fr_100px_100px_100px_70px] gap-4 border-b bg-muted/50 px-4 py-3 text-xs font-medium text-muted-foreground sm:grid">
          <span>Name</span>
          <span>Size</span>
          <span>Modified</span>
          <span>Created</span>
          <span></span>
        </div>
        <div className="divide-y">
          {files.map((file) => (
            <div
              key={file.id}
              className="group grid cursor-pointer grid-cols-[1fr_auto] items-center gap-2 px-4 py-3 transition-colors hover:bg-accent/50 sm:grid-cols-[1fr_100px_100px_100px_70px] sm:gap-4"
            >
              <div className="flex min-w-0 items-center gap-3">
                <FileIcon type={file.type} />
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium">{file.name}</p>
                  <p className="text-xs text-muted-foreground sm:hidden">
                    {file.size} · {file.modifiedAt}
                  </p>
                </div>
                {file.shared && (
                  <HugeiconsIcon
                    icon={Share01Icon}
                    className="hidden size-3.5 shrink-0 text-muted-foreground sm:block"
                  />
                )}
              </div>
              <span className="hidden text-sm text-muted-foreground sm:block">
                {file.size}
              </span>
              <span className="hidden text-sm text-muted-foreground sm:block">
                {file.modifiedAt}
              </span>
              <span className="hidden text-sm text-muted-foreground sm:block">
                {file.createdAt}
              </span>
              <div className="flex items-center gap-1">
                <Tooltip>
                  <TooltipTrigger
                    render={
                      <Button
                        variant="ghost"
                        size="icon"
                        className={cn(
                          "size-7 transition-opacity",
                          file.starred
                            ? "opacity-100"
                            : "opacity-0 group-hover:opacity-100"
                        )}
                        onClick={(e) => {
                          e.stopPropagation()
                          toggleStarred(file.id)
                        }}
                      >
                        <HugeiconsIcon
                          icon={FavouriteIcon}
                          className={cn(
                            "size-4",
                            file.starred && "fill-amber-400 text-amber-400"
                          )}
                        />
                      </Button>
                    }
                  />
                  <TooltipContent>
                    {file.starred ? "Remove from starred" : "Add to starred"}
                  </TooltipContent>
                </Tooltip>
                <DropdownMenu>
                  <DropdownMenuTrigger
                    render={
                      <Button
                        variant="ghost"
                        size="icon"
                        className="size-7"
                        onClick={(e) => e.stopPropagation()}
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
                      <DropdownMenuItem>Download</DropdownMenuItem>
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
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
