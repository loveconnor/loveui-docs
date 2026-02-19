"use client";

import { Button } from "@loveui/ui/ui/button";
import { Input } from "@loveui/ui/ui/input";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ThemeToggle } from "../theme-toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuGroup,
} from "@loveui/ui/ui/menu";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Search01Icon,
  Notification01Icon,
  GridViewIcon,
  Menu01Icon,
  MoreVerticalIcon,
} from "@hugeicons/core-free-icons";
import { useFilesStore } from "../../store/files-store";
import { cn } from "../../lib/utils";
import { Breadcrumb } from "./breadcrumb";
import { QuickActions } from "./quick-actions";

export function FilesHeader() {
  const { searchQuery, setSearchQuery, viewMode, setViewMode } =
    useFilesStore();

  return (
    <header className="flex items-center gap-2 sm:gap-3 px-3 sm:px-6 py-2 sm:py-3 border-b bg-card sticky top-0 z-10 w-full">
      <SidebarTrigger className="-ml-1 sm:-ml-2" />

      <div className="hidden lg:block">
        <Breadcrumb />
      </div>

      <div className="flex-1 lg:hidden">
        <Breadcrumb />
      </div>

      <div className="hidden lg:flex items-center gap-2 flex-1 justify-center">
        <QuickActions />
      </div>

      <div className="hidden md:block relative max-w-xs">
        <HugeiconsIcon
          icon={Search01Icon}
          className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground z-10 pointer-events-none"
        />
        <Input
          placeholder="Search assets..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-9 h-9 bg-card border"
        />
      </div>

      <div className="hidden sm:flex items-center gap-1 border rounded-lg p-0.5">
        <Button
          variant="ghost"
          size="icon-sm"
          onClick={() => setViewMode("grid")}
          className={cn("size-7.5", viewMode === "grid" && "bg-muted")}
        >
          <HugeiconsIcon icon={GridViewIcon} className="size-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon-sm"
          onClick={() => setViewMode("list")}
          className={cn("size-7.5", viewMode === "list" && "bg-muted")}
        >
          <HugeiconsIcon icon={Menu01Icon} className="size-4" />
        </Button>
      </div>

      <ThemeToggle />

      <DropdownMenu>
        <DropdownMenuTrigger
          render={
            <Button variant="ghost" size="icon" className="sm:hidden h-8 w-8">
              <HugeiconsIcon icon={MoreVerticalIcon} className="size-4" />
            </Button>
          }
        />
        <DropdownMenuContent className="w-40" align="end">
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <HugeiconsIcon icon={Search01Icon} className="size-4 mr-2" />
              Search
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => setViewMode(viewMode === "grid" ? "list" : "grid")}
            >
              {viewMode === "grid" ? (
                <HugeiconsIcon icon={Menu01Icon} className="size-4 mr-2" />
              ) : (
                <HugeiconsIcon icon={GridViewIcon} className="size-4 mr-2" />
              )}
              {viewMode === "grid" ? "List View" : "Grid View"}
            </DropdownMenuItem>
            <DropdownMenuItem>
              <HugeiconsIcon icon={Notification01Icon} className="size-4 mr-2" />
              Notifications
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}
