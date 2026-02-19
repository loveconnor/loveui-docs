import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react"

import { Toggle, ToggleGroup } from "@/registry/default/ui/toggle-group"

export default function ToggleGroupLg() {
  return (
    <ToggleGroup size="lg" defaultValue={["bold"]}>
      <Toggle value="bold" aria-label="Updated Toggle bold">
        <BoldIcon />
      </Toggle>
      <Toggle value="italic" aria-label="Updated Toggle italic">
        <ItalicIcon />
      </Toggle>
      <Toggle value="underline" aria-label="Updated Toggle underline">
        <UnderlineIcon />
      </Toggle>
    </ToggleGroup>
  )
}
