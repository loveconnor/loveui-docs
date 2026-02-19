"use client"

import {
  IconFiles,
  IconFolder,
  IconGitFork,
  IconLayoutDashboard,
  IconLifebuoy,
  IconMail,
  IconPlugConnected,
  IconShield,
  IconSparkles,
  IconWaveSine,
} from "@tabler/icons-react"

import { Avatar, AvatarFallback, AvatarImage } from "@loveui/ui/ui/avatar"
import { Button } from "@loveui/ui/ui/button"

import { cn } from "../../lib/utils"

interface EmailsVerticalSidebarMobileProps {
  onItemClick?: () => void
}

export function EmailsVerticalSidebarMobile({
  onItemClick,
}: EmailsVerticalSidebarMobileProps = {}) {
  const topItems = [
    { icon: IconSparkles, label: "Automation", active: false },
    { icon: IconLayoutDashboard, label: "Status", active: false },
    { icon: IconMail, label: "Active Alerts", active: true },
    { icon: IconFolder, label: "Runbooks", active: false },
    { icon: IconWaveSine, label: "Escalated", active: false },
    { icon: IconGitFork, label: "Low Priority", active: false },
    { icon: IconFiles, label: "Resolved", active: false },
  ]

  const bottomItems = [
    { icon: IconShield, label: "Security" },
    { icon: IconPlugConnected, label: "Integrations" },
    { icon: IconLifebuoy, label: "Support" },
  ]

  return (
    <div className="flex h-screen w-full flex-col items-start gap-4 border-r border-border bg-background px-3 py-4">
      <div className="flex items-center gap-2">
        <Button
          variant="default"
          size="icon-sm"
          className="relative size-9 overflow-hidden rounded-lg bg-linear-to-br from-white via-purple-200 to-blue-200 hover:opacity-90"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(205,175,250,1),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(129,169,248,1),transparent_50%),radial-gradient(ellipse_at_top_left,rgba(247,203,191,1),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(164,252,245,1),transparent_50%)]" />
          <svg className="relative size-4" viewBox="0 0 16 16" fill="none">
            <path
              d="M8 2L2 8L8 14"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 2L14 8L8 14"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Button>
        <div className="flex flex-col justify-center">
          <span className="text-sm font-semibold text-foreground">
            OpsBridge
          </span>
          <span className="text-xs text-muted-foreground">incident center</span>
        </div>
      </div>

      <div className="flex w-full flex-col gap-1">
        {topItems.map((item) => (
          <Button
            key={item.label}
            variant="ghost"
            size="sm"
            onClick={onItemClick}
            className={cn(
              "w-full justify-start gap-2 px-3",
              item.active && "bg-muted text-foreground hover:bg-muted"
            )}
          >
            <item.icon className="size-4 shrink-0" stroke={1.5} />
            <span className="text-sm">{item.label}</span>
          </Button>
        ))}
      </div>

      <div className="flex-1" />

      <div className="flex w-full flex-col gap-1">
        {bottomItems.map((item) => (
          <Button
            key={item.label}
            variant="ghost"
            size="sm"
            onClick={onItemClick}
            className="w-full justify-start gap-2 px-3 text-muted-foreground"
          >
            <item.icon className="size-4 shrink-0" stroke={1.5} />
            <span className="text-sm">{item.label}</span>
          </Button>
        ))}
      </div>

      <Button
        variant="ghost"
        className="h-auto w-full justify-start gap-2 px-3 py-2"
      >
        <Avatar className="size-8 shrink-0 rounded-lg">
          <AvatarImage src="https://api.dicebear.com/9.x/glass/svg?seed=User" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
        <div className="flex flex-col items-start text-left">
          <span className="text-xs font-medium text-foreground">Ava Patel</span>
          <span className="text-[10px] text-muted-foreground">
            ava.patel@opsbridge.io
          </span>
        </div>
      </Button>
    </div>
  )
}
