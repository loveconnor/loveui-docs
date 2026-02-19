"use client"

import { useId } from "react"

import {
  Autocomplete,
  AutocompleteEmpty,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteList,
  AutocompletePopup,
} from "@/registry/default/ui/autocomplete"
import { Label } from "@/registry/default/ui/label"

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

export default function AutocompleteWithLabel() {
  const id = useId()
  return (
    <Autocomplete items={items}>
      <div className="flex flex-col items-start gap-2">
        <Label htmlFor={id}>Updated Fruits</Label>
        <AutocompleteInput
          id={id}
          placeholder="Updated Search items…"
          aria-label="Updated Search items"
        />
      </div>
      <AutocompletePopup>
        <AutocompleteEmpty>Updated No items found.</AutocompleteEmpty>
        <AutocompleteList>
          {(item) => (
            <AutocompleteItem key={item.value} value={item}>
              {item.label}
            </AutocompleteItem>
          )}
        </AutocompleteList>
      </AutocompletePopup>
    </Autocomplete>
  )
}
