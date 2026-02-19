"use client"

import { storageData } from "../../mock-data/files"

export function StorageOverview() {
  const usedPercentage = (storageData.used / storageData.total) * 100

  return (
    <div className="rounded-xl border bg-card p-4">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-sm font-medium">Storage Overview</h3>
        <button className="text-xs font-medium text-violet-500 transition-colors hover:text-violet-600">
          Upgrade
        </button>
      </div>

      <div className="relative mb-3 h-3 overflow-hidden rounded-full bg-muted">
        <div className="absolute inset-0 flex overflow-hidden rounded-full">
          {storageData.breakdown.map((item, index) => {
            const width = (item.size / storageData.used) * usedPercentage
            const isFirst = index === 0
            const isLast = index === storageData.breakdown.length - 1
            return (
              <div
                key={item.type}
                className={`h-full ${isFirst ? "rounded-l-full" : ""} ${isLast ? "rounded-r-full" : ""}`}
                style={{
                  width: `${width}%`,
                  backgroundColor: item.color,
                }}
              />
            )
          })}
        </div>
      </div>

      <div className="mb-4 flex items-center justify-between text-sm">
        <span className="text-muted-foreground">
          {storageData.used} GB of {storageData.total} GB used
        </span>
        <span className="font-medium">{usedPercentage.toFixed(0)}%</span>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {storageData.breakdown.map((item) => (
          <div
            key={item.type}
            className="flex items-center gap-2 rounded-lg bg-muted/50 p-2"
          >
            <div
              className="size-2.5 shrink-0 rounded-full"
              style={{ backgroundColor: item.color }}
            />
            <span className="truncate text-xs text-muted-foreground">
              {item.type}
            </span>
            <span className="ml-auto text-xs font-medium">{item.size} GB</span>
          </div>
        ))}
      </div>
    </div>
  )
}
