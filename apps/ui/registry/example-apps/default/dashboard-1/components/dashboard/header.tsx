"use client"

import {
  DashboardSquare01Icon,
  RefreshIcon,
  SidebarLeft01Icon,
  Tick01Icon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { Avatar, AvatarFallback, AvatarImage } from "@loveui/ui/ui/avatar"
import { Button } from "@loveui/ui/ui/button"
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
  useDashboardStore,
  type LayoutDensity,
} from "../../store/dashboard-store"
import { ThemeToggle } from "../theme-toggle"
import { SidebarTrigger } from "../ui/sidebar"

const densityLabels: Record<LayoutDensity, string> = {
  default: "Default",
  compact: "Compact",
  comfortable: "Comfortable",
}

export function DashboardHeader() {
  const showAlertBanner = useDashboardStore((state) => state.showAlertBanner)
  const showStatsCards = useDashboardStore((state) => state.showStatsCards)
  const showChart = useDashboardStore((state) => state.showChart)
  const showTable = useDashboardStore((state) => state.showTable)
  const layoutDensity = useDashboardStore((state) => state.layoutDensity)
  const setShowAlertBanner = useDashboardStore(
    (state) => state.setShowAlertBanner
  )
  const setShowStatsCards = useDashboardStore(
    (state) => state.setShowStatsCards
  )
  const setShowChart = useDashboardStore((state) => state.setShowChart)
  const setShowTable = useDashboardStore((state) => state.setShowTable)
  const setLayoutDensity = useDashboardStore((state) => state.setLayoutDensity)
  const resetLayout = useDashboardStore((state) => state.resetLayout)

  return (
    <header className="flex w-full items-center gap-3 border-b bg-background px-4 py-4 sm:px-6">
      <SidebarTrigger className="lg:hidden">
        <HugeiconsIcon icon={SidebarLeft01Icon} className="size-5" />
      </SidebarTrigger>

      <HugeiconsIcon icon={DashboardSquare01Icon} className="size-6" />
      <h1 className="flex-1 text-base font-medium">Care Workforce</h1>

      <span className="hidden text-sm text-muted-foreground sm:block">
        Last update 5 min ago
      </span>

      <div className="flex items-center -space-x-2">
        <Avatar className="size-7 ring-2 ring-background">
          <AvatarImage src="https://api.dicebear.com/9.x/glass/svg?seed=user1" />
          <AvatarFallback>U1</AvatarFallback>
        </Avatar>
        <Avatar className="size-7 ring-2 ring-background">
          <AvatarImage src="https://api.dicebear.com/9.x/glass/svg?seed=user2" />
          <AvatarFallback>U2</AvatarFallback>
        </Avatar>
        <Avatar className="size-7 ring-2 ring-background">
          <AvatarImage src="https://api.dicebear.com/9.x/glass/svg?seed=user3" />
          <AvatarFallback>U3</AvatarFallback>
        </Avatar>
      </div>

      <div className="hidden h-6 w-px bg-border sm:block" />

      <ThemeToggle />

      <DropdownMenu>
        <DropdownMenuTrigger
          render={
            <Button
              variant="outline"
              size="sm"
              className="hidden gap-2 sm:flex"
            >
              <HugeiconsIcon icon={SidebarLeft01Icon} className="size-4" />
              Edit Layout
            </Button>
          }
        />
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuGroup>
            <p className="px-2 py-1.5 text-xs font-medium text-muted-foreground">
              Layout Density
            </p>
            {(Object.keys(densityLabels) as LayoutDensity[]).map((key) => (
              <DropdownMenuItem key={key} onClick={() => setLayoutDensity(key)}>
                {densityLabels[key]}
                {layoutDensity === key && (
                  <HugeiconsIcon icon={Tick01Icon} className="ml-auto size-4" />
                )}
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>

          <DropdownMenuSeparator />

          <DropdownMenuGroup>
            <p className="px-2 py-1.5 text-xs font-medium text-muted-foreground">
              Show / Hide Sections
            </p>
            <DropdownMenuCheckboxItem
              checked={showAlertBanner}
              onCheckedChange={setShowAlertBanner}
            >
              Alert Banner
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={showStatsCards}
              onCheckedChange={setShowStatsCards}
            >
              Statistics Cards
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={showChart}
              onCheckedChange={setShowChart}
            >
              Financial Flow Chart
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={showTable}
              onCheckedChange={setShowTable}
            >
              Employees Table
            </DropdownMenuCheckboxItem>
          </DropdownMenuGroup>

          <DropdownMenuSeparator />

          <DropdownMenuItem onClick={resetLayout}>
            <HugeiconsIcon icon={RefreshIcon} className="mr-2 size-4" />
            Reset to Default
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  )
}
