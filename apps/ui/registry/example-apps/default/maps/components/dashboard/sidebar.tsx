"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BedIcon,
  Building01Icon,
  Clock01Icon,
  Coffee01Icon,
  DrinkIcon,
  Dumbbell01Icon,
  FavouriteIcon,
  Location01Icon,
  Logout01Icon,
  Restaurant01Icon,
  Settings01Icon,
  ShoppingBag01Icon,
  Tree01Icon,
  UnfoldMoreIcon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { Button } from "@loveui/ui/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@loveui/ui/ui/menu"

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

import { categories } from "../../mock-data/locations"
import { useMapsStore } from "../../store/maps-store"

const navItems = [
  { id: "all", title: "Explore Feed", icon: Location01Icon, href: "/" },
  { id: "favorites", title: "Saved", icon: FavouriteIcon, href: "/favorites" },
  { id: "recents", title: "Check-ins", icon: Clock01Icon, href: "/recents" },
]

const iconMap: Record<string, typeof Location01Icon> = {
  utensils: Restaurant01Icon,
  coffee: Coffee01Icon,
  wine: DrinkIcon,
  trees: Tree01Icon,
  landmark: Building01Icon,
  "shopping-bag": ShoppingBag01Icon,
  bed: BedIcon,
  dumbbell: Dumbbell01Icon,
}

export function LocationsSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname()
  const {
    locations,
    selectedCategory,
    setSelectedCategory,
    getRecentLocations,
  } = useMapsStore()

  const favoriteCount = locations.filter((l) => l.isFavorite).length
  const recentCount = getRecentLocations().length

  const getCategoryCount = (categoryId: string) => {
    if (categoryId === "all") return locations.length
    return locations.filter((l) => l.categoryId === categoryId).length
  }

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader className="px-2.5 py-3">
        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <button className="-m-1 flex w-full shrink-0 items-center gap-2.5 rounded-md p-1 transition-colors hover:bg-sidebar-accent">
                <div className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-foreground text-background">
                  <HugeiconsIcon icon={Location01Icon} className="size-4" />
                </div>
                <div className="flex items-center gap-1 group-data-[collapsible=icon]:hidden">
                  <span className="text-sm font-medium">
                    LoveUI - Social Pulse
                  </span>
                  <HugeiconsIcon
                    icon={UnfoldMoreIcon}
                    className="size-3 text-muted-foreground"
                  />
                </div>
              </button>
            }
          />
          <DropdownMenuContent align="start" className="w-56">
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <HugeiconsIcon icon={Settings01Icon} className="size-4" />
                <span>Settings</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem className="text-destructive focus:text-destructive">
                <HugeiconsIcon icon={Logout01Icon} className="size-4" />
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
                if (item.id === "recents") badge = recentCount
                if (item.id === "all") badge = locations.length

                return (
                  <SidebarMenuItem key={item.id}>
                    <SidebarMenuButton
                      render={<Link href={item.href} />}
                      isActive={isActive}
                      className="h-8"
                    >
                      <HugeiconsIcon icon={item.icon} className="size-4" />
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
              Vibes
            </span>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  isActive={selectedCategory === "all"}
                  onClick={() => setSelectedCategory("all")}
                  className="h-7"
                >
                  <HugeiconsIcon icon={Location01Icon} className="size-3.5" />
                  <span className="text-sm">All spots</span>
                </SidebarMenuButton>
                <SidebarMenuBadge>{getCategoryCount("all")}</SidebarMenuBadge>
              </SidebarMenuItem>
              {categories.map((category) => {
                const Icon = iconMap[category.icon] || Location01Icon
                const count = getCategoryCount(category.id)

                return (
                  <SidebarMenuItem key={category.id}>
                    <SidebarMenuButton
                      isActive={selectedCategory === category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className="h-7"
                    >
                      <HugeiconsIcon
                        icon={Icon}
                        className="size-3.5"
                        style={{ color: category.color }}
                      />
                      <span className="text-sm">{category.name}</span>
                    </SidebarMenuButton>
                    {count > 0 && <SidebarMenuBadge>{count}</SidebarMenuBadge>}
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="px-2.5 pb-3">
        <div className="space-y-3 group-data-[collapsible=icon]:hidden">
          <div className="text-center text-[11px] text-muted-foreground">
            Map powered by{" "}
            <Link
              href="https://mapcn.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline transition-colors hover:text-foreground"
            >
              mapcn
            </Link>{" "}
            by{" "}
            <Link
              href="https://x.com/sainianmol16"
              target="_blank"
              rel="noopener noreferrer"
              className="underline transition-colors hover:text-foreground"
            >
              @sainianmol16
            </Link>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
