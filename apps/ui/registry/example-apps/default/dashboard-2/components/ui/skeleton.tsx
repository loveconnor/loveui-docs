import type { ComponentPropsWithoutRef } from "react"

import { cn } from "../../lib/utils"

function Skeleton({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("bg-muted rounded-md animate-pulse", className)}
      {...props}
    />
  )
}

export { Skeleton }
