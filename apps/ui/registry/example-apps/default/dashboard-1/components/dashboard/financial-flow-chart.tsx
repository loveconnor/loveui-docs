"use client"

import { useState } from "react"
import {
  Calendar01Icon,
  ChartAverageIcon,
  ChartBarLineIcon,
  ChartLineData01Icon,
  GridIcon,
  Invoice01Icon,
  MoreHorizontalIcon,
  RefreshIcon,
  Tick01Icon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { useTheme } from "next-themes"
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  TooltipProps,
  XAxis,
  YAxis,
} from "recharts"

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@loveui/ui/ui/menu"

const fullYearData = [
  {
    month: "Jan",
    moneyIn: 198000,
    moneyOut: 142000,
    moneyInChange: 6.4,
    moneyOutChange: -2.1,
  },
  {
    month: "Feb",
    moneyIn: 205000,
    moneyOut: 151000,
    moneyInChange: 3.5,
    moneyOutChange: 6.3,
  },
  {
    month: "Mar",
    moneyIn: 226000,
    moneyOut: 158000,
    moneyInChange: 10.2,
    moneyOutChange: 4.6,
  },
  {
    month: "Apr",
    moneyIn: 232000,
    moneyOut: 163000,
    moneyInChange: 2.7,
    moneyOutChange: 3.1,
  },
  {
    month: "May",
    moneyIn: 241000,
    moneyOut: 169000,
    moneyInChange: 3.9,
    moneyOutChange: 3.6,
  },
  {
    month: "Jun",
    moneyIn: 248000,
    moneyOut: 172000,
    moneyInChange: 2.9,
    moneyOutChange: 1.8,
  },
  {
    month: "Jul",
    moneyIn: 256000,
    moneyOut: 178000,
    moneyInChange: 3.2,
    moneyOutChange: 3.4,
  },
  {
    month: "Aug",
    moneyIn: 264000,
    moneyOut: 181000,
    moneyInChange: 3.1,
    moneyOutChange: 1.7,
  },
  {
    month: "Sep",
    moneyIn: 258000,
    moneyOut: 176000,
    moneyInChange: -2.2,
    moneyOutChange: -2.8,
  },
  {
    month: "Oct",
    moneyIn: 271000,
    moneyOut: 184000,
    moneyInChange: 5.0,
    moneyOutChange: 4.5,
  },
  {
    month: "Nov",
    moneyIn: 279000,
    moneyOut: 191000,
    moneyInChange: 3.0,
    moneyOutChange: 3.8,
  },
  {
    month: "Dec",
    moneyIn: 292000,
    moneyOut: 198000,
    moneyInChange: 4.7,
    moneyOutChange: 3.7,
  },
]

type ChartType = "bar" | "line" | "area"
type TimePeriod = "3months" | "6months" | "year" | "q1" | "q2" | "q3" | "q4"

const periodLabels: Record<TimePeriod, string> = {
  "3months": "Last 3 Months",
  "6months": "Last 6 Months",
  year: "Full Year",
  q1: "Q1 (Jan-Mar)",
  q2: "Q2 (Apr-Jun)",
  q3: "Q3 (Jul-Sep)",
  q4: "Q4 (Oct-Dec)",
}

function getDataForPeriod(period: TimePeriod) {
  switch (period) {
    case "3months":
      return fullYearData.slice(-3)
    case "6months":
      return fullYearData.slice(-6)
    case "q1":
      return fullYearData.slice(0, 3)
    case "q2":
      return fullYearData.slice(3, 6)
    case "q3":
      return fullYearData.slice(6, 9)
    case "q4":
      return fullYearData.slice(9, 12)
    default:
      return fullYearData
  }
}

