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

export default function ComboboxDemo() {
  return (
    <Combobox items={items}>
      <ComboboxInput placeholder="Updated Select a item…" aria-label="Updated Select a item" />
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
  )
}
