"use client"

import * as React from "react"
import Link from "next/link"
import {
  Add01Icon,
  ArrowDown01Icon,
  ArrowRight01Icon,
  Building02Icon,
  Calendar01Icon,
  DashboardSquare01Icon,
  File01Icon,
  FileEmpty01Icon,
  Folder01Icon,
  Globe02Icon,
  HeadphonesIcon,
  Layers01Icon,
  Logout01Icon,
  Mail01Icon,
  Notification01Icon,
  Search01Icon,
  Settings01Icon,
  SourceCodeIcon,
  Task01Icon,
  UnfoldMoreIcon,
  UserAdd01Icon,
  UserGroupIcon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

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
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "../ui/sidebar"

const navItems = [
  { title: "Search", icon: Search01Icon, shortcut: "/" },
  { title: "Client Inbox", icon: Mail01Icon },
  { title: "Listings Board", icon: DashboardSquare01Icon, isActive: true },
  { title: "Tours", icon: Task01Icon },
  { title: "Neighborhoods", icon: Layers01Icon },
  { title: "Open Houses", icon: Calendar01Icon },
  { title: "Contracts", icon: File01Icon },
  { title: "Agent Teams", icon: UserGroupIcon },
  { title: "Brokerage", icon: Building02Icon },
]

const workgroups = [
  {
    id: "all-work",
    name: "Property Segments",
    icon: Globe02Icon,
    children: [
      {
        id: "luxury-homes",
        name: "Luxury Homes",
        icon: Folder01Icon,
        children: [
          { id: "waterfront", name: "Waterfront", icon: FileEmpty01Icon },
          { id: "penthouse", name: "Penthouse", icon: FileEmpty01Icon },
        ],
      },
      { id: "suburban", name: "Suburban", icon: Folder01Icon },
      { id: "investment", name: "Investment", icon: Folder01Icon },
    ],
  },
  { id: "market-alerts", name: "Market Alerts", icon: Notification01Icon },
  { id: "mls-sync", name: "MLS Sync", icon: SourceCodeIcon },
  { id: "buyer-support", name: "Buyer Support", icon: HeadphonesIcon },
]

export function DashboardSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const [expandedItems, setExpandedItems] = React.useState<string[]>([
    "all-work",
    "luxury-homes",
  ])

  const toggleItem = (id: string) => {
    setExpandedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  const renderWorkgroupItem = (
    item: (typeof workgroups)[0],
    level: number = 0
  ) => {
    const hasChildren = "children" in item && item.children
    const isExpanded = expandedItems.includes(item.id)
    const Icon = item.icon
    const paddingLeft = level * 12

    if (hasChildren) {
      return (
        <Collapsible
          key={item.id}
          open={isExpanded}
          onOpenChange={() => toggleItem(item.id)}
        >
          <SidebarMenuItem>
            <CollapsibleTrigger
              nativeButton={false}
              render={
                <SidebarMenuButton
                  className="h-7 text-sm"
                  style={{ paddingLeft: `${8 + paddingLeft}px` }}
                >
                  <HugeiconsIcon icon={Icon} className="size-3.5" />
                  <span className="flex-1">{item.name}</span>
                  {isExpanded ? (
                    <HugeiconsIcon icon={ArrowDown01Icon} className="size-3" />
                  ) : (
                    <HugeiconsIcon icon={ArrowRight01Icon} className="size-3" />
                  )}
                </SidebarMenuButton>
              }
            />
            <CollapsibleContent>
              <SidebarMenuSub className="mr-0 pr-0">
                {item.children?.map((child) => (
                  <SidebarMenuSubItem key={child.id}>
                    {renderWorkgroupItem(
                      child as (typeof workgroups)[0],
                      level + 1
                    )}
                  </SidebarMenuSubItem>
                ))}
              </SidebarMenuSub>
            </CollapsibleContent>
          </SidebarMenuItem>
        </Collapsible>
      )
    }

    return (
      <SidebarMenuItem key={item.id}>
        <SidebarMenuButton
          className="h-7 text-sm"
          style={{ paddingLeft: `${8 + paddingLeft}px` }}
        >
          <HugeiconsIcon icon={Icon} className="size-3.5" />
          <span>{item.name}</span>
        </SidebarMenuButton>
      </SidebarMenuItem>
    )
  }

  return (
    <Sidebar className="lg:border-r-0!" collapsible="icon" {...props}>
      <SidebarHeader className="px-2.5 py-3">
        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <button className="-m-1 flex w-full shrink-0 items-center gap-2.5 rounded-md p-1 transition-colors hover:bg-sidebar-accent">
                <div className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-foreground text-background">
                  <span className="text-sm font-bold">R</span>
                </div>
                <div className="flex items-center gap-1 group-data-[collapsible=icon]:hidden">
                  <span className="text-sm font-medium">Harbor Realty</span>
                  <HugeiconsIcon
                    icon={UnfoldMoreIcon}
                    className="size-3 text-muted-foreground"
                  />
                </div>
              </button>
            }
          />
          <DropdownMenuContent align="start" className="w-56">
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <HugeiconsIcon icon={Settings01Icon} className="size-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <HugeiconsIcon icon={UserAdd01Icon} className="size-4" />
                <span>Invite agents</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem variant="destructive">
              <HugeiconsIcon icon={Logout01Icon} className="size-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarHeader>

      <SidebarContent className="px-2.5">
        <SidebarGroup className="p-0">
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    render={<Link href="#" />}
                    isActive={item.isActive}
                    className="h-7"
                  >
                    <HugeiconsIcon icon={item.icon} className="size-3.5" />
                    <span className="text-sm">{item.title}</span>
                    {item.shortcut && (
                      <span className="ml-auto flex size-5 items-center justify-center rounded bg-muted text-[10px] font-medium text-muted-foreground">
                        {item.shortcut}
                      </span>
                    )}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="mt-4 p-0">
          <SidebarGroupLabel className="flex h-6 items-center justify-between px-0">
            <span className="text-[10px] font-medium tracking-wider text-muted-foreground">
              Workgroups
            </span>
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="icon" className="size-5">
                <HugeiconsIcon icon={Search01Icon} className="size-3" />
              </Button>
              <Button variant="ghost" size="icon" className="size-5">
                <HugeiconsIcon icon={Add01Icon} className="size-3" />
              </Button>
            </div>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {workgroups.map((item) => renderWorkgroupItem(item))}
              <SidebarMenuItem>
                <SidebarMenuButton className="h-7 text-sm text-muted-foreground">
                  <HugeiconsIcon icon={Add01Icon} className="size-3.5" />
                  <span>Create Group</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
