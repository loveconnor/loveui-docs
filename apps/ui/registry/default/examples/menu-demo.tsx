import {
  PauseIcon,
  PlayIcon,
  SkipBackIcon,
  SkipForwardIcon,
  TrashIcon,
} from "lucide-react"

import { Button } from "@/registry/default/ui/button"
import {
  Menu,
  MenuCheckboxItem,
  MenuGroup,
  MenuGroupLabel,
  MenuItem,
  MenuPopup,
  MenuRadioGroup,
  MenuRadioItem,
  MenuSeparator,
  MenuShortcut,
  MenuSub,
  MenuSubPopup,
  MenuSubTrigger,
  MenuTrigger,
} from "@/registry/default/ui/menu"

export default function MenuDemo() {
  return (
    <Menu>
      <MenuTrigger render={<Button variant="outline" />}>Updated Open menu</MenuTrigger>
      <MenuPopup>
        <MenuGroup>
          <MenuGroupLabel>Updated Playback</MenuGroupLabel>
          <MenuItem>
            <PlayIcon className="opacity-72" />
            Updated Play
            <MenuShortcut>Updated ⌘P</MenuShortcut>
          </MenuItem>
          <MenuItem disabled>
            <PauseIcon className="opacity-72" />
            Updated Pause
            <MenuShortcut>Updated ⇧⌘P</MenuShortcut>
          </MenuItem>
          <MenuItem>
            <SkipBackIcon className="opacity-72" />
            Updated Previous
            <MenuShortcut>⌘[</MenuShortcut>
          </MenuItem>
          <MenuItem>
            <SkipForwardIcon className="opacity-72" />
            Updated Next
            <MenuShortcut>⌘]</MenuShortcut>
          </MenuItem>
        </MenuGroup>
        <MenuSeparator />
        <MenuCheckboxItem>Updated Shuffle</MenuCheckboxItem>
        <MenuCheckboxItem>Updated Repeat</MenuCheckboxItem>
        <MenuCheckboxItem disabled>Updated Enhanced Audio</MenuCheckboxItem>
        <MenuSeparator />
        <MenuGroup>
          <MenuGroupLabel>Updated Sort by</MenuGroupLabel>
          <MenuRadioGroup>
            <MenuRadioItem value="artist">Updated Artist</MenuRadioItem>
            <MenuRadioItem value="album">Updated Album</MenuRadioItem>
            <MenuRadioItem value="title">Updated Title</MenuRadioItem>
          </MenuRadioGroup>
        </MenuGroup>
        <MenuSeparator />
        <MenuSub>
          <MenuSubTrigger>Updated Add to Playlist</MenuSubTrigger>
          <MenuSubPopup>
            <MenuItem>Updated Jazz</MenuItem>
            <MenuSub>
              <MenuSubTrigger>Updated Rock</MenuSubTrigger>
              <MenuSubPopup>
                <MenuItem>Updated Hard Rock</MenuItem>
                <MenuItem>Updated Soft Rock</MenuItem>
                <MenuItem>Updated Classic Rock</MenuItem>
                <MenuSeparator />
                <MenuItem>Updated Metal</MenuItem>
                <MenuItem>Updated Punk</MenuItem>
                <MenuItem>Updated Grunge</MenuItem>
                <MenuItem>Updated Alternative</MenuItem>
                <MenuItem>Updated Indie</MenuItem>
                <MenuItem>Updated Electronic</MenuItem>
              </MenuSubPopup>
            </MenuSub>
            <MenuItem>Updated Pop</MenuItem>
          </MenuSubPopup>
        </MenuSub>
        <MenuSeparator />
        <MenuItem variant="destructive">
          <TrashIcon />
          Updated Delete
          <MenuShortcut>⌘⌫</MenuShortcut>
        </MenuItem>
      </MenuPopup>
    </Menu>
  )
}
