"use client"

import { useEffect, useRef, useState } from "react"
import { format } from "date-fns"

import { Event } from "../../mock-data/events"
import { useCalendarStore } from "../../store/calendar-store"
import { CalendarDayColumn } from "./calendar-day-column"
import { CalendarHoursColumn } from "./calendar-hours-column"
import { INITIAL_SCROLL_OFFSET } from "./calendar-utils"
import { CalendarWeekHeader } from "./calendar-week-header"
import { EventSheet } from "./event-sheet"

export function CalendarView() {
  const { goToNextWeek, goToPreviousWeek, getWeekDays, getCurrentWeekEvents } =
    useCalendarStore()
  const weekDays = getWeekDays()
  const events = getCurrentWeekEvents()
  const hoursScrollRef = useRef<HTMLDivElement>(null)
  const daysScrollRefs = useRef<(HTMLDivElement | null)[]>([])
  const hasScrolledRef = useRef(false)
  const [currentTime, setCurrentTime] = useState(new Date())
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)
  const [sheetOpen, setSheetOpen] = useState(false)

  const today = new Date()

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date())
    }, 60000)

    return () => clearInterval(interval)
  }, [])

  const eventsByDay: Record<string, Event[]> = {}
  weekDays.forEach((day) => {
    const dayStr = format(day, "yyyy-MM-dd")
    eventsByDay[dayStr] = events.filter((e) => e.date === dayStr)
  })

  const isTodayInWeek = weekDays.some(
    (day) => format(day, "yyyy-MM-dd") === format(today, "yyyy-MM-dd")
  )

  useEffect(() => {
    const scrollToInitial = () => {
      if (!hasScrolledRef.current && hoursScrollRef.current) {
        hoursScrollRef.current.scrollTop = INITIAL_SCROLL_OFFSET
        daysScrollRefs.current.forEach((ref) => {
          if (ref) {
            ref.scrollTop = INITIAL_SCROLL_OFFSET
          }
        })
        hasScrolledRef.current = true
      }
    }

    scrollToInitial()
    const timeoutId = setTimeout(scrollToInitial, 100)
    return () => clearTimeout(timeoutId)
  }, [weekDays])

  const handleHoursScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const scrollTop = e.currentTarget.scrollTop
    daysScrollRefs.current.forEach((ref) => {
      if (ref) {
        ref.scrollTop = scrollTop
      }
    })
  }

  const handleDayScroll =
    (index: number) => (e: React.UIEvent<HTMLDivElement>) => {
      const scrollTop = e.currentTarget.scrollTop
      if (hoursScrollRef.current) {
        hoursScrollRef.current.scrollTop = scrollTop
      }
      daysScrollRefs.current.forEach((ref, idx) => {
        if (ref && idx !== index) {
          ref.scrollTop = scrollTop
        }
      })
    }

  const handleEventClick = (event: Event) => {
    setSelectedEvent(event)
    setSheetOpen(true)
  }

  return (
    <>
      <EventSheet
        event={selectedEvent}
        open={sheetOpen}
        onOpenChange={setSheetOpen}
      />
      <div className="flex h-full w-full flex-col overflow-x-auto">
        <CalendarWeekHeader
          weekDays={weekDays}
          onPreviousWeek={goToPreviousWeek}
          onNextWeek={goToNextWeek}
        />

        <div className="flex w-max min-w-full">
          <CalendarHoursColumn
            onScroll={handleHoursScroll}
            scrollRef={hoursScrollRef}
          />

          {weekDays.map((day, dayIndex) => {
            const dayStr = format(day, "yyyy-MM-dd")
            const dayEvents = eventsByDay[dayStr] || []

            return (
              <CalendarDayColumn
                key={day.toISOString()}
                day={day}
                dayIndex={dayIndex}
                events={dayEvents}
                today={today}
                isTodayInWeek={isTodayInWeek}
                currentTime={currentTime}
                onScroll={handleDayScroll}
                scrollRef={(el) => {
                  daysScrollRefs.current[dayIndex] = el
                }}
                onEventClick={handleEventClick}
              />
            )
          })}
        </div>
      </div>
    </>
  )
}
