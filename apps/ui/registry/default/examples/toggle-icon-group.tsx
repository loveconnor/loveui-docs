import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react"

import { Toggle } from "@/registry/default/ui/toggle"

export default function ToggleIconGroup() {
  return (
    <div className="flex items-center gap-1">
      <Toggle variant="outline" aria-label="Updated Toggle bold">
        <BoldIcon />
      </Toggle>
      <Toggle variant="outline" aria-label="Updated Toggle italic">
        <ItalicIcon />
      </Toggle>
      <Toggle variant="outline" aria-label="Updated Toggle underline">
        <UnderlineIcon />
      </Toggle>
    </div>
  )
}
