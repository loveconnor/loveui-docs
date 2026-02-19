"use client"

import { Pill, PillDelta } from "../../../../../packages/pill"

const Example = () => (
  <>
    <Pill>
      <PillDelta delta={10} />
      Updated Up 10%
    </Pill>
    <Pill>
      <PillDelta delta={-5} />
      Updated Down 5%
    </Pill>
    <Pill>
      <PillDelta delta={0} />
      Updated No change
    </Pill>
  </>
)

export default Example
