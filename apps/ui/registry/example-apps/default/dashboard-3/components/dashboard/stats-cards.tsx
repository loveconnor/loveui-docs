"use client"

import {
  Folder01Icon,
  Task01Icon,
  Tick01Icon,
  ViewIcon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { dashboardStats } from "../../mock-data/dashboard"

const stats = [
  {
    title: "Active Courses",
    value: dashboardStats.totalProjects.value,
    change: dashboardStats.totalProjects.change,
    icon: Folder01Icon,
  },
  {
    title: "Open Assignments",
    value: dashboardStats.totalTasks.value,
    change: dashboardStats.totalTasks.change,
    icon: Task01Icon,
  },
  {
    title: "Pending Grading",
    value: dashboardStats.inReviews.value,
    change: dashboardStats.inReviews.change,
    icon: ViewIcon,
  },
  {
    title: "Graded Items",
    value: dashboardStats.completedTasks.value,
    change: dashboardStats.completedTasks.change,
    icon: Tick01Icon,
  },
]

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="rounded-xl border border-border bg-card p-4"
        >
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">{stat.title}</p>
              <p className="text-2xl font-medium text-foreground">
                {stat.value}
              </p>
              <p className="text-xs text-muted-foreground">
                +{stat.change} vs last month
              </p>
            </div>
            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-border bg-muted">
              <HugeiconsIcon
                icon={stat.icon}
                className="size-5 text-muted-foreground"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
