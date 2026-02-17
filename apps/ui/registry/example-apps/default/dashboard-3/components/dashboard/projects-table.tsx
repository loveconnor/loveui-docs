"use client";

import { useMemo, useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  flexRender,
} from "@tanstack/react-table";
import type { ColumnDef } from "@tanstack/react-table";
import { Input } from "@loveui/ui/ui/input";
import { Button } from "@loveui/ui/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@loveui/ui/ui/table";
import { Progress } from "@loveui/ui/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@loveui/ui/ui/avatar";
import { Checkbox } from "@loveui/ui/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@loveui/ui/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
  DropdownMenuSeparator,
} from "@loveui/ui/ui/menu";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Search01Icon,
  FilterIcon,
  Folder01Icon,
  Layers01Icon,
  Database01Icon,
  Megaphone01Icon,
  Wallet01Icon,
  CircleIcon,
  Tick01Icon,
  Clock01Icon,
  ArrowLeft01Icon,
  ArrowRight01Icon,
  ArrowLeftDoubleIcon,
  ArrowRightDoubleIcon,
} from "@hugeicons/core-free-icons";
import {
  projects,
  type Project,
  type ProjectStatus,
} from "../../mock-data/dashboard";
import { useDashboardStore } from "../../store/dashboard-store";
import { cn } from "../../lib/utils";

function StatusBadge({ status }: { status: ProjectStatus }) {
  if (status === "in_progress") {
    return (
      <div className="flex items-center gap-1.5">
        <HugeiconsIcon icon={CircleIcon} className="size-3.5 fill-cyan-500 text-cyan-500" />
        <span className="text-sm text-cyan-600 dark:text-cyan-400">In Progress</span>
      </div>
    );
  }
  if (status === "completed") {
    return (
      <div className="flex items-center gap-1.5">
        <HugeiconsIcon icon={Tick01Icon} className="size-3.5 text-emerald-500" />
        <span className="text-sm text-emerald-600 dark:text-emerald-400">Completed</span>
      </div>
    );
  }
  return (
    <div className="flex items-center gap-1.5">
      <HugeiconsIcon icon={Clock01Icon} className="size-3.5 text-amber-500" />
      <span className="text-sm text-amber-600 dark:text-amber-400">On Hold</span>
    </div>
  );
}

const projectIconMap: Record<string, { icon: typeof Folder01Icon; iconColor: string }> = {
  blue: { icon: Folder01Icon, iconColor: "text-blue-500" },
  violet: { icon: Layers01Icon, iconColor: "text-violet-500" },
  cyan: { icon: Database01Icon, iconColor: "text-cyan-500" },
  pink: { icon: Megaphone01Icon, iconColor: "text-pink-500" },
  amber: { icon: Wallet01Icon, iconColor: "text-amber-500" },
};

