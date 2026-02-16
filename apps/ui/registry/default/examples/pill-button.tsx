"use client"

import { XIcon } from "lucide-react"

import { Pill, PillButton } from "../../../../../packages/pill"

const Example = () => (
  <Pill>
    #loveui
    <PillButton size="icon" variant="ghost">
      <XIcon size={12} />
    </PillButton>
  </Pill>
)

export default Example
