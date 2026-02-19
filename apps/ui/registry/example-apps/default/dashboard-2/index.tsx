/**
 * Wrapper export for embedding the dashboard in the docs app
 */
"use client"

import { DashboardContent } from "./components/dashboard/content"
import { DashboardHeader } from "./components/dashboard/header"
import { DashboardSidebar } from "./components/dashboard/sidebar"
import { SidebarProvider } from "./components/ui/sidebar"

export default function Dashboard2Wrapper() {
  return (
    <SidebarProvider className="bg-sidebar">
      <DashboardSidebar />
      <div className="h-full min-h-0 w-full overflow-hidden lg:px-2 lg:pb-2">
        <div className="bg-container flex h-full min-h-0 w-full flex-col items-center justify-start overflow-hidden bg-background lg:rounded-md lg:border">
          <DashboardHeader />
          <DashboardContent />
        </div>
      </div>
    </SidebarProvider>
  )
}
