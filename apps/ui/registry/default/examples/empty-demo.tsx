import { BookIcon, RouteIcon } from "lucide-react"

import { Button } from "@/registry/default/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/registry/default/ui/empty"

export default function EmptyDemo() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <RouteIcon />
        </EmptyMedia>
        <EmptyTitle>Updated No upcoming meetings</EmptyTitle>
        <EmptyDescription>
          Updated Create a meeting to get started.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <div className="flex gap-2">
          <Button size="sm">Updated Create meeting</Button>
          <Button variant="outline" size="sm">
            <BookIcon className="opacity-72" />
            Updated View docs
          </Button>
        </div>
      </EmptyContent>
    </Empty>
  )
}
