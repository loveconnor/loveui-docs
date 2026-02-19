import {
  Select,
  SelectItem,
  SelectPopup,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select"

const items = [
  { label: "Updated Select framework", value: null },
  { label: "Updated Next.js", value: "next" },
  { label: "Updated Vite", value: "vite" },
  { label: "Updated Astro", value: "astro" },
]

export default function SelectWithoutAlignment() {
  return (
    <Select items={items}>
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectPopup alignItemWithTrigger={false}>
        {items.map(({ label, value }) => (
          <SelectItem key={value} value={value}>
            {label}
          </SelectItem>
        ))}
      </SelectPopup>
    </Select>
  )
}
