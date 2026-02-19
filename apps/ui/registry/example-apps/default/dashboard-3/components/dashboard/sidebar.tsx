"use client"

import Link from "next/link"
import {
  Add01Icon,
  ArrowDown01Icon,
  Calendar01Icon,
  ChartLineData01Icon,
  DashboardSquare01Icon,
  HelpCircleIcon,
  Layers01Icon,
  Mail01Icon,
  Notification01Icon,
  Search01Icon,
  Settings01Icon,
  SparklesIcon,
  Task01Icon,
  Tick01Icon,
  UserIcon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { Avatar, AvatarFallback, AvatarImage } from "@loveui/ui/ui/avatar"
import { Button } from "@loveui/ui/ui/button"
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
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar"

const navItems = [
  {
    title: "Search",
    icon: Search01Icon,
    shortcut: "/",
    iconColor: "text-muted-foreground",
  },
  { title: "Advisor AI", icon: SparklesIcon, iconColor: "text-violet-500" },
  { title: "Course Templates", icon: Layers01Icon, iconColor: "text-blue-500" },
  {
    title: "Campus Alerts",
    icon: Notification01Icon,
    iconColor: "text-amber-500",
  },
  {
    title: "Academic Hub",
    icon: DashboardSquare01Icon,
    isActive: true,
    iconColor: "text-primary",
  },
  { title: "Faculty Inbox", icon: Mail01Icon, iconColor: "text-cyan-500" },
  { title: "Assignments", icon: Task01Icon, iconColor: "text-emerald-500" },
  {
    title: "Class Calendar",
    icon: Calendar01Icon,
    iconColor: "text-orange-500",
  },
  {
    title: "Program Insights",
    icon: ChartLineData01Icon,
    iconColor: "text-rose-500",
  },
  { title: "Student Support", icon: HelpCircleIcon, iconColor: "text-sky-500" },
  {
    title: "Preferences",
    icon: Settings01Icon,
    iconColor: "text-muted-foreground",
  },
]

export function DashboardSidebar(props: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offExamples" className="lg:border-r-0!" {...props}>
      <SidebarHeader className="px-3 py-4">
        <div className="flex w-full items-center justify-between">
          <DropdownMenu>
            <DropdownMenuTrigger
              render={
                <button className="flex w-full items-center justify-start gap-2 outline-none">
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground">
                    <span className="text-sm font-bold">AU</span>
                  </div>
                  <span className="truncate font-semibold text-sidebar-foreground">
                    Aurora University
                  </span>
                  <HugeiconsIcon
                    icon={ArrowDown01Icon}
                    className="size-3 shrink-0 text-muted-foreground"
                  />
                </button>
              }
            />
            <DropdownMenuContent align="start" className="w-56">
              <DropdownMenuGroup>
                <p className="px-2 py-1.5 text-xs font-medium text-muted-foreground">
                  Workspaces
                </p>
                <DropdownMenuItem>
                  <div className="mr-2 flex size-5 items-center justify-center rounded bg-primary/20 text-xs font-bold text-primary">
                    AU
                  </div>
                  Aurora University
                  <HugeiconsIcon icon={Tick01Icon} className="ml-auto size-4" />
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <div className="mr-2 flex size-5 items-center justify-center rounded bg-blue-500/20 text-xs font-bold text-blue-600 dark:text-blue-400">
                    SC
                  </div>
                  Science College
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <div className="mr-2 flex size-5 items-center justify-center rounded bg-emerald-500/20 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                    AR
                  </div>
                  Arts & Research
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <HugeiconsIcon icon={Add01Icon} className="mr-2 size-4" />
                Create Workspace
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <HugeiconsIcon icon={UserIcon} className="mr-2 size-4" />
                Profile
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Avatar className="size-8 shrink-0 border-2 border-sidebar">
            <AvatarImage src="/cl.png" />
            <AvatarFallback>CL</AvatarFallback>
          </Avatar>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-2">
        <SidebarGroup className="p-0">
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    isActive={item.isActive}
                    className="h-9"
                    render={<Link href="#" />}
                  >
                    <HugeiconsIcon
                      icon={item.icon}
                      className={cn("size-4 shrink-0", item.iconColor)}
                    />
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
      </SidebarContent>
    </Sidebar>
  )
}
