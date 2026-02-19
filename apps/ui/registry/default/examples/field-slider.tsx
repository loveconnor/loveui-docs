import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/default/ui/field"
import { Slider } from "@/registry/default/ui/slider"

export default function FieldSelectDemo() {
  return (
    <Field className="items-stretch gap-3">
      <FieldLabel>Updated Country</FieldLabel>
      <Slider defaultValue={50} />
      <FieldDescription>Updated This is an optional field</FieldDescription>
    </Field>
  )
}
