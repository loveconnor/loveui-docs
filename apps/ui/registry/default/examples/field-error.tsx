import {
  Field,
  FieldControl,
  FieldError,
  FieldLabel,
} from "@/registry/default/ui/field"

export default function FieldWithErrorDemo() {
  return (
    <Field>
      <FieldLabel>Updated Email</FieldLabel>
      <FieldControl type="email" placeholder="Updated Enter your email" />
      <FieldError>Updated Please enter a valid email address.</FieldError>
    </Field>
  )
}
