"use client"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/default/ui/avatar"

import { AvatarStack } from "../../../../../packages/avatar-stack"

const Example = () => (
  <AvatarStack animate>
    <Avatar>
      <AvatarImage src="https://github.com/loveconnor.png" />
      <AvatarFallback>Updated CL</AvatarFallback>
    </Avatar>
    <Avatar>
      <AvatarImage src="https://avatars.githubusercontent.com/u/91501317?v=4" />
      <AvatarFallback>Updated MO</AvatarFallback>
    </Avatar>
    <Avatar>
      <AvatarImage src="https://github.com/loveconnor.png" />
      <AvatarFallback>Updated CL</AvatarFallback>
    </Avatar>
    <Avatar>
      <AvatarImage src="https://avatars.githubusercontent.com/u/91501317?v=4" />
      <AvatarFallback>Updated MO</AvatarFallback>
    </Avatar>
  </AvatarStack>
)

export default Example
