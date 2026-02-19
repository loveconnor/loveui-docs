"use client"

import { useEffect, useRef, useState } from "react"

import { Sheet, SheetContent } from "@loveui/ui/ui/sheet"

import { EmailDetail } from "../components/emails/email-detail"
import { EmailList } from "../components/emails/email-list"
import { EmailsHeader } from "../components/emails/emails-header"
import { EmailsHorizontalNav } from "../components/emails/emails-horizontal-nav"
import { EmailsVerticalSidebar } from "../components/emails/emails-vertical-sidebar"
import { EmailsVerticalSidebarMobile } from "../components/emails/emails-vertical-sidebar-mobile"
import { Drawer, DrawerContent } from "../components/ui/drawer"
import { TooltipProvider } from "../components/ui/tooltip"
import { useIsMobile } from "../hooks/use-mobile"
import { useEmailsStore } from "../store/emails-store"

export default function EmailsPage() {
  const { emails, selectedEmailId, selectEmail, clearSelectedEmail } =
    useEmailsStore()
  const isMobile = useIsMobile()
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const hasInitializedRef = useRef(false)

  useEffect(() => {
    if (
      isMobile !== undefined &&
      !isMobile &&
      emails.length > 0 &&
      !selectedEmailId &&
      !hasInitializedRef.current
    ) {
      selectEmail(emails[0].id)
      hasInitializedRef.current = true
    }
  }, [emails, selectedEmailId, selectEmail, isMobile])

  const handleEmailClick = (emailId: string) => {
    if (isMobile) {
      selectEmail(emailId)
      setDrawerOpen(true)
    }
  }

  const handleDrawerClose = (open: boolean) => {
    setDrawerOpen(open)
    if (!open) {
      clearSelectedEmail()
    }
  }

  return (
    <TooltipProvider>
      <div className="flex h-screen overflow-hidden bg-background">
        <div className="hidden md:block">
          <EmailsVerticalSidebar />
        </div>

        <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
          <SheetContent
            side="left"
            className="w-[240px] border-none p-0 [&>button]:hidden"
          >
            <EmailsVerticalSidebarMobile
              onItemClick={() => setSidebarOpen(false)}
            />
          </SheetContent>
        </Sheet>

        <div className="flex flex-1 flex-col overflow-hidden">
          <EmailsHeader onMobileMenuClick={() => setSidebarOpen(true)} />

          <div className="hidden md:block">
            <EmailsHorizontalNav />
          </div>

          <div className="flex flex-1 overflow-hidden">
            <div className="w-full border-r border-border md:w-[320px]">
              <EmailList onEmailClick={handleEmailClick} />
            </div>

            <div className="hidden flex-1 md:block">
              <EmailDetail />
            </div>
          </div>
        </div>

        <Drawer open={drawerOpen} onOpenChange={handleDrawerClose}>
          <DrawerContent className="h-[90vh]">
            <div className="f-full flex-1 overflow-hidden">
              <EmailDetail />
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </TooltipProvider>
  )
}
