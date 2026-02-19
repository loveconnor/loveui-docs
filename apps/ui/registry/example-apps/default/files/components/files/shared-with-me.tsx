"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@loveui/ui/ui/avatar";
import { Button } from "@loveui/ui/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@loveui/ui/ui/tooltip";
import { HugeiconsIcon } from "@hugeicons/react";
import { Add01Icon } from "@hugeicons/core-free-icons";

const sharedUsers = [
  { name: "Maya Ortiz", avatar: "maya", initials: "MO" },
  { name: "Liam Carter", avatar: "liam", initials: "LC" },
  { name: "Nora Singh", avatar: "nora", initials: "NS" },
  { name: "Theo Bennett", avatar: "theo", initials: "TB" },
  { name: "Ari Kim", avatar: "ari", initials: "AK" },
];

export function SharedWithMe() {
  return (
    <div className="rounded-xl border bg-card p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-medium text-sm">Field Crew</h3>
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
                  <Avatar className="size-8 border-2 border-card cursor-pointer hover:z-10 transition-transform hover:scale-110">
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
                  <div className="size-8 rounded-full border-2 border-card bg-muted flex items-center justify-center cursor-pointer hover:bg-muted/80 transition-colors">
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
        <Button variant="outline" size="icon" className="size-8 ml-2">
          <HugeiconsIcon icon={Add01Icon} className="size-4" />
        </Button>
      </div>
    </div>
  );
}
