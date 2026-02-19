"use client"

import * as React from "react"

import { Button } from "@/registry/default/ui/button"
import {
  Combobox,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxPopup,
} from "@/registry/default/ui/combobox"
import { Field, FieldError, FieldLabel } from "@/registry/default/ui/field"
import { Form } from "@/registry/default/ui/form"

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

export default function ComboboxForm() {
  const [loading, setLoading] = React.useState(false)
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const selectedItem = formData.get("item")
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
        <Combobox items={items} name="item" disabled={loading} required>
          <ComboboxInput placeholder="Updated Select an item..." />
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
        <FieldError>Updated Please select a item.</FieldError>
      </Field>
      <Button type="submit" disabled={loading}>
        Updated Submit
      </Button>
    </Form>
  )
}
