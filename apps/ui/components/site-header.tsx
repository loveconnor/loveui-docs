import { Separator } from "@loveui/ui/ui/separator"

import { appConfig } from "@/lib/config"
import { source } from "@/lib/source"
import { CommandMenu } from "@/components/command-menu"
import { MobileNav } from "@/components/mobile-nav"
import { DesktopNav } from "@/components/site-header/desktop-nav"
import { SiteHeaderShell } from "@/components/site-header/header"

export function SiteHeader() {
  const pageTree = source.pageTree

  return (
    <SiteHeaderShell
      mobileNav={
        <MobileNav
          tree={pageTree}
          items={appConfig.navItems}
          className="flex lg:hidden"
        />
      }
     
    >
       <DesktopNav />
      <div className="mx-2 hidden w-full flex-1 md:flex md:w-56 md:flex-none lg:w-64">
        <CommandMenu
          tree={pageTree}
          navItems={appConfig.navItems}
          className="w-full justify-between"
        />
      </div>
      <Separator orientation="vertical" className="h-5 max-md:hidden" />
    </SiteHeaderShell>
  )
}
