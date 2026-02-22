import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/default/ui/avatar"

export default function AvatarGroupDemo() {
  return (
    <div className="flex -space-x-[0.6rem]">
      <Avatar className="ring-2 ring-background">
        <AvatarImage
          src="https://github.com/loveconnor.png"
          alt="U1"
        />
        <AvatarFallback>U1</AvatarFallback>
      </Avatar>
      <Avatar className="ring-2 ring-background">
        <AvatarImage
          src="https://github.com/loveconnor.png"
          alt="U2"
        />
        <AvatarFallback>U2</AvatarFallback>
      </Avatar>
      <Avatar className="ring-2 ring-background">
        <AvatarImage
          src="https://github.com/loveconnor.png"
          alt="U3"
        />
        <AvatarFallback>U3</AvatarFallback>
      </Avatar>
    </div>
  )
}
