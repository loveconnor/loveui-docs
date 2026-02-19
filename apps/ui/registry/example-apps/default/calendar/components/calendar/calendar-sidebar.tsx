"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import {
  Search01Icon,
  Home01Icon,
  UserGroupIcon,
  FileEditIcon,
  Calendar01Icon,
  ChartBarLineIcon,
  Location01Icon,
  Folder01Icon,
  Share01Icon,
  Dollar01Icon,
  SparklesIcon,
  MortarboardIcon,
  Key01Icon,
  CrownIcon,
  Settings01Icon,
  ArrowDown01Icon,
  Layers01Icon,
  ArrowUpRight01Icon,
} from "@hugeicons/core-free-icons";
import { Input } from "@loveui/ui/ui/input";
import { Avatar, AvatarImage } from "@loveui/ui/ui/avatar";
import { Kbd } from "@loveui/ui/ui/kbd";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@loveui/ui/ui/collapsible";
import { Button } from "@loveui/ui/ui/button";
import { cn } from "../../lib/utils";

export function CalendarSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const [featuredOpen, setFeaturedOpen] = useState(true);

  return (
    <Sidebar className="lg:border-r-0!" {...props}>
      <SidebarHeader className="pb-0">
        <div className="px-2 py-1.5">
            <div className="flex items-center gap-2">
              <div className="size-9 shrink-0 bg-linear-to-br from-purple-500 to-pink-600 rounded-md shadow flex items-center justify-center text-white text-xs font-semibold border border-border">
                FP
              </div>
              <div className="flex flex-col items-start">
                <h1 className="font-semibold text-sm">Film Ops Team</h1>
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
              className="absolute left-2.5 top-1/2 -translate-y-1/2 size-4 text-zinc-400 dark:text-muted-foreground z-10 pointer-events-none"
            />
            <Input
              placeholder="Search anything"
              className="pl-8 pr-8 h-8 text-xs bg-neutral-100 dark:bg-background border-2 border-border"
            />
            <div className="flex items-center gap-0.5 rounded border border-border bg-sidebar px-1.5 py-0.5 shrink-0 absolute right-2 top-1/2 -translate-y-1/2">
              <span className="text-[10px] font-medium text-muted-foreground leading-none tracking-[-0.1px]">
                ⌘
              </span>
              <Kbd className="h-auto min-w-0 px-0 py-0 text-[10px] leading-none tracking-[-0.1px] bg-transparent border-0">
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
                <SidebarMenuButton className="h-[26px] text-xs text-zinc-950 dark:text-muted-foreground hover:bg-neutral-100/50 dark:hover:bg-muted/50 hover:text-zinc-950 dark:hover:text-foreground">
                  <HugeiconsIcon icon={Home01Icon} className="size-4" />
                  <span>Production Board</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton className="h-[26px] text-xs text-zinc-950 dark:text-muted-foreground hover:bg-neutral-100/50 dark:hover:bg-muted/50 hover:text-zinc-950 dark:hover:text-foreground">
                  <HugeiconsIcon icon={UserGroupIcon} className="size-4" />
                  <span>Crew Calls</span>
                  <span className="ml-auto text-xs">18</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton className="h-[26px] text-xs text-zinc-950 dark:text-muted-foreground hover:bg-neutral-100/50 dark:hover:bg-muted/50 hover:text-zinc-950 dark:hover:text-foreground">
                  <HugeiconsIcon icon={FileEditIcon} className="size-4" />
                  <span>Shot List</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  isActive
                  className="h-[26px] text-xs bg-neutral-100 dark:bg-muted text-zinc-950 dark:text-foreground hover:bg-neutral-100 dark:hover:bg-muted hover:text-zinc-950 dark:hover:text-foreground"
                >
                  <HugeiconsIcon icon={Calendar01Icon} className="size-4" />
                  <span>Calendar</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton className="h-[26px] text-xs text-zinc-950 dark:text-muted-foreground hover:bg-neutral-100/50 dark:hover:bg-muted/50 hover:text-zinc-950 dark:hover:text-foreground">
                  <HugeiconsIcon icon={ChartBarLineIcon} className="size-4" />
                  <span>Dailies</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton className="h-[26px] text-xs text-zinc-950 dark:text-muted-foreground hover:bg-neutral-100/50 dark:hover:bg-muted/50 hover:text-zinc-950 dark:hover:text-foreground">
                  <HugeiconsIcon icon={Location01Icon} className="size-4" />
                  <span>Locations</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton className="h-[26px] text-xs text-zinc-950 dark:text-muted-foreground hover:bg-neutral-100/50 dark:hover:bg-muted/50 hover:text-zinc-950 dark:hover:text-foreground">
                  <HugeiconsIcon icon={Folder01Icon} className="size-4" />
                  <span>Assets</span>
                  <HugeiconsIcon
                    icon={SparklesIcon}
                    className="ml-auto size-3 text-cyan-500"
                  />
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton className="h-[26px] text-xs text-zinc-950 dark:text-muted-foreground hover:bg-neutral-100/50 dark:hover:bg-muted/50 hover:text-zinc-950 dark:hover:text-foreground">
                  <HugeiconsIcon icon={Share01Icon} className="size-4" />
                  <span>Crew Time</span>
                  <HugeiconsIcon
                    icon={SparklesIcon}
                    className="ml-auto size-3 text-cyan-500"
                  />
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton className="h-[26px] text-xs text-zinc-950 dark:text-muted-foreground hover:bg-neutral-100/50 dark:hover:bg-muted/50 hover:text-zinc-950 dark:hover:text-foreground">
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
                <SidebarGroupLabel className="h-4 pb-4 pt-2 text-xs text-muted-foreground hover:text-foreground hover:bg-transparent cursor-pointer">
                  <span>Featured shoot day</span>
                  <HugeiconsIcon
                    icon={ArrowDown01Icon}
                    className={cn(
                      "size-4 transition-transform ml-auto",
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
                    <SidebarMenuButton className="h-[26px] text-xs text-zinc-950 dark:text-muted-foreground hover:bg-neutral-100/50 dark:hover:bg-muted/50 hover:text-zinc-950 dark:hover:text-foreground">
                      <HugeiconsIcon icon={FileEditIcon} className="size-4" />
                      <span>Downtown Rooftop Night Exterior</span>
                      <HugeiconsIcon
                        icon={SparklesIcon}
                        className="ml-auto size-3 text-cyan-500"
                      />
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton className="h-[26px] text-xs text-zinc-950 dark:text-muted-foreground hover:bg-neutral-100/50 dark:hover:bg-muted/50 hover:text-zinc-950 dark:hover:text-foreground">
                      <HugeiconsIcon icon={FileEditIcon} className="size-4" />
                      <span>Train Platform Dialogue</span>
                      <HugeiconsIcon
                        icon={SparklesIcon}
                        className="ml-auto size-3 text-cyan-500"
                      />
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton className="h-[26px] text-xs text-zinc-950 dark:text-muted-foreground hover:bg-neutral-100/50 dark:hover:bg-muted/50 hover:text-zinc-950 dark:hover:text-foreground">
                      <HugeiconsIcon icon={FileEditIcon} className="size-4" />
                      <span>Harbor Chase Unit B</span>
                      <HugeiconsIcon
                        icon={SparklesIcon}
                        className="ml-auto size-3 text-cyan-500"
                      />
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton className="h-[26px] text-xs text-zinc-950 dark:text-muted-foreground hover:bg-neutral-100/50 dark:hover:bg-muted/50 hover:text-zinc-950 dark:hover:text-foreground">
                      <HugeiconsIcon icon={FileEditIcon} className="size-4" />
                      <span>Studio Insert Pickups</span>
                      <HugeiconsIcon
                        icon={SparklesIcon}
                        className="ml-auto size-3 text-cyan-500"
                      />
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton className="h-[26px] text-xs text-zinc-950 dark:text-muted-foreground hover:bg-neutral-100/50 dark:hover:bg-muted/50 hover:text-zinc-950 dark:hover:text-foreground">
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
        <div className="space-y-1 my-4">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton className="h-[26px] text-xs text-zinc-950 dark:text-muted-foreground hover:bg-neutral-100/50 dark:hover:bg-muted/50 hover:text-zinc-950 dark:hover:text-foreground">
                <HugeiconsIcon icon={SparklesIcon} className="size-4" />
                <span>What&apos;s New</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton className="h-[26px] text-xs text-zinc-950 dark:text-muted-foreground hover:bg-neutral-100/50 dark:hover:bg-muted/50 hover:text-zinc-950 dark:hover:text-foreground">
                <HugeiconsIcon icon={MortarboardIcon} className="size-4" />
                <span>Crew Academy</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton className="h-[26px] text-xs text-zinc-950 dark:text-muted-foreground hover:bg-neutral-100/50 dark:hover:bg-muted/50 hover:text-zinc-950 dark:hover:text-foreground">
                <HugeiconsIcon icon={Key01Icon} className="size-4" />
                <span>Gear Access</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton className="h-[26px] text-xs text-zinc-950 dark:text-muted-foreground hover:bg-neutral-100/50 dark:hover:bg-muted/50 hover:text-zinc-950 dark:hover:text-foreground">
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
          <div className="flex-1 min-w-0">
            <p className="text-xs font-medium text-foreground truncate">FP</p>
            <p className="text-xs text-muted-foreground truncate">filmops.studio</p>
          </div>
          <HugeiconsIcon
            icon={Settings01Icon}
            className="size-4 text-muted-foreground"
          />
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
