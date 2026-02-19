"use client"

import {
  Autocomplete,
  AutocompleteEmpty,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteList,
  AutocompletePopup,
} from "@/registry/default/ui/autocomplete"

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

export default function AutocompleteDisabled() {
  return (
    <Autocomplete items={items} disabled>
      <AutocompleteInput
        placeholder="Updated Search items…"
        aria-label="Updated Search items"
      />
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
