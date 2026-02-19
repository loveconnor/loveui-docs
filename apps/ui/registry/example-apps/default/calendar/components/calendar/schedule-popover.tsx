"use client"

import { useState } from "react"
import {
  Calendar01Icon,
  Clock01Icon,
  UserGroupIcon,
  VideoReplayIcon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { format } from "date-fns"

import { Button } from "@loveui/ui/ui/button"
import { Input } from "@loveui/ui/ui/input"
import { Label } from "@loveui/ui/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@loveui/ui/ui/popover"
import { Separator } from "@loveui/ui/ui/separator"

import { cn } from "../../lib/utils"
import { Calendar } from "../ui/calendar"

interface SchedulePopoverProps {
  children: React.ReactElement<Record<string, unknown>>
}

export function SchedulePopover({ children }: SchedulePopoverProps) {
  const [open, setOpen] = useState(false)
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [startTime, setStartTime] = useState("")
  const [endTime, setEndTime] = useState("")
  const [datePickerOpen, setDatePickerOpen] = useState(false)

  const handleSchedule = () => {
    if (!date || !startTime || !endTime) {
      return
    }
    setOpen(false)
    setDate(new Date())
    setStartTime("")
    setEndTime("")
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger render={children} />
      <PopoverContent className="w-80 p-4" align="end">
        <div className="space-y-4">
          <div>
            <h4 className="mb-3 text-sm font-semibold">Schedule Meeting</h4>
            <p className="mb-4 text-xs text-muted-foreground">
              Quick schedule a meeting or event
            </p>
          </div>

          <div className="space-y-3">
            <div className="grid gap-2">
              <Label className="text-xs">Date</Label>
              <Popover open={datePickerOpen} onOpenChange={setDatePickerOpen}>
                <PopoverTrigger
                  render={
                    <Button
                      variant="outline"
                      className={cn(
                        "h-9 w-full justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <HugeiconsIcon
                        icon={Calendar01Icon}
                        className="mr-2 size-4"
                      />
                      {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                  }
                />
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={(selectedDate) => {
                      setDate(selectedDate)
                      setDatePickerOpen(false)
                    }}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="grid gap-2">
                <Label className="text-xs">Start</Label>
                <div className="relative">
                  <HugeiconsIcon
                    icon={Clock01Icon}
                    className="pointer-events-none absolute top-1/2 left-2.5 z-10 size-3.5 -translate-y-1/2 text-muted-foreground"
                  />
                  <Input
                    type="time"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                    className="h-9 pl-8 text-xs"
                    placeholder="09:00"
                  />
                </div>
              </div>

              <div className="grid gap-2">
                <Label className="text-xs">End</Label>
                <div className="relative">
                  <HugeiconsIcon
                    icon={Clock01Icon}
                    className="pointer-events-none absolute top-1/2 left-2.5 z-10 size-3.5 -translate-y-1/2 text-muted-foreground"
                  />
                  <Input
                    type="time"
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                    className="h-9 pl-8 text-xs"
                    placeholder="10:00"
                  />
                </div>
              </div>
            </div>

            <Separator />

            <div className="flex flex-col gap-2">
              <Button
                variant="outline"
                size="sm"
                className="h-8 justify-start gap-2 text-xs"
              >
                <HugeiconsIcon icon={UserGroupIcon} className="size-3.5" />
                <span>Add participants</span>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="h-8 justify-start gap-2 text-xs"
              >
                <HugeiconsIcon icon={VideoReplayIcon} className="size-3.5" />
                <span>Add video call</span>
              </Button>
            </div>

            <div className="flex gap-2 pt-2">
              <Button
                variant="outline"
                size="sm"
                className="h-8 flex-1 text-xs"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
              <Button
                size="sm"
                className="h-8 flex-1 text-xs"
                onClick={handleSchedule}
                disabled={!date || !startTime || !endTime}
              >
                Schedule
              </Button>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
