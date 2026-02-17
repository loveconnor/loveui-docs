"use client";

import { dashboardStats } from "../../mock-data/dashboard";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Folder01Icon,
  Task01Icon,
  ViewIcon,
  Tick01Icon,
} from "@hugeicons/core-free-icons";

const stats = [
  {
    title: "Total Projects",
    value: dashboardStats.totalProjects.value,
    change: dashboardStats.totalProjects.change,
    icon: Folder01Icon,
  },
  {
    title: "Total Task",
    value: dashboardStats.totalTasks.value,
    change: dashboardStats.totalTasks.change,
    icon: Task01Icon,
  },
  {
    title: "In Reviews",
    value: dashboardStats.inReviews.value,
    change: dashboardStats.inReviews.change,
    icon: ViewIcon,
  },
  {
    title: "Completed Tasks",
    value: dashboardStats.completedTasks.value,
    change: dashboardStats.completedTasks.change,
    icon: Tick01Icon,
  },
];

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="rounded-xl border border-border bg-card p-4"
        >
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">{stat.title}</p>
              <p className="text-2xl font-medium text-foreground">{stat.value}</p>
              <p className="text-xs text-muted-foreground">
                +{stat.change} vs last month
              </p>
            </div>
            <div className="flex size-10 items-center justify-center rounded-lg border border-border bg-muted shrink-0">
              <HugeiconsIcon icon={stat.icon} className="size-5 text-muted-foreground" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
