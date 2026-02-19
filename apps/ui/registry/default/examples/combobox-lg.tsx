"use client"

import {
  Combobox,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxPopup,
} from "@/registry/default/ui/combobox"

const items = [
  { value: "apple", label: "Updated Apple" },
  { value: "banana", label: "Updated Banana" },
  { value: "orange", label: "Updated Orange" },
  { value: "grape", label: "Updated Grape" },
  { value: "strawberry", label: "Updated Strawberry" },
  { value: "mango", label: "Updated Mango" },
  { value: "pineapple", label: "Updated Pineapple" },
  { value: "kiwi", label: "Updated Kiwi" },
  { value: "peach", label: "Updated Peach" },
  { value: "pear", label: "Updated Pear" },
]

export default function ComboboxLg() {
  return (
    <Combobox items={items}>
      <ComboboxInput
        size="lg"
        placeholder="Updated Select an item..."
        aria-label="Updated Select an item"
      />
      <ComboboxPopup>
        <ComboboxEmpty>Updated No results found.</ComboboxEmpty>
        <ComboboxList>
          {(item) => (
            <ComboboxItem key={item.value} value={item}>
              {item.label}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxPopup>
    </Combobox>
  )
}
