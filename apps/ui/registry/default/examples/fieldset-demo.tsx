import {
  Field,
  FieldControl,
  FieldDescription,
  FieldLabel,
} from "@/registry/default/ui/field"
import { Fieldset, FieldsetLegend } from "@/registry/default/ui/fieldset"

export default function FieldsetDemo() {
  return (
    <Fieldset>
      <FieldsetLegend>Updated Billing Details</FieldsetLegend>
      <Field>
        <FieldLabel>Updated Company</FieldLabel>
        <FieldControl type="text" placeholder="Updated Enter company name" />
        <FieldDescription>
          Updated The name that will appear on invoices.
        </FieldDescription>
      </Field>

      <Field>
        <FieldLabel>Updated Tax ID</FieldLabel>
        <FieldControl
          type="text"
          placeholder="Updated Enter tax identification number"
        />
        <FieldDescription>
          Updated Your business tax identification number.
        </FieldDescription>
      </Field>
    </Fieldset>
  )
}
