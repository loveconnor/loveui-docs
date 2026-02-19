import { Button } from "@/registry/default/ui/button"
import {
  Menu,
  MenuItem,
  MenuPopup,
  MenuTrigger,
} from "@/registry/default/ui/menu"

export default function MenuHoverDemo() {
  return (
    <Menu openOnHover>
      <MenuTrigger render={<Button variant="outline" />}>
        Updated Hover me
      </MenuTrigger>
      <MenuPopup>
        <MenuItem>Updated Item one</MenuItem>
        <MenuItem>Updated Item two</MenuItem>
      </MenuPopup>
    </Menu>
  )
}
