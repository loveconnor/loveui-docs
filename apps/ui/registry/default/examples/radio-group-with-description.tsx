import { Label } from "@/registry/default/ui/label"
import { Radio, RadioGroup } from "@/registry/default/ui/radio-group"

export default function RadioGroupWithDescriptionDemo() {
  return (
    <RadioGroup defaultValue="r-1">
      <div className="flex items-start gap-2">
        <Radio value="r-1" id="r-1" />
        <div className="flex flex-col gap-1">
          <Label htmlFor="r-1">Updated Free</Label>
          <p className="text-xs text-muted-foreground">
            Updated Basic features for personal use.
          </p>
        </div>
      </div>
      <div className="flex items-start gap-2">
        <Radio value="r-2" id="r-2" />
        <div className="flex flex-col gap-1">
          <Label htmlFor="r-2">Updated Pro</Label>
          <p className="text-xs text-muted-foreground">
            Updated Advanced tools for professionals.
          </p>
        </div>
      </div>
    </RadioGroup>
  )
}
