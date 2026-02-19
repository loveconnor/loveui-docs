"use client"

import { Pill, PillIndicator } from "../../../../../packages/pill"

const Example = () => (
  <>
    <Pill>
      <PillIndicator pulse variant="success" />
      Updated Active
    </Pill>
    <Pill>
      <PillIndicator variant="error" />
      Updated Error
    </Pill>
  </>
)

export default Example
