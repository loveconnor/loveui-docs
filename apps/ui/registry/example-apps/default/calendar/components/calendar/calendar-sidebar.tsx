"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ArrowDown01Icon,
  ArrowUpRight01Icon,
  Calendar01Icon,
  ChartBarLineIcon,
  CrownIcon,
  Dollar01Icon,
  FileEditIcon,
  Folder01Icon,
  Home01Icon,
  Key01Icon,
  Layers01Icon,
  Location01Icon,
  MortarboardIcon,
  Search01Icon,
  Settings01Icon,
  Share01Icon,
  SparklesIcon,
  UserGroupIcon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { Avatar, AvatarImage } from "@loveui/ui/ui/avatar"
import { Button } from "@loveui/ui/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@loveui/ui/ui/collapsible"
import { Input } from "@loveui/ui/ui/input"
import { Kbd } from "@loveui/ui/ui/kbd"

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
  SidebarSeparator,
} from "@/components/ui/sidebar"

import { cn } from "../../lib/utils"

export function CalendarSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const [featuredOpen, setFeaturedOpen] = useState(true)

  return (
    <Sidebar className="lg:border-r-0!" {...props}>
      <SidebarHeader className="pb-0">
        <div className="px-2 py-1.5">
          <div className="flex items-center gap-2">
            <div className="flex size-9 shrink-0 items-center justify-center rounded-md border border-border bg-linear-to-br from-purple-500 to-pink-600 text-xs font-semibold text-white shadow">
              FP
            </div>
            <div className="flex flex-col items-start">
              <h1 className="text-sm font-semibold">Film Ops Team</h1>
              <div className="flex items-center gap-1">
                <HugeiconsIcon icon={Layers01Icon} className="size-3" />
                <span className="text-xs">6 active sets</span>
              </div>
            </div>
          </div>

          <Avatar className="size-7 border-2 border-background">
            <AvatarImage src="/cl.png" />
          </Avatar>
          <div className="relative">
            <HugeiconsIcon
              icon={Search01Icon}
              className="pointer-events-none absolute top-1/2 left-2.5 z-10 size-4 -translate-y-1/2 text-zinc-400 dark:text-muted-foreground"
            />
            <Input
              placeholder="Search anything"
              className="h-8 border-2 border-border bg-neutral-100 pr-8 pl-8 text-xs dark:bg-background"
            />
            <div className="absolute top-1/2 right-2 flex shrink-0 -translate-y-1/2 items-center gap-0.5 rounded border border-border bg-sidebar px-1.5 py-0.5">
              <span className="text-[10px] leading-none font-medium tracking-[-0.1px] text-muted-foreground">
                ⌘
              </span>
              <Kbd className="h-auto min-w-0 border-0 bg-transparent px-0 py-0 text-[10px] leading-none tracking-[-0.1px]">
                K
              </Kbd>
            </div>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton className="h-[26px] text-xs text-zinc-950 hover:bg-neutral-100/50 hover:text-zinc-950 dark:text-muted-foreground dark:hover:bg-muted/50 dark:hover:text-foreground">
                  <HugeiconsIcon icon={Home01Icon} className="size-4" />
                  <span>Production Board</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton className="h-[26px] text-xs text-zinc-950 hover:bg-neutral-100/50 hover:text-zinc-950 dark:text-muted-foreground dark:hover:bg-muted/50 dark:hover:text-foreground">
                  <HugeiconsIcon icon={UserGroupIcon} className="size-4" />
                  <span>Crew Calls</span>
                  <span className="ml-auto text-xs">18</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton className="h-[26px] text-xs text-zinc-950 hover:bg-neutral-100/50 hover:text-zinc-950 dark:text-muted-foreground dark:hover:bg-muted/50 dark:hover:text-foreground">
                  <HugeiconsIcon icon={FileEditIcon} className="size-4" />
                  <span>Shot List</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  isActive
                  className="h-[26px] bg-neutral-100 text-xs text-zinc-950 hover:bg-neutral-100 hover:text-zinc-950 dark:bg-muted dark:text-foreground dark:hover:bg-muted dark:hover:text-foreground"
                >
                  <HugeiconsIcon icon={Calendar01Icon} className="size-4" />
                  <span>Calendar</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton className="h-[26px] text-xs text-zinc-950 hover:bg-neutral-100/50 hover:text-zinc-950 dark:text-muted-foreground dark:hover:bg-muted/50 dark:hover:text-foreground">
                  <HugeiconsIcon icon={ChartBarLineIcon} className="size-4" />
                  <span>Dailies</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton className="h-[26px] text-xs text-zinc-950 hover:bg-neutral-100/50 hover:text-zinc-950 dark:text-muted-foreground dark:hover:bg-muted/50 dark:hover:text-foreground">
                  <HugeiconsIcon icon={Location01Icon} className="size-4" />
                  <span>Locations</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton className="h-[26px] text-xs text-zinc-950 hover:bg-neutral-100/50 hover:text-zinc-950 dark:text-muted-foreground dark:hover:bg-muted/50 dark:hover:text-foreground">
                  <HugeiconsIcon icon={Folder01Icon} className="size-4" />
                  <span>Assets</span>
                  <HugeiconsIcon
                    icon={SparklesIcon}
                    className="ml-auto size-3 text-cyan-500"
                  />
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton className="h-[26px] text-xs text-zinc-950 hover:bg-neutral-100/50 hover:text-zinc-950 dark:text-muted-foreground dark:hover:bg-muted/50 dark:hover:text-foreground">
                  <HugeiconsIcon icon={Share01Icon} className="size-4" />
                  <span>Crew Time</span>
                  <HugeiconsIcon
                    icon={SparklesIcon}
                    className="ml-auto size-3 text-cyan-500"
                  />
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton className="h-[26px] text-xs text-zinc-950 hover:bg-neutral-100/50 hover:text-zinc-950 dark:text-muted-foreground dark:hover:bg-muted/50 dark:hover:text-foreground">
                  <HugeiconsIcon icon={Dollar01Icon} className="size-4" />
                  <span>Vendors</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator className="mx-0" />

        <SidebarGroup>
          <Collapsible open={featuredOpen} onOpenChange={setFeaturedOpen}>
            <CollapsibleTrigger
              nativeButton={false}
              render={
                <SidebarGroupLabel className="h-4 cursor-pointer pt-2 pb-4 text-xs text-muted-foreground hover:bg-transparent hover:text-foreground">
                  <span>Featured shoot day</span>
                  <HugeiconsIcon
                    icon={ArrowDown01Icon}
                    className={cn(
                      "ml-auto size-4 transition-transform",
                      featuredOpen && "rotate-180"
                    )}
                  />
                </SidebarGroupLabel>
              }
            />
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton className="h-[26px] text-xs text-zinc-950 hover:bg-neutral-100/50 hover:text-zinc-950 dark:text-muted-foreground dark:hover:bg-muted/50 dark:hover:text-foreground">
                      <HugeiconsIcon icon={FileEditIcon} className="size-4" />
                      <span>Downtown Rooftop Night Exterior</span>
                      <HugeiconsIcon
                        icon={SparklesIcon}
                        className="ml-auto size-3 text-cyan-500"
                      />
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton className="h-[26px] text-xs text-zinc-950 hover:bg-neutral-100/50 hover:text-zinc-950 dark:text-muted-foreground dark:hover:bg-muted/50 dark:hover:text-foreground">
                      <HugeiconsIcon icon={FileEditIcon} className="size-4" />
                      <span>Train Platform Dialogue</span>
                      <HugeiconsIcon
                        icon={SparklesIcon}
                        className="ml-auto size-3 text-cyan-500"
                      />
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton className="h-[26px] text-xs text-zinc-950 hover:bg-neutral-100/50 hover:text-zinc-950 dark:text-muted-foreground dark:hover:bg-muted/50 dark:hover:text-foreground">
                      <HugeiconsIcon icon={FileEditIcon} className="size-4" />
                      <span>Harbor Chase Unit B</span>
                      <HugeiconsIcon
                        icon={SparklesIcon}
                        className="ml-auto size-3 text-cyan-500"
                      />
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton className="h-[26px] text-xs text-zinc-950 hover:bg-neutral-100/50 hover:text-zinc-950 dark:text-muted-foreground dark:hover:bg-muted/50 dark:hover:text-foreground">
                      <HugeiconsIcon icon={FileEditIcon} className="size-4" />
                      <span>Studio Insert Pickups</span>
                      <HugeiconsIcon
                        icon={SparklesIcon}
                        className="ml-auto size-3 text-cyan-500"
                      />
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton className="h-[26px] text-xs text-zinc-950 hover:bg-neutral-100/50 hover:text-zinc-950 dark:text-muted-foreground dark:hover:bg-muted/50 dark:hover:text-foreground">
                      <HugeiconsIcon icon={FileEditIcon} className="size-4" />
                      <span>Closing Credits Pickup</span>
                      <HugeiconsIcon
                        icon={SparklesIcon}
                        className="ml-auto size-3 text-cyan-500"
                      />
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </Collapsible>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4">
        <div className="my-4 space-y-1">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton className="h-[26px] text-xs text-zinc-950 hover:bg-neutral-100/50 hover:text-zinc-950 dark:text-muted-foreground dark:hover:bg-muted/50 dark:hover:text-foreground">
                <HugeiconsIcon icon={SparklesIcon} className="size-4" />
                <span>What&apos;s New</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton className="h-[26px] text-xs text-zinc-950 hover:bg-neutral-100/50 hover:text-zinc-950 dark:text-muted-foreground dark:hover:bg-muted/50 dark:hover:text-foreground">
                <HugeiconsIcon icon={MortarboardIcon} className="size-4" />
                <span>Crew Academy</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton className="h-[26px] text-xs text-zinc-950 hover:bg-neutral-100/50 hover:text-zinc-950 dark:text-muted-foreground dark:hover:bg-muted/50 dark:hover:text-foreground">
                <HugeiconsIcon icon={Key01Icon} className="size-4" />
                <span>Gear Access</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton className="h-[26px] text-xs text-zinc-950 hover:bg-neutral-100/50 hover:text-zinc-950 dark:text-muted-foreground dark:hover:bg-muted/50 dark:hover:text-foreground">
                <HugeiconsIcon icon={CrownIcon} className="size-4" />
                <span>Run of Show</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </div>

        <div className="flex items-center gap-3">
          <Avatar className="size-7 border-2 border-background">
            <AvatarImage src="https://api.dicebear.com/9.x/glass/svg?seed=user" />
          </Avatar>
          <div className="min-w-0 flex-1">
            <p className="truncate text-xs font-medium text-foreground">FP</p>
            <p className="truncate text-xs text-muted-foreground">
              filmops.studio
            </p>
          </div>
          <HugeiconsIcon
            icon={Settings01Icon}
            className="size-4 text-muted-foreground"
          />
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
