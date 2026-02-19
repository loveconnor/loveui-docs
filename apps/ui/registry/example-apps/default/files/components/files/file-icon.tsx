"use client"

import {
  File01Icon,
  FileAttachmentIcon,
  FolderZipIcon,
  Image01Icon,
  MusicNote01Icon,
  SourceCodeIcon,
  Video01Icon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { cn } from "../../lib/utils"
import { FileType } from "../../mock-data/files"

interface FileIconProps {
  type: FileType
  className?: string
}

const iconMap = {
  image: { icon: Image01Icon, color: "text-violet-500" },
  video: { icon: Video01Icon, color: "text-pink-500" },
  document: { icon: File01Icon, color: "text-amber-500" },
  archive: { icon: FolderZipIcon, color: "text-emerald-500" },
  audio: { icon: MusicNote01Icon, color: "text-cyan-500" },
  code: { icon: SourceCodeIcon, color: "text-blue-500" },
  other: { icon: FileAttachmentIcon, color: "text-muted-foreground" },
}

export function FileIcon({ type, className }: FileIconProps) {
  const { icon, color } = iconMap[type] || iconMap.other

  return (
    <HugeiconsIcon icon={icon} className={cn("size-5", color, className)} />
  )
}
