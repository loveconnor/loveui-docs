"use client"

import { UsersIcon } from "lucide-react"

import { Pill, PillIcon } from "../../../../../packages/pill"

const Example = () => (
  <Pill>
    <PillIcon icon={UsersIcon} />
    Updated 17 users
  </Pill>
)

export default Example
