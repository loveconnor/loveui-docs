import { Label } from "@/registry/default/ui/label"
import { Radio, RadioGroup } from "@/registry/default/ui/radio-group"

export default function RadioGroupDisabledDemo() {
  return (
    <RadioGroup defaultValue="next">
      <Label>
        <Radio value="next" /> Updated Next.js
      </Label>
      <Label>
        <Radio value="vite" disabled /> Updated Vite (disabled)
      </Label>
      <Label>
        <Radio value="astro" /> Updated Astro
      </Label>
    </RadioGroup>
  )
}
