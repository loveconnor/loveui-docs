"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  ChevronsUpDown,
  Heart,
  Home,
  LogOut,
  Minus,
  Plus,
  Search,
  Settings,
} from "lucide-react"

import { Button } from "@loveui/ui/ui/button"
import { Input } from "@loveui/ui/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@loveui/ui/ui/menu"
import { Separator } from "@loveui/ui/ui/separator"
import { Slider } from "@loveui/ui/ui/slider"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

import { cn } from "../../lib/utils"
import { propertyTypeLabels, type PropertyType } from "../../mock-data/listings"
import { useRentalsStore } from "../../store/rentals-store"

const navItems = [
  { id: "all", title: "All Gear", icon: Home, href: "/" },
  { id: "favorites", title: "Favorites", icon: Heart, href: "/favorites" },
]

const propertyTypes: PropertyType[] = [
  "apartment",
  "house",
  "villa",
  "studio",
  "loft",
  "cottage",
]

export function RentalsSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname()
  const {
    listings,
    searchQuery,
    setSearchQuery,
    selectedPropertyTypes,
    togglePropertyType,
    priceRange,
    setPriceRange,
    bedrooms,
    setBedrooms,
    bathrooms,
    setBathrooms,
    getFilteredListings,
    getFavoriteListings,
    resetFilters,
  } = useRentalsStore()

  const favoriteCount = listings.filter((l) => l.isFavorite).length
  const allCount = listings.length
  const filteredCount = getFilteredListings().length

  const activeFiltersCount =
    selectedPropertyTypes.length +
    (priceRange[0] !== 0 || priceRange[1] !== 500 ? 1 : 0) +
    (bedrooms !== null ? 1 : 0) +
    (bathrooms !== null ? 1 : 0)

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader className="px-2.5 py-3">
        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <button className="-m-1 flex w-full shrink-0 items-center gap-2.5 rounded-md p-1 transition-colors hover:bg-sidebar-accent">
                <div className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Home className="size-4" />
                </div>
                <div className="flex items-center gap-1 group-data-[collapsible=icon]:hidden">
                  <span className="text-sm font-medium">
                    LoveUI - Gear Market
                  </span>
                  <ChevronsUpDown className="size-3 text-muted-foreground" />
                </div>
              </button>
            }
          />
          <DropdownMenuContent align="start" className="w-56">
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Settings className="size-4" />
                <span>Settings</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem className="text-destructive focus:text-destructive">
                <LogOut className="size-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarHeader>

      <SidebarContent className="px-2.5">
        <SidebarGroup className="p-0">
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => {
                const isActive = pathname === item.href
                let badge: number | undefined
                if (item.id === "favorites") badge = favoriteCount
                if (item.id === "all") badge = allCount

                return (
                  <SidebarMenuItem key={item.id}>
                    <SidebarMenuButton
                      render={<Link href={item.href} />}
                      isActive={isActive}
                      className="h-8"
                    >
                      <item.icon className="size-4" />
                      <span className="text-sm">{item.title}</span>
                    </SidebarMenuButton>
                    {badge !== undefined && badge > 0 && (
                      <SidebarMenuBadge>{badge}</SidebarMenuBadge>
                    )}
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="mt-4 p-0">
          <SidebarGroupLabel className="h-6 px-0">
            <span className="text-[10px] font-medium tracking-wider text-muted-foreground uppercase">
              Search
            </span>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <div className="px-2 pb-2">
              <div className="relative">
                <Search className="pointer-events-none absolute top-1/2 left-2 z-10 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="h-8 pl-7 text-sm"
                />
              </div>
            </div>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="mt-4 p-0">
          <SidebarGroupLabel className="flex h-6 items-center justify-between px-0">
            <span className="text-[10px] font-medium tracking-wider text-muted-foreground uppercase">
              Filters
            </span>
            {activeFiltersCount > 0 && (
              <Button
                variant="ghost"
                size="sm"
                className="h-5 px-1.5 text-[10px]"
                onClick={resetFilters}
              >
                Clear
              </Button>
            )}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <div className="space-y-4 px-2">
              <div>
                <p className="mb-2 text-xs font-medium text-sidebar-foreground">
                  Category
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {propertyTypes.map((type) => (
                    <Button
                      key={type}
                      variant={
                        selectedPropertyTypes.includes(type)
                          ? "default"
                          : "outline"
                      }
                      size="sm"
                      onClick={() => togglePropertyType(type)}
                      className={cn(
                        "h-7 px-2 text-xs",
                        selectedPropertyTypes.includes(type) &&
                          "bg-primary text-primary-foreground"
                      )}
                    >
                      {propertyTypeLabels[type]}
                    </Button>
                  ))}
                </div>
              </div>

              <Separator />

              <div>
                <p className="mb-2 text-xs font-medium text-sidebar-foreground">
                  Daily rate
                </p>
                <div className="space-y-2">
                  <div className="px-2">
                    <Slider
                      value={[priceRange[0], priceRange[1]]}
                      onValueChange={(value) => {
                        const range = (
                          Array.isArray(value) ? value : [value, value]
                        ) as readonly number[]
                        setPriceRange([
                          range[0] ?? 0,
                          range[1] ?? range[0] ?? 0,
                        ])
                      }}
                      min={0}
                      max={500}
                      step={10}
                      className="w-full"
                    />
                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">
                        ${priceRange[0]}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        ${priceRange[1]}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <p className="mb-2 text-xs font-medium text-sidebar-foreground">
                  Inventory
                </p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-sidebar-foreground">
                      Kits
                    </span>
                    <div className="flex items-center gap-1">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6"
                        onClick={() =>
                          setBedrooms(
                            bedrooms !== null && bedrooms > 0
                              ? bedrooms - 1
                              : null
                          )
                        }
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-6 text-center text-xs">
                        {bedrooms ?? "Any"}
                      </span>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6"
                        onClick={() => setBedrooms((bedrooms ?? 0) + 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-sidebar-foreground">
                      Add-ons
                    </span>
                    <div className="flex items-center gap-1">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6"
                        onClick={() =>
                          setBathrooms(
                            bathrooms !== null && bathrooms > 0
                              ? bathrooms - 1
                              : null
                          )
                        }
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-6 text-center text-xs">
                        {bathrooms ?? "Any"}
                      </span>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6"
                        onClick={() => setBathrooms((bathrooms ?? 0) + 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
