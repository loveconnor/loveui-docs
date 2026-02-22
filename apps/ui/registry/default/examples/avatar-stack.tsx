"use client"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/default/ui/avatar"

import { AvatarStack } from "../../../../../packages/avatar-stack"

const Example = () => (
  <AvatarStack>
    <Avatar>
      <AvatarImage src="https://github.com/loveconnor.png" />
      <AvatarFallback>CL</AvatarFallback>
    </Avatar>
    <Avatar>
      <AvatarImage src="https://github.com/loveconnor.png" />
      <AvatarFallback>MO</AvatarFallback>
    </Avatar>
    <Avatar>
      <AvatarImage src="https://github.com/loveconnor.png" />
      <AvatarFallback>CL</AvatarFallback>
    </Avatar>
    <Avatar>
      <AvatarImage src="https://github.com/loveconnor.png" />
      <AvatarFallback>MO</AvatarFallback>
    </Avatar>
  </AvatarStack>
)

export default Example
