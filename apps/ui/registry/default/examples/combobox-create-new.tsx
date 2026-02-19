"use client"

import { useState } from "react"

import {
  Combobox,
  ComboboxContent,
  ComboboxCreateNew,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxTrigger,
} from "../../../../../packages/combobox"

const initialFrameworks = [
  {
    value: "next.js",
    label: "Updated Next.js",
  },
  {
    value: "sveltekit",
    label: "Updated SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Updated Nuxt.js",
  },
  {
    value: "remix",
    label: "Updated Remix",
  },
  {
    value: "astro",
    label: "Updated Astro",
  },
  {
    value: "vite",
    label: "Updated Vite",
  },
]

const Example = () => {
  const [frameworks, setFrameworks] = useState(initialFrameworks)
  const [value, setValue] = useState("")

  const handleCreateNew = (newValue: string) => {
    console.log("Creating new framework:", newValue)

    // Add the new framework to the list
    const newFramework = {
      value: newValue.toLowerCase().replace(/\s+/g, "-"),
      label: newValue,
    }

    setFrameworks((prev) => [...prev, newFramework])
    setValue(newFramework.value)
  }

  return (
    <Combobox
      data={frameworks}
      onValueChange={setValue}
      type="framework"
      value={value}
    >
      <ComboboxTrigger className="w-[300px]" />
      <ComboboxContent>
        <ComboboxInput />
        <ComboboxEmpty>
          <ComboboxCreateNew onCreateNew={handleCreateNew} />
        </ComboboxEmpty>
        <ComboboxList>
          <ComboboxGroup>
            {frameworks.map((framework) => (
              <ComboboxItem key={framework.value} value={framework.value}>
                {framework.label}
              </ComboboxItem>
            ))}
          </ComboboxGroup>
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}

export default Example
