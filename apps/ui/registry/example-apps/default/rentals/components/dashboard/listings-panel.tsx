"use client"

import * as React from "react"
import {
  ArrowUpDown,
  Check,
  DollarSign,
  Grid3x3,
  Heart,
  List,
  MapPin,
  MessageSquare,
  Search,
  Sparkles,
  Star,
  TrendingUp,
  X,
} from "lucide-react"
import { useMediaQuery } from "usehooks-ts"

import { Badge } from "@loveui/ui/ui/badge"
import { Button } from "@loveui/ui/ui/button"
import { Input } from "@loveui/ui/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@loveui/ui/ui/menu"

import { SidebarTrigger } from "@/components/ui/sidebar"

import { cn } from "../../lib/utils"
import { propertyTypeLabels, type Listing } from "../../mock-data/listings"
import { useRentalsStore } from "../../store/rentals-store"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel"

type PanelMode = "all" | "favorites"

interface ListingsPanelProps {
  mode?: PanelMode
}

export function ListingsPanel({ mode = "all" }: ListingsPanelProps) {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null)
  const {
    selectedListingId,
    searchQuery,
    sortBy,
    selectListing,
    toggleFavorite,
    setSearchQuery,
    setSortBy,
    getFilteredListings,
    getFavoriteListings,
    setMapCenter,
    setMapZoom,
    setUserLocation,
  } = useRentalsStore()

  const isDesktop = useMediaQuery("(min-width: 640px)")
  const [isPanelVisible, setIsPanelVisible] = React.useState(true)
  const [viewMode, setViewMode] = React.useState<"grid" | "list">("grid")

  React.useEffect(() => {
    if (isDesktop && !isPanelVisible) {
      setIsPanelVisible(true)
    }
  }, [isDesktop, isPanelVisible])

  const getListings = () => {
    switch (mode) {
      case "favorites":
        return getFavoriteListings()
      default:
        return getFilteredListings()
    }
  }

  const listings = getListings()

  React.useEffect(() => {
    if (selectedListingId && scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ top: 0, behavior: "smooth" })
    }
  }, [selectedListingId])

  const handleListingClick = (listing: Listing) => {
    if (selectedListingId === listing.id) {
      selectListing(null)
    } else {
      selectListing(listing.id)
      setMapCenter(listing.coordinates)
      setMapZoom(14)
    }
  }

  if (!isPanelVisible) {
    return (
      <Button
        variant="outline"
        size="icon"
        className="absolute top-4 left-4 z-20 size-10 bg-background shadow-xl sm:hidden"
        onClick={() => setIsPanelVisible(true)}
      >
        <Search className="size-5" />
      </Button>
    )
  }

  return (
    <div className="absolute top-4 bottom-4 left-4 z-20 flex w-80 flex-col overflow-hidden rounded-xl border bg-background shadow-xl sm:w-[420px]">
      <div className="flex items-center justify-between border-b p-3">
        <div>
          <h2 className="text-base font-semibold">
            {mode === "favorites" ? "Favorites" : "All Gear"}
          </h2>
          <p className="text-xs text-muted-foreground">
            {listings.length} {listings.length === 1 ? "listing" : "listings"}
          </p>
        </div>
        <div className="flex items-center gap-1">
          <SidebarTrigger className="size-7" />
          <Button
            variant="ghost"
            size="icon"
            className="size-7 sm:hidden"
            onClick={() => setIsPanelVisible(false)}
          >
            <X className="size-4" />
          </Button>
        </div>
      </div>

      <div className="border-b p-2">
        <div className="flex items-center gap-2">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute top-1/2 left-2.5 z-10 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search gear..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={cn("h-9 pl-8", searchQuery && "pr-8")}
            />
            {searchQuery && (
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-1/2 right-1 size-7 -translate-y-1/2"
                onClick={() => setSearchQuery("")}
              >
                <X className="size-3.5" />
              </Button>
            )}
          </div>
          <div className="flex items-center gap-1 rounded-lg border p-0.5">
            <Button
              variant={viewMode === "list" ? "default" : "ghost"}
              size="icon"
              className="h-7 w-7"
              onClick={() => setViewMode("list")}
            >
              <List className="h-3.5 w-3.5" />
            </Button>
            <Button
              variant={viewMode === "grid" ? "default" : "ghost"}
              size="icon"
              className="h-7 w-7"
              onClick={() => setViewMode("grid")}
            >
              <Grid3x3 className="h-3.5 w-3.5" />
            </Button>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger
              render={
                <Button
                  variant="outline"
                  size="icon"
                  className="size-9 shrink-0"
                >
                  <ArrowUpDown className="size-4" />
                </Button>
              }
            />
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuGroup>
                <DropdownMenuItem
                  onClick={() => setSortBy("price-low")}
                  className="gap-2"
                >
                  <DollarSign className="size-4" />
                  <span className="flex-1">Price: Low to High</span>
                  {sortBy === "price-low" && <Check className="size-4" />}
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setSortBy("price-high")}
                  className="gap-2"
                >
                  <TrendingUp className="size-4" />
                  <span className="flex-1">Price: High to Low</span>
                  {sortBy === "price-high" && <Check className="size-4" />}
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setSortBy("rating")}
                  className="gap-2"
                >
                  <Star className="size-4" />
                  <span className="flex-1">Best rated</span>
                  {sortBy === "rating" && <Check className="size-4" />}
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setSortBy("newest")}
                  className="gap-2"
                >
                  <Sparkles className="size-4" />
                  <span className="flex-1">Newest first</span>
                  {sortBy === "newest" && <Check className="size-4" />}
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setSortBy("reviews")}
                  className="gap-2"
                >
                  <MessageSquare className="size-4" />
                  <span className="flex-1">Most reviews</span>
                  {sortBy === "reviews" && <Check className="size-4" />}
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    if (!navigator.geolocation) {
                      alert("Geolocation is not supported by your browser.")
                      return
                    }
                    navigator.geolocation.getCurrentPosition(
                      (position) => {
                        const location = {
                          lat: position.coords.latitude,
                          lng: position.coords.longitude,
                        }
                        setUserLocation(location)
                        setSortBy("nearest")
                      },
                      () => {
                        alert(
                          "Unable to get your location. Please try again later."
                        )
                      },
                      {
                        enableHighAccuracy: false,
                        timeout: 5000,
                        maximumAge: 300000,
                      }
                    )
                  }}
                  className="gap-2"
                >
                  <MapPin className="size-4" />
                  <span className="flex-1">Nearest to me</span>
                  {sortBy === "nearest" && <Check className="size-4" />}
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div ref={scrollContainerRef} className="flex-1 overflow-y-auto">
        {listings.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <Search className="mb-2 size-8 text-muted-foreground" />
            <p className="text-sm font-medium">No products found</p>
            <p className="mt-1 text-xs text-muted-foreground">
              Try adjusting your search or filters
            </p>
          </div>
        ) : viewMode === "grid" ? (
          <div className="grid grid-cols-1 gap-3 p-2">
            {listings.map((listing) => {
              const isSelected = selectedListingId === listing.id

              return (
                <div
                  key={listing.id}
                  onClick={() => handleListingClick(listing)}
                  className={cn(
                    "group cursor-pointer overflow-hidden rounded-xl border bg-card transition-all hover:shadow-lg",
                    isSelected &&
                      "border-primary shadow-lg ring-2 ring-primary/20"
                  )}
                >
                  <div className="relative aspect-4/3 overflow-hidden">
                    <Carousel className="h-full w-full">
                      <CarouselContent className="h-full">
                        {listing.images.map((image, imageIndex) => (
                          <CarouselItem key={imageIndex} className="h-full">
                            <img
                              src={image}
                              alt={`${listing.title} - Image ${imageIndex + 1}`}
                              className="h-full w-full object-cover"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement
                                target.src =
                                  "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&h=600&fit=crop"
                              }}
                            />
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="left-2 h-8 w-8 bg-white/90 opacity-0! transition-opacity group-hover:opacity-100! hover:bg-white" />
                      <CarouselNext className="right-2 h-8 w-8 bg-white/90 opacity-0! transition-opacity group-hover:opacity-100! hover:bg-white" />
                    </Carousel>
                    <div className="absolute top-2 right-2 z-10">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background"
                        onClick={(e) => {
                          e.stopPropagation()
                          toggleFavorite(listing.id)
                        }}
                      >
                        <Heart
                          className={cn(
                            "h-4 w-4 transition-colors",
                            listing.isFavorite
                              ? "fill-destructive text-destructive"
                              : "text-foreground"
                          )}
                        />
                      </Button>
                    </div>
                    {listing.isNew && (
                      <div className="absolute top-2 left-2 z-10">
                        <Badge
                          variant="default"
                          className="bg-primary text-xs text-primary-foreground"
                        >
                          New
                        </Badge>
                      </div>
                    )}
                    {listing.instantBook && (
                      <div className="absolute bottom-2 left-2 z-10">
                        <Badge
                          variant="secondary"
                          className="bg-background/80 text-xs backdrop-blur-sm"
                        >
                          Fast Checkout
                        </Badge>
                      </div>
                    )}
                  </div>
                  <div className="p-3">
                    <div className="mb-1 flex items-start justify-between gap-2">
                      <div className="min-w-0 flex-1">
                        <h3 className="mb-1 truncate text-sm font-semibold">
                          {listing.title}
                        </h3>
                        <div className="mb-1 flex items-center gap-1 text-xs text-muted-foreground">
                          <MapPin className="h-3 w-3" />
                          <span className="truncate">
                            {listing.city}, {listing.country}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="mb-2 flex items-center gap-3 text-xs">
                      <div className="flex items-center gap-1">
                        <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">
                          {listing.rating.toFixed(1)}
                        </span>
                        <span className="text-muted-foreground">
                          ({listing.reviewCount})
                        </span>
                      </div>
                      <span className="text-muted-foreground">•</span>
                      <span className="text-muted-foreground">
                        {propertyTypeLabels[listing.propertyType]}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-base font-semibold">
                          ${listing.pricePerNight}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {" "}
                          / day
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        {listing.bedrooms > 0 && (
                          <span>
                            {listing.bedrooms} kit
                            {listing.bedrooms > 1 ? "s" : ""}
                          </span>
                        )}
                        {listing.bathrooms > 0 && (
                          <span>
                            • {listing.bathrooms} add-on
                            {listing.bathrooms > 1 ? "s" : ""}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          <div className="space-y-3 p-2">
            {listings.map((listing) => {
              const isSelected = selectedListingId === listing.id

              return (
                <div
                  key={listing.id}
                  onClick={() => handleListingClick(listing)}
                  className={cn(
                    "group cursor-pointer overflow-hidden rounded-xl border bg-card transition-all hover:shadow-lg",
                    isSelected &&
                      "border-primary shadow-lg ring-2 ring-primary/20",
                    "flex flex-col sm:flex-row"
                  )}
                >
                  <div className="relative h-48 w-full flex-shrink-0 overflow-hidden sm:h-32 sm:w-32 md:h-40 md:w-40">
                    <img
                      src={listing.images[0]}
                      alt={listing.title}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.src =
                          "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&h=600&fit=crop"
                      }}
                    />
                    <div className="absolute top-2 right-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-7 w-7 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background sm:h-6 sm:w-6"
                        onClick={(e) => {
                          e.stopPropagation()
                          toggleFavorite(listing.id)
                        }}
                      >
                        <Heart
                          className={cn(
                            "h-3.5 w-3.5 transition-colors sm:h-3 sm:w-3",
                            listing.isFavorite
                              ? "fill-destructive text-destructive"
                              : "text-foreground"
                          )}
                        />
                      </Button>
                    </div>
                    {listing.isNew && (
                      <div className="absolute top-2 left-2">
                        <Badge
                          variant="default"
                          className="bg-primary px-1.5 py-0.5 text-[10px] text-primary-foreground"
                        >
                          New
                        </Badge>
                      </div>
                    )}
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col justify-between p-3 sm:p-2.5">
                    <div className="flex-1">
                      <div className="mb-1.5 sm:mb-1">
                        <h3 className="mb-1 line-clamp-2 text-sm font-semibold sm:line-clamp-1 sm:text-xs">
                          {listing.title}
                        </h3>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <MapPin className="h-3 w-3 flex-shrink-0" />
                          <span className="truncate">
                            {listing.city}, {listing.country}
                          </span>
                        </div>
                      </div>
                      <div className="mb-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs">
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          <span className="font-medium">
                            {listing.rating.toFixed(1)}
                          </span>
                          <span className="text-muted-foreground">
                            ({listing.reviewCount})
                          </span>
                        </div>
                        <span className="hidden text-muted-foreground sm:inline">
                          •
                        </span>
                        <span className="text-muted-foreground">
                          {propertyTypeLabels[listing.propertyType]}
                        </span>
                        {listing.instantBook && (
                          <>
                            <span className="hidden text-muted-foreground sm:inline">
                              •
                            </span>
                            <Badge
                              variant="secondary"
                              className="px-1.5 py-0 text-[10px]"
                            >
                              Fast
                            </Badge>
                          </>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-2 border-t pt-2 sm:border-t-0 sm:pt-0">
                      <div className="flex-shrink-0">
                        <span className="text-base font-semibold sm:text-sm">
                          ${listing.pricePerNight}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {" "}
                          / day
                        </span>
                      </div>
                      <div className="flex flex-shrink-0 items-center gap-1.5 text-xs text-muted-foreground sm:gap-2">
                        {listing.bedrooms > 0 && (
                          <span className="whitespace-nowrap">
                            {listing.bedrooms} kit
                            {listing.bedrooms > 1 ? "s" : ""}
                          </span>
                        )}
                        {listing.bathrooms > 0 && (
                          <>
                            <span className="hidden sm:inline">•</span>
                            <span className="whitespace-nowrap">
                              {listing.bathrooms} add-on
                              {listing.bathrooms > 1 ? "s" : ""}
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
