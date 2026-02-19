import { SidebarProvider } from "@/components/ui/sidebar"

import { CalendarControls } from "../components/calendar/calendar-controls"
import { CalendarHeader } from "../components/calendar/calendar-header"
import { CalendarSidebar } from "../components/calendar/calendar-sidebar"
import { CalendarView } from "../components/calendar/calendar-view"

export default function Home() {
  return (
    <SidebarProvider className="bg-sidebar">
      <CalendarSidebar />
      <div className="h-svh w-full overflow-hidden lg:p-2">
        <div className="bg-container flex h-full w-full flex-col items-center justify-start overflow-hidden bg-background lg:rounded-md lg:border">
          <div className="w-full">
            <CalendarHeader />
            <CalendarControls />
          </div>
          <div className="w-full flex-1 overflow-hidden">
            <CalendarView />
          </div>
        </div>
      </div>
    </SidebarProvider>
  )
}
