"use client"

import {
  Add01Icon,
  ArrowDown01Icon,
  Invoice01Icon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { Button } from "@loveui/ui/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@loveui/ui/ui/menu"

import { DateFilter, useLeadsStore } from "../../store/leads-store"

const dateFilterLabels: Record<DateFilter, string> = {
  all: "All Time",
  today: "Today",
  yesterday: "Yesterday",
  last_7_days: "Last 7 Days",
  last_30_days: "Last 30 Days",
  this_month: "This Month",
}

export function FilterSection() {
  const { dateFilter, setDateFilter } = useLeadsStore()

  return (
    <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
      <DropdownMenu>
        <DropdownMenuTrigger
          render={
            <Button variant="outline" className="gap-2">
              <span>{dateFilterLabels[dateFilter]}</span>
              <HugeiconsIcon
                icon={ArrowDown01Icon}
                className="size-4 text-muted-foreground"
              />
            </Button>
          }
        />
        <DropdownMenuContent align="start">
          {Object.entries(dateFilterLabels).map(([key, label]) => (
            <DropdownMenuItem
              key={key}
              onClick={() => setDateFilter(key as DateFilter)}
              className={dateFilter === key ? "bg-accent" : ""}
            >
              {label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <div className="flex items-center gap-2 sm:gap-3">
        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <Button variant="outline" className="gap-2">
                <span>Import/Export</span>
                <HugeiconsIcon
                  icon={ArrowDown01Icon}
                  className="size-4 text-muted-foreground"
                />
              </Button>
            }
          />
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <HugeiconsIcon icon={Invoice01Icon} className="mr-2 size-4" />
              Import Sponsor Contacts
            </DropdownMenuItem>
            <DropdownMenuItem>
              <HugeiconsIcon icon={Invoice01Icon} className="mr-2 size-4" />
              Export Sponsor List (CSV)
            </DropdownMenuItem>
            <DropdownMenuItem>
              <HugeiconsIcon icon={Invoice01Icon} className="mr-2 size-4" />
              Export Sponsor List (Excel)
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Button className="gap-2 bg-foreground text-background hover:bg-foreground/90">
          <HugeiconsIcon icon={Add01Icon} className="size-4" />
          <span>Add Sponsor</span>
        </Button>
      </div>
    </div>
  )
}
