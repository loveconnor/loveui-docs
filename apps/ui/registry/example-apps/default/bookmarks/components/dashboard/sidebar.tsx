"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Archive,
  Bookmark,
  BookOpen,
  CaretDown,
  CaretRight,
  Check,
  Code,
  Folder,
  Gear,
  MagnifyingGlass,
  Palette,
  Plus,
  SignOut,
  Sparkle,
  Star,
  Tag,
  Trash,
  User,
  Wrench,
} from "@phosphor-icons/react"

import { Avatar, AvatarFallback, AvatarImage } from "@loveui/ui/ui/avatar"
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

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

import { cn } from "../../lib/utils"
import { collections, tags } from "../../mock-data/bookmarks"
import { useBookmarksStore } from "../../store/bookmarks-store"

const collectionIcons: Record<string, React.ElementType> = {
  bookmark: Bookmark,
  palette: Palette,
  code: Code,
  wrench: Wrench,
  "book-open": BookOpen,
  sparkles: Sparkle,
}

const navItems = [
  { icon: Star, label: "Favorites", href: "/favorites" },
  { icon: Archive, label: "Archive", href: "/archive" },
  { icon: Trash, label: "Trash", href: "/trash" },
]

export function BookmarksSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname()
  const [collectionsOpen, setCollectionsOpen] = React.useState(true)
  const [tagsOpen, setTagsOpen] = React.useState(true)
  const {
    selectedCollection,
    setSelectedCollection,
    selectedTags,
    toggleTag,
    clearTags,
  } = useBookmarksStore()

  const isHomePage = pathname === "/"

  return (
    <Sidebar collapsible="offcanvas" className="lg:border-r-0!" {...props}>
      <SidebarHeader className="p-5 pb-0">
        <div className="flex items-center justify-between">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2 outline-none">
              <div className="flex size-7 items-center justify-center overflow-hidden rounded-full bg-linear-to-br from-blue-400 via-indigo-500 to-violet-500 shadow-lg ring-1 ring-white/40" />
              <span className="font-medium text-muted-foreground">LoveUI</span>
              <CaretDown className="size-3 text-muted-foreground" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              <DropdownMenuGroup>
                <DropdownMenuLabel>Workspaces</DropdownMenuLabel>
                <DropdownMenuItem>
                  <div className="mr-2 size-5 rounded-full bg-linear-to-br from-blue-400 via-indigo-500 to-violet-500" />
                  LoveUI
                  <Check className="ml-auto size-4" />
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <div className="mr-2 size-5 rounded-full bg-linear-to-br from-emerald-400 to-cyan-500" />
                  Personal
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <div className="mr-2 size-5 rounded-full bg-linear-to-br from-orange-400 to-rose-500" />
                  Work
                </DropdownMenuItem>
              </DropdownMenuGroup>

              <DropdownMenuSeparator />

              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <Plus className="mr-2 size-4" />
                  Create Workspace
                </DropdownMenuItem>
              </DropdownMenuGroup>

              <DropdownMenuSeparator />

              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <User className="mr-2 size-4" />
                  Account Settings
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Gear className="mr-2 size-4" />
                  Workspace Settings
                </DropdownMenuItem>
              </DropdownMenuGroup>

              <DropdownMenuSeparator />

              <DropdownMenuGroup>
                <DropdownMenuItem className="text-destructive">
                  <SignOut className="mr-2 size-4" />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          <Avatar className="size-6.5">
            <AvatarImage src="/cl.png" />
            <AvatarFallback>CL</AvatarFallback>
          </Avatar>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-5 pt-5">
        <div className="relative mb-4">
          <MagnifyingGlass className="pointer-events-none absolute top-1/2 left-3 z-10 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search Bookmarks..."
            className="h-9 bg-background pr-10 pl-9"
          />
          <div className="absolute top-1/2 right-2 -translate-y-1/2 rounded bg-muted px-1.5 py-0.5 text-[11px] font-medium text-muted-foreground">
            ⌘K
          </div>
        </div>

        <SidebarGroup className="p-0">
          <SidebarGroupLabel className="flex items-center gap-1.5 px-0 text-[10px] font-semibold tracking-wider text-muted-foreground">
            <button
              onClick={() => setCollectionsOpen(!collectionsOpen)}
              className="flex cursor-pointer items-center gap-1.5"
            >
              <CaretDown
                className={cn(
                  "size-3.5 transition-transform",
                  !collectionsOpen && "-rotate-90"
                )}
              />
              COLLECTIONS
            </button>
          </SidebarGroupLabel>
          {collectionsOpen && (
            <SidebarGroupContent>
              <SidebarMenu className="mt-2">
                {collections.map((collection) => {
                  const IconComponent =
                    collectionIcons[collection.icon] || Folder
                  const isActive =
                    isHomePage && selectedCollection === collection.id
                  return (
                    <SidebarMenuItem key={collection.id}>
                      <SidebarMenuButton
                        render={
                          <Link
                            href="/"
                            onClick={() => {
                              setSelectedCollection(collection.id)
                              clearTags()
                            }}
                          />
                        }
                        isActive={isActive}
                        className="h-[38px]"
                      >
                        <IconComponent className="size-5" />
                        <span className="flex-1">{collection.name}</span>
                        <span className="text-xs text-muted-foreground">
                          {collection.count}
                        </span>
                        {isActive && (
                          <CaretRight className="size-4 text-muted-foreground opacity-60" />
                        )}
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  )
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          )}
        </SidebarGroup>

        <SidebarGroup className="p-0">
          <SidebarGroupLabel className="flex items-center gap-1.5 px-0 text-[10px] font-semibold tracking-wider text-muted-foreground">
            <button
              onClick={() => setTagsOpen(!tagsOpen)}
              className="flex cursor-pointer items-center gap-1.5"
            >
              <CaretDown
                className={cn(
                  "size-3.5 transition-transform",
                  !tagsOpen && "-rotate-90"
                )}
              />
              TAGS
            </button>
            {selectedTags.length > 0 && (
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  clearTags()
                }}
                className="ml-auto text-[10px] text-muted-foreground hover:text-foreground"
              >
                Clear
              </button>
            )}
          </SidebarGroupLabel>
          {tagsOpen && (
            <SidebarGroupContent>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {tags.map((tag) => (
                  <button
                    key={tag.id}
                    onClick={() => toggleTag(tag.id)}
                    className={cn(
                      "inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs font-medium transition-colors",
                      selectedTags.includes(tag.id)
                        ? "bg-primary text-primary-foreground"
                        : tag.color
                    )}
                  >
                    <Tag className="size-3" />
                    {tag.name}
                  </button>
                ))}
              </div>
            </SidebarGroupContent>
          )}
        </SidebarGroup>

        <SidebarGroup className="p-0">
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton
                    render={<Link href={item.href} />}
                    isActive={pathname === item.href}
                    className="h-[38px]"
                  >
                    <item.icon className="size-5" />
                    <span>{item.label}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
