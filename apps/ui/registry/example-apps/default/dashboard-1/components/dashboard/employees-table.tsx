"use client"

import * as React from "react"
import {
  ArrowLeft01Icon,
  ArrowRight01Icon,
  FileImportIcon,
  FilterIcon,
  Search01Icon,
  UserGroupIcon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { Avatar, AvatarFallback, AvatarImage } from "@loveui/ui/ui/avatar"
import { Button } from "@loveui/ui/ui/button"
import { Checkbox } from "@loveui/ui/ui/checkbox"
import { Input } from "@loveui/ui/ui/input"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@loveui/ui/ui/menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@loveui/ui/ui/table"

import { cn } from "../../lib/utils"
import { employees, type Employee } from "../../mock-data/employees"
import { useDashboardStore } from "../../store/dashboard-store"

const PAGE_SIZE_OPTIONS = [8, 15, 25, 50]

const statusColors: Record<
  Employee["status"],
  { bg: string; text: string; border: string }
> = {
  Active: {
    bg: "bg-emerald-50 dark:bg-emerald-950/30",
    text: "text-emerald-600 dark:text-emerald-400",
    border: "border-emerald-200 dark:border-emerald-800",
  },
  "On Leave": {
    bg: "bg-amber-50 dark:bg-amber-950/30",
    text: "text-amber-600 dark:text-amber-400",
    border: "border-amber-200 dark:border-amber-800",
  },
  Probation: {
    bg: "bg-blue-50 dark:bg-blue-950/30",
    text: "text-blue-600 dark:text-blue-400",
    border: "border-blue-200 dark:border-blue-800",
  },
  Inactive: {
    bg: "bg-red-50 dark:bg-red-950/30",
    text: "text-red-600 dark:text-red-400",
    border: "border-red-200 dark:border-red-800",
  },
}

export function EmployeesTable() {
  const searchQuery = useDashboardStore((state) => state.searchQuery)
  const departmentFilter = useDashboardStore((state) => state.departmentFilter)
  const statusFilter = useDashboardStore((state) => state.statusFilter)
  const setSearchQuery = useDashboardStore((state) => state.setSearchQuery)
  const setDepartmentFilter = useDashboardStore(
    (state) => state.setDepartmentFilter
  )
  const setStatusFilter = useDashboardStore((state) => state.setStatusFilter)
  const clearFilters = useDashboardStore((state) => state.clearFilters)

  const [currentPage, setCurrentPage] = React.useState(1)
  const [pageSize, setPageSize] = React.useState(8)
  const [selectedRows, setSelectedRows] = React.useState<Set<string>>(new Set())

  const hasActiveFilters = departmentFilter !== "all" || statusFilter !== "all"

  const filteredEmployees = React.useMemo(() => {
    return employees.filter((emp) => {
      const matchesSearch =
        emp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        emp.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        emp.userId.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesDepartment =
        departmentFilter === "all" || emp.department === departmentFilter

      const matchesStatus =
        statusFilter === "all" || emp.status === statusFilter

      return matchesSearch && matchesDepartment && matchesStatus
    })
  }, [searchQuery, departmentFilter, statusFilter])

  const totalPages = Math.ceil(filteredEmployees.length / pageSize)

  const paginatedEmployees = React.useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize
    return filteredEmployees.slice(startIndex, startIndex + pageSize)
  }, [filteredEmployees, currentPage, pageSize])

  React.useEffect(() => {
    setCurrentPage(1)
  }, [searchQuery, departmentFilter, statusFilter, pageSize])

  const toggleSelectAll = () => {
    if (selectedRows.size === paginatedEmployees.length) {
      setSelectedRows(new Set())
    } else {
      setSelectedRows(new Set(paginatedEmployees.map((e) => e.id)))
    }
  }

  const toggleSelectRow = (id: string) => {
    const newSet = new Set(selectedRows)
    if (newSet.has(id)) {
      newSet.delete(id)
    } else {
      newSet.add(id)
    }
    setSelectedRows(newSet)
  }

  return (
    <div className="overflow-hidden rounded-xl border bg-card">
      <div className="flex flex-col justify-between gap-3 border-b px-5 py-4 sm:flex-row sm:items-center">
        <div className="flex items-center gap-2">
          <HugeiconsIcon
            icon={UserGroupIcon}
            className="size-5 text-muted-foreground"
          />
          <span className="font-medium text-muted-foreground">
            Employee list
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <div className="relative flex-1 sm:flex-none">
            <HugeiconsIcon
              icon={Search01Icon}
              className="pointer-events-none absolute top-1/2 left-3 z-10 size-4 -translate-y-1/2 text-muted-foreground"
            />
            <Input
              placeholder="Search Anything..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-9 w-full pl-9 sm:w-[220px]"
            />
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger
              className={cn(
                "inline-flex h-9 items-center justify-center gap-2 rounded-md border px-3 text-sm font-medium",
                "border-border bg-muted shadow-xs hover:bg-background"
              )}
            >
              <HugeiconsIcon icon={FilterIcon} className="size-4" />
              Filter
              {hasActiveFilters && (
                <span className="size-1.5 rounded-full bg-primary" />
              )}
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[200px]">
              <DropdownMenuGroup>
                <p className="px-2 py-1.5 text-xs font-medium text-muted-foreground">
                  Department
                </p>
                {[
                  "all",
                  "Nursing",
                  "Clinical",
                  "Operations",
                  "Admin",
                  "Support",
                ].map((dept) => (
                  <DropdownMenuCheckboxItem
                    key={dept}
                    checked={departmentFilter === dept}
                    onCheckedChange={() => setDepartmentFilter(dept)}
                  >
                    {dept === "all" ? "All Departments" : dept}
                  </DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <p className="px-2 py-1.5 text-xs font-medium text-muted-foreground">
                  Status
                </p>
                {["all", "Active", "On Leave", "Probation", "Inactive"].map(
                  (status) => (
                    <DropdownMenuCheckboxItem
                      key={status}
                      checked={statusFilter === status}
                      onCheckedChange={() => setStatusFilter(status)}
                    >
                      {status === "all" ? "All Statuses" : status}
                    </DropdownMenuCheckboxItem>
                  )
                )}
              </DropdownMenuGroup>
              {hasActiveFilters && (
                <>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={clearFilters}
                    className="text-destructive"
                  >
                    Clear all filters
                  </DropdownMenuItem>
                </>
              )}
            </DropdownMenuContent>
          </DropdownMenu>

          <div className="hidden h-6 w-px bg-border sm:block" />

          <Button variant="outline" className="gap-2">
            <HugeiconsIcon icon={FileImportIcon} className="size-4" />
            Import
          </Button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50 hover:bg-muted/50">
              <TableHead className="w-[50px]">
                <Checkbox
                  checked={
                    selectedRows.size === paginatedEmployees.length &&
                    paginatedEmployees.length > 0
                  }
                  onCheckedChange={toggleSelectAll}
                />
              </TableHead>
              <TableHead className="min-w-[100px] font-medium text-muted-foreground">
                User ID
              </TableHead>
              <TableHead className="min-w-[150px] font-medium text-muted-foreground">
                Name
              </TableHead>
              <TableHead className="hidden min-w-[200px] font-medium text-muted-foreground md:table-cell">
                Email Address
              </TableHead>
              <TableHead className="hidden min-w-[100px] font-medium text-muted-foreground lg:table-cell">
                Department
              </TableHead>
              <TableHead className="hidden min-w-[140px] font-medium text-muted-foreground lg:table-cell">
                Job Title
              </TableHead>
              <TableHead className="hidden min-w-[120px] font-medium text-muted-foreground sm:table-cell">
                Joined Date
              </TableHead>
              <TableHead className="min-w-[100px] font-medium text-muted-foreground">
                Status
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedEmployees.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={8}
                  className="h-24 text-center text-muted-foreground"
                >
                  No employees found matching your filters.
                </TableCell>
              </TableRow>
            ) : (
              paginatedEmployees.map((employee) => (
                <TableRow key={employee.id}>
                  <TableCell>
                    <Checkbox
                      checked={selectedRows.has(employee.id)}
                      onCheckedChange={() => toggleSelectRow(employee.id)}
                    />
                  </TableCell>
                  <TableCell className="font-medium text-muted-foreground">
                    {employee.userId}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2.5">
                      <Avatar className="size-6">
                        {employee.avatar ? (
                          <AvatarImage src={employee.avatar} />
                        ) : null}
                        <AvatarFallback className="text-[10px] font-semibold">
                          {employee.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <span className="font-medium">{employee.name}</span>
                    </div>
                  </TableCell>
                  <TableCell className="hidden text-muted-foreground md:table-cell">
                    {employee.email}
                  </TableCell>
                  <TableCell className="hidden lg:table-cell">
                    <span className="rounded-md bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground">
                      {employee.department}
                    </span>
                  </TableCell>
                  <TableCell className="hidden lg:table-cell">
                    <span className="rounded-md bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground">
                      {employee.jobTitle}
                    </span>
                  </TableCell>
                  <TableCell className="hidden text-muted-foreground sm:table-cell">
                    {employee.joinedDate}
                  </TableCell>
                  <TableCell>
                    <span
                      className={cn(
                        "inline-flex items-center gap-1 rounded-md border px-2 py-0.5 text-xs font-medium",
                        statusColors[employee.status].bg,
                        statusColors[employee.status].text,
                        statusColors[employee.status].border
                      )}
                    >
                      {employee.status}
                    </span>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex flex-col items-center justify-between gap-4 border-t px-5 py-4 sm:flex-row">
        <div className="flex items-center gap-6">
          <Button
            variant="outline"
            size="icon-sm"
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
          >
            <HugeiconsIcon icon={ArrowLeft01Icon} className="size-4" />
          </Button>

          <div className="flex items-center gap-1">
            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              let pageNum: number
              if (totalPages <= 5) {
                pageNum = i + 1
              } else if (currentPage <= 3) {
                pageNum = i + 1
              } else if (currentPage >= totalPages - 2) {
                pageNum = totalPages - 4 + i
              } else {
                pageNum = currentPage - 2 + i
              }

              if (i === 3 && totalPages > 5 && currentPage < totalPages - 2) {
                return (
                  <span key="ellipsis" className="px-3 py-1 text-sm">
                    ...
                  </span>
                )
              }

              if (i === 4 && totalPages > 5) {
                pageNum = totalPages
              }

              return (
                <Button
                  key={pageNum}
                  variant={currentPage === pageNum ? "secondary" : "ghost"}
                  size="icon-sm"
                  onClick={() => setCurrentPage(pageNum)}
                  className={cn(currentPage === pageNum && "bg-muted")}
                >
                  {pageNum}
                </Button>
              )
            })}
          </div>

          <Button
            variant="outline"
            size="icon-sm"
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
          >
            <HugeiconsIcon icon={ArrowRight01Icon} className="size-4" />
          </Button>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-xs text-muted-foreground">
            Showing {(currentPage - 1) * pageSize + 1} to{" "}
            {Math.min(currentPage * pageSize, filteredEmployees.length)} of{" "}
            {filteredEmployees.length} entries
          </span>

          <DropdownMenu>
            <DropdownMenuTrigger className="inline-flex h-8 items-center justify-center gap-2 rounded-md border border-border bg-background px-2.5 text-sm font-medium shadow-xs hover:bg-muted">
              Show {pageSize}
              <HugeiconsIcon
                icon={ArrowRight01Icon}
                className="size-3 rotate-90"
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {PAGE_SIZE_OPTIONS.map((size) => (
                <DropdownMenuItem
                  key={size}
                  onClick={() => setPageSize(size)}
                  className={cn(pageSize === size && "bg-muted")}
                >
                  Show {size}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  )
}
