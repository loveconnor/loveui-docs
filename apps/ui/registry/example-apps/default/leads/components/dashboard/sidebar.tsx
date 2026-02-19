"use client"

import * as React from "react"
import Link from "next/link"
import {
  ArrowDown01Icon,
  ArrowRight01Icon,
  Calendar01Icon,
  ChartLineData01Icon,
  Coins01Icon,
  DashboardSquare01Icon,
  Folder01Icon,
  Globe02Icon,
  HelpCircleIcon,
  Invoice01Icon,
  Logout01Icon,
  MoreHorizontalIcon,
  Notification01Icon,
  Settings01Icon,
  Task01Icon,
  UserGroupIcon,
  UserIcon,
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
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@loveui/ui/ui/menu"

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

const menuItems = [
  {
    title: "Sponsor AI",
    icon: Invoice01Icon,
    href: "#",
    isGradient: true,
  },
  {
    title: "Dashboard",
    icon: DashboardSquare01Icon,
    href: "#",
  },
  {
    title: "Sponsors",
    icon: ChartLineData01Icon,
    href: "#",
    isActive: true,
  },
  {
    title: "Outreach",
    icon: Notification01Icon,
    href: "#",
  },
  {
    title: "Event Schedule",
    icon: Calendar01Icon,
    href: "#",
  },
  {
    title: "Deliverables",
    icon: Task01Icon,
    href: "#",
  },
  {
    title: "Partners",
    icon: UserGroupIcon,
    href: "#",
  },
]

const folders = [
  { name: "Title Sponsors", hasNotification: true },
  { name: "Booth Partners", hasNotification: true },
  { name: "Media Sponsors", hasNotification: true },
]

export function DashboardSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const [foldersOpen, setFoldersOpen] = React.useState(true)

  return (
    <Sidebar collapsible="offExamples" className="lg:border-r-0!" {...props}>
      <SidebarHeader className="p-3 pb-0 sm:p-4 lg:p-5">
        <div className="flex items-center gap-2">
          <div className="flex size-5 items-center justify-center rounded bg-linear-to-b from-[#6e3ff3] to-[#aa8ef9] text-white">
            <HugeiconsIcon icon={Invoice01Icon} className="size-3" />
          </div>
          <span className="text-base font-semibold sm:text-lg">SummitOps</span>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-3 sm:px-4 lg:px-5">
        <div className="mb-3 flex items-center gap-2 rounded-lg border bg-card p-2 sm:mb-4 sm:gap-3 sm:p-3">
          <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-linear-to-b from-[#6e3ff3] to-[#aa8ef9] text-white sm:size-[34px]">
            <HugeiconsIcon icon={Invoice01Icon} className="size-4 sm:size-5" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xs font-semibold sm:text-sm">Sponsorship Desk</p>
            <div className="flex items-center gap-1 text-muted-foreground">
              <HugeiconsIcon
                icon={UserGroupIcon}
                className="size-3 sm:size-3.5"
              />
              <span className="text-[10px] sm:text-xs">12 Coordinators</span>
            </div>
          </div>
        </div>

        <SidebarGroup className="p-0">
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    render={<Link href={item.href} />}
                    isActive={item.isActive}
                    className="h-9 sm:h-[38px]"
                  >
                    <HugeiconsIcon
                      icon={item.icon}
                      className={`size-4 sm:size-5 ${
                        item.isGradient ? "text-[#6e3ff3]" : ""
                      }`}
                    />
                    <span
                      className={`text-sm ${
                        item.isGradient
                          ? "bg-linear-to-r from-[#6e3ff3] to-[#df3674] bg-clip-text text-transparent"
                          : ""
                      }`}
                    >
                      {item.title}
                    </span>
                    {item.isActive && (
                      <HugeiconsIcon
                        icon={ArrowRight01Icon}
                        className="ml-auto size-4 text-muted-foreground opacity-60"
                      />
                    )}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <Collapsible open={foldersOpen} onOpenChange={setFoldersOpen}>
          <SidebarGroup className="p-0">
            <SidebarGroupLabel className="flex items-center justify-between px-0 text-[10px] font-semibold tracking-wider text-muted-foreground sm:text-[11px]">
              <CollapsibleTrigger className="flex cursor-pointer items-center gap-1.5">
                <HugeiconsIcon
                  icon={ArrowDown01Icon}
                  className={`size-3 transition-transform sm:size-3.5 ${
                    foldersOpen ? "" : "-rotate-90"
                  }`}
                />
                FOLDERS
              </CollapsibleTrigger>
              <HugeiconsIcon
                icon={MoreHorizontalIcon}
                className="size-4 cursor-pointer transition-colors hover:text-foreground"
              />
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu className="mt-2">
                  {folders.map((folder) => (
                    <SidebarMenuItem key={folder.name}>
                      <SidebarMenuButton
                        render={<Link href="#" />}
                        className="h-9 sm:h-[38px]"
                      >
                        <HugeiconsIcon
                          icon={Folder01Icon}
                          className="size-4 text-muted-foreground sm:size-5"
                        />
                        <span className="flex-1 truncate text-sm text-muted-foreground">
                          {folder.name}
                        </span>
                        {folder.hasNotification && (
                          <div className="size-1.5 shrink-0 rounded-full bg-[#6e3ff3]" />
                        )}
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
      </SidebarContent>

      <SidebarFooter className="px-3 pb-3 sm:px-4 sm:pb-4 lg:px-5 lg:pb-5">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              render={<Link href="#" />}
              className="h-9 sm:h-[38px]"
            >
              <HugeiconsIcon
                icon={HelpCircleIcon}
                className="size-4 sm:size-5"
              />
              <span className="text-sm">Help Center</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              render={<Link href="#" />}
              className="h-9 sm:h-[38px]"
            >
              <HugeiconsIcon
                icon={Settings01Icon}
                className="size-4 sm:size-5"
              />
              <span className="text-sm">Settings</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <div className="flex cursor-pointer items-center gap-2 rounded-lg p-2 transition-colors hover:bg-accent sm:gap-3 sm:p-3">
                <Avatar className="size-7 sm:size-8">
                  <AvatarImage src="https://api.dicebear.com/9.x/glass/svg?seed=LN" />
                  <AvatarFallback className="text-xs">CL</AvatarFallback>
                </Avatar>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-semibold sm:text-sm">
                    Connor Love
                  </p>
                  <p className="truncate text-[10px] text-muted-foreground sm:text-xs">
                    connorlove@gmail.com
                  </p>
                </div>
                <HugeiconsIcon
                  icon={ArrowDown01Icon}
                  className="size-4 shrink-0 text-muted-foreground"
                />
              </div>
            }
          />
          <DropdownMenuContent align="end" className="w-[200px]">
            <DropdownMenuItem>
              <HugeiconsIcon icon={UserIcon} className="mr-2 size-4" />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <HugeiconsIcon icon={Coins01Icon} className="mr-2 size-4" />
              Billing
            </DropdownMenuItem>
            <DropdownMenuItem>
              <HugeiconsIcon icon={Settings01Icon} className="mr-2 size-4" />
              Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-destructive">
              <HugeiconsIcon icon={Logout01Icon} className="mr-2 size-4" />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
