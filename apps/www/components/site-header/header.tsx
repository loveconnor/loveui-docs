"use client"

import type { ReactNode } from "react"
import Link from "next/link"

import { ModeSwitcher } from "@loveui/ui/components/mode-switcher"
import { cn } from "@loveui/ui/lib/utils"

type SiteHeaderShellProps = {
  mobileNav?: ReactNode
  leftContent?: ReactNode
  children?: ReactNode
  className?: string
}

export function SiteHeaderShell({ mobileNav, leftContent, children, className }: SiteHeaderShellProps) {
  const gatewayOrigin = process.env.NEXT_PUBLIC_LOVEUI_URL || ""
  const homeHref = gatewayOrigin ? `${gatewayOrigin}/` : "/"
  const isExternal = !!gatewayOrigin

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full bg-sidebar/80 backdrop-blur-sm before:absolute before:inset-x-0 before:bottom-0 before:h-px before:bg-border/50",
        className
      )}
    >
      <div className="relative container flex h-(--header-height) w-full items-center justify-between gap-2 px-4 sm:px-6">
        {mobileNav}
        <div className="-mt-0.5 flex shrink-0 items-center font-heading text-2xl sm:text-[1.625em]">
          {isExternal ? (
            <a href={homeHref} aria-label="Home" className="font-bold text-foreground">
              LoveUI
            </a>
          ) : (
            <Link href={homeHref} aria-label="Home" className="font-bold text-foreground">
              LoveUI
            </Link>
          )}
        </div>
        {leftContent}
        <div className="ms-auto flex items-center gap-2 md:flex-1 md:justify-end">
          {children}
          <ModeSwitcher />
        </div>
      </div>
    </header>
  )
}
