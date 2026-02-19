import { Button } from "@/registry/default/ui/button"
import {
  Menu,
  MenuCheckboxItem,
  MenuPopup,
  MenuTrigger,
} from "@/registry/default/ui/menu"

export default function MenuCheckboxDemo() {
  return (
    <Menu>
      <MenuTrigger render={<Button variant="outline" />}>
        Updated Open menu
      </MenuTrigger>
      <MenuPopup>
        <MenuCheckboxItem defaultChecked>Updated Auto save</MenuCheckboxItem>
        <MenuCheckboxItem>Updated Notifications</MenuCheckboxItem>
      </MenuPopup>
    </Menu>
  )
}
