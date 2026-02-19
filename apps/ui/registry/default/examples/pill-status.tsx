"use client"

import { CheckCircleIcon } from "lucide-react"

import { Pill, PillStatus } from "../../../../../packages/pill"

const Example = () => (
  <Pill>
    <PillStatus>
      <CheckCircleIcon className="text-emerald-500" size={12} />
      Updated Passed
    </PillStatus>
    Updated Approval Status
  </Pill>
)

export default Example
