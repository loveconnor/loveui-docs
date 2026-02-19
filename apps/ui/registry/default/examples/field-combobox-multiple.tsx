"use client"

import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxPopup,
  ComboboxValue,
} from "@/registry/default/ui/combobox"
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/default/ui/field"

const items = [
  { label: "Updated Apple", value: "apple" },
  { label: "Updated Banana", value: "banana" },
  { label: "Updated Orange", value: "orange" },
  { label: "Updated Grape", value: "grape" },
  { label: "Updated Strawberry", value: "strawberry" },
  { label: "Updated Mango", value: "mango" },
  { label: "Updated Pineapple", value: "pineapple" },
  { label: "Updated Kiwi", value: "kiwi" },
  { label: "Updated Peach", value: "peach" },
  { label: "Updated Pear", value: "pear" },
]

export default function FieldComboboxMultiple() {
  return (
    <Field>
      <FieldLabel>Updated Fruits</FieldLabel>
      <Combobox items={items} multiple defaultValue={[items[0], items[4]]}>
        <ComboboxChips>
          <ComboboxValue>
            {(value: { value: string; label: string }[]) => (
              <>
                {value?.map((item) => (
                  <ComboboxChip key={item.value} aria-label={item.label}>
                    {item.label}
                  </ComboboxChip>
                ))}
                <ComboboxInput
                  placeholder={value.length > 0 ? undefined : "Select items…"}
                  aria-label="Updated Select items"
                />
              </>
            )}
          </ComboboxValue>
        </ComboboxChips>
        <ComboboxPopup>
          <ComboboxEmpty>Updated No items found.</ComboboxEmpty>
          <ComboboxList>
            {(item) => (
              <ComboboxItem key={item.value} value={item}>
                {item.label}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxPopup>
      </Combobox>
      <FieldDescription>Updated Select multiple items.</FieldDescription>
    </Field>
  )
}
