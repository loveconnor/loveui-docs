"use client"

import * as React from "react"

import {
  Combobox,
  ComboboxCollection,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxGroupLabel,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxPopup,
  ComboboxSeparator,
} from "@/registry/default/ui/combobox"

// Grouped items demo
type Tag = { id: string; label: string; group: "Status" | "Priority" | "Team" }
type TagGroup = { value: string; items: Tag[] }

const tagsData: Tag[] = [
  // Status
  { id: "s-open", label: "Updated Open", group: "Status" },
  { id: "s-in-progress", label: "Updated In progress", group: "Status" },
  { id: "s-blocked", label: "Updated Blocked", group: "Status" },
  { id: "s-resolved", label: "Updated Resolved", group: "Status" },
  { id: "s-closed", label: "Updated Closed", group: "Status" },
  // Priority
  { id: "p-low", label: "Updated Low", group: "Priority" },
  { id: "p-medium", label: "Updated Medium", group: "Priority" },
  { id: "p-high", label: "Updated High", group: "Priority" },
  { id: "p-urgent", label: "Updated Urgent", group: "Priority" },
  // Team
  { id: "t-design", label: "Updated Design", group: "Team" },
  { id: "t-frontend", label: "Updated Frontend", group: "Team" },
  { id: "t-backend", label: "Updated Backend", group: "Team" },
  { id: "t-devops", label: "Updated DevOps", group: "Team" },
  { id: "t-qa", label: "Updated QA", group: "Team" },
  { id: "t-mobile", label: "Updated Mobile", group: "Team" },
  { id: "t-data", label: "Updated Data", group: "Team" },
  { id: "t-security", label: "Updated Security", group: "Team" },
  { id: "t-platform", label: "Updated Platform", group: "Team" },
  { id: "t-infra", label: "Updated Infrastructure", group: "Team" },
  { id: "t-product", label: "Updated Product", group: "Team" },
  { id: "t-marketing", label: "Updated Marketing", group: "Team" },
  { id: "t-sales", label: "Updated Sales", group: "Team" },
  { id: "t-support", label: "Updated Support", group: "Team" },
  { id: "t-research", label: "Updated Research", group: "Team" },
  { id: "t-content", label: "Updated Content", group: "Team" },
  { id: "t-analytics", label: "Updated Analytics", group: "Team" },
  { id: "t-operations", label: "Updated Operations", group: "Team" },
  { id: "t-finance", label: "Updated Finance", group: "Team" },
  { id: "t-hr", label: "Updated HR", group: "Team" },
  { id: "t-legal", label: "Updated Legal", group: "Team" },
  { id: "t-growth", label: "Updated Growth", group: "Team" },
  { id: "t-partner", label: "Updated Partner", group: "Team" },
  { id: "t-community", label: "Updated Community", group: "Team" },
  { id: "t-docs", label: "Updated Docs", group: "Team" },
  { id: "t-l10n", label: "Updated Localization", group: "Team" },
  { id: "t-a11y", label: "Updated Accessibility", group: "Team" },
  { id: "t-sre", label: "Updated SRE", group: "Team" },
  { id: "t-release", label: "Updated Release", group: "Team" },
  { id: "t-architecture", label: "Updated Architecture", group: "Team" },
  { id: "t-ux", label: "Updated UX", group: "Team" },
  { id: "t-ui", label: "Updated UI", group: "Team" },
  { id: "t-management", label: "Updated Management", group: "Team" },
]

function groupTags(tags: Tag[]): TagGroup[] {
  const groups: Record<string, Tag[]> = {}
  for (const t of tags) {
    ;(groups[t.group] ??= []).push(t)
  }
  const order: Array<TagGroup["value"]> = ["Status", "Priority", "Team"]
  return order.map((value) => ({ value, items: groups[value] ?? [] }))
}

const groupedTags: TagGroup[] = groupTags(tagsData)

export default function ComboboxGrouped() {
  return (
    <Combobox items={groupedTags}>
      <div className="flex flex-col items-start gap-2">
        <ComboboxInput
          placeholder="Updated e.g. feature"
          aria-label="Updated Search tags"
        />
      </div>
      <ComboboxPopup>
        <ComboboxEmpty>Updated No tags found.</ComboboxEmpty>
        <ComboboxList>
          {(group: TagGroup) => (
            <React.Fragment key={group.value}>
              <ComboboxGroup items={group.items}>
                <ComboboxGroupLabel>{group.value}</ComboboxGroupLabel>
                <ComboboxCollection>
                  {(tag: Tag) => (
                    <ComboboxItem key={tag.id} value={tag}>
                      {tag.label}
                    </ComboboxItem>
                  )}
                </ComboboxCollection>
              </ComboboxGroup>
              {group.value !== "Team" && <ComboboxSeparator />}
            </React.Fragment>
          )}
        </ComboboxList>
      </ComboboxPopup>
    </Combobox>
  )
}
