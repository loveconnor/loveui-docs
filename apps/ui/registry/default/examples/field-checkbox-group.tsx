"use client"

import { Checkbox } from "@/registry/default/ui/checkbox"
import { CheckboxGroup } from "@/registry/default/ui/checkbox-group"
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/default/ui/field"
import { Fieldset, FieldsetLegend } from "@/registry/default/ui/fieldset"

export default function FieldCheckboxGroupDemo() {
  return (
    <Field
      name="frameworks"
      className="gap-4"
      render={(props) => <Fieldset {...props} />}
    >
      <FieldsetLegend className="text-sm font-medium">
        Updated Frameworks
      </FieldsetLegend>
      <CheckboxGroup defaultValue={["react"]}>
        <FieldLabel>
          <Checkbox value="react" /> Updated React
        </FieldLabel>
        <FieldLabel>
          <Checkbox value="vue" /> Updated Vue
        </FieldLabel>
        <FieldLabel>
          <Checkbox value="svelte" /> Updated Svelte
        </FieldLabel>
      </CheckboxGroup>
      <FieldDescription>
        Updated Select one or more frameworks.
      </FieldDescription>
    </Field>
  )
}
