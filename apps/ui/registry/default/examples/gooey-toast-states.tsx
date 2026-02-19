"use client"

import { gooey } from "@loveui/gooey-toast"

import { Button } from "@/registry/default/ui/button"

export default function GooeyToastStates() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button
        variant="outline"
        onClick={() => {
          gooey.success({
            title: "Updated Success!",
            description: "Updated Your changes have been saved.",
          })
        }}
      >
        Updated Success
      </Button>
      <Button
        variant="outline"
        onClick={() => {
          gooey.error({
            title: "Updated Error",
            description: "Updated Something went wrong. Please try again.",
          })
        }}
      >
        Updated Error
      </Button>
      <Button
        variant="outline"
        onClick={() => {
          gooey.warning({
            title: "Updated Warning",
            description: "Updated This action cannot be undone.",
          })
        }}
      >
        Updated Warning
      </Button>
      <Button
        variant="outline"
        onClick={() => {
          gooey.info({
            title: "Updated Did you know?",
            description: "Updated You can customize toast animations.",
          })
        }}
      >
        Updated Info
      </Button>
      <Button
        variant="outline"
        onClick={() => {
          gooey.action({
            title: "Updated Action Required",
            description: "Updated Please review your settings.",
          })
        }}
      >
        Updated Action
      </Button>
    </div>
  )
}
