"use client"

import * as React from "react"
import {
  Circle,
  Layers,
  Map,
  Mountain,
  Navigation,
  Satellite,
  ZoomIn,
  ZoomOut,
} from "lucide-react"

import { Button } from "@loveui/ui/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@loveui/ui/ui/menu"
import { Tooltip, TooltipContent, TooltipTrigger } from "@loveui/ui/ui/tooltip"

import { cn } from "../../lib/utils"
import { useRentalsStore } from "../../store/rentals-store"
import { ThemeToggle } from "../theme-toggle"

const mapStyles = [
  {
    id: "default",
    name: "Default",
    icon: Circle,
    description: "Follows theme",
  },
  { id: "streets", name: "Streets", icon: Map, description: "Detailed roads" },
  {
    id: "outdoors",
    name: "Outdoors",
    icon: Mountain,
    description: "Terrain & trails",
  },
  {
    id: "satellite",
    name: "Satellite",
    icon: Satellite,
    description: "Aerial view",
  },
] as const

export function MapControls() {
  const {
    mapZoom,
    setMapZoom,
    setMapCenter,
    setUserLocation,
    mapStyle,
    setMapStyle,
  } = useRentalsStore()

  const handleZoomIn = () => {
    setMapZoom(Math.min(mapZoom + 1, 18))
  }

  const handleZoomOut = () => {
    setMapZoom(Math.max(mapZoom - 1, 3))
  }

  const handleLocate = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const location = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          }
          setUserLocation(location)
          setMapCenter(location)
          setMapZoom(15)
        },
        () => {
          alert("Unable to get your location. Please try again later.")
        },
        { enableHighAccuracy: false, timeout: 5000, maximumAge: 300000 }
      )
    } else {
      alert("Geolocation is not supported by your browser.")
    }
  }

  return (
    <div className="absolute top-4 right-4 z-20 flex flex-col gap-2">
      <div className="flex flex-col gap-2 rounded-lg border bg-background p-1 shadow-lg">
        <DropdownMenu>
          <Tooltip>
            <TooltipTrigger
              render={
                <DropdownMenuTrigger
                  render={
                    <Button variant="ghost" size="icon" className="h-9 w-9">
                      <Layers className="h-4 w-4" />
                    </Button>
                  }
                />
              }
            />
            <TooltipContent>Map style</TooltipContent>
          </Tooltip>
          <DropdownMenuContent align="end" className="w-48">
            {mapStyles.map((style) => {
              const Icon = style.icon
              return (
                <DropdownMenuItem
                  key={style.id}
                  onClick={() =>
                    setMapStyle(
                      style.id as
                        | "default"
                        | "streets"
                        | "outdoors"
                        | "satellite"
                    )
                  }
                  className={cn("gap-3", mapStyle === style.id && "bg-accent")}
                >
                  <Icon className="size-4 shrink-0" />
                  <div className="flex flex-col">
                    <span className="font-medium">{style.name}</span>
                    <span className="text-xs text-muted-foreground">
                      {style.description}
                    </span>
                  </div>
                </DropdownMenuItem>
              )
            })}
          </DropdownMenuContent>
        </DropdownMenu>
        <Tooltip>
          <TooltipTrigger
            render={
              <Button
                variant="ghost"
                size="icon"
                onClick={handleZoomIn}
                className="h-9 w-9"
              >
                <ZoomIn className="h-4 w-4" />
              </Button>
            }
          />
          <TooltipContent>Zoom in</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger
            render={
              <Button
                variant="ghost"
                size="icon"
                onClick={handleZoomOut}
                className="h-9 w-9"
              >
                <ZoomOut className="h-4 w-4" />
              </Button>
            }
          />
          <TooltipContent>Zoom out</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger
            render={
              <Button
                variant="ghost"
                size="icon"
                onClick={handleLocate}
                className="h-9 w-9"
              >
                <Navigation className="h-4 w-4" />
              </Button>
            }
          />
          <TooltipContent>Locate me</TooltipContent>
        </Tooltip>
      </div>

      <div className="flex flex-col gap-2 rounded-lg border bg-background p-1 shadow-lg">
        <ThemeToggle />
      </div>
    </div>
  )
}
