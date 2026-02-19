"use client"

import {
  Comment01Icon,
  Delete01Icon,
  Download01Icon,
  Edit01Icon,
  FolderTransferIcon,
  Share01Icon,
  Upload01Icon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { Avatar, AvatarFallback, AvatarImage } from "@loveui/ui/ui/avatar"

import { cn } from "../../lib/utils"

const activities = [
  {
    id: "1",
    user: { name: "Ava Patel", avatar: "ava", initials: "AP" },
    action: "uploaded",
    file: "Kenya_Savannah_Day03_Acam_4K.mov",
    time: "2 min ago",
    icon: Upload01Icon,
    iconColor: "text-emerald-500",
    iconBg: "bg-emerald-500/10",
  },
  {
    id: "2",
    user: { name: "Nora Singh", avatar: "nora", initials: "NS" },
    action: "shared",
    file: "Narrative_BeatBoard.pdf",
    time: "15 min ago",
    icon: Share01Icon,
    iconColor: "text-blue-500",
    iconBg: "bg-blue-500/10",
  },
  {
    id: "3",
    user: { name: "Theo Bennett", avatar: "theo", initials: "TB" },
    action: "edited",
    file: "Episode02_Edit_v14.prproj",
    time: "1 hour ago",
    icon: Edit01Icon,
    iconColor: "text-amber-500",
    iconBg: "bg-amber-500/10",
  },
  {
    id: "4",
    user: { name: "Liam Carter", avatar: "liam", initials: "LC" },
    action: "downloaded",
    file: "Festival_Submission_Package.zip",
    time: "3 hours ago",
    icon: Download01Icon,
    iconColor: "text-violet-500",
    iconBg: "bg-violet-500/10",
  },
  {
    id: "5",
    user: { name: "Maya Ortiz", avatar: "maya", initials: "MO" },
    action: "moved",
    file: "Camp_Ambience_Master.wav",
    time: "5 hours ago",
    icon: FolderTransferIcon,
    iconColor: "text-cyan-500",
    iconBg: "bg-cyan-500/10",
  },
  {
    id: "6",
    user: { name: "Ari Kim", avatar: "ari", initials: "AK" },
    action: "commented on",
    file: "Interview_Transcript_DrSafi.pdf",
    time: "Yesterday",
    icon: Comment01Icon,
    iconColor: "text-pink-500",
    iconBg: "bg-pink-500/10",
  },
  {
    id: "7",
    user: { name: "Noah Reid", avatar: "noah", initials: "NR" },
    action: "deleted",
    file: "RoughCut_Archive_2025.zip",
    time: "Yesterday",
    icon: Delete01Icon,
    iconColor: "text-red-500",
    iconBg: "bg-red-500/10",
  },
]

export function RecentActivity() {
  return (
    <div className="rounded-xl border bg-card p-4">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-sm font-medium">Recent Activity</h3>
        <button className="text-xs text-muted-foreground transition-colors hover:text-foreground">
          View all
        </button>
      </div>
      <div className="space-y-3">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start gap-3">
            <Avatar className="size-8">
              <AvatarImage
                src={`https://api.dicebear.com/9.x/glass/svg?seed=${activity.user.avatar}`}
              />
              <AvatarFallback className="text-[10px]">
                {activity.user.initials}
              </AvatarFallback>
            </Avatar>
            <div className="min-w-0 flex-1">
              <p className="text-sm">
                <span className="font-medium">{activity.user.name}</span>{" "}
                <span className="text-muted-foreground">{activity.action}</span>
              </p>
              <p className="truncate text-xs text-muted-foreground">
                {activity.file}
              </p>
            </div>
            <div className="flex shrink-0 items-center gap-2">
              <div
                className={cn(
                  "flex size-6 items-center justify-center rounded-md",
                  activity.iconBg
                )}
              >
                <HugeiconsIcon
                  icon={activity.icon}
                  className={cn("size-3", activity.iconColor)}
                />
              </div>
              <span className="text-[10px] whitespace-nowrap text-muted-foreground">
                {activity.time}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
