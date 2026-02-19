"use client"

import {
  File01Icon,
  FileAttachmentIcon,
  FolderZipIcon,
  Image01Icon,
  Video01Icon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { storageData } from "../../mock-data/files"

const iconMap = {
  Images: Image01Icon,
  Videos: Video01Icon,
  Documents: File01Icon,
  Archives: FolderZipIcon,
  Other: FileAttachmentIcon,
}

export function StorageCards() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
      {storageData.breakdown.map((item) => {
        const Icon =
          iconMap[item.type as keyof typeof iconMap] || FileAttachmentIcon
        const percentage = ((item.size / storageData.total) * 100).toFixed(0)

        return (
          <div
            key={item.type}
            className="group cursor-pointer rounded-xl border bg-card p-4 transition-colors hover:bg-accent/50"
          >
            <div
              className="mb-3 flex size-10 items-center justify-center rounded-lg"
              style={{ backgroundColor: `${item.color}15` }}
            >
              <HugeiconsIcon
                icon={Icon}
                className="size-5"
                style={{ color: item.color }}
              />
            </div>
            <p className="mb-0.5 text-sm font-medium">{item.type}</p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">
                {item.size} GB
              </span>
              <span className="text-xs text-muted-foreground">
                {percentage}%
              </span>
            </div>
          </div>
        )
      })}
    </div>
  )
}
