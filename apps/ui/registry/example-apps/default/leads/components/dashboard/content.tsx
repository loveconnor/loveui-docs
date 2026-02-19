"use client"

import { FilterSection } from "./filter-section"
import { LeadsByStatusChart } from "./leads-by-status-chart"
import { LeadsTable } from "./leads-table"
import { MonthlyLeadGrowthChart } from "./monthly-lead-growth-chart"
import { StatsCards } from "./stats-cards"

export function DashboardContent() {
  return (
    <main className="w-full flex-1 space-y-4 overflow-auto bg-background p-3 sm:space-y-6 sm:p-4 md:p-6">
      <FilterSection />
      <StatsCards />
      <div className="flex flex-col gap-4 sm:gap-6 xl:flex-row">
        <MonthlyLeadGrowthChart />
        <LeadsByStatusChart />
      </div>
      <LeadsTable />
    </main>
  )
}
