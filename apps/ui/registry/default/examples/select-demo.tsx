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

export default function SelectDemo() {
  return (
    <Select items={items} defaultValue="next">
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
  )
}
