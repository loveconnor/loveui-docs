/**
 * Wrapper export for embedding the app in the docs app
 */
"use client"

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

import { ListingsPanel } from "./components/dashboard/listings-panel"
import { MapControls } from "./components/dashboard/map-controls"
import { MapView } from "./components/dashboard/map-view"
import { RentalsSidebar } from "./components/dashboard/sidebar"

export default function RentalsWrapper() {
  return (
    <SidebarProvider>
      <RentalsSidebar />
      <SidebarInset className="overflow-hidden">
        <div className="relative h-full w-full overflow-hidden">
          <MapView />
          <ListingsPanel />
          <MapControls />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
