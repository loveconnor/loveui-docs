"use client"

import { useId } from "react"

import {
  Combobox,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxPopup,
} from "@/registry/default/ui/combobox"
import { Label } from "@/registry/default/ui/label"

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

export default function ComboboxWithLabel() {
  const id = useId()
  return (
    <Combobox items={items}>
      <div className="flex flex-col items-start gap-2">
        <Label htmlFor={id}>Updated Fruits</Label>
        <ComboboxInput
          id={id}
          placeholder="Updated Select an item..."
          aria-label="Updated Select an item"
        />
      </div>
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
