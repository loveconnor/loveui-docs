import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/default/ui/avatar"

export default function AvatarRadiusDemo() {
  return (
    <div className="flex items-center gap-4">
      <Avatar className="rounded-md">
        <AvatarImage
          src="https://github.com/loveconnor.png"
          alt="User"
        />
        <AvatarFallback>AV</AvatarFallback>
      </Avatar>
      <Avatar className="rounded-xl">
        <AvatarImage
          src="https://github.com/loveconnor.png"
          alt="User"
        />
        <AvatarFallback>AV</AvatarFallback>
      </Avatar>
      <Avatar className="rounded-full">
        <AvatarImage
          src="https://github.com/loveconnor.png"
          alt="User"
        />
        <AvatarFallback>AV</AvatarFallback>
      </Avatar>
    </div>
  )
}
