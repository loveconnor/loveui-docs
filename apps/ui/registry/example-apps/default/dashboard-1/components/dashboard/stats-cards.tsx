"use client"

import {
  Calendar01Icon,
  File01Icon,
  InformationCircleIcon,
  Invoice01Icon,
  UserGroupIcon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { Button } from "@loveui/ui/ui/button"

const stats = [
  {
    title: "On-Duty Staff",
    value: "182",
    subtitle: "27 currently on night shift",
    icon: UserGroupIcon,
    subtitleIcon: File01Icon,
  },
  {
    title: "Shift Budget",
    value: "$412,800",
    subtitle: "Weekly staffing spend",
    icon: Invoice01Icon,
    subtitleIcon: File01Icon,
  },
  {
    title: "Patient Coverage",
    value: "96.3%",
    subtitle: "Across all care units",
    icon: Calendar01Icon,
    subtitleIcon: InformationCircleIcon,
  },
]

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="relative overflow-hidden rounded-xl border bg-card p-5"
        >
          <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-black/5 to-transparent" />
          <div className="relative flex items-start justify-between">
            <div className="flex flex-col gap-6">
              <p className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </p>
              <p className="text-2xl font-semibold tracking-tight sm:text-[26px]">
                {stat.value}
              </p>
              <div className="flex items-center gap-1.5 text-muted-foreground">
                <HugeiconsIcon icon={stat.subtitleIcon} className="size-4" />
                <span className="text-sm font-medium">{stat.subtitle}</span>
              </div>
            </div>
            <Button variant="outline" size="icon" className="size-10">
              <HugeiconsIcon icon={stat.icon} className="size-5" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}
