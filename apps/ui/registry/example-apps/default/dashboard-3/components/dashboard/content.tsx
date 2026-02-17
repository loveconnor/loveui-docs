"use client";

import { Button } from "@loveui/ui/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { Download01Icon, Add01Icon } from "@hugeicons/core-free-icons";
import { welcomeSummary } from "../../mock-data/dashboard";
import { StatsCards } from "./stats-cards";
import { TodaysTasks } from "./todays-tasks";
import { PerformanceChart } from "./performance-chart";
import { ProjectsTable } from "./projects-table";

function WelcomeSection() {
  const { userName, tasksDueToday, overdueTasks, upcomingDeadlines } =
    welcomeSummary;

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div>
        <h1 className="text-xl sm:text-2xl font-semibold tracking-tight">
          Welcome Back, {userName}! 👋
        </h1>
        <p className="text-sm text-muted-foreground mt-0.5">
          {tasksDueToday} Tasks Due Today, {overdueTasks} Overdue Tasks,{" "}
          {upcomingDeadlines} Upcoming Deadlines (This Week)
        </p>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="outline" size="sm" className="h-9 gap-1.5">
          <HugeiconsIcon icon={Download01Icon} className="size-4" />
          Export
        </Button>
        <Button size="sm" className="h-9 gap-1.5 bg-primary hover:bg-primary/90">
          <HugeiconsIcon icon={Add01Icon} className="size-4" />
          New
        </Button>
      </div>
    </div>
  );
}

export function DashboardContent() {
  return (
    <main className="w-full overflow-y-auto overflow-x-hidden p-4 h-full">
      <div className="mx-auto w-full space-y-6">
      <WelcomeSection />
      <StatsCards />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
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
  );
}
