import { SidebarProvider } from "@/components/ui/sidebar"

import { DashboardContent } from "../components/dashboard/content"
import { DashboardHeader } from "../components/dashboard/header"
import { DashboardSidebar } from "../components/dashboard/sidebar"

export default function DashboardPage() {
  return (
    <SidebarProvider className="bg-sidebar">
      <DashboardSidebar />
      <div className="h-svh w-full overflow-hidden lg:p-2">
        <div className="bg-container flex h-full w-full flex-col items-center justify-start overflow-hidden bg-background lg:rounded-md lg:border">
          <DashboardHeader />
          <DashboardContent />
        </div>
      </div>
    </SidebarProvider>
  )
}
