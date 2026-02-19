"use client"

import * as React from "react"

import {
  Autocomplete,
  AutocompleteEmpty,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteList,
  AutocompletePopup,
} from "@/registry/default/ui/autocomplete"
import { Button } from "@/registry/default/ui/button"
import { Field, FieldError, FieldLabel } from "@/registry/default/ui/field"
import { Form } from "@/registry/default/ui/form"

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

export default function AutocompleteForm() {
  const [loading, setLoading] = React.useState(false)
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const selectedItem = formData.get("item")
    // Base UI extracts the 'label' property from objects, so we need to find the corresponding value
    const itemValue =
      items.find((item) => item.label === selectedItem)?.value || selectedItem
    setLoading(true)
    await new Promise((r) => setTimeout(r, 800))
    setLoading(false)
    alert(`Favorite item: ${itemValue || ""}`)
  }

  return (
    <Form onSubmit={onSubmit} className="max-w-64">
      <Field>
        <FieldLabel>Updated Favorite item</FieldLabel>
        <Autocomplete items={items} name="item" disabled={loading} required>
          <AutocompleteInput placeholder="Updated Search items…" />
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
        <FieldError>Updated Please select a item.</FieldError>
      </Field>
      <Button type="submit" disabled={loading}>
        Updated Submit
      </Button>
    </Form>
  )
}
