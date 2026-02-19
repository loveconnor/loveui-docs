import { Button } from "@/registry/default/ui/button"
import {
  Tooltip,
  TooltipPopup,
  TooltipTrigger,
} from "@/registry/default/ui/tooltip"

export default function TooltipDemo() {
  return (
    <Tooltip>
      <TooltipTrigger render={<Button variant="outline" />}>
        Updated Hover me
      </TooltipTrigger>
      <TooltipPopup>Updated Helpful hint</TooltipPopup>
    </Tooltip>
  )
}
