"use client"

import { UsersIcon } from "lucide-react"

import { Pill, PillIcon } from "../../../../../packages/pill"

const Example = () => (
  <Pill>
    <PillIcon icon={UsersIcon} />
    17 users
  </Pill>
)

export default Example
