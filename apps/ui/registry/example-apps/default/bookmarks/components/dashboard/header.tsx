"use client"

import {
  ArrowsDownUp,
  Check,
  List,
  MagnifyingGlass,
  Plus,
  SlidersHorizontal,
  SquaresFour,
} from "@phosphor-icons/react"

import { Input } from "@loveui/ui/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@loveui/ui/ui/menu"

import { SidebarTrigger } from "@/components/ui/sidebar"

import { cn } from "../../lib/utils"
import { useBookmarksStore } from "../../store/bookmarks-store"
import { ThemeToggle } from "../theme-toggle"
import { Button } from "../ui/button"

interface BookmarksHeaderProps {
  title?: string
}

const sortOptions = [
  { value: "date-newest", label: "Date Added (Newest)" },
  { value: "date-oldest", label: "Date Added (Oldest)" },
  { value: "alpha-az", label: "Alphabetical (A-Z)" },
  { value: "alpha-za", label: "Alphabetical (Z-A)" },
] as const

const filterOptions = [
  { value: "all", label: "All Bookmarks" },
  { value: "favorites", label: "Favorites Only" },
  { value: "with-tags", label: "With Tags" },
  { value: "without-tags", label: "Without Tags" },
] as const

export function BookmarksHeader({ title = "Bookmarks" }: BookmarksHeaderProps) {
  const {
    viewMode,
    setViewMode,
    searchQuery,
    setSearchQuery,
    sortBy,
    setSortBy,
    filterType,
    setFilterType,
  } = useBookmarksStore()

  const currentSort = sortOptions.find((opt) => opt.value === sortBy)
  const currentFilter = filterOptions.find((opt) => opt.value === filterType)

  return (
    <header className="w-full border-b">
      <div className="flex h-14 items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <SidebarTrigger />
          <h1 className="hidden text-base font-semibold sm:block">{title}</h1>
        </div>

        <div className="flex items-center gap-2">
          <div className="relative hidden md:block">
            <MagnifyingGlass className="pointer-events-none absolute top-1/2 left-3 z-10 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-9 w-64 pl-9"
            />
          </div>

          <div className="flex items-center rounded-md border p-0.5">
            <Button
              variant="ghost"
              size="icon-xs"
              className={cn("rounded-sm", viewMode === "grid" && "bg-muted")}
              onClick={() => setViewMode("grid")}
            >
              <SquaresFour className="size-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon-xs"
              className={cn("rounded-sm", viewMode === "list" && "bg-muted")}
              onClick={() => setViewMode("list")}
            >
              <List className="size-4" />
            </Button>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger
              render={
                <Button variant="outline" size="sm" className="hidden sm:flex">
                  <ArrowsDownUp className="size-4" />
                  <span className="hidden lg:inline">
                    {currentSort?.label.split(" ")[0]}
                  </span>
                </Button>
              }
            />
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuGroup>
                <DropdownMenuLabel className="text-xs text-muted-foreground">
                  Sort by
                </DropdownMenuLabel>
                {sortOptions.map((option) => (
                  <DropdownMenuItem
                    key={option.value}
                    onClick={() => setSortBy(option.value)}
                    className="flex items-center justify-between"
                  >
                    {option.label}
                    {sortBy === option.value && <Check className="size-4" />}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger
              render={
                <Button
                  variant="outline"
                  size="sm"
                  className={cn(
                    "hidden sm:flex",
                    filterType !== "all" && "border-primary text-primary"
                  )}
                >
                  <SlidersHorizontal className="size-4" />
                  <span className="hidden lg:inline">
                    {filterType !== "all" ? currentFilter?.label : "Filter"}
                  </span>
                </Button>
              }
            />
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuGroup>
                <DropdownMenuLabel className="text-xs text-muted-foreground">
                  Filter by
                </DropdownMenuLabel>
                {filterOptions.map((option) => (
                  <DropdownMenuItem
                    key={option.value}
                    onClick={() => setFilterType(option.value)}
                    className="flex items-center justify-between"
                  >
                    {option.label}
                    {filterType === option.value && (
                      <Check className="size-4" />
                    )}
                  </DropdownMenuItem>
                ))}
                {filterType !== "all" && (
                  <>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      onClick={() => setFilterType("all")}
                      className="text-muted-foreground"
                    >
                      Clear filter
                    </DropdownMenuItem>
                  </>
                )}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button size="sm" className="hidden sm:flex">
            <Plus className="size-4" />
            Add Bookmark
          </Button>

          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
