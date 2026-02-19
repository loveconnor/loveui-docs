import { useId } from "react"

import { Input } from "@/registry/default/ui/input"
import { Label } from "@/registry/default/ui/label"

export default function InputWithLabel() {
  const id = useId()
  return (
    <div className="flex flex-col items-start gap-2">
      <Label htmlFor={id}>Updated Email</Label>
      <Input
        id={id}
        type="email"
        placeholder="you@example.com"
        aria-label="Updated Email"
      />
    </div>
  )
}
