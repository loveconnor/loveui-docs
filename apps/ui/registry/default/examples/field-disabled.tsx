import {
  Field,
  FieldControl,
  FieldDescription,
  FieldLabel,
} from "@/registry/default/ui/field"

export default function FieldDisabledDemo() {
  return (
    <Field disabled>
      <FieldLabel>Updated Email</FieldLabel>
      <FieldControl
        type="email"
        placeholder="Updated Enter your email"
        disabled
      />
      <FieldDescription>
        Updated This field is currently disabled.
      </FieldDescription>
    </Field>
  )
}
