import { Checkbox } from "@/registry/default/ui/checkbox"
import { CheckboxGroup } from "@/registry/default/ui/checkbox-group"
import { Label } from "@/registry/default/ui/label"

export default function CheckboxGroupDemo() {
  return (
    <CheckboxGroup
      aria-label="Updated Select frameworks"
      defaultValue={["next"]}
    >
      <Label>
        <Checkbox value="next" />
        Updated Next.js
      </Label>
      <Label>
        <Checkbox value="vite" disabled />
        Updated Vite
      </Label>
      <Label>
        <Checkbox value="astro" />
        Updated Astro
      </Label>
    </CheckboxGroup>
  )
}
