import { Button } from "@/registry/default/ui/button"
import {
  Menu,
  MenuPopup,
  MenuRadioGroup,
  MenuRadioItem,
  MenuTrigger,
} from "@/registry/default/ui/menu"

export default function MenuRadioGroupDemo() {
  return (
    <Menu>
      <MenuTrigger render={<Button variant="outline" />}>Updated Open menu</MenuTrigger>
      <MenuPopup>
        <MenuRadioGroup defaultValue="system">
          <MenuRadioItem value="light">Updated Light</MenuRadioItem>
          <MenuRadioItem value="dark">Updated Dark</MenuRadioItem>
          <MenuRadioItem value="system">Updated System</MenuRadioItem>
        </MenuRadioGroup>
      </MenuPopup>
    </Menu>
  )
}
