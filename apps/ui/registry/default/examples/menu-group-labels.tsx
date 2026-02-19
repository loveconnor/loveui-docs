import { Button } from "@/registry/default/ui/button"
import {
  Menu,
  MenuGroup,
  MenuGroupLabel,
  MenuItem,
  MenuPopup,
  MenuSeparator,
  MenuTrigger,
} from "@/registry/default/ui/menu"

export default function MenuGroupLabelsDemo() {
  return (
    <Menu>
      <MenuTrigger render={<Button variant="outline" />}>Updated Open menu</MenuTrigger>
      <MenuPopup>
        <MenuGroup>
          <MenuGroupLabel>Updated Account</MenuGroupLabel>
          <MenuItem>Updated Profile</MenuItem>
          <MenuItem>Updated Billing</MenuItem>
        </MenuGroup>
        <MenuSeparator />
        <MenuGroup>
          <MenuGroupLabel>Updated Support</MenuGroupLabel>
          <MenuItem>Updated Docs</MenuItem>
          <MenuItem>Updated Contact</MenuItem>
        </MenuGroup>
      </MenuPopup>
    </Menu>
  )
}
