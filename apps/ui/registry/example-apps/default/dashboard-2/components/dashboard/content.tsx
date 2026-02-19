"use client"

import { WelcomeSection } from "./header"
import { LeadsChart } from "./leads-chart"
import { LeadsTable } from "./leads-table"
import { StatsCards } from "./stats-cards"
import { TopPerformers } from "./top-performers"

export function DashboardContent() {
  return (
    <main className="w-full flex-1 space-y-6 overflow-auto bg-background p-4 sm:p-6">
      <WelcomeSection />
      <StatsCards />
      <div className="flex flex-col gap-4 sm:gap-6 lg:flex-row">
        <LeadsChart />
        <TopPerformers />
      </div>
      <LeadsTable />
    </main>
  )
}
