"use client"

import { useState } from "react"
import {
  Calendar01Icon,
  CancelCircleIcon,
  FilterIcon,
  Search01Icon,
  Settings01Icon,
  Tick02Icon,
  UserGroupIcon,
  UserRemove01Icon,
  VideoReplayIcon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { format } from "date-fns"

import { Button } from "@loveui/ui/ui/button"
import { Input } from "@loveui/ui/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@loveui/ui/ui/popover"
import { Separator } from "@loveui/ui/ui/separator"

import { cn } from "../../lib/utils"
import { useCalendarStore } from "../../store/calendar-store"
import { Calendar } from "../ui/calendar"

export function CalendarControls() {
  const {
    searchQuery,
    setSearchQuery,
    goToToday,
    goToDate,
    currentWeekStart,
    eventTypeFilter,
    participantsFilter,
    setEventTypeFilter,
    setParticipantsFilter,
  } = useCalendarStore()
  const [datePickerOpen, setDatePickerOpen] = useState(false)
  const [filterOpen, setFilterOpen] = useState(false)
  const weekStart = format(currentWeekStart, "MMM dd")
  const weekEnd = format(
    new Date(currentWeekStart.getTime() + 6 * 24 * 60 * 60 * 1000),
    "MMM dd yyyy"
  )

  const hasActiveFilters =
    eventTypeFilter !== "all" || participantsFilter !== "all"

  return (
    <div className="border-b border-border px-3 py-4 md:px-6">
      <div className="flex flex-wrap items-center gap-2 md:gap-3">
        <div className="relative max-w-[280px] min-w-[200px] flex-1 shrink-0">
          <HugeiconsIcon
            icon={Search01Icon}
            className="pointer-events-none absolute top-1/2 left-3 z-10 size-4 -translate-y-1/2 text-muted-foreground"
          />
          <Input
            placeholder="Search in calendar..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="h-8 bg-background pr-9 pl-9"
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-1/2 right-1 size-6 -translate-y-1/2"
          >
            <HugeiconsIcon icon={Settings01Icon} className="size-3.5" />
          </Button>
        </div>

        <Button
          variant="outline"
          className="h-8 shrink-0 px-3"
          onClick={goToToday}
        >
          Today
        </Button>

        <Popover open={datePickerOpen} onOpenChange={setDatePickerOpen}>
          <PopoverTrigger
            render={
              <Button
                variant="outline"
                className={cn(
                  "h-8 shrink-0 justify-start gap-2 px-3 text-left font-normal",
                  "hover:bg-accent"
                )}
              >
                <HugeiconsIcon
                  icon={Calendar01Icon}
                  className="size-4 text-muted-foreground"
                />
                <span className="text-xs text-foreground">
                  {weekStart} - {weekEnd}
                </span>
              </Button>
            }
          />
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={currentWeekStart}
              onSelect={(date) => {
                if (date) {
                  goToDate(date)
                  setDatePickerOpen(false)
                }
              }}
              initialFocus
            />
          </PopoverContent>
        </Popover>

        <div className="ml-auto" />

        <Popover open={filterOpen} onOpenChange={setFilterOpen}>
          <PopoverTrigger
            render={
              <Button
                variant="outline"
                className={cn(
                  "h-8 gap-2 px-3",
                  hasActiveFilters && "bg-accent"
                )}
              >
                <HugeiconsIcon icon={FilterIcon} className="size-4" />
                <span className="hidden text-xs sm:inline">Filter</span>
                {hasActiveFilters && (
                  <span className="size-1.5 rounded-full bg-primary" />
                )}
              </Button>
            }
          />
          <PopoverContent
            className="w-[288px]! max-w-[288px]! min-w-[288px]! p-4"
            align="end"
          >
            <div className="w-full space-y-4">
              <div>
                <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold">
                  <HugeiconsIcon
                    icon={VideoReplayIcon}
                    className="size-4 text-muted-foreground"
                  />
                  Event Type
                </h4>
                <div className="space-y-1">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-9 w-full justify-between px-3"
                    onClick={() => setEventTypeFilter("all")}
                  >
                    <span className="text-sm">All events</span>
                    {eventTypeFilter === "all" && (
                      <HugeiconsIcon
                        icon={Tick02Icon}
                        className="size-4 text-primary"
                      />
                    )}
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-9 w-full justify-between px-3"
                    onClick={() => setEventTypeFilter("with-meeting")}
                  >
                    <div className="flex items-center gap-2.5">
                      <HugeiconsIcon
                        icon={VideoReplayIcon}
                        className="size-4 text-cyan-500"
                      />
                      <span className="text-sm">With meeting</span>
                    </div>
                    {eventTypeFilter === "with-meeting" && (
                      <HugeiconsIcon
                        icon={Tick02Icon}
                        className="size-4 text-primary"
                      />
                    )}
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-9 w-full justify-between px-3"
                    onClick={() => setEventTypeFilter("without-meeting")}
                  >
                    <div className="flex items-center gap-2.5">
                      <HugeiconsIcon
                        icon={CancelCircleIcon}
                        className="size-4 text-muted-foreground"
                      />
                      <span className="text-sm">Without meeting</span>
                    </div>
                    {eventTypeFilter === "without-meeting" && (
                      <HugeiconsIcon
                        icon={Tick02Icon}
                        className="size-4 text-primary"
                      />
                    )}
                  </Button>
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold">
                  <HugeiconsIcon
                    icon={UserGroupIcon}
                    className="size-4 text-muted-foreground"
                  />
                  Participants
                </h4>
                <div className="space-y-1">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-9 w-full justify-between px-3"
                    onClick={() => setParticipantsFilter("all")}
                  >
                    <span className="text-sm">All</span>
                    {participantsFilter === "all" && (
                      <HugeiconsIcon
                        icon={Tick02Icon}
                        className="size-4 text-primary"
                      />
                    )}
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-9 w-full justify-between px-3"
                    onClick={() => setParticipantsFilter("with-participants")}
                  >
                    <div className="flex items-center gap-2.5">
                      <HugeiconsIcon
                        icon={UserGroupIcon}
                        className="size-4 text-muted-foreground"
                      />
                      <span className="text-sm">With participants</span>
                    </div>
                    {participantsFilter === "with-participants" && (
                      <HugeiconsIcon
                        icon={Tick02Icon}
                        className="size-4 text-primary"
                      />
                    )}
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-9 w-full justify-between px-3"
                    onClick={() =>
                      setParticipantsFilter("without-participants")
                    }
                  >
                    <div className="flex items-center gap-2.5">
                      <HugeiconsIcon
                        icon={UserRemove01Icon}
                        className="size-4 text-muted-foreground"
                      />
                      <span className="text-sm">Without participants</span>
                    </div>
                    {participantsFilter === "without-participants" && (
                      <HugeiconsIcon
                        icon={Tick02Icon}
                        className="size-4 text-primary"
                      />
                    )}
                  </Button>
                </div>
              </div>

              {hasActiveFilters && (
                <>
                  <Separator />
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-9 w-full"
                    onClick={() => {
                      setEventTypeFilter("all")
                      setParticipantsFilter("all")
                    }}
                  >
                    Clear all filters
                  </Button>
                </>
              )}
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  )
}
