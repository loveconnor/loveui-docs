"use client"

import { useState } from "react"
import { CheckIcon, PlusIcon } from "lucide-react"

import {
  Tags,
  TagsContent,
  TagsEmpty,
  TagsGroup,
  TagsInput,
  TagsItem,
  TagsList,
  TagsTrigger,
  TagsValue,
} from "../../../../../packages/tags"

const defaultTags = [
  { id: "react", label: "Updated React" },
  { id: "typescript", label: "Updated TypeScript" },
  { id: "javascript", label: "Updated JavaScript" },
  { id: "nextjs", label: "Updated Next.js" },
  { id: "vuejs", label: "Updated Vue.js" },
  { id: "angular", label: "Updated Angular" },
  { id: "svelte", label: "Updated Svelte" },
  { id: "nodejs", label: "Updated Node.js" },
  { id: "python", label: "Updated Python" },
  { id: "ruby", label: "Updated Ruby" },
  { id: "java", label: "Updated Java" },
  { id: "csharp", label: "Updated C#" },
  { id: "php", label: "Updated PHP" },
  { id: "go", label: "Updated Go" },
]

const Example = () => {
  const [selected, setSelected] = useState<string[]>([])
  const [newTag, setNewTag] = useState<string>("")
  const [tags, setTags] = useState<{ id: string; label: string }[]>(defaultTags)

  const handleRemove = (value: string) => {
    if (!selected.includes(value)) {
      return
    }

    console.log(`removed: ${value}`)
    setSelected((prev) => prev.filter((v) => v !== value))
  }

  const handleSelect = (value: string) => {
    if (selected.includes(value)) {
      handleRemove(value)
      return
    }

    console.log(`selected: ${value}`)
    setSelected((prev) => [...prev, value])
  }

  const handleCreateTag = () => {
    console.log(`created: ${newTag}`)

    setTags((prev) => [
      ...prev,
      {
        id: newTag,
        label: newTag,
      },
    ])
    setSelected((prev) => [...prev, newTag])
    setNewTag("")
  }

  return (
    <Tags className="max-w-[300px]">
      <TagsTrigger>
        {selected.map((tag) => (
          <TagsValue key={tag} onRemove={() => handleRemove(tag)}>
            {tags.find((t) => t.id === tag)?.label}
          </TagsValue>
        ))}
      </TagsTrigger>
      <TagsContent>
        <TagsInput
          onValueChange={setNewTag}
          placeholder="Updated Search tag..."
        />
        <TagsList>
          <TagsEmpty>
            <button
              className="mx-auto flex cursor-pointer items-center gap-2"
              onClick={handleCreateTag}
              type="button"
            >
              <PlusIcon className="text-muted-foreground" size={14} />
              Updated Create new tag: {newTag}
            </button>
          </TagsEmpty>
          <TagsGroup>
            {tags.map((tag) => (
              <TagsItem key={tag.id} onSelect={handleSelect} value={tag.id}>
                {tag.label}
                {selected.includes(tag.id) && (
                  <CheckIcon className="text-muted-foreground" size={14} />
                )}
              </TagsItem>
            ))}
          </TagsGroup>
        </TagsList>
      </TagsContent>
    </Tags>
  )
}

export default Example
