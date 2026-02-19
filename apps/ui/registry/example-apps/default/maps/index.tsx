/**
 * Wrapper export for embedding the app in the docs app
 */
"use client"

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

import { MapControls } from "./components/dashboard/map-controls"
import { MapView } from "./components/dashboard/map-view"
import { MapsPanel } from "./components/dashboard/maps-panel"
import { LocationsSidebar } from "./components/dashboard/sidebar"

export default function MapsWrapper() {
  return (
    <SidebarProvider>
      <LocationsSidebar />
      <SidebarInset className="overflow-hidden">
        <div className="relative h-full w-full overflow-hidden">
          <MapView />
          <MapsPanel />
          <MapControls />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
