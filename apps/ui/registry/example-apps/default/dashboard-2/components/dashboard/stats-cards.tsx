"use client"

import {
  ArrowDownRightIcon,
  ArrowUpRightIcon,
  Building02Icon,
  Comment01Icon,
  DollarSquareIcon,
  UserGroupIcon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { cn } from "../../lib/utils"
import { dashboardStats } from "../../mock-data/dashboard"

const stats = [
  {
    title: "Closed Volume",
    value: dashboardStats.generatedRevenue.value,
    change: dashboardStats.generatedRevenue.change,
    icon: DollarSquareIcon,
    trend: "up" as const,
  },
  {
    title: "Signed Buyers",
    value: dashboardStats.signedClients.value,
    change: dashboardStats.signedClients.change,
    icon: UserGroupIcon,
    trend: "up" as const,
  },
  {
    title: "Active Buyer Leads",
    value: dashboardStats.totalLeads.value,
    change: dashboardStats.totalLeads.change,
    icon: Comment01Icon,
    trend: "up" as const,
  },
  {
    title: "Active Agents",
    value: dashboardStats.teamMembers.value,
    extra: { active: dashboardStats.teamMembers.activeCount },
    icon: Building02Icon,
  },
]

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="rounded-xl border bg-card p-4 text-card-foreground"
        >
          <div className="mb-3 flex items-center justify-between">
            <span className="text-sm font-medium">{stat.title}</span>
            <HugeiconsIcon
              icon={stat.icon}
              className="size-4 text-muted-foreground"
            />
          </div>

          <div className="rounded-lg border bg-muted/50 p-4 dark:bg-neutral-800/50">
            <div className="flex items-center justify-between">
              <span className="text-2xl font-medium tracking-tight sm:text-3xl">
                {stat.value}
              </span>

              <div className="flex items-center gap-3">
                <div className="h-9 w-px bg-border" />

                {stat.change !== undefined && stat.trend ? (
                  <div
                    className={cn(
                      "flex items-center gap-1.5",
                      stat.trend === "up" ? "text-green-400" : "text-pink-400"
                    )}
                    style={{
                      textShadow:
                        stat.trend === "up"
                          ? "0 1px 6px rgba(68, 255, 118, 0.25)"
                          : "0 1px 6px rgba(255, 68, 193, 0.25)",
                    }}
                  >
                    {stat.trend === "up" ? (
                      <HugeiconsIcon
                        icon={ArrowUpRightIcon}
                        className="size-3.5"
                      />
                    ) : (
                      <HugeiconsIcon
                        icon={ArrowDownRightIcon}
                        className="size-3.5"
                      />
                    )}
                    <span className="text-sm font-medium">{stat.change}%</span>
                  </div>
                ) : stat.extra ? (
                  <div className="text-sm font-medium">
                    <span className="text-foreground">{stat.extra.active}</span>{" "}
                    <span className="text-muted-foreground">Active</span>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
