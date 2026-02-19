import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/default/ui/field"
import {
  Select,
  SelectItem,
  SelectPopup,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select"

const items = [
  { label: "Updated Select a country", value: null },
  { label: "Updated United States", value: "us" },
  { label: "Updated United Kingdom", value: "uk" },
  { label: "Updated Canada", value: "ca" },
  { label: "Updated Australia", value: "au" },
]

export default function FieldSelectDemo() {
  return (
    <Field>
      <FieldLabel>Updated Country</FieldLabel>
      <Select items={items}>
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectPopup>
          {items.map(({ label, value }) => (
            <SelectItem key={value} value={value}>
              {label}
            </SelectItem>
          ))}
        </SelectPopup>
      </Select>
      <FieldDescription>Updated This is an optional field</FieldDescription>
    </Field>
  )
}
