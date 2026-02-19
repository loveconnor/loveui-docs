"use client"

import { useState } from "react"
import {
  ArrowUpRight01Icon,
  Calendar01Icon,
  CallIcon,
  Cancel01Icon,
  Delete01Icon,
  FileEditIcon,
  Layers01Icon,
  LinkSquare01Icon,
  NoteIcon,
  Notification01Icon,
  PencilEdit01Icon,
  Tick02Icon,
  UserGroupIcon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { format } from "date-fns"

import { Avatar, AvatarImage } from "@loveui/ui/ui/avatar"
import { Button } from "@loveui/ui/ui/button"
import { Kbd } from "@loveui/ui/ui/kbd"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@loveui/ui/ui/sheet"

import { Event } from "../../mock-data/events"

interface EventSheetProps {
  event: Event | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

function formatTime(time: string): string {
  const [hour, minute] = time.split(":").map(Number)
  const period = hour >= 12 ? "PM" : "AM"
  const displayHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour
  return `${displayHour}:${minute.toString().padStart(2, "0")} ${period}`
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr + "T00:00:00")
  return format(date, "EEEE, MMMM dd")
}

function getMeetingCode(link?: string): string {
  if (!link) return ""
  const match = link.match(/\/[a-z-]+$/)
  if (match) {
    return match[0].slice(1).replace(/-/g, " ").toUpperCase()
  }
  return "dra-jhgg-mvn"
}

function getParticipantName(participantId: string): string {
  const names: Record<string, string> = {
    user1: "Maya Ortiz",
    user2: "Liam Carter",
    user3: "Nora Singh",
    user4: "Theo Bennett",
    user5: "Ari Kim",
  }

  return (
    names[participantId] ||
    participantId.charAt(0).toUpperCase() + participantId.slice(1)
  )
}

function getParticipantEmail(participantId: string): string {
  const emails: Record<string, string> = {
    user1: "maya.ortiz@filmops.studio",
    user2: "liam.carter@filmops.studio",
    user3: "nora.singh@filmops.studio",
    user4: "theo.bennett@filmops.studio",
    user5: "ari.kim@filmops.studio",
  }

  return emails[participantId] || `${participantId}@gmail.com`
}

function copyToClipboard(text: string) {
  navigator.clipboard.writeText(text)
}

export function EventSheet({ event, open, onOpenChange }: EventSheetProps) {
  const [rsvpStatus, setRsvpStatus] = useState<"yes" | "no" | "maybe" | null>(
    null
  )

  if (!event) return null

  const dateStr = formatDate(event.date)
  const startTimeStr = formatTime(event.startTime)
  const endTimeStr = formatTime(event.endTime)
  const timezone = event.timezone || "PST Los Angeles"
  const meetingCode = getMeetingCode(event.meetingLink)

  const organizer = event.participants[0] || "user1"
  const organizerName = getParticipantName(organizer)
  const organizerEmail = getParticipantEmail(organizer)
  const otherParticipants = event.participants.slice(1)

  const mockParticipants = [
    {
      id: organizer,
      name: organizerName,
      email: organizerEmail,
      isOrganizer: true,
      rsvp: "yes" as const,
    },
    ...otherParticipants.slice(0, 3).map((p) => ({
      id: p,
      name: getParticipantName(p),
      email: getParticipantEmail(p),
      isOrganizer: false,
      rsvp: "yes" as const,
    })),
    {
      id: "user5",
      name: "Ari Kim",
      email: "ari.kim@filmops.studio",
      isOrganizer: false,
      rsvp: rsvpStatus || ("yes" as const),
      isYou: true,
    },
  ]

  const yesCount = mockParticipants.filter((p) => p.rsvp === "yes").length

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        className="w-full overflow-y-auto border-t border-r border-l p-0 sm:max-w-[560px] [&>button]:hidden"
      >
        <div className="flex h-full flex-col">
          <SheetHeader className="border-b border-border px-4 pt-4 pb-4">
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Button
                  variant="ghost"
                  size="icon"
                  className="size-8 hover:bg-muted"
                >
                  <HugeiconsIcon
                    icon={PencilEdit01Icon}
                    className="size-4 text-muted-foreground"
                  />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="size-8 hover:bg-muted"
                >
                  <HugeiconsIcon
                    icon={FileEditIcon}
                    className="size-4 text-muted-foreground"
                  />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="size-8 hover:bg-muted"
                >
                  <HugeiconsIcon
                    icon={Layers01Icon}
                    className="size-4 text-muted-foreground"
                  />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="size-8 hover:bg-muted"
                >
                  <HugeiconsIcon
                    icon={Delete01Icon}
                    className="size-4 text-muted-foreground"
                  />
                </Button>
              </div>
              <SheetClose
                render={
                  <Button
                    variant="ghost"
                    size="icon"
                    className="size-6 rounded-full bg-muted hover:bg-muted"
                  >
                    <HugeiconsIcon
                      icon={Cancel01Icon}
                      className="size-4 text-muted-foreground"
                    />
                  </Button>
                }
              />
            </div>

            <div className="mb-4 flex flex-col gap-1">
              <SheetTitle className="text-xl leading-normal font-semibold text-foreground">
                {event.title}
              </SheetTitle>
              <div className="flex items-center gap-2 text-[13px] font-medium text-muted-foreground">
                <span>{dateStr}</span>
                <span className="size-1 rounded-full bg-muted-foreground" />
                <span>
                  {startTimeStr} - {endTimeStr}
                </span>
                <span className="size-1 rounded-full bg-muted-foreground" />
                <span>{timezone}</span>
              </div>
            </div>

            <Button variant="outline">
              <span>Propose new time</span>
              <HugeiconsIcon icon={ArrowUpRight01Icon} className="size-4" />
            </Button>
          </SheetHeader>

          <div className="flex-1 overflow-y-auto px-4 py-4">
            <div className="mx-auto flex max-w-[512px] flex-col gap-4">
              <div className="flex flex-col gap-4">
                {mockParticipants.map((participant) => (
                  <div
                    key={participant.id}
                    className="relative flex items-start gap-3"
                  >
                    <Avatar className="size-7 shrink-0 border-[1.4px] border-background">
                      <AvatarImage
                        src={`https://api.dicebear.com/9.x/glass/svg?seed=${participant.id}`}
                      />
                    </Avatar>
                    <div className="min-w-0 flex-1">
                      <div className="relative flex items-start gap-2">
                        <div className="min-w-0 flex-1">
                          <div className="relative mb-1 flex items-center gap-1.5">
                            <p className="text-[13px] leading-[18px] font-medium text-foreground">
                              {participant.name}
                            </p>
                            {participant.isOrganizer && (
                              <span className="rounded-full px-0.5 py-0.5 text-[10px] font-medium text-cyan-500">
                                Organizer
                              </span>
                            )}
                            {participant.isYou && (
                              <span className="rounded-full px-0.5 py-0.5 text-[10px] font-medium text-foreground">
                                You
                              </span>
                            )}
                          </div>
                          <p className="text-xs leading-none text-muted-foreground">
                            {participant.email}
                          </p>
                        </div>
                        <HugeiconsIcon
                          icon={Tick02Icon}
                          className="absolute top-[17px] right-0 size-3 shrink-0 text-green-500"
                        />
                      </div>
                      {participant.isYou && (
                        <div className="mt-3 flex gap-1.5 rounded-lg bg-muted/50 p-1.5">
                          <Button
                            variant={rsvpStatus === "yes" ? "default" : "ghost"}
                            size="sm"
                            className={`h-[30px] flex-1 text-xs font-medium ${
                              rsvpStatus === "yes"
                                ? "bg-foreground text-background shadow-sm hover:bg-foreground/90"
                                : "text-muted-foreground"
                            }`}
                            onClick={() => setRsvpStatus("yes")}
                          >
                            Yes
                          </Button>
                          <Button
                            variant={rsvpStatus === "no" ? "default" : "ghost"}
                            size="sm"
                            className={`h-[30px] flex-1 text-xs font-medium ${
                              rsvpStatus === "no"
                                ? "bg-foreground text-background shadow-sm hover:bg-foreground/90"
                                : "text-muted-foreground"
                            }`}
                            onClick={() => setRsvpStatus("no")}
                          >
                            No
                          </Button>
                          <Button
                            variant={
                              rsvpStatus === "maybe" ? "default" : "ghost"
                            }
                            size="sm"
                            className={`h-[30px] flex-1 text-xs font-medium ${
                              rsvpStatus === "maybe"
                                ? "bg-foreground text-background shadow-sm hover:bg-foreground/90"
                                : "text-muted-foreground"
                            }`}
                            onClick={() => setRsvpStatus("maybe")}
                          >
                            Maybe
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {event.meetingLink && (
                <div className="flex flex-col gap-2 border-t border-border pt-4">
                  <div className="mb-2 flex items-center gap-2">
                    <div className="size-6 shrink-0">
                      <svg
                        viewBox="0 0 24 24"
                        className="size-full"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"
                          fill="#22C55E"
                        />
                      </svg>
                    </div>
                    <p className="flex-1 text-xs font-medium text-muted-foreground">
                      Meeting in Google Meet
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Code: {meetingCode}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      className="h-8 flex-1 gap-2 bg-foreground text-xs font-medium text-background shadow-sm hover:bg-foreground/90"
                      onClick={() => {
                        if (event.meetingLink) {
                          window.open(event.meetingLink, "_blank")
                        }
                      }}
                    >
                      <span>Join Google Meet meeting</span>
                      <div className="flex gap-0.5">
                        <Kbd className="rounded bg-white/14 px-1.5 py-1 text-[10.8px] text-white">
                          ⌘
                        </Kbd>
                        <Kbd className="w-[18px] rounded bg-white/14 px-1.5 py-1 text-[10.8px] text-white">
                          J
                        </Kbd>
                      </div>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-8 gap-2 border-border text-xs"
                      onClick={() => {
                        if (event.meetingLink) {
                          copyToClipboard(event.meetingLink)
                        }
                      }}
                    >
                      <HugeiconsIcon
                        icon={LinkSquare01Icon}
                        className="size-4"
                      />
                      <span>Copy link</span>
                    </Button>
                  </div>
                </div>
              )}

              <div className="flex flex-col gap-2 border-t border-border pt-4">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <div className="p-1">
                    <HugeiconsIcon
                      icon={Notification01Icon}
                      className="size-4"
                    />
                  </div>
                  <span>Reminder: 30min before</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <div className="p-1">
                    <HugeiconsIcon icon={Calendar01Icon} className="size-4" />
                  </div>
                  <span>Organizer: {organizerEmail}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <div className="p-1">
                    <HugeiconsIcon icon={CallIcon} className="size-4" />
                  </div>
                  <span>(US) +1 904-330-1131</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <div className="p-1">
                    <HugeiconsIcon icon={UserGroupIcon} className="size-4" />
                  </div>
                  <span>
                    {mockParticipants.length} persons
                    <span className="mx-1">•</span>
                    {yesCount} yes
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <div className="p-1">
                    <HugeiconsIcon icon={NoteIcon} className="size-4" />
                  </div>
                  <span>Notes from Organizer</span>
                </div>
              </div>

              <div className="border-t border-border pt-4">
                <p className="text-xs leading-[1.6] text-muted-foreground">
                  During today&apos;s daily check-in, we had an in-depth
                  discussion about the MVP (Minimum Viable Product). We agreed
                  on the core features that need to be included, focusing on the
                  AI-conducted interviews and the memoir compilation
                  functionality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
