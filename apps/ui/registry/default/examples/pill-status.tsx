"use client"

import { CheckCircleIcon } from "lucide-react"

import { Pill, PillStatus } from "../../../../../packages/pill"

const Example = () => (
  <Pill>
    <PillStatus>
      <CheckCircleIcon className="text-emerald-500" size={12} />
      Passed
    </PillStatus>
    Approval Status
  </Pill>
)

export default Example
