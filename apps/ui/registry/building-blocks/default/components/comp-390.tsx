import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/building-blocks/default/ui/avatar"

export default function Component() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/loveconnor.png" alt="Kelly King" />
      <AvatarFallback>CL</AvatarFallback>
    </Avatar>
  )
}