function CustomTooltip({
  active,
  payload,
  label,
}: TooltipProps<number, string>) {
  if (!active || !payload?.length) return null

  const moneyInData = payload.find((p) => p.dataKey === "moneyIn")
  const moneyOutData = payload.find((p) => p.dataKey === "moneyOut")
  const moneyIn = moneyInData?.value || 0
  const moneyOut = moneyOutData?.value || 0
  const moneyInChange =
    (moneyInData?.payload as { moneyInChange?: number })?.moneyInChange || 0
  const moneyOutChange =
    (moneyOutData?.payload as { moneyOutChange?: number })?.moneyOutChange || 0

  return (
    <div className="min-w-[160px] rounded-lg border border-border bg-popover p-3 shadow-lg">
      <p className="mb-3 text-sm font-medium text-foreground">{label}, 2025</p>
      <div className="space-y-2">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="size-2 rounded-full bg-emerald-500" />
            <span className="text-sm font-semibold text-foreground">
              ${(Number(moneyIn) / 1000).toFixed(0)}k
            </span>
          </div>
          <span
            className={`text-xs font-medium ${moneyInChange >= 0 ? "text-red-500" : "text-emerald-500"}`}
          >
            {moneyInChange >= 0 ? "↘" : "↗"}{" "}
            {Math.abs(moneyInChange).toFixed(1)}%
          </span>
        </div>
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="size-2 rounded-full bg-[#162664] dark:bg-indigo-500" />
            <span className="text-sm font-semibold text-foreground">
              ${(Number(moneyOut) / 1000).toFixed(0)}k
            </span>
          </div>
          <span
            className={`text-xs font-medium ${moneyOutChange >= 0 ? "text-emerald-500" : "text-red-500"}`}
          >
            {moneyOutChange >= 0 ? "↗" : "↘"}{" "}
            {Math.abs(moneyOutChange).toFixed(1)}%
          </span>
        </div>
      </div>
    </div>
  )
}

