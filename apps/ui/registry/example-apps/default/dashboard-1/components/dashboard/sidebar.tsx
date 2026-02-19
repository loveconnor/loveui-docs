"use client"

import * as React from "react"
import Link from "next/link"
import {
  Add01Icon,
  ArrowDown01Icon,
  ArrowRight01Icon,
  Calendar01Icon,
  Cancel01Icon,
  Coins01Icon,
  Comment01Icon,
  DashboardSquare01Icon,
  Folder01Icon,
  HelpCircleIcon,
  Invoice01Icon,
  Logout01Icon,
  Notification01Icon,
  Search01Icon,
  Settings01Icon,
  Task01Icon,
  Tick01Icon,
  UserGroupIcon,
  UserIcon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { Avatar, AvatarFallback, AvatarImage } from "@loveui/ui/ui/avatar"
import { Button } from "@loveui/ui/ui/button"
import { Input } from "@loveui/ui/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@loveui/ui/ui/menu"

import { cn } from "../../lib/utils"
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
} from "../ui/sidebar"

const menuItems = [
  { icon: DashboardSquare01Icon, label: "Dashboard", active: true },
  { icon: Notification01Icon, label: "Clinical Alerts", badge: "6" },
  { icon: UserGroupIcon, label: "Care Teams" },
  { icon: Calendar01Icon, label: "Shift Planner" },
  { icon: Coins01Icon, label: "Unit Budgets" },
  { icon: Invoice01Icon, label: "Claims" },
  { icon: Task01Icon, label: "Safety Checks" },
]

const favorites = [
  { icon: Folder01Icon, label: "ER Coverage" },
  { icon: Folder01Icon, label: "ICU Staffing" },
  { icon: Folder01Icon, label: "Discharge Ops" },
]

const footerItems = [
  { icon: Comment01Icon, label: "Feedback" },
  { icon: Settings01Icon, label: "Settings" },
  { icon: HelpCircleIcon, label: "Help Center" },
]

