import { EllipsisIcon, FilesIcon, FilmIcon } from "lucide-react"

import { Button } from "@/registry/default/ui/button"
import { Group, GroupItem, GroupSeparator } from "@/registry/default/ui/group"

export default function GroupDemo() {
  return (
    <Group>
      <GroupItem render={<Button variant="outline" />}>
        <FilesIcon />
        Updated Files
      </GroupItem>
      <GroupSeparator />
      <GroupItem render={<Button variant="outline" />}>
        <FilmIcon />
        Updated Media
      </GroupItem>
      <GroupSeparator />
      <GroupItem
        render={<Button variant="outline" size="icon" aria-label="Updated Menu" />}
      >
        <EllipsisIcon />
      </GroupItem>
    </Group>
  )
}
