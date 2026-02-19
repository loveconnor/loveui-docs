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
          src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=96&h=96&dpr=2&q=80"
          alt="Updated U1"
        />
        <AvatarFallback>Updated U1</AvatarFallback>
      </Avatar>
      <Avatar className="ring-2 ring-background">
        <AvatarImage
          src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?w=96&h=96&dpr=2&q=80"
          alt="Updated U2"
        />
        <AvatarFallback>Updated U2</AvatarFallback>
      </Avatar>
      <Avatar className="ring-2 ring-background">
        <AvatarImage
          src="https://images.unsplash.com/photo-1655874819398-c6dfbec68ac7?w=96&h=96&dpr=2&q=80"
          alt="Updated U3"
        />
        <AvatarFallback>Updated U3</AvatarFallback>
      </Avatar>
    </div>
  )
}
