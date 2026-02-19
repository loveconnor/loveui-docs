"use client"

import { ListingsPanel } from "../../../components/dashboard/listings-panel"
import { MapControls } from "../../../components/dashboard/map-controls"
import { MapView } from "../../../components/dashboard/map-view"

export default function FavoritesPage() {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <MapView />
      <ListingsPanel mode="favorites" />
      <MapControls />
    </div>
  )
}
