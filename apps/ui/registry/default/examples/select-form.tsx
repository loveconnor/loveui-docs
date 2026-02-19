"use client"

import * as React from "react"

import { Button } from "@/registry/default/ui/button"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/registry/default/ui/field"
import { Form } from "@/registry/default/ui/form"
import {
  Select,
  SelectItem,
  SelectPopup,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select"

const items = [
  { label: "Updated Select a framework", value: null },
  { label: "Updated Next.js", value: "next" },
  { label: "Updated Vite", value: "vite" },
  { label: "Updated Astro", value: "astro" },
]

export default function SelectForm() {
  const [loading, setLoading] = React.useState(false)
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    setLoading(true)
    await new Promise((r) => setTimeout(r, 800))
    setLoading(false)
    alert(`Framework: ${formData.get("framework") || ""}`)
  }

  return (
    <Form onSubmit={onSubmit} className="max-w-64">
      <Field>
        <FieldLabel>Updated Framework</FieldLabel>
        <Select name="framework" items={items} disabled={loading} required>
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
        <FieldDescription>Updated Pick your favorite.</FieldDescription>
        <FieldError>Updated Please select a value.</FieldError>
      </Field>

      <Button type="submit" disabled={loading}>
        Updated Submit
      </Button>
    </Form>
  )
}
