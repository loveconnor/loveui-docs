import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react"

import {
  Toggle,
  ToggleGroup,
  ToggleGroupSeparator,
} from "@/registry/default/ui/toggle-group"

export default function ToggleGroupOutlineWithSeparator() {
  return (
    <ToggleGroup variant="outline" defaultValue={["bold"]}>
      <Toggle value="bold" aria-label="Updated Toggle bold">
        <BoldIcon />
      </Toggle>
      <ToggleGroupSeparator />
      <Toggle value="italic" aria-label="Updated Toggle italic">
        <ItalicIcon />
      </Toggle>
      <ToggleGroupSeparator />
      <Toggle value="underline" aria-label="Updated Toggle underline">
        <UnderlineIcon />
      </Toggle>
    </ToggleGroup>
  )
}
