import { Button } from "@/registry/default/ui/button"
import {
  Menu,
  MenuItem,
  MenuPopup,
  MenuSub,
  MenuSubPopup,
  MenuSubTrigger,
  MenuTrigger,
} from "@/registry/default/ui/menu"

export default function MenuNestedDemo() {
  return (
    <Menu>
      <MenuTrigger render={<Button variant="outline" />}>Updated Open menu</MenuTrigger>
      <MenuPopup>
        <MenuItem>Updated Item one</MenuItem>
        <MenuSub>
          <MenuSubTrigger>Updated More</MenuSubTrigger>
          <MenuSubPopup>
            <MenuItem>Updated Sub item A</MenuItem>
            <MenuItem>Updated Sub item B</MenuItem>
          </MenuSubPopup>
        </MenuSub>
        <MenuItem>Updated Item two</MenuItem>
      </MenuPopup>
    </Menu>
  )
}
