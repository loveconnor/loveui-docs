"use client"

import {
  Invoice01Icon,
  Notification01Icon,
  Task01Icon,
  UserGroupIcon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { leadStats } from "../../mock-data/leads"

const stats = [
  {
    title: "Sponsor Prospects",
    value: leadStats.totalLeads,
    change: leadStats.totalLeadsChange,
    changeValue: leadStats.totalLeadsChangeValue,
    icon: Invoice01Icon,
  },
  {
    title: "Contacted Sponsors",
    value: leadStats.contactedLeads,
    change: leadStats.contactedLeadsChange,
    changeValue: leadStats.contactedLeadsChangeValue,
    icon: UserGroupIcon,
  },
  {
    title: "Deck Sent",
    value: leadStats.qualifiedLeads,
    change: leadStats.qualifiedLeadsChange,
    changeValue: leadStats.qualifiedLeadsChangeValue,
    icon: Task01Icon,
  },
  {
    title: "Contract Ready",
    value: leadStats.hotLeads,
    change: leadStats.hotLeadsChange,
    changeValue: leadStats.hotLeadsChangeValue,
    icon: Notification01Icon,
  },
]

export function StatsCards() {
  return (
    <div className="rounded-xl border bg-card text-card-foreground">
      <div className="grid grid-cols-1 divide-x-0 divide-y divide-border sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
        {stats.map((stat, index) => (
          <div key={index} className="space-y-4 p-4 sm:p-6">
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <HugeiconsIcon
                icon={stat.icon}
                className="size-4 sm:size-[18px]"
              />
              <span className="text-xs font-medium sm:text-sm">
                {stat.title}
              </span>
            </div>
            <p className="text-2xl font-semibold tracking-tight sm:text-[28px]">
              {stat.value}
            </p>
            <div className="flex items-center gap-2 text-xs sm:text-sm">
              <span className="font-medium text-emerald-600 dark:text-emerald-400">
                +{stat.change}%(
                {stat.changeValue > 0
                  ? `$${stat.changeValue}`
                  : stat.changeValue}
                )
              </span>
              <span className="size-1 rounded-full bg-muted-foreground" />
              <span className="hidden text-muted-foreground sm:inline">
                vs Last Month
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
