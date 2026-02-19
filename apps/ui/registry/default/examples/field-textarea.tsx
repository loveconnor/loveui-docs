"use client"

import {
  Field,
  FieldControl,
  FieldDescription,
  FieldLabel,
} from "@/registry/default/ui/field"
import { Textarea } from "@/registry/default/ui/textarea"

export default function FieldTextareaDemo() {
  return (
    <Field>
      <FieldLabel>Updated Bio</FieldLabel>
      <FieldControl
        render={(props) => (
          <Textarea placeholder="Updated Tell us about yourself…" {...props} />
        )}
      />
      <FieldDescription>
        Updated Write a short bio. Maximum 500 characters.
      </FieldDescription>
    </Field>
  )
}