export function DashboardSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const [favoritesOpen, setFavoritesOpen] = React.useState(true)
  const [showUpgradeModal, setShowUpgradeModal] = React.useState(true)

  return (
    <Sidebar collapsible="offExamples" className="lg:border-r-0!" {...props}>
      <SidebarHeader className="p-5 pb-0">
        <div className="flex items-center justify-between">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2 outline-none">
              <div className="flex size-7 items-center justify-center overflow-hidden rounded-full bg-linear-to-br from-purple-400 via-pink-500 to-red-500 shadow-lg ring-1 ring-white/40" />
              <span className="font-medium text-muted-foreground">
                Riverbend Health
              </span>
              <HugeiconsIcon
                icon={ArrowDown01Icon}
                className="size-3 text-muted-foreground"
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              <DropdownMenuGroup>
                <p className="px-2 py-1.5 text-xs font-medium text-muted-foreground">
                  Workspaces
                </p>
                <DropdownMenuItem>
                  <div className="mr-2 size-5 rounded-full bg-linear-to-br from-purple-400 via-pink-500 to-red-500" />
                  Main Campus
                  <HugeiconsIcon icon={Tick01Icon} className="ml-auto size-4" />
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <div className="mr-2 size-5 rounded-full bg-linear-to-br from-blue-400 to-cyan-500" />
                  East Wing
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <div className="mr-2 size-5 rounded-full bg-linear-to-br from-green-400 to-emerald-500" />
                  Outpatient Center
                </DropdownMenuItem>
              </DropdownMenuGroup>

              <DropdownMenuSeparator />

              <DropdownMenuItem>
                <HugeiconsIcon icon={Add01Icon} className="mr-2 size-4" />
                Create Workspace
              </DropdownMenuItem>

              <DropdownMenuSeparator />

              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <HugeiconsIcon icon={UserIcon} className="mr-2 size-4" />
                  Account Settings
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <HugeiconsIcon
                    icon={Settings01Icon}
                    className="mr-2 size-4"
                  />
                  Workspace Settings
                </DropdownMenuItem>
              </DropdownMenuGroup>

              <DropdownMenuSeparator />

              <DropdownMenuItem className="text-destructive">
                <HugeiconsIcon icon={Logout01Icon} className="mr-2 size-4" />
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Avatar className="size-7">
            <AvatarImage src="/ln.png" />
            <AvatarFallback>AD</AvatarFallback>
          </Avatar>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-5 pt-5">
        <div className="relative mb-4">
          <HugeiconsIcon
            icon={Search01Icon}
            className="pointer-events-none absolute top-1/2 left-3 z-10 size-4 -translate-y-1/2 text-muted-foreground"
          />
          <Input
            placeholder="Search Anything..."
            className="h-9 bg-background pr-10 pl-9"
          />
          <div className="absolute top-1/2 right-2 -translate-y-1/2 rounded bg-muted px-1.5 py-0.5 text-[11px] font-medium text-muted-foreground">
            ⌘K
          </div>
        </div>

        <SidebarGroup className="p-0">
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton
                    isActive={item.active}
                    className="h-[38px]"
                  >
                    <HugeiconsIcon icon={item.icon} className="size-5" />
                    <span className="flex-1">{item.label}</span>
                    {item.badge && (
                      <span className="rounded-full bg-red-500 px-1.5 py-0.5 text-[10px] font-semibold text-white">
                        {item.badge}
                      </span>
                    )}
                    {item.active && (
                      <HugeiconsIcon
                        icon={ArrowRight01Icon}
                        className="size-4 text-muted-foreground opacity-60"
                      />
                    )}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="p-0">
          <SidebarGroupLabel className="flex items-center gap-1.5 px-0 text-[10px] font-semibold tracking-wider text-muted-foreground">
            <button
              onClick={() => setFavoritesOpen(!favoritesOpen)}
              className="flex cursor-pointer items-center gap-1.5"
            >
              <HugeiconsIcon
                icon={ArrowDown01Icon}
                className={cn(
                  "size-3.5 transition-transform",
                  !favoritesOpen && "-rotate-90"
                )}
              />
              FAVORITES
            </button>
          </SidebarGroupLabel>
          {favoritesOpen && (
            <SidebarGroupContent>
              <SidebarMenu className="mt-2">
                {favorites.map((item) => (
                  <SidebarMenuItem key={item.label}>
                    <SidebarMenuButton className="h-[38px]">
                      <HugeiconsIcon
                        icon={item.icon}
                        className="size-5 text-foreground"
                      />
                      <span className="text-muted-foreground">
                        {item.label}
                      </span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          )}
        </SidebarGroup>

        {showUpgradeModal && (
          <div className="relative mt-4 rounded-2xl border bg-card p-5 shadow-lg">
            <Button
              variant="ghost"
              size="icon-sm"
              className="absolute top-3 right-3 bg-muted"
              onClick={() => setShowUpgradeModal(false)}
            >
              <HugeiconsIcon icon={Cancel01Icon} className="size-3" />
            </Button>
            <p className="mb-2 text-sm font-semibold">
              🏥 3 high-priority units
            </p>
            <div className="mb-2 h-1.5 w-full rounded-sm bg-muted">
              <div className="h-full w-[62%] rounded-sm bg-foreground" />
            </div>
            <p className="mb-4 text-sm text-muted-foreground">
              Reassign floating nurses to maintain patient-to-staff ratios
            </p>
            <Link
              href="#"
              className="flex items-center gap-1 text-sm font-medium"
            >
              Optimize coverage
              <HugeiconsIcon icon={ArrowRight01Icon} className="size-3.5" />
            </Link>
          </div>
        )}

        <SidebarGroup className="p-0">
          <SidebarGroupContent>
            <SidebarMenu>
              {footerItems.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton className="h-[38px]">
                    <HugeiconsIcon icon={item.icon} className="size-5" />
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
