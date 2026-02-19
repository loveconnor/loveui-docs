"use client"

import {
  ChartLineData01Icon,
  Comment01Icon,
  Invoice01Icon,
  MoreHorizontalIcon,
  Notification01Icon,
  Search01Icon,
  Settings01Icon,
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
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@loveui/ui/ui/menu"

import { SidebarTrigger } from "@/components/ui/sidebar"

import { ThemeToggle } from "../theme-toggle"

export function DashboardHeader() {
  return (
    <header className="sticky top-0 z-10 flex w-full items-center gap-2 border-b bg-card px-3 py-3 sm:gap-3 sm:px-6 sm:py-4">
      <SidebarTrigger className="-ml-1 sm:-ml-2" />

      <div className="flex flex-1 items-center gap-2 sm:gap-3">
        <HugeiconsIcon
          icon={ChartLineData01Icon}
          className="hidden size-5 text-muted-foreground sm:block sm:size-6"
        />
        <h1 className="truncate text-base font-medium sm:text-lg">
          Sponsorships
        </h1>
      </div>

      <div className="relative hidden md:block">
        <HugeiconsIcon
          icon={Search01Icon}
          className="pointer-events-none absolute top-1/2 left-3 z-10 size-5 -translate-y-1/2 text-muted-foreground"
        />
        <Input
          placeholder="Search Anything..."
          className="h-9 w-[180px] border bg-card pr-14 pl-10 lg:w-[220px]"
        />
        <div className="absolute top-1/2 right-2 flex -translate-y-1/2 items-center gap-0.5 rounded bg-muted px-1 py-0.5 text-xs text-muted-foreground">
          <span>⌘K</span>
        </div>
      </div>

      <div className="hidden items-center gap-2 sm:flex">
        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <Button variant="outline" size="icon" className="relative size-9">
                <HugeiconsIcon icon={Notification01Icon} />
                <span className="absolute -top-0.5 -right-0.5 size-2.5 rounded-full border-2 border-card bg-rose-500" />
              </Button>
            }
          />
          <DropdownMenuContent align="end" className="w-80">
            <DropdownMenuGroup>
              <DropdownMenuLabel className="flex items-center justify-between">
                <span>Notifications</span>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-auto p-0 text-xs text-muted-foreground hover:text-foreground"
                >
                  Mark all as read
                </Button>
              </DropdownMenuLabel>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="flex cursor-pointer items-start gap-3 p-3">
              <Avatar className="mt-0.5 size-8">
                <AvatarImage src="https://api.dicebear.com/9.x/glass/svg?seed=Alex" />
                <AvatarFallback>AR</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium">New sponsor assigned</p>
                <p className="text-xs text-muted-foreground">
                  Mara Quinn assigned a new sponsor prospect
                </p>
                <p className="text-xs text-muted-foreground">2 min ago</p>
              </div>
              <span className="mt-2 size-2 rounded-full bg-blue-500" />
            </DropdownMenuItem>
            <DropdownMenuItem className="flex cursor-pointer items-start gap-3 p-3">
              <Avatar className="mt-0.5 size-8">
                <AvatarImage src="https://api.dicebear.com/9.x/glass/svg?seed=Mina" />
                <AvatarFallback>MS</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium">Sponsor stage updated</p>
                <p className="text-xs text-muted-foreground">
                  Nora Chen moved sponsor to Deck Sent
                </p>
                <p className="text-xs text-muted-foreground">15 min ago</p>
              </div>
              <span className="mt-2 size-2 rounded-full bg-blue-500" />
            </DropdownMenuItem>
            <DropdownMenuItem className="flex cursor-pointer items-start gap-3 p-3 opacity-60">
              <Avatar className="mt-0.5 size-8">
                <AvatarImage src="https://api.dicebear.com/9.x/glass/svg?seed=John" />
                <AvatarFallback>JK</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium">Comment added</p>
                <p className="text-xs text-muted-foreground">
                  Dylan Park commented on Sponsor #SPN-0908
                </p>
                <p className="text-xs text-muted-foreground">1 hour ago</p>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="justify-center text-sm text-muted-foreground">
              View all notifications
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <Button variant="outline" size="icon" className="size-9">
                <HugeiconsIcon icon={Comment01Icon} />
              </Button>
            }
          />
          <DropdownMenuContent align="end" className="w-80">
            <DropdownMenuGroup>
              <DropdownMenuLabel className="flex items-center justify-between">
                <span>Messages</span>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-auto p-0 text-xs text-muted-foreground hover:text-foreground"
                >
                  <HugeiconsIcon
                    icon={Settings01Icon}
                    className="mr-1 size-3.5"
                  />
                  Settings
                </Button>
              </DropdownMenuLabel>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="flex cursor-pointer items-start gap-3 p-3">
              <Avatar className="mt-0.5 size-8">
                <AvatarImage src="https://api.dicebear.com/9.x/glass/svg?seed=Sarah" />
                <AvatarFallback>SL</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">Sarah Lee</p>
                  <span className="text-xs text-muted-foreground">5m</span>
                </div>
                <p className="line-clamp-2 text-xs text-muted-foreground">
                  Can you send updated booth benefits to NorthPeak before noon?
                </p>
              </div>
              <span className="mt-2 size-2 rounded-full bg-blue-500" />
            </DropdownMenuItem>
            <DropdownMenuItem className="flex cursor-pointer items-start gap-3 p-3">
              <Avatar className="mt-0.5 size-8">
                <AvatarImage src="https://api.dicebear.com/9.x/glass/svg?seed=Alex" />
                <AvatarFallback>AR</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">Alex Ray</p>
                  <span className="text-xs text-muted-foreground">1h</span>
                </div>
                <p className="line-clamp-2 text-xs text-muted-foreground">
                  HarborLabs confirmed a call tomorrow at 2 PM to review tiers.
                </p>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex cursor-pointer items-start gap-3 p-3 opacity-60">
              <Avatar className="mt-0.5 size-8">
                <AvatarImage src="https://api.dicebear.com/9.x/glass/svg?seed=Mina" />
                <AvatarFallback>MS</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">Mina Swan</p>
                  <span className="text-xs text-muted-foreground">2d</span>
                </div>
                <p className="line-clamp-2 text-xs text-muted-foreground">
                  Great update. I will follow up on legal terms next week.
                </p>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="justify-center text-sm text-muted-foreground">
              View all messages
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <ThemeToggle />

      <DropdownMenu>
        <DropdownMenuTrigger
          render={
            <Button variant="ghost" size="icon" className="h-8 w-8 sm:hidden">
              <HugeiconsIcon icon={MoreHorizontalIcon} className="size-4" />
            </Button>
          }
        />
        <DropdownMenuContent className="w-40" align="end">
          <DropdownMenuItem>
            <HugeiconsIcon icon={Search01Icon} className="mr-2 size-4" />
            Search
          </DropdownMenuItem>
          <DropdownMenuItem>
            <HugeiconsIcon icon={Notification01Icon} className="mr-2 size-4" />
            Notifications
          </DropdownMenuItem>
          <DropdownMenuItem>
            <HugeiconsIcon icon={Comment01Icon} className="mr-2 size-4" />
            Messages
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  )
}
