import { cn } from "../../lib/utils"
import type { ComponentPropsWithoutRef } from "react"

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
