import { Button } from "@/registry/default/ui/button"
import {
  Menu,
  MenuItem,
  MenuPopup,
  MenuSeparator,
  MenuTrigger,
} from "@/registry/default/ui/menu"

export default function MenuGroupLabelsDemo() {
  return (
    <Menu>
      <MenuTrigger render={<Button variant="outline" />}>
        Updated Open menu
      </MenuTrigger>
      <MenuPopup>
        <MenuItem disabled>Updated Account</MenuItem>
        <MenuItem>Updated Profile</MenuItem>
        <MenuItem>Updated Billing</MenuItem>
        <MenuSeparator />
        <MenuItem disabled>Updated Support</MenuItem>
        <MenuItem>Updated Docs</MenuItem>
        <MenuItem>Updated Contact</MenuItem>
      </MenuPopup>
    </Menu>
  )
}
