import { Button } from "@/registry/default/ui/button"
import {
  Menu,
  MenuItem,
  MenuPopup,
  MenuTrigger,
} from "@/registry/default/ui/menu"

export default function MenuCloseOnClickDemo() {
  return (
    <Menu>
      <MenuTrigger render={<Button variant="outline" />}>
        Updated Open menu
      </MenuTrigger>
      <MenuPopup>
        <MenuItem closeOnClick>Updated Profile</MenuItem>
        <MenuItem closeOnClick>Updated Settings</MenuItem>
        <MenuItem closeOnClick>Updated Log out</MenuItem>
      </MenuPopup>
    </Menu>
  )
}
