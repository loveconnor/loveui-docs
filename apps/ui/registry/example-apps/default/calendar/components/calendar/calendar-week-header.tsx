"use client"

import { ArrowLeft01Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { format } from "date-fns"

import { Button } from "@loveui/ui/ui/button"

interface CalendarWeekHeaderProps {
  weekDays: Date[]
  onPreviousWeek: () => void
  onNextWeek: () => void
}

export function CalendarWeekHeader({
  weekDays,
  onPreviousWeek,
  onNextWeek,
}: CalendarWeekHeaderProps) {
  return (
    <div className="sticky top-0 z-30 flex w-max min-w-full border-b border-border bg-background">
      <div className="flex w-[80px] shrink-0 items-center gap-1 border-r border-border p-1.5 md:w-[104px] md:gap-2 md:p-2">
        <Button
          variant="ghost"
          size="icon"
          className="size-7 md:size-8"
          onClick={onPreviousWeek}
        >
          <HugeiconsIcon icon={ArrowLeft01Icon} className="size-4 md:size-5" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="size-7 md:size-8"
          onClick={onNextWeek}
        >
          <HugeiconsIcon icon={ArrowRight01Icon} className="size-4 md:size-5" />
        </Button>
      </div>
      {weekDays.map((day) => (
        <div
          key={day.toISOString()}
          className="flex min-w-44 flex-1 items-center border-r border-border p-1.5 last:border-r-0 md:p-2"
        >
          <div className="text-xs font-medium text-foreground md:text-sm">
            {format(day, "dd EEE").toUpperCase()}
          </div>
        </div>
      ))}
    </div>
  )
}
