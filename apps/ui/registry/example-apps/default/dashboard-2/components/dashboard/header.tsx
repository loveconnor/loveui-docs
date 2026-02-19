"use client"

import {
  Add01Icon,
  DashboardSquare01Icon,
  FileAddIcon,
  Link01Icon,
  Mail01Icon,
  Share01Icon,
  SparklesIcon,
  UserAdd01Icon,
  UserGroupIcon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { Avatar, AvatarFallback, AvatarImage } from "@loveui/ui/ui/avatar"
import { Button } from "@loveui/ui/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@loveui/ui/ui/menu"

import { ThemeToggle } from "../theme-toggle"
import { SidebarTrigger } from "../ui/sidebar"

export function DashboardHeader() {
  return (
    <header className="sticky top-0 z-10 flex w-full items-center justify-between gap-4 border-b bg-card px-4 py-3 sm:px-6">
      <div className="flex items-center gap-3">
        <SidebarTrigger className="-ml-2" />
        <div className="hidden items-center gap-2 text-muted-foreground sm:flex">
          <HugeiconsIcon icon={DashboardSquare01Icon} className="size-4" />
          <span className="text-sm font-medium">Realty Pipeline</span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <div className="hidden items-center lg:flex">
          <DropdownMenu>
            <DropdownMenuTrigger
              render={
                <button className="mr-3 flex cursor-pointer -space-x-2 transition-opacity hover:opacity-80">
                  <Avatar className="size-6 border-2 border-card">
                    <AvatarImage src="https://api.dicebear.com/9.x/glass/svg?seed=user1" />
                    <AvatarFallback>U1</AvatarFallback>
                  </Avatar>
                  <Avatar className="size-6 border-2 border-card">
                    <AvatarImage src="https://api.dicebear.com/9.x/glass/svg?seed=user2" />
                    <AvatarFallback>U2</AvatarFallback>
                  </Avatar>
                  <Avatar className="size-6 border-2 border-card">
                    <AvatarImage src="https://api.dicebear.com/9.x/glass/svg?seed=user3" />
                    <AvatarFallback>U3</AvatarFallback>
                  </Avatar>
                  <div className="flex size-6 items-center justify-center rounded-full border-2 border-card bg-muted">
                    <HugeiconsIcon icon={Add01Icon} className="size-3" />
                  </div>
                </button>
              }
            />
            <DropdownMenuContent align="end" className="w-52">
              <DropdownMenuGroup>
                <div className="px-2 py-1.5">
                  <p className="text-xs font-medium text-muted-foreground">
                    Team Members
                  </p>
                </div>
                <DropdownMenuItem>
                  <Avatar className="mr-2 size-5">
                    <AvatarImage src="https://api.dicebear.com/9.x/glass/svg?seed=user1" />
                    <AvatarFallback>U1</AvatarFallback>
                  </Avatar>
                  <span>Maya R.</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Avatar className="mr-2 size-5">
                    <AvatarImage src="https://api.dicebear.com/9.x/glass/svg?seed=user2" />
                    <AvatarFallback>U2</AvatarFallback>
                  </Avatar>
                  <span>Jordan F.</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Avatar className="mr-2 size-5">
                    <AvatarImage src="https://api.dicebear.com/9.x/glass/svg?seed=user3" />
                    <AvatarFallback>U3</AvatarFallback>
                  </Avatar>
                  <span>Evan K.</span>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <HugeiconsIcon icon={Mail01Icon} className="mr-2 size-4" />
                  <span>Invite by email</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <HugeiconsIcon icon={Link01Icon} className="mr-2 size-4" />
                  <span>Copy invite link</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <HugeiconsIcon icon={UserGroupIcon} className="mr-2 size-4" />
                  <span>Manage team</span>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="mx-2 h-5 w-px bg-border" />
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <Button
                variant="outline"
                size="sm"
                className="hidden h-7 gap-1.5 sm:flex"
              >
                <HugeiconsIcon icon={SparklesIcon} className="size-3.5" />
                <span className="text-sm">Ask AI</span>
              </Button>
            }
          />
          <DropdownMenuContent align="end">
            <DropdownMenuGroup>
              <DropdownMenuItem>Summarize pipeline risks</DropdownMenuItem>
              <DropdownMenuItem>Flag tour-ready buyers</DropdownMenuItem>
              <DropdownMenuItem>Draft open-house follow-up</DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <Button
                variant="outline"
                size="sm"
                className="hidden h-7 gap-1.5 sm:flex"
              >
                <HugeiconsIcon icon={Share01Icon} className="size-3.5" />
                <span className="text-sm">Share</span>
              </Button>
            }
          />
          <DropdownMenuContent align="end">
            <DropdownMenuGroup>
              <DropdownMenuItem>Copy listing board link</DropdownMenuItem>
              <DropdownMenuItem>Export weekly market snapshot</DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Share with brokerage team</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <ThemeToggle />
      </div>
    </header>
  )
}

export function WelcomeSection() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="text-xl font-semibold tracking-tight sm:text-2xl">
          Good to see you, Connor
        </h1>
        <p className="mt-0.5 text-sm text-muted-foreground">
          Buyer activity is up ahead of this weekend&apos;s showings
        </p>
      </div>

      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          className="h-9 gap-1.5 border-border/50 bg-card hover:bg-card/80"
        >
          <HugeiconsIcon icon={FileAddIcon} className="size-4" />
          <span className="hidden sm:inline">Add Listing</span>
        </Button>
        <Button className="h-9 gap-1.5 border border-border/50 bg-neutral-800 text-white hover:bg-neutral-700">
          <HugeiconsIcon icon={UserAdd01Icon} className="size-4" />
          <span className="hidden sm:inline">New Buyer</span>
        </Button>
      </div>
    </div>
  )
}
