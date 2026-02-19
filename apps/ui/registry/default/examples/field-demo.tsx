import {
  Field,
  FieldControl,
  FieldDescription,
  FieldLabel,
} from "@/registry/default/ui/field"

export default function FieldDemo() {
  return (
    <Field>
      <FieldLabel>Updated Name</FieldLabel>
      <FieldControl type="text" placeholder="Updated Enter your name" />
      <FieldDescription>Updated Visible on your profile</FieldDescription>
    </Field>
  )
}
