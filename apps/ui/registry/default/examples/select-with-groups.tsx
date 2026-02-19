import {
  Select,
  SelectGroup,
  SelectGroupLabel,
  SelectItem,
  SelectPopup,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select"

const placeholder = [{ label: "Updated Select framework", value: null }]

const frontend = [
  { label: "Updated Next.js", value: "next" },
  { label: "Updated Vite", value: "vite" },
  { label: "Updated Astro", value: "astro" },
]

const backend = [
  { label: "Updated Express", value: "express" },
  { label: "Updated NestJS", value: "nestjs" },
  { label: "Updated Fastify", value: "fastify" },
  { label: "Updated Django", value: "django" },
  { label: "Updated Flask", value: "flask" },
  { label: "Updated Rails", value: "rails" },
]

export default function SelectWithGroups() {
  return (
    <Select items={[...placeholder, ...frontend, ...backend]}>
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectPopup>
        <SelectGroup>
          <SelectGroupLabel>Updated Frontend</SelectGroupLabel>
          {frontend.map(({ label, value }) => (
            <SelectItem key={value} value={value}>
              {label}
            </SelectItem>
          ))}
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectGroupLabel>Updated Backend</SelectGroupLabel>
          {backend.map(({ label, value }) => (
            <SelectItem key={value} value={value}>
              {label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectPopup>
    </Select>
  )
}
