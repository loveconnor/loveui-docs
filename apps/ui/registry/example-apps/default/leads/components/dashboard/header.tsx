"use client";

import { Button } from "@loveui/ui/ui/button";
import { Input } from "@loveui/ui/ui/input";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ThemeToggle } from "../theme-toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  DropdownMenuLabel,
} from "@loveui/ui/ui/menu";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Search01Icon,
  Notification01Icon,
  Comment01Icon,
  MoreHorizontalIcon,
  ChartLineData01Icon,
  Settings01Icon,
  Invoice01Icon,
} from "@hugeicons/core-free-icons";
import { Avatar, AvatarFallback, AvatarImage } from "@loveui/ui/ui/avatar";

export function DashboardHeader() {
  return (
    <header className="flex items-center gap-2 sm:gap-3 px-3 sm:px-6 py-3 sm:py-4 border-b bg-card sticky top-0 z-10 w-full">
      <SidebarTrigger className="-ml-1 sm:-ml-2" />

      <div className="flex items-center gap-2 sm:gap-3 flex-1">
        <HugeiconsIcon icon={ChartLineData01Icon} className="size-5 sm:size-6 text-muted-foreground hidden sm:block" />
        <h1 className="text-base sm:text-lg font-medium truncate">Leads</h1>
      </div>

      <div className="hidden md:block relative">
        <HugeiconsIcon icon={Search01Icon} className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-muted-foreground z-10 pointer-events-none" />
        <Input
          placeholder="Search Anything..."
          className="pl-10 pr-14 w-[180px] lg:w-[220px] h-9 bg-card border"
        />
        <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-0.5 bg-muted px-1 py-0.5 rounded text-xs text-muted-foreground">
          <span>⌘K</span>
        </div>
      </div>

      <div className="hidden sm:flex items-center gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <Button variant="outline" size="icon" className="relative size-9">
                <HugeiconsIcon icon={Notification01Icon} />
                <span className="absolute -top-0.5 -right-0.5 size-2.5 bg-rose-500 rounded-full border-2 border-card" />
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
            <DropdownMenuItem className="flex items-start gap-3 p-3 cursor-pointer">
              <Avatar className="size-8 mt-0.5">
                <AvatarImage src="https://api.dicebear.com/9.x/glass/svg?seed=Alex" />
                <AvatarFallback>AR</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium">New lead assigned</p>
                <p className="text-xs text-muted-foreground">
                  Alex Ray assigned you a new lead
                </p>
                <p className="text-xs text-muted-foreground">2 min ago</p>
              </div>
              <span className="size-2 bg-blue-500 rounded-full mt-2" />
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-start gap-3 p-3 cursor-pointer">
              <Avatar className="size-8 mt-0.5">
                <AvatarImage src="https://api.dicebear.com/9.x/glass/svg?seed=Mina" />
                <AvatarFallback>MS</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium">Lead status updated</p>
                <p className="text-xs text-muted-foreground">
                  Mina Swan changed status to Qualified
                </p>
                <p className="text-xs text-muted-foreground">15 min ago</p>
              </div>
              <span className="size-2 bg-blue-500 rounded-full mt-2" />
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-start gap-3 p-3 cursor-pointer opacity-60">
              <Avatar className="size-8 mt-0.5">
                <AvatarImage src="https://api.dicebear.com/9.x/glass/svg?seed=John" />
                <AvatarFallback>JK</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium">Comment added</p>
                <p className="text-xs text-muted-foreground">
                  John Kim commented on Lead #LD21305
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
                  <HugeiconsIcon icon={Settings01Icon} className="size-3.5 mr-1" />
                  Settings
                </Button>
              </DropdownMenuLabel>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="flex items-start gap-3 p-3 cursor-pointer">
              <Avatar className="size-8 mt-0.5">
                <AvatarImage src="https://api.dicebear.com/9.x/glass/svg?seed=Sarah" />
                <AvatarFallback>SL</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">Sarah Lee</p>
                  <span className="text-xs text-muted-foreground">5m</span>
                </div>
                <p className="text-xs text-muted-foreground line-clamp-2">
                  Hey, can you check the new lead from Acme Corp? They seem
                  interested...
                </p>
              </div>
              <span className="size-2 bg-blue-500 rounded-full mt-2" />
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-start gap-3 p-3 cursor-pointer">
              <Avatar className="size-8 mt-0.5">
                <AvatarImage src="https://api.dicebear.com/9.x/glass/svg?seed=Alex" />
                <AvatarFallback>AR</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">Alex Ray</p>
                  <span className="text-xs text-muted-foreground">1h</span>
                </div>
                <p className="text-xs text-muted-foreground line-clamp-2">
                  The meeting with TechStart is confirmed for tomorrow at 2 PM
                </p>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-start gap-3 p-3 cursor-pointer opacity-60">
              <Avatar className="size-8 mt-0.5">
                <AvatarImage src="https://api.dicebear.com/9.x/glass/svg?seed=Mina" />
                <AvatarFallback>MS</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">Mina Swan</p>
                  <span className="text-xs text-muted-foreground">2d</span>
                </div>
                <p className="text-xs text-muted-foreground line-clamp-2">
                  Thanks for the update! I'll follow up with them next week.
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
            <Button variant="ghost" size="icon" className="sm:hidden h-8 w-8">
              <HugeiconsIcon icon={MoreHorizontalIcon} className="size-4" />
            </Button>
          }
        />
        <DropdownMenuContent className="w-40" align="end">
          <DropdownMenuItem>
            <HugeiconsIcon icon={Search01Icon} className="size-4 mr-2" />
            Search
          </DropdownMenuItem>
          <DropdownMenuItem>
            <HugeiconsIcon icon={Notification01Icon} className="size-4 mr-2" />
            Notifications
          </DropdownMenuItem>
          <DropdownMenuItem>
            <HugeiconsIcon icon={Comment01Icon} className="size-4 mr-2" />
            Messages
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}
