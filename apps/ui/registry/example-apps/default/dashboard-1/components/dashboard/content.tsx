"use client"

import { cn } from "../../lib/utils"
import { useDashboardStore } from "../../store/dashboard-store"
import { AlertBanner } from "./alert-banner"
import { EmployeesTable } from "./employees-table"
import { FinancialFlowChart } from "./financial-flow-chart"
import { StatsCards } from "./stats-cards"

export function DashboardContent() {
  const showAlertBanner = useDashboardStore((state) => state.showAlertBanner)
  const showStatsCards = useDashboardStore((state) => state.showStatsCards)
  const showChart = useDashboardStore((state) => state.showChart)
  const showTable = useDashboardStore((state) => state.showTable)
  const layoutDensity = useDashboardStore((state) => state.layoutDensity)

  return (
    <main
      className={cn(
        "w-full flex-1 overflow-auto",
        layoutDensity === "compact" && "space-y-4 p-2 sm:p-4",
        layoutDensity === "default" && "space-y-6 p-4 sm:space-y-8 sm:p-6",
        layoutDensity === "comfortable" && "space-y-8 p-6 sm:space-y-10 sm:p-8"
      )}
    >
      {showAlertBanner && <AlertBanner />}
      {showStatsCards && <StatsCards />}
      {showChart && <FinancialFlowChart />}
      {showTable && <EmployeesTable />}
    </main>
  )
}
