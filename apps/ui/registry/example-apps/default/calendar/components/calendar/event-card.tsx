"use client"

import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { Avatar, AvatarImage } from "@loveui/ui/ui/avatar"

import { Event } from "../../mock-data/events"
import { getEventDuration } from "./calendar-utils"

interface EventCardProps {
  event: Event
  style: any
  onClick?: () => void
}

export function EventCard({ event, style, onClick }: EventCardProps) {
  const duration = getEventDuration(event.startTime, event.endTime)
  const isVeryShortEvent = duration < 30
  const isMediumEvent = duration >= 25 && duration < 60
  const timeStr = `${event.startTime} - ${event.endTime}${
    event.timezone ? ` (${event.timezone})` : ""
  }`
  const hasMultipleParticipants = event.participants.length > 3

  if (isVeryShortEvent) {
    return (
      <div
        className="absolute right-2 left-2 z-10 flex cursor-pointer items-center gap-1.5 rounded-lg border border-border bg-card px-2 py-1 transition-colors hover:bg-muted"
        style={style}
        onClick={onClick}
      >
        <div className="size-1.5 shrink-0 rounded-full bg-cyan-500" />
        <h4 className="flex-1 truncate text-[10px] font-semibold text-foreground">
          {event.title}
        </h4>
        <span className="shrink-0 text-[9px] text-muted-foreground">
          {event.startTime}
        </span>
      </div>
    )
  }

  if (isMediumEvent) {
    return (
      <div
        className="absolute right-2 left-2 z-10 cursor-pointer rounded-lg border border-border bg-card px-2.5 py-2 transition-colors hover:bg-muted"
        style={style}
        onClick={onClick}
      >
        <div className="flex h-full flex-col gap-1">
          <div className="flex items-center gap-1.5">
            <div className="size-1.5 shrink-0 rounded-full bg-cyan-500" />
            <h4 className="flex-1 truncate text-[10px] font-semibold text-foreground">
              {event.title}
            </h4>
          </div>
          <p className="text-[9px] tracking-wide text-muted-foreground uppercase">
            {timeStr}
          </p>
        </div>
      </div>
    )
  }

  return (
    <div
      className="absolute right-2 left-2 z-10 cursor-pointer rounded-lg border border-border bg-card p-3 transition-colors hover:bg-muted"
      style={style}
      onClick={onClick}
    >
      <div className="flex h-full flex-col gap-1">
        <div className="min-h-0 flex-1">
          <h4
            className={`mb-1 text-xs font-semibold text-foreground ${
              duration <= 60 ? "truncate whitespace-nowrap" : "line-clamp-2"
            }`}
          >
            {event.title}
          </h4>
          <p className="mb-2 text-[10px] tracking-wide text-muted-foreground uppercase">
            {timeStr}
          </p>

          {event.participants.length > 0 && (
            <div className="mb-2 flex items-center gap-1.5">
              <div className="flex -space-x-1.5">
                {event.participants.slice(0, 3).map((participant, idx) => (
                  <Avatar
                    key={idx}
                    className="size-5 border-2 border-background"
                  >
                    <AvatarImage
                      src={`https://api.dicebear.com/9.x/glass/svg?seed=${participant}`}
                    />
                  </Avatar>
                ))}
              </div>
              {hasMultipleParticipants && (
                <span className="text-[10px] text-muted-foreground">
                  +{event.participants.length - 3}
                </span>
              )}
            </div>
          )}
        </div>

        {event.meetingLink && (
          <div className="mt-auto flex items-center gap-1.5 text-[10px] text-cyan-500">
            <div className="flex size-4 shrink-0 items-center justify-center rounded bg-cyan-500/10">
              <svg className="size-2.5" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <span className="flex-1 truncate">Join on Google Meet</span>
            <HugeiconsIcon
              icon={ArrowUpRight01Icon}
              className="size-3 shrink-0"
            />
          </div>
        )}
      </div>
    </div>
  )
}
