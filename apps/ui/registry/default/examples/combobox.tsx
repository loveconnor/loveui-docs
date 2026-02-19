"use client"

import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxTrigger,
} from "../../../../../packages/combobox"

const frameworks = [
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

const Example = () => (
  <Combobox
    data={frameworks}
    onOpenChange={(open) => console.log("Combobox is open?", open)}
    onValueChange={(newValue) => console.log("Combobox value:", newValue)}
    type="framework"
  >
    <ComboboxTrigger />
    <ComboboxContent>
      <ComboboxInput />
      <ComboboxEmpty />
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

export default Example