export function ProjectsTable() {
  const {
    projectsSearchQuery,
    setProjectsSearchQuery,
    projectStatusFilter,
    setProjectStatusFilter,
  } = useDashboardStore();

  const columns = useMemo<ColumnDef<Project>[]>(
    () => [
      {
        id: "select",
        header: ({ table }) => (
          <Checkbox
            checked={table.getIsAllPageRowsSelected() ? true : table.getIsSomePageRowsSelected() ? true : false}
            onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
            aria-label="Select all"
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
          />
        ),
        enableSorting: false,
        enableHiding: false,
      },
      {
        accessorKey: "name",
        header: "Project Name",
        cell: ({ row }) => {
          const p = row.original;
          const { icon, iconColor } =
            projectIconMap[p.color] ?? projectIconMap.blue;
          return (
            <div className="flex items-center gap-2 font-medium text-foreground">
              <HugeiconsIcon icon={icon} className={cn("size-4 shrink-0", iconColor)} />
              {p.name}
            </div>
          );
        },
      },
      {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => <StatusBadge status={row.original.status} />,
      },
      {
        accessorKey: "progress",
        header: "Progress",
        cell: ({ row }) => (
          <div className="flex items-center gap-2 min-w-[100px]">
            <Progress value={row.original.progress} className="h-2 flex-1" />
            <span className="text-sm tabular-nums w-8">
              {row.original.progress}%
            </span>
          </div>
        ),
      },
      {
        id: "tasks",
        header: "Total Tasks",
        cell: ({ row }) => {
          const p = row.original;
          return (
            <span className="text-sm text-muted-foreground">
              {p.completedTasks}/{p.totalTasks}
            </span>
          );
        },
      },
      {
        accessorKey: "dueDate",
        header: "Due Date",
        cell: ({ row }) => (
          <span className="text-sm text-muted-foreground">
            {row.original.dueDate}
          </span>
        ),
      },
      {
        accessorKey: "ownerName",
        header: "Owner",
        cell: ({ row }) => {
          const p = row.original;
          return (
            <div className="flex items-center gap-2">
              <Avatar className="size-6">
                <AvatarImage
                  src={`https://api.dicebear.com/9.x/glass/svg?seed=${p.ownerAvatarSeed}`}
                />
                <AvatarFallback className="text-xs">
                  {p.ownerName.slice(0, 2)}
                </AvatarFallback>
              </Avatar>
              <span className="text-sm">{p.ownerName}</span>
            </div>
          );
        },
      },
    ],
    []
  );

  const filteredData = useMemo(() => {
    let result = projects;
    if (projectsSearchQuery.trim()) {
      const q = projectsSearchQuery.toLowerCase();
      result = result.filter((p) =>
        p.name.toLowerCase().includes(q) ||
        p.ownerName.toLowerCase().includes(q)
      );
    }
    if (projectStatusFilter !== "all") {
      result = result.filter((p) => p.status === projectStatusFilter);
    }
    return result;
  }, [projectsSearchQuery, projectStatusFilter]);

  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    data: filteredData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onRowSelectionChange: setRowSelection,
    state: { rowSelection },
    initialState: {
      pagination: { pageSize: 10 },
    },
  });

  const hasActiveFilters = projectStatusFilter !== "all";
  const pageSize = table.getState().pagination.pageSize;
  const pageIndex = table.getState().pagination.pageIndex;
  const totalRows = filteredData.length;
  const from = pageIndex * pageSize + 1;
  const to = Math.min((pageIndex + 1) * pageSize, totalRows);

  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-4 py-3 border-b">
        <h3 className="font-medium text-base">List Projects</h3>
        <div className="flex items-center gap-2">
          <div className="relative">
            <HugeiconsIcon icon={Search01Icon} className="absolute left-2.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground z-10 pointer-events-none" />
            <Input
              placeholder="Search here..."
              value={projectsSearchQuery}
              onChange={(e) => setProjectsSearchQuery(e.target.value)}
              className="pl-8 h-9 w-full sm:w-[200px] text-sm bg-muted/50"
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger
              render={
                <Button variant="outline" size="sm" className="h-9 gap-1.5">
                  <HugeiconsIcon icon={FilterIcon} className="size-4" />
                  Filter
                  {hasActiveFilters && (
                    <span className="size-1.5 rounded-full bg-primary" />
                  )}
                </Button>
              }
            />
            <DropdownMenuContent align="start" className="w-44">
              <DropdownMenuCheckboxItem
                checked={projectStatusFilter === "all"}
                onCheckedChange={() => setProjectStatusFilter("all")}
              >
                All statuses
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={projectStatusFilter === "in_progress"}
                onCheckedChange={() => setProjectStatusFilter("in_progress")}
              >
                In Progress
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={projectStatusFilter === "completed"}
                onCheckedChange={() => setProjectStatusFilter("completed")}
              >
                Completed
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={projectStatusFilter === "on_hold"}
                onCheckedChange={() => setProjectStatusFilter("on_hold")}
              >
                On Hold
              </DropdownMenuCheckboxItem>
              {hasActiveFilters && (
                <>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => setProjectStatusFilter("all")}>
                    Clear filter
                  </DropdownMenuItem>
                </>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="hover:bg-transparent">
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="text-center text-muted-foreground py-8"
                >
                  No projects found.
                </TableCell>
              </TableRow>
            ) : (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() ? "selected" : undefined}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-4 py-3 border-t">
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span>
            {totalRows === 0
              ? "0 projects"
              : `Showing ${from} to ${to} of ${totalRows} projects`}
          </span>
          <div className="flex items-center gap-2">
            <span className="hidden sm:inline">Rows per page</span>
            <Select
              value={String(pageSize)}
              onValueChange={(v) => table.setPageSize(Number(v))}
            >
              <SelectTrigger className="h-8 w-[70px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="5">5</SelectItem>
                <SelectItem value="10">10</SelectItem>
                <SelectItem value="20">20</SelectItem>
                <SelectItem value="50">50</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <Button
            variant="outline"
            size="icon"
            className="size-8"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            <HugeiconsIcon icon={ArrowLeftDoubleIcon} className="size-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="size-8"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <HugeiconsIcon icon={ArrowLeft01Icon} className="size-4" />
          </Button>
          <span className="px-2 text-sm tabular-nums">
            {pageIndex + 1} / {table.getPageCount() || 1}
          </span>
          <Button
            variant="outline"
            size="icon"
            className="size-8"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <HugeiconsIcon icon={ArrowRight01Icon} className="size-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="size-8"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            <HugeiconsIcon icon={ArrowRightDoubleIcon} className="size-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
