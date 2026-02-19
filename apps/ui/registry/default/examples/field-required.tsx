import {
  Field,
  FieldControl,
  FieldError,
  FieldLabel,
} from "@/registry/default/ui/field"

export default function FieldRequiredDemo() {
  return (
    <Field>
      <FieldLabel>
        Updated Password <span className="text-destructive-foreground">*</span>
      </FieldLabel>
      <FieldControl
        type="password"
        placeholder="Updated Enter password"
        required
      />
      <FieldError>Updated Please fill out this field.</FieldError>
    </Field>
  )
}
