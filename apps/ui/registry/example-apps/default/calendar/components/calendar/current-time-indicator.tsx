"use client"

import { isSameDay } from "date-fns"

import { getCurrentTimePosition } from "./calendar-utils"

interface CurrentTimeIndicatorProps {
  day: Date
  today: Date
  isTodayInWeek: boolean
  currentTime: Date
}

export function CurrentTimeIndicator({
  day,
  today,
  isTodayInWeek,
  currentTime,
}: CurrentTimeIndicatorProps) {
  if (!isTodayInWeek || !isSameDay(day, today)) {
    return null
  }

  const currentTimePosition = getCurrentTimePosition(currentTime)

  return (
    <div
      className="pointer-events-none absolute right-0 left-0 z-20 flex items-center"
      style={{
        top: `${currentTimePosition}px`,
        transform: "translateY(-50%)",
      }}
    >
      <div className="-ml-1 size-2 shrink-0 rounded-full bg-red-500" />
      <div className="h-0.5 flex-1 bg-red-500" />
    </div>
  )
}
