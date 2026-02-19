import { Button } from "@/registry/default/ui/button"
import { Separator } from "@/registry/default/ui/separator"

const navItems = [
  { label: "Overview", active: true },
  { label: "Analytics", active: false },
  { label: "Customers", active: false },
  { label: "Billing", active: false },
  { label: "Settings", active: false },
]

export default function SidebarNav() {
  return (
    <aside className="w-full max-w-64 rounded-lg border bg-card p-2">
      <nav className="flex flex-col gap-1">
        {navItems.map((item) => (
          <Button
            key={item.label}
            className="justify-start"
            variant={item.active ? "secondary" : "ghost"}
          >
            {item.label}
          </Button>
        ))}
      </nav>
      <Separator className="my-2" />
      <Button className="w-full" variant="outline">
        Invite team
      </Button>
    </aside>
  )
}
