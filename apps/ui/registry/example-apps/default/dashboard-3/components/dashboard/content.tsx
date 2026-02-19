"use client"

import { Add01Icon, Download01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { Button } from "@loveui/ui/ui/button"

import { welcomeSummary } from "../../mock-data/dashboard"
import { PerformanceChart } from "./performance-chart"
import { ProjectsTable } from "./projects-table"
import { StatsCards } from "./stats-cards"
import { TodaysTasks } from "./todays-tasks"

function WelcomeSection() {
  const { userName, tasksDueToday, overdueTasks, upcomingDeadlines } =
    welcomeSummary

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="text-xl font-semibold tracking-tight sm:text-2xl">
          Semester operations overview, {userName}
        </h1>
        <p className="mt-0.5 text-sm text-muted-foreground">
          {tasksDueToday} Tasks Due Today, {overdueTasks} Overdue Tasks,{" "}
          {upcomingDeadlines} Upcoming Deadlines (Next 7 Days)
        </p>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="outline" size="sm" className="h-9 gap-1.5">
          <HugeiconsIcon icon={Download01Icon} className="size-4" />
          Export Roster
        </Button>
        <Button
          size="sm"
          className="h-9 gap-1.5 bg-primary hover:bg-primary/90"
        >
          <HugeiconsIcon icon={Add01Icon} className="size-4" />
          New Course Task
        </Button>
      </div>
    </div>
  )
}

export function DashboardContent() {
  return (
    <main className="h-full w-full overflow-x-hidden overflow-y-auto p-4">
      <div className="mx-auto w-full space-y-6">
        <WelcomeSection />
        <StatsCards />
        <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <TodaysTasks />
          </div>
          <div>
            <PerformanceChart />
          </div>
        </div>
        <ProjectsTable />
      </div>
    </main>
  )
}
