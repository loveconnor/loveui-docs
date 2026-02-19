"use client"

import {
  GridViewIcon,
  Menu01Icon,
  MoreVerticalIcon,
  Notification01Icon,
  Search01Icon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { Button } from "@loveui/ui/ui/button"
import { Input } from "@loveui/ui/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@loveui/ui/ui/menu"

import { SidebarTrigger } from "@/components/ui/sidebar"

import { cn } from "../../lib/utils"
import { useFilesStore } from "../../store/files-store"
import { ThemeToggle } from "../theme-toggle"
import { Breadcrumb } from "./breadcrumb"
import { QuickActions } from "./quick-actions"

export function FilesHeader() {
  const { searchQuery, setSearchQuery, viewMode, setViewMode } = useFilesStore()

  return (
    <header className="sticky top-0 z-10 flex w-full items-center gap-2 border-b bg-card px-3 py-2 sm:gap-3 sm:px-6 sm:py-3">
      <SidebarTrigger className="-ml-1 sm:-ml-2" />

      <div className="hidden lg:block">
        <Breadcrumb />
      </div>

      <div className="flex-1 lg:hidden">
        <Breadcrumb />
      </div>

      <div className="hidden flex-1 items-center justify-center gap-2 lg:flex">
        <QuickActions />
      </div>

      <div className="relative hidden max-w-xs md:block">
        <HugeiconsIcon
          icon={Search01Icon}
          className="pointer-events-none absolute top-1/2 left-3 z-10 size-4 -translate-y-1/2 text-muted-foreground"
        />
        <Input
          placeholder="Search assets..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="h-9 border bg-card pl-9"
        />
      </div>

      <div className="hidden items-center gap-1 rounded-lg border p-0.5 sm:flex">
        <Button
          variant="ghost"
          size="icon-sm"
          onClick={() => setViewMode("grid")}
          className={cn("size-7.5", viewMode === "grid" && "bg-muted")}
        >
          <HugeiconsIcon icon={GridViewIcon} className="size-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon-sm"
          onClick={() => setViewMode("list")}
          className={cn("size-7.5", viewMode === "list" && "bg-muted")}
        >
          <HugeiconsIcon icon={Menu01Icon} className="size-4" />
        </Button>
      </div>

      <ThemeToggle />

      <DropdownMenu>
        <DropdownMenuTrigger
          render={
            <Button variant="ghost" size="icon" className="h-8 w-8 sm:hidden">
              <HugeiconsIcon icon={MoreVerticalIcon} className="size-4" />
            </Button>
          }
        />
        <DropdownMenuContent className="w-40" align="end">
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <HugeiconsIcon icon={Search01Icon} className="mr-2 size-4" />
              Search
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => setViewMode(viewMode === "grid" ? "list" : "grid")}
            >
              {viewMode === "grid" ? (
                <HugeiconsIcon icon={Menu01Icon} className="mr-2 size-4" />
              ) : (
                <HugeiconsIcon icon={GridViewIcon} className="mr-2 size-4" />
              )}
              {viewMode === "grid" ? "List View" : "Grid View"}
            </DropdownMenuItem>
            <DropdownMenuItem>
              <HugeiconsIcon
                icon={Notification01Icon}
                className="mr-2 size-4"
              />
              Notifications
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  )
}
