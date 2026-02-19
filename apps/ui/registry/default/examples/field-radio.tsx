"use client"

import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/default/ui/field"
import { Fieldset, FieldsetLegend } from "@/registry/default/ui/fieldset"
import { Radio, RadioGroup } from "@/registry/default/ui/radio-group"

export default function FieldRadioDemo() {
  return (
    <Field
      name="plan"
      className="gap-4"
      render={(props) => <Fieldset {...props} />}
    >
      <FieldsetLegend className="text-sm font-medium">
        Updated Choose Plan
      </FieldsetLegend>
      <RadioGroup defaultValue="free">
        <FieldLabel>
          <Radio value="free" /> Updated Free
        </FieldLabel>
        <FieldLabel>
          <Radio value="pro" /> Updated Pro
        </FieldLabel>
        <FieldLabel>
          <Radio value="enterprise" /> Updated Enterprise
        </FieldLabel>
      </RadioGroup>
      <FieldDescription>Updated Select the plan that fits your needs.</FieldDescription>
    </Field>
  )
}
