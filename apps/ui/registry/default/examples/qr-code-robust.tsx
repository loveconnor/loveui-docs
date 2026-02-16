"use client"

import type { ComponentProps } from "react"

import { QRCode } from "../../../../../packages/qr-code"

const robustnessOptions: ComponentProps<typeof QRCode>["robustness"][] = [
  "L",
  "M",
  "Q",
  "H",
]

const Example = () => (
  <div className="grid grid-cols-4 gap-4">
    {robustnessOptions.map((robustness) => (
      <div className="flex flex-col items-center gap-2" key={robustness}>
        <QRCode data="https://www.loveconnor.com/" robustness={robustness} />
        <p className="text-sm font-medium text-muted-foreground">
          {robustness}
        </p>
      </div>
    ))}
  </div>
)

export default Example
