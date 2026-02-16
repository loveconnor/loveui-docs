"use client"

import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react"

import { Button } from "@/registry/default/ui/button"

import {
  MiniCalendar,
  MiniCalendarDay,
  MiniCalendarDays,
  MiniCalendarNavigation,
} from "../../../../../packages/mini-calendar"

const Example = () => (
  <MiniCalendar className="bg-card p-4 shadow-lg">
    <div className="flex items-center gap-4">
      <MiniCalendarNavigation asChild direction="prev">
        <Button size="icon" variant="outline">
          <ArrowLeftIcon className="size-4" />
        </Button>
      </MiniCalendarNavigation>

      <MiniCalendarDays className="gap-2">
        {(date) => <MiniCalendarDay date={date} key={date.toISOString()} />}
      </MiniCalendarDays>

      <MiniCalendarNavigation asChild direction="next">
        <Button size="icon" variant="outline">
          <ArrowRightIcon className="size-4" />
        </Button>
      </MiniCalendarNavigation>
    </div>
  </MiniCalendar>
)

export default Example
