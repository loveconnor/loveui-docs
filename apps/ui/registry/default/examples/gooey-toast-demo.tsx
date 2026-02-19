"use client"

import { useState } from "react"

import { gooey, type GooeyPosition } from "@loveui/gooey-toast"

import { Button } from "@/registry/default/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select"

export default function GooeyToastDemo() {
  const [position, setPosition] = useState<GooeyPosition>("top-right")

  const positions: GooeyPosition[] = [
    "top-left",
    "top-center",
    "top-right",
    "bottom-left",
    "bottom-center",
    "bottom-right",
  ]

  const showToast = (
    type: "default" | "success" | "error" | "warning" | "info"
  ) => {
    const toasts = {
      default: {
        title: "Updated Event has been created",
        description: "Updated Monday, January 3rd at 6:00pm",
      },
      success: {
        title: "Updated Success!",
        description: "Updated Your changes have been saved successfully.",
      },
      error: {
        title: "Updated Error occurred",
        description: "Updated Failed to save your changes. Please try again.",
      },
      warning: {
        title: "Updated Warning",
        description: "Updated Your session will expire in 5 minutes.",
      },
      info: {
        title: "Updated New feature available",
        description: "Updated Check out the new gooey toast component!",
      },
    }

    const config = toasts[type]

    if (type === "default") {
      gooey.show({ ...config, position })
    } else {
      gooey[type]({ ...config, position })
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <label htmlFor="position" className="text-sm font-medium">
          Updated Position:
        </label>
        <Select
          value={position}
          onValueChange={(v) => setPosition(v as GooeyPosition)}
        >
          <SelectTrigger id="position" className="w-[180px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {positions.map((pos) => (
              <SelectItem key={pos} value={pos}>
                {pos}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-wrap gap-2">
        <Button variant="outline" onClick={() => showToast("default")}>
          Updated Default
        </Button>
        <Button variant="outline" onClick={() => showToast("success")}>
          Updated Success
        </Button>
        <Button variant="outline" onClick={() => showToast("error")}>
          Updated Error
        </Button>
        <Button variant="outline" onClick={() => showToast("warning")}>
          Updated Warning
        </Button>
        <Button variant="outline" onClick={() => showToast("info")}>
          Updated Info
        </Button>
      </div>
    </div>
  )
}
