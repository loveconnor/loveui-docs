"use client"

import { useMemo } from "react"
import { FilterIcon, Search01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { Button } from "@loveui/ui/ui/button"
import { Input } from "@loveui/ui/ui/input"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@loveui/ui/ui/menu"

import { cn } from "../../lib/utils"
import { todayTasks } from "../../mock-data/dashboard"
import { useDashboardStore } from "../../store/dashboard-store"

const projectColorMap: Record<string, string> = {
  blue: "rounded-lg border border-border bg-muted/50 text-foreground",
  violet: "rounded-lg border border-border bg-muted/50 text-foreground",
  cyan: "rounded-lg border border-border bg-muted/50 text-foreground",
  pink: "rounded-lg border border-border bg-muted/50 text-foreground",
  amber: "rounded-lg border border-border bg-muted/50 text-foreground",
}

const uniqueProjects = Array.from(
  new Map(
    todayTasks.map((t) => [
      t.projectId,
      { id: t.projectId, name: t.projectName },
    ])
  ).values()
)

export function TodaysTasks() {
  const {
    tasksSearchQuery,
    setTasksSearchQuery,
    tasksProjectFilter,
    toggleTasksProjectFilter,
    setTasksProjectFilter,
  } = useDashboardStore()

  const filteredTasks = useMemo(() => {
    let result = todayTasks
    if (tasksSearchQuery.trim()) {
      const q = tasksSearchQuery.toLowerCase()
      result = result.filter(
        (t) =>
          t.name.toLowerCase().includes(q) ||
          t.projectName.toLowerCase().includes(q)
      )
    }
    if (tasksProjectFilter.length > 0) {
      result = result.filter((t) => tasksProjectFilter.includes(t.projectId))
    }
    return result
  }, [tasksSearchQuery, tasksProjectFilter])

  const hasTaskFilters = tasksProjectFilter.length > 0

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card">
      <div className="flex flex-col gap-3 border-b px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
        <h3 className="text-base font-medium">Today&apos;s Academic Tasks</h3>
        <div className="flex items-center gap-2">
          <div className="relative">
            <HugeiconsIcon
              icon={Search01Icon}
              className="pointer-events-none absolute top-1/2 left-2.5 z-10 size-4 -translate-y-1/2 text-muted-foreground"
            />
            <Input
              placeholder="Search here..."
              value={tasksSearchQuery}
              onChange={(e) => setTasksSearchQuery(e.target.value)}
              className="h-9 w-full bg-muted/50 pl-8 text-sm sm:w-[200px]"
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger
              render={
                <Button variant="outline" size="sm" className="h-9 gap-1.5">
                  <HugeiconsIcon icon={FilterIcon} className="size-4" />
                  Filter
                  {hasTaskFilters && (
                    <span className="size-1.5 rounded-full bg-primary" />
                  )}
                </Button>
              }
            />
            <DropdownMenuContent align="end" className="w-52">
              <DropdownMenuCheckboxItem
                checked={tasksProjectFilter.length === 0}
                onCheckedChange={() => setTasksProjectFilter([])}
              >
                All projects
              </DropdownMenuCheckboxItem>
              <DropdownMenuSeparator />
              {uniqueProjects.map((proj) => (
                <DropdownMenuCheckboxItem
                  key={proj.id}
                  checked={tasksProjectFilter.includes(proj.id)}
                  onCheckedChange={() => toggleTasksProjectFilter(proj.id)}
                >
                  {proj.name}
                </DropdownMenuCheckboxItem>
              ))}
              {hasTaskFilters && (
                <>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => setTasksProjectFilter([])}>
                    Clear filter
                  </DropdownMenuItem>
                </>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="divide-y">
        {filteredTasks.length === 0 ? (
          <div className="px-4 py-8 text-center text-sm text-muted-foreground">
            No academic tasks match your search.
          </div>
        ) : (
          filteredTasks.map((task) => (
            <div
              key={task.id}
              className="flex flex-wrap items-center gap-3 px-4 py-3 transition-colors hover:bg-muted/30"
            >
              <span className="text-sm font-medium">{task.name}</span>
              <div
                className={cn(
                  "inline-flex items-center gap-1.5 px-2 py-1 text-xs font-medium",
                  projectColorMap[task.projectColor] ?? projectColorMap.blue
                )}
              >
                {task.projectName}
              </div>
              <span className="ml-auto text-xs text-muted-foreground">
                Due: {task.dueDate}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
