"use client"

import { Add01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { Avatar, AvatarFallback, AvatarImage } from "@loveui/ui/ui/avatar"
import { Button } from "@loveui/ui/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "@loveui/ui/ui/tooltip"

const sharedUsers = [
  { name: "Maya Ortiz", avatar: "maya", initials: "MO" },
  { name: "Liam Carter", avatar: "liam", initials: "LC" },
  { name: "Nora Singh", avatar: "nora", initials: "NS" },
  { name: "Theo Bennett", avatar: "theo", initials: "TB" },
  { name: "Ari Kim", avatar: "ari", initials: "AK" },
]

export function SharedWithMe() {
  return (
    <div className="rounded-xl border bg-card p-4">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-medium">Field Crew</h3>
        <span className="text-xs text-muted-foreground">
          {sharedUsers.length} collaborators
        </span>
      </div>
      <div className="flex items-center">
        <div className="flex -space-x-2">
          {sharedUsers.slice(0, 4).map((user) => (
            <Tooltip key={user.name}>
              <TooltipTrigger
                render={
                  <Avatar className="size-8 cursor-pointer border-2 border-card transition-transform hover:z-10 hover:scale-110">
                    <AvatarImage
                      src={`https://api.dicebear.com/9.x/glass/svg?seed=${user.avatar}`}
                    />
                    <AvatarFallback className="text-[10px]">
                      {user.initials}
                    </AvatarFallback>
                  </Avatar>
                }
              />
              <TooltipContent>{user.name}</TooltipContent>
            </Tooltip>
          ))}
          {sharedUsers.length > 4 && (
            <Tooltip>
              <TooltipTrigger
                render={
                  <div className="flex size-8 cursor-pointer items-center justify-center rounded-full border-2 border-card bg-muted transition-colors hover:bg-muted/80">
                    <span className="text-xs font-medium text-muted-foreground">
                      +{sharedUsers.length - 4}
                    </span>
                  </div>
                }
              />
              <TooltipContent>
                {sharedUsers
                  .slice(4)
                  .map((u) => u.name)
                  .join(", ")}
              </TooltipContent>
            </Tooltip>
          )}
        </div>
        <Button variant="outline" size="icon" className="ml-2 size-8">
          <HugeiconsIcon icon={Add01Icon} className="size-4" />
        </Button>
      </div>
    </div>
  )
}
