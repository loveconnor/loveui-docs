"use client";

import { useMemo } from "react";
import { Input } from "@loveui/ui/ui/input";
import { Button } from "@loveui/ui/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "../ui/dropdown-menu";
import { HugeiconsIcon } from "@hugeicons/react";
import { Search01Icon, FilterIcon } from "@hugeicons/core-free-icons";
import { todayTasks } from "../../mock-data/dashboard";
import { useDashboardStore } from "../../store/dashboard-store";
import { cn } from "../../lib/utils";

const projectColorMap: Record<string, string> = {
  blue: "rounded-lg border border-border bg-muted/50 text-foreground",
  violet: "rounded-lg border border-border bg-muted/50 text-foreground",
  cyan: "rounded-lg border border-border bg-muted/50 text-foreground",
  pink: "rounded-lg border border-border bg-muted/50 text-foreground",
  amber: "rounded-lg border border-border bg-muted/50 text-foreground",
};

const uniqueProjects = Array.from(
  new Map(todayTasks.map((t) => [t.projectId, { id: t.projectId, name: t.projectName }])).values()
);

export function TodaysTasks() {
  const {
    tasksSearchQuery,
    setTasksSearchQuery,
    tasksProjectFilter,
    toggleTasksProjectFilter,
    setTasksProjectFilter,
  } = useDashboardStore();

  const filteredTasks = useMemo(() => {
    let result = todayTasks;
    if (tasksSearchQuery.trim()) {
      const q = tasksSearchQuery.toLowerCase();
      result = result.filter(
        (t) =>
          t.name.toLowerCase().includes(q) ||
          t.projectName.toLowerCase().includes(q)
      );
    }
    if (tasksProjectFilter.length > 0) {
      result = result.filter((t) => tasksProjectFilter.includes(t.projectId));
    }
    return result;
  }, [tasksSearchQuery, tasksProjectFilter]);

  const hasTaskFilters = tasksProjectFilter.length > 0;

  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-4 py-3 border-b">
        <h3 className="font-medium text-base">Today&apos;s Tasks</h3>
        <div className="flex items-center gap-2">
          <div className="relative">
            <HugeiconsIcon icon={Search01Icon} className="absolute left-2.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <Input
              placeholder="Search here..."
              value={tasksSearchQuery}
              onChange={(e) => setTasksSearchQuery(e.target.value)}
              className="pl-8 h-9 w-full sm:w-[200px] text-sm bg-muted/50"
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
            No tasks match your search.
          </div>
        ) : (
          filteredTasks.map((task) => (
            <div
              key={task.id}
              className="flex flex-wrap items-center gap-3 px-4 py-3 hover:bg-muted/30 transition-colors"
            >
              <span className="font-medium text-sm">{task.name}</span>
              <div
                className={cn(
                  "inline-flex items-center gap-1.5 px-2 py-1 text-xs font-medium",
                  projectColorMap[task.projectColor] ?? projectColorMap.blue
                )}
              >
                {task.projectName}
              </div>
              <span className="text-xs text-muted-foreground ml-auto">
                Due: {task.dueDate}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
