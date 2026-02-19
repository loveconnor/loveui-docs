"use client"

import { HOUR_HEIGHT, HOURS_24 } from "./calendar-utils"

interface CalendarHoursColumnProps {
  onScroll: (e: React.UIEvent<HTMLDivElement>) => void
  scrollRef: React.RefObject<HTMLDivElement | null>
}

export function CalendarHoursColumn({
  onScroll,
  scrollRef,
}: CalendarHoursColumnProps) {
  return (
    <div
      ref={scrollRef}
      onScroll={onScroll}
      className="relative w-[80px] shrink-0 overflow-y-auto border-r border-border md:w-[104px]"
    >
      {HOURS_24.map((hour) => (
        <div
          key={hour}
          className="border-b border-border p-2 text-xs text-muted-foreground md:p-3 md:text-sm"
          style={{ height: `${HOUR_HEIGHT}px` }}
        >
          {hour}
        </div>
      ))}
    </div>
  )
}
