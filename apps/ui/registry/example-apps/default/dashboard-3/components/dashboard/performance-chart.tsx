"use client";

import { useState } from "react";
import { Button } from "@loveui/ui/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "../ui/dropdown-menu";
import { HugeiconsIcon } from "@hugeicons/react";
import { MoreVerticalIcon } from "@hugeicons/core-free-icons";
import {
  performanceScore,
  performanceChange,
  performanceChartData,
} from "../../mock-data/dashboard";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@loveui/ui/ui/chart";
import {
  Bar,
  BarChart,
  Line,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Cell,
} from "recharts";

type ChartType = "bar" | "line";
type Period = "7d" | "30d";

const barColors = [
  "var(--muted-foreground)",
  "var(--muted-foreground)",
  "var(--foreground)",
  "var(--muted-foreground)",
  "var(--muted-foreground)",
  "var(--muted-foreground)",
];

const chartConfig = {
  value: {
    label: "Performance",
  },
};

export function PerformanceChart() {
  const [chartType, setChartType] = useState<ChartType>("bar");
  const [period, setPeriod] = useState<Period>("7d");
  const [showGrid, setShowGrid] = useState(true);
  const [smoothCurve, setSmoothCurve] = useState(true);

  const resetToDefault = () => {
    setChartType("bar");
    setPeriod("7d");
    setShowGrid(true);
    setSmoothCurve(true);
  };

  // Pour l'instant, on garde les mêmes données quel que soit period
  const data = performanceChartData;

  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-4 py-3 border-b">
        <h3 className="font-medium text-base">Performance</h3>
        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <Button variant="ghost" size="icon" className="size-8">
                <HugeiconsIcon icon={MoreVerticalIcon} className="size-4" />
              </Button>
            }
          />
          <DropdownMenuContent align="end" className="w-52">
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>Chart Type</DropdownMenuSubTrigger>
              <DropdownMenuSubContent>
                <DropdownMenuItem onClick={() => setChartType("bar")}>
                  Bar Chart {chartType === "bar" && "✓"}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setChartType("line")}>
                  Line Chart {chartType === "line" && "✓"}
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>Time Period</DropdownMenuSubTrigger>
              <DropdownMenuSubContent>
                <DropdownMenuItem onClick={() => setPeriod("7d")}>
                  Last 7 days {period === "7d" && "✓"}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setPeriod("30d")}>
                  Last 30 days {period === "30d" && "✓"}
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem
              checked={showGrid}
              onCheckedChange={(value) => setShowGrid(!!value)}
            >
              Show Grid
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={smoothCurve}
              onCheckedChange={(value) => setSmoothCurve(!!value)}
              disabled={chartType === "bar"}
            >
              Smooth Curve
            </DropdownMenuCheckboxItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={resetToDefault}>
              Reset to Default
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="p-4">
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-3xl font-semibold">{performanceScore}%</span>
          <span className="text-sm text-muted-foreground">
            +{performanceChange}% vs last Week
          </span>
        </div>
        <ChartContainer config={chartConfig} className="h-[175px] w-full">
          {chartType === "bar" ? (
            <BarChart
              data={data}
              margin={{ top: 8, right: 8, left: 8, bottom: 0 }}
            >
              {showGrid && (
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="var(--border)"
                  vertical={false}
                />
              )}
              <XAxis
                dataKey="day"
                tickLine={false}
                axisLine={false}
                tick={{ fontSize: 11 }}
              />
              <YAxis hide domain={[0, 100]} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="value" radius={[4, 4, 0, 0]} strokeWidth={0}>
                {data.map((entry, index) => (
                  <Cell key={entry.day} fill={barColors[index]} />
                ))}
              </Bar>
            </BarChart>
          ) : (
            <LineChart
              data={data}
              margin={{ top: 8, right: 8, left: 8, bottom: 0 }}
            >
              {showGrid && (
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="var(--border)"
                  vertical={false}
                />
              )}
              <XAxis
                dataKey="day"
                tickLine={false}
                axisLine={false}
                tick={{ fontSize: 11 }}
              />
              <YAxis hide domain={[0, 100]} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Line
                type={smoothCurve ? "monotone" : "linear"}
                dataKey="value"
                stroke="var(--foreground)"
                strokeWidth={2}
                dot={false}
                activeDot={{
                  r: 6,
                  fill: "var(--foreground)",
                  stroke: "var(--card)",
                  strokeWidth: 2,
                }}
              />
            </LineChart>
          )}
        </ChartContainer>
      </div>
    </div>
  );
}

