"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Add01Icon,
  ArrowDown01Icon,
  Clock01Icon,
  Delete01Icon,
  FavouriteIcon,
  File01Icon,
  Folder01Icon,
  FolderAddIcon,
  Globe02Icon,
  HardDriveIcon,
  Home01Icon,
  Image01Icon,
  Link01Icon,
  Logout01Icon,
  Settings01Icon,
  Share01Icon,
  UnfoldMoreIcon,
  Upload01Icon,
  UserCircle02Icon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { Avatar, AvatarFallback, AvatarImage } from "@loveui/ui/ui/avatar"
import { Button } from "@loveui/ui/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@loveui/ui/ui/collapsible"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@loveui/ui/ui/menu"
import { Progress } from "@loveui/ui/ui/progress"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

import { cn } from "../../lib/utils"
import { storageData } from "../../mock-data/files"
import { useFilesStore } from "../../store/files-store"

const menuItems = [
  { icon: Home01Icon, label: "All Assets", href: "/" },
  { icon: FavouriteIcon, label: "Pinned", href: "/starred" },
  { icon: Clock01Icon, label: "Latest", href: "/recent" },
  { icon: Share01Icon, label: "Shared", href: "/shared" },
  { icon: Delete01Icon, label: "Archive Bin", href: "/trash" },
]

export function FilesSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const { folders } = useFilesStore()
  const pathname = usePathname()
  const [foldersOpen, setFoldersOpen] = React.useState(true)

  const storagePercentage = (storageData.used / storageData.total) * 100

  return (
    <Sidebar className="lg:border-r-0!" collapsible="offExamples" {...props}>
      <SidebarHeader className="p-4 pb-0">
        <div className="flex items-center gap-2.5">
          <div className="flex size-8 items-center justify-center rounded-lg bg-linear-to-br from-violet-500 to-fuchsia-500">
            <HugeiconsIcon icon={HardDriveIcon} className="size-4 text-white" />
          </div>
          <span className="text-base font-semibold">DocuVault</span>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-4 pt-6">
        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <Button className="mb-4 w-full gap-2">
                <HugeiconsIcon icon={Add01Icon} className="size-4" />
                Add Asset
              </Button>
            }
          />
          <DropdownMenuContent align="start" className="w-48">
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <HugeiconsIcon icon={Upload01Icon} className="mr-2 size-4" />
                Upload Clip
              </DropdownMenuItem>
              <DropdownMenuItem>
                <HugeiconsIcon icon={FolderAddIcon} className="mr-2 size-4" />
                New Collection
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <HugeiconsIcon icon={File01Icon} className="mr-2 size-4" />
                New Log
              </DropdownMenuItem>
              <DropdownMenuItem>
                <HugeiconsIcon icon={Image01Icon} className="mr-2 size-4" />
                New Still
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <HugeiconsIcon icon={Link01Icon} className="mr-2 size-4" />
                Add Reference Link
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>

        <SidebarGroup className="p-0">
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton
                    render={<Link href={item.href} />}
                    isActive={pathname === item.href}
                    className="h-9"
                  >
                    <HugeiconsIcon icon={item.icon} className="size-4" />
                    <span className="text-sm">{item.label}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <Collapsible open={foldersOpen} onOpenChange={setFoldersOpen}>
          <SidebarGroup className="mt-4 p-0">
            <CollapsibleTrigger
              nativeButton={false}
              render={
                <SidebarGroupLabel className="flex h-4 cursor-pointer items-center justify-between pt-2 pb-4 text-[10px] tracking-widest text-muted-foreground uppercase hover:bg-transparent hover:text-foreground">
                  <div className="flex items-center gap-1">
                    <HugeiconsIcon
                      icon={ArrowDown01Icon}
                      className={cn(
                        "size-3 transition-transform",
                        !foldersOpen && "-rotate-90"
                      )}
                    />
                    <span>Folders</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="size-5 hover:bg-muted"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <HugeiconsIcon icon={Add01Icon} className="size-3" />
                  </Button>
                </SidebarGroupLabel>
              }
            />
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  {folders.map((folder) => (
                    <SidebarMenuItem key={folder.id}>
                      <SidebarMenuButton
                        render={<Link href={`/folder/${folder.id}`} />}
                        isActive={pathname === `/folder/${folder.id}`}
                        className="h-9"
                      >
                        <HugeiconsIcon
                          icon={Folder01Icon}
                          className="size-4"
                          style={{ color: folder.color }}
                        />
                        <span className="flex-1 truncate text-sm">
                          {folder.name}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {folder.filesCount}
                        </span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>

        <div className="mt-6 rounded-xl border bg-card p-3">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm font-medium">Vault Storage</span>
            <span className="text-xs text-muted-foreground">
              {storageData.used} GB / {storageData.total} GB
            </span>
          </div>
          <Progress value={storagePercentage} className="h-2" />
          <div className="mt-3 flex flex-wrap gap-2">
            {storageData.breakdown.slice(0, 3).map((item) => (
              <div key={item.type} className="flex items-center gap-1.5">
                <div
                  className="size-2 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-[10px] text-muted-foreground">
                  {item.type}
                </span>
              </div>
            ))}
          </div>
        </div>
      </SidebarContent>

      <SidebarFooter className="p-4">
        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <div className="mt-2 flex cursor-pointer items-center gap-3 rounded-lg p-2 transition-colors hover:bg-accent">
                <Avatar className="size-8">
                  <AvatarImage src="/ln.png" />
                  <AvatarFallback className="text-xs">AP</AvatarFallback>
                </Avatar>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium">Ava Patel</p>
                  <p className="truncate text-xs text-muted-foreground">
                    archive@docuvault.studio
                  </p>
                </div>
                <HugeiconsIcon
                  icon={UnfoldMoreIcon}
                  className="size-4 shrink-0 text-muted-foreground"
                />
              </div>
            }
          />
          <DropdownMenuContent align="end" className="w-[200px]">
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <HugeiconsIcon
                  icon={UserCircle02Icon}
                  className="mr-2 size-4"
                />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                <HugeiconsIcon icon={Settings01Icon} className="mr-2 size-4" />
                Settings
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem variant="destructive">
              <HugeiconsIcon icon={Logout01Icon} className="mr-2 size-4" />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
