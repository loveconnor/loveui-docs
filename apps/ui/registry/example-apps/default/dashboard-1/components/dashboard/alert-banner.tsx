"use client"

import { ArrowDown01Icon, FileExportIcon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { Button } from "@loveui/ui/ui/button"

export function AlertBanner() {
  return (
    <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
      <div className="flex items-start gap-4 sm:items-center">
        <span className="text-4xl">🗒️</span>
        <p className="text-sm leading-relaxed sm:text-base">
          <span className="text-muted-foreground">You have </span>
          <span className="font-semibold">9 ICU Coverage Gaps,</span>
          <span> and </span>
          <span className="font-semibold">4 Critical Lab Escalations</span>
          <span className="text-muted-foreground"> that need action!</span>
        </p>
      </div>
      <div className="flex items-center gap-3">
        <Button variant="outline" size="sm" className="gap-2">
          <HugeiconsIcon icon={FileExportIcon} className="size-4" />
          Export
        </Button>
        <Button
          size="sm"
          className="gap-2 bg-foreground text-background hover:bg-foreground/90"
        >
          New
          <span className="h-4 w-px bg-background/20" />
          <HugeiconsIcon icon={ArrowDown01Icon} className="size-4" />
        </Button>
      </div>
    </div>
  )
}
