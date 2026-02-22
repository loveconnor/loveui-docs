import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/default/ui/avatar"

export default function AvatarSizeDemo() {
  return (
    <div className="flex items-center gap-4">
      <Avatar>
        <AvatarImage
          src="https://github.com/loveconnor.png"
          alt="User"
        />
        <AvatarFallback>AV</AvatarFallback>
      </Avatar>
      <Avatar className="size-12">
        <AvatarImage
          src="https://github.com/loveconnor.png"
          alt="User"
        />
        <AvatarFallback>AV</AvatarFallback>
      </Avatar>
      <Avatar className="size-16">
        <AvatarImage
          src="https://github.com/loveconnor.png"
          alt="User"
        />
        <AvatarFallback>AV</AvatarFallback>
      </Avatar>
    </div>
  )
}
