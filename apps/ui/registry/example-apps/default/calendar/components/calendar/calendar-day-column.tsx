"use client"

import { Event } from "../../mock-data/events"
import {
  getEventHeight,
  getEventTop,
  HOUR_HEIGHT,
  HOURS_24,
} from "./calendar-utils"
import { CurrentTimeIndicator } from "./current-time-indicator"
import { EventCard } from "./event-card"

interface CalendarDayColumnProps {
  day: Date
  dayIndex: number
  events: Event[]
  today: Date
  isTodayInWeek: boolean
  currentTime: Date
  onScroll: (index: number) => (e: React.UIEvent<HTMLDivElement>) => void
  scrollRef: (el: HTMLDivElement | null) => void
  onEventClick: (event: Event) => void
}

export function CalendarDayColumn({
  day,
  dayIndex,
  events,
  today,
  isTodayInWeek,
  currentTime,
  onScroll,
  scrollRef,
  onEventClick,
}: CalendarDayColumnProps) {
  return (
    <div
      ref={scrollRef}
      onScroll={onScroll(dayIndex)}
      className="relative min-w-44 flex-1 overflow-y-auto border-r border-border last:border-r-0"
    >
      {HOURS_24.map((hour) => (
        <div
          key={hour}
          className="border-b border-border"
          style={{ height: `${HOUR_HEIGHT}px` }}
        />
      ))}

      <CurrentTimeIndicator
        day={day}
        today={today}
        isTodayInWeek={isTodayInWeek}
        currentTime={currentTime}
      />

      {events.map((event) => {
        const top = getEventTop(event.startTime)
        const height = getEventHeight(event.startTime, event.endTime)

        return (
          <EventCard
            key={event.id}
            event={event}
            style={{
              top: `${top + 4}px`,
              height: `${height - 8}px`,
            }}
            onClick={() => onEventClick(event)}
          />
        )
      })}
    </div>
  )
}
