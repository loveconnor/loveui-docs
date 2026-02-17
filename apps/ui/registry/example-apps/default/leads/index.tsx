/**
 * Wrapper export for embedding the app in the docs app
 */
"use client"

import { DashboardContent } from "./components/dashboard/content"
import { DashboardHeader } from "./components/dashboard/header"
import { DashboardSidebar } from "./components/dashboard/sidebar"
import { SidebarProvider } from "@/components/ui/sidebar"

export default function LeadsWrapper() {
  return (
      <SidebarProvider className="bg-sidebar">
        <DashboardSidebar />
        <div className="h-full min-h-0 w-full overflow-hidden lg:p-2">
          <div className="bg-container bg-background flex h-full min-h-0 w-full flex-col items-center justify-start overflow-hidden lg:rounded-md lg:border">
            <DashboardHeader />
            <DashboardContent />
          </div>
        </div>
      </SidebarProvider>
  )
}
