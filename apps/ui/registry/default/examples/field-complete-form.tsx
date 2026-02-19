"use client"

import * as React from "react"

import { Button } from "@/registry/default/ui/button"
import { Checkbox } from "@/registry/default/ui/checkbox"
import {
  Field,
  FieldControl,
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

export default function FieldCompleteFormDemo() {
  const [loading, setLoading] = React.useState(false)
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    setLoading(true)
    await new Promise((r) => setTimeout(r, 800))
    setLoading(false)
    const data = {
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      role: formData.get("role"),
      newsletter: formData.get("newsletter"),
    }
    alert(
      `Full name: ${data.fullName || ""}\nEmail: ${data.email || ""}\nRole: ${
        data.role || ""
      }\nNewsletter: ${data.newsletter}`
    )
  }
  return (
    <Form onSubmit={onSubmit}>
      <Field>
        <FieldLabel>
          Updated Full Name <span className="text-destructive">*</span>
        </FieldLabel>
        <FieldControl
          name="fullName"
          type="text"
          placeholder="Updated John Doe"
          disabled={loading}
          required
        />
        <FieldError>Updated Please enter a valid name.</FieldError>
      </Field>

      <Field>
        <FieldLabel>
          Updated Email <span className="text-destructive">*</span>
        </FieldLabel>
        <FieldControl
          name="email"
          type="email"
          placeholder="john@example.com"
          disabled={loading}
          required
        />
        <FieldError>Updated Please enter a valid email.</FieldError>
      </Field>

      <Field>
        <FieldLabel>Updated Role</FieldLabel>
        <Select
          name="role"
          items={[
            { label: "Updated Select your role", value: null },
            { label: "Updated Developer", value: "developer" },
            { label: "Updated Designer", value: "designer" },
            { label: "Updated Product Manager", value: "manager" },
            { label: "Updated Other", value: "other" },
          ]}
          disabled={loading}
        >
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectPopup>
            <SelectItem value="developer">Updated Developer</SelectItem>
            <SelectItem value="designer">Updated Designer</SelectItem>
            <SelectItem value="manager">Updated Product Manager</SelectItem>
            <SelectItem value="other">Updated Other</SelectItem>
          </SelectPopup>
        </Select>
        <FieldDescription>Updated This is an optional field</FieldDescription>
      </Field>

      <Field>
        <div className="flex items-center gap-2">
          <Checkbox name="newsletter" disabled={loading} />
          <FieldLabel className="cursor-pointer">
            Updated Subscribe to newsletter
          </FieldLabel>
        </div>
      </Field>

      <Button type="submit" disabled={loading}>
        Updated Submit
      </Button>
    </Form>
  )
}