export function FinancialFlowChart() {
  const { theme } = useTheme()
  const [chartType, setChartType] = useState<ChartType>("line")
  const [period, setPeriod] = useState<TimePeriod>("year")
  const [showGrid, setShowGrid] = useState(true)
  const [showMoneyIn, setShowMoneyIn] = useState(true)
  const [showMoneyOut, setShowMoneyOut] = useState(true)
  const [smoothCurve, setSmoothCurve] = useState(false)

  const isDark = theme === "dark"
  const axisColor = isDark ? "#71717a" : "#a1a1aa"
  const gridColor = isDark ? "#27272a" : "#e5e7eb"
  const moneyOutColor = isDark ? "#6366f1" : "#162664"

  const chartData = getDataForPeriod(period)

  const resetToDefault = () => {
    setChartType("line")
    setPeriod("year")
    setShowGrid(true)
    setShowMoneyIn(true)
    setShowMoneyOut(true)
    setSmoothCurve(false)
  }

  return (
    <div className="overflow-hidden rounded-xl border bg-card">
      <div className="flex flex-col justify-between gap-4 px-5 py-4 sm:flex-row sm:items-center">
        <div className="flex items-center gap-2">
          <HugeiconsIcon
            icon={Invoice01Icon}
            className="size-5 text-muted-foreground"
          />
          <span className="font-medium text-muted-foreground">
            Staffing Budget Flow
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          <div className="hidden items-center gap-4 sm:flex">
            <div className="flex items-center gap-1.5">
              <div className="size-3 rounded-full bg-emerald-500" />
              <span className="text-xs font-medium text-muted-foreground">
                Budget Allocated
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="size-3 rounded-full bg-[#162664] dark:bg-indigo-500" />
              <span className="text-xs font-medium text-muted-foreground">
                Budget Used
              </span>
            </div>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger className="inline-flex size-8 items-center justify-center rounded-md hover:bg-muted">
              <HugeiconsIcon icon={MoreHorizontalIcon} className="size-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuGroup>
                <p className="px-2 py-1.5 text-xs font-medium text-muted-foreground">
                  Chart Type
                </p>
                <DropdownMenuItem onClick={() => setChartType("bar")}>
                  <HugeiconsIcon
                    icon={ChartBarLineIcon}
                    className="mr-2 size-4"
                  />
                  Bar Chart
                  {chartType === "bar" && (
                    <HugeiconsIcon
                      icon={Tick01Icon}
                      className="ml-auto size-4"
                    />
                  )}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setChartType("line")}>
                  <HugeiconsIcon
                    icon={ChartLineData01Icon}
                    className="mr-2 size-4"
                  />
                  Line Chart
                  {chartType === "line" && (
                    <HugeiconsIcon
                      icon={Tick01Icon}
                      className="ml-auto size-4"
                    />
                  )}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setChartType("area")}>
                  <HugeiconsIcon
                    icon={ChartAverageIcon}
                    className="mr-2 size-4"
                  />
                  Area Chart
                  {chartType === "area" && (
                    <HugeiconsIcon
                      icon={Tick01Icon}
                      className="ml-auto size-4"
                    />
                  )}
                </DropdownMenuItem>
              </DropdownMenuGroup>

              <DropdownMenuSeparator />

              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <HugeiconsIcon
                    icon={Calendar01Icon}
                    className="mr-2 size-4"
                  />
                  Time Period
                </DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                  {(Object.keys(periodLabels) as TimePeriod[]).map((key) => (
                    <DropdownMenuItem key={key} onClick={() => setPeriod(key)}>
                      {periodLabels[key]}
                      {period === key && (
                        <HugeiconsIcon
                          icon={Tick01Icon}
                          className="ml-auto size-4"
                        />
                      )}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuSubContent>
              </DropdownMenuSub>

              <DropdownMenuSeparator />

              <DropdownMenuGroup>
                <p className="px-2 py-1.5 text-xs font-medium text-muted-foreground">
                  Display Options
                </p>
                <DropdownMenuCheckboxItem
                  checked={showGrid}
                  onCheckedChange={setShowGrid}
                >
                  <HugeiconsIcon icon={GridIcon} className="mr-2 size-4" />
                  Show Grid Lines
                </DropdownMenuCheckboxItem>

                {(chartType === "line" || chartType === "area") && (
                  <DropdownMenuCheckboxItem
                    checked={smoothCurve}
                    onCheckedChange={setSmoothCurve}
                  >
                    <HugeiconsIcon
                      icon={ChartAverageIcon}
                      className="mr-2 size-4"
                    />
                    Smooth Curve
                  </DropdownMenuCheckboxItem>
                )}
              </DropdownMenuGroup>

              <DropdownMenuSeparator />

              <DropdownMenuGroup>
                <p className="px-2 py-1.5 text-xs font-medium text-muted-foreground">
                  Data Series
                </p>
                <DropdownMenuCheckboxItem
                  checked={showMoneyIn}
                  onCheckedChange={setShowMoneyIn}
                >
                  <div className="mr-2 size-3 rounded-full bg-emerald-500" />
                  Show Money In
                </DropdownMenuCheckboxItem>

                <DropdownMenuCheckboxItem
                  checked={showMoneyOut}
                  onCheckedChange={setShowMoneyOut}
                >
                  <div className="mr-2 size-3 rounded-full bg-[#162664] dark:bg-indigo-500" />
                  Show Money Out
                </DropdownMenuCheckboxItem>
              </DropdownMenuGroup>

              <DropdownMenuSeparator />

              <DropdownMenuItem onClick={resetToDefault}>
                <HugeiconsIcon icon={RefreshIcon} className="mr-2 size-4" />
                Reset to Default
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="h-[250px] px-2 pb-4 sm:h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          {chartType === "bar" ? (
            <BarChart data={chartData} barGap={4}>
              <defs>
                <linearGradient
                  id="moneyInGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="0%" stopColor="#2d9f75" stopOpacity={1} />
                  <stop offset="100%" stopColor="#2d9f75" stopOpacity={0.6} />
                </linearGradient>
                <linearGradient
                  id="moneyOutGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="0%" stopColor={moneyOutColor} stopOpacity={1} />
                  <stop
                    offset="100%"
                    stopColor={moneyOutColor}
                    stopOpacity={0.6}
                  />
                </linearGradient>
              </defs>
              {showGrid && (
                <CartesianGrid
                  strokeDasharray="0"
                  stroke={gridColor}
                  vertical={false}
                />
              )}
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{ fill: axisColor, fontSize: 12 }}
                dy={10}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: axisColor, fontSize: 10 }}
                tickFormatter={(value) => `$${value / 1000}k`}
                width={50}
              />
              <Tooltip
                content={<CustomTooltip />}
                cursor={{ fill: "#f4f4f5", radius: 4 }}
              />
              {showMoneyIn && (
                <Bar
                  dataKey="moneyIn"
                  fill="url(#moneyInGradient)"
                  radius={[4, 4, 0, 0]}
                  maxBarSize={22}
                />
              )}
              {showMoneyOut && (
                <Bar
                  dataKey="moneyOut"
                  fill="url(#moneyOutGradient)"
                  radius={[4, 4, 0, 0]}
                  maxBarSize={22}
                />
              )}
            </BarChart>
          ) : chartType === "line" ? (
            <LineChart data={chartData}>
              {showGrid && (
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke={gridColor}
                  vertical={true}
                />
              )}
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{ fill: axisColor, fontSize: 12 }}
                dy={10}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: axisColor, fontSize: 10 }}
                tickFormatter={(value) => `$${value / 1000}k`}
                width={50}
              />
              <Tooltip
                content={<CustomTooltip />}
                cursor={{ stroke: "#d4d4d8" }}
              />
              {showMoneyIn && (
                <Line
                  type={smoothCurve ? "monotone" : "linear"}
                  dataKey="moneyIn"
                  stroke="#2d9f75"
                  strokeWidth={2}
                  dot={false}
                  activeDot={{
                    r: 6,
                    fill: "#2d9f75",
                    stroke: "white",
                    strokeWidth: 2,
                  }}
                />
              )}
              {showMoneyOut && (
                <Line
                  type={smoothCurve ? "monotone" : "linear"}
                  dataKey="moneyOut"
                  stroke={moneyOutColor}
                  strokeWidth={2}
                  dot={false}
                  activeDot={{
                    r: 6,
                    fill: moneyOutColor,
                    stroke: "white",
                    strokeWidth: 2,
                  }}
                />
              )}
            </LineChart>
          ) : (
            <AreaChart data={chartData}>
              <defs>
                <linearGradient
                  id="moneyInAreaGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="0%" stopColor="#2d9f75" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="#2d9f75" stopOpacity={0.05} />
                </linearGradient>
                <linearGradient
                  id="moneyOutAreaGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="0%"
                    stopColor={moneyOutColor}
                    stopOpacity={0.3}
                  />
                  <stop
                    offset="100%"
                    stopColor={moneyOutColor}
                    stopOpacity={0.05}
                  />
                </linearGradient>
              </defs>
              {showGrid && (
                <CartesianGrid
                  strokeDasharray="0"
                  stroke={gridColor}
                  vertical={false}
                />
              )}
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{ fill: axisColor, fontSize: 12 }}
                dy={10}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: axisColor, fontSize: 10 }}
                tickFormatter={(value) => `$${value / 1000}k`}
                width={50}
              />
              <Tooltip
                content={<CustomTooltip />}
                cursor={{ stroke: "#d4d4d8" }}
              />
              {showMoneyIn && (
                <Area
                  type={smoothCurve ? "monotone" : "linear"}
                  dataKey="moneyIn"
                  stroke="#2d9f75"
                  strokeWidth={2}
                  fill="url(#moneyInAreaGradient)"
                />
              )}
              {showMoneyOut && (
                <Area
                  type={smoothCurve ? "monotone" : "linear"}
                  dataKey="moneyOut"
                  stroke={moneyOutColor}
                  strokeWidth={2}
                  fill="url(#moneyOutAreaGradient)"
                />
              )}
            </AreaChart>
          )}
        </ResponsiveContainer>
      </div>
    </div>
  )
}
