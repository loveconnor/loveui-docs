"use client"

import {
  FileImportIcon,
  FolderAddIcon,
  Link01Icon,
  Upload01Icon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { Button } from "@loveui/ui/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "@loveui/ui/ui/tooltip"

const actions = [
  { icon: Upload01Icon, label: "Upload Clip", shortcut: "⌘U" },
  { icon: FolderAddIcon, label: "New Collection", shortcut: "⌘N" },
  { icon: Link01Icon, label: "Share Review Link", shortcut: "⌘L" },
  { icon: FileImportIcon, label: "Import Dailies", shortcut: "⌘I" },
]

export function QuickActions() {
  return (
    <div className="flex items-center gap-1 rounded-xl border bg-card p-1">
      {actions.map((action) => (
        <Tooltip key={action.label}>
          <TooltipTrigger
            render={
              <Button variant="ghost" size="icon" className="size-9 rounded-lg">
                <HugeiconsIcon icon={action.icon} className="size-4" />
              </Button>
            }
          />
          <TooltipContent side="bottom" className="flex items-center gap-2">
            <span>{action.label}</span>
            <kbd className="rounded border border-muted-foreground/50 px-1.5 py-0.5 text-[10px]">
              {action.shortcut}
            </kbd>
          </TooltipContent>
        </Tooltip>
      ))}
    </div>
  )
}
