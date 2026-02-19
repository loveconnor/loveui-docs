"use client"

import { useState } from "react"
import {
  Add01Icon,
  AlertCircleIcon,
  Calendar01Icon,
  Clock01Icon,
  Notification01Icon,
  Tick02Icon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { format } from "date-fns"

import { Button } from "@loveui/ui/ui/button"
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

import { getTodayEvents } from "../../mock-data/events"
import { useCalendarStore } from "../../store/calendar-store"
import { ThemeToggle } from "../theme-toggle"
import { CreateEventDialog } from "./create-event-dialog"
import { SchedulePopover } from "./schedule-popover"

export function CalendarHeader() {
  const { currentWeekStart } = useCalendarStore()
  const todayEvents = getTodayEvents()
  const meetingsCount = todayEvents.filter(
    (e) =>
      e.title.toLowerCase().includes("call") ||
      e.title.toLowerCase().includes("meeting")
  ).length
  const eventsCount = todayEvents.length - meetingsCount
  const [createDialogOpen, setCreateDialogOpen] = useState(false)

  return (
    <>
      <CreateEventDialog
        open={createDialogOpen}
        onOpenChange={setCreateDialogOpen}
      />
      <div className="border-b border-border bg-background">
        <div className="px-3 py-2.5 md:px-6 md:py-3">
          <div className="flex flex-nowrap items-center justify-between gap-2 md:gap-3">
            <div className="flex min-w-0 flex-1 items-center gap-2">
              <SidebarTrigger className="shrink-0" />
              <div className="min-w-0 flex-1">
                <h1 className="mb-0 truncate text-sm font-semibold text-foreground md:mb-1 md:text-base lg:text-lg">
                  {format(currentWeekStart, "MMMM dd, yyyy")}
                </h1>
                <p className="hidden text-xs text-muted-foreground md:block">
                  You have {meetingsCount} call
                  {meetingsCount !== 1 ? "s" : ""} and {eventsCount} production
                  block{eventsCount !== 1 ? "s" : ""} today 🎬
                </p>
              </div>
            </div>

            <div className="flex shrink-0 items-center gap-1 md:gap-1.5 lg:gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger
                  render={
                    <Button
                      variant="ghost"
                      size="icon"
                      className="relative size-7 shrink-0 md:size-8"
                    >
                      <HugeiconsIcon
                        icon={Notification01Icon}
                        className="size-4"
                      />
                      <span className="absolute top-1 right-1 size-1 rounded-full bg-red-500" />
                    </Button>
                  }
                />
                <DropdownMenuContent align="end" className="w-80">
                  <DropdownMenuGroup>
                    <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="flex cursor-pointer flex-col items-start gap-1 p-3">
                    <div className="flex w-full items-center gap-2">
                      <HugeiconsIcon
                        icon={Tick02Icon}
                        className="size-4 text-green-500"
                      />
                      <span className="flex-1 text-sm font-medium">
                        Meeting confirmed
                      </span>
                      <span className="text-xs text-muted-foreground">
                        2m ago
                      </span>
                    </div>
                    <p className="pl-6 text-xs text-muted-foreground">
                      Unit call is confirmed for tomorrow at 6:30 AM
                    </p>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex cursor-pointer flex-col items-start gap-1 p-3">
                    <div className="flex w-full items-center gap-2">
                      <HugeiconsIcon
                        icon={Clock01Icon}
                        className="size-4 text-blue-500"
                      />
                      <span className="flex-1 text-sm font-medium">
                        Reminder
                      </span>
                      <span className="text-xs text-muted-foreground">
                        15m ago
                      </span>
                    </div>
                    <p className="pl-6 text-xs text-muted-foreground">
                      Scene 40 rehearsal starts in 30 minutes
                    </p>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex cursor-pointer flex-col items-start gap-1 p-3">
                    <div className="flex w-full items-center gap-2">
                      <HugeiconsIcon
                        icon={AlertCircleIcon}
                        className="size-4 text-orange-500"
                      />
                      <span className="flex-1 text-sm font-medium">
                        Event updated
                      </span>
                      <span className="text-xs text-muted-foreground">
                        1h ago
                      </span>
                    </div>
                    <p className="pl-6 text-xs text-muted-foreground">
                      Vendor status meeting moved to 11:30 AM
                    </p>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex cursor-pointer flex-col items-start gap-1 p-3">
                    <div className="flex w-full items-center gap-2">
                      <HugeiconsIcon
                        icon={Tick02Icon}
                        className="size-4 text-green-500"
                      />
                      <span className="flex-1 text-sm font-medium">
                        New participant
                      </span>
                      <span className="text-xs text-muted-foreground">
                        3h ago
                      </span>
                    </div>
                    <p className="pl-6 text-xs text-muted-foreground">
                      Nora from post joined the teaser review call
                    </p>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="cursor-pointer justify-center">
                    <span className="text-xs text-muted-foreground">
                      View all notifications
                    </span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <SchedulePopover>
                <Button
                  variant="outline"
                  size="icon"
                  className="size-7 shrink-0 md:size-8 md:w-auto md:gap-1.5 md:px-2"
                >
                  <HugeiconsIcon icon={Calendar01Icon} className="size-4" />
                  <span className="hidden lg:inline">Call Sheet</span>
                </Button>
              </SchedulePopover>

              <Button
                size="icon"
                className="size-7 shrink-0 bg-foreground text-background hover:bg-foreground/90 md:size-8 md:w-auto md:gap-1.5 md:px-2"
                onClick={() => setCreateDialogOpen(true)}
              >
                <HugeiconsIcon icon={Add01Icon} className="size-4" />
                <span className="hidden lg:inline">Create Block</span>
              </Button>

              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
