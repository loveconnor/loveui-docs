import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/default/ui/avatar"

export default function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage
        src="https://github.com/loveconnor.png"
        alt="Luke Tracy"
      />
      <AvatarFallback>LT</AvatarFallback>
    </Avatar>
  )
}
