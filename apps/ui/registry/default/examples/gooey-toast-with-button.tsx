"use client"

import { gooey } from "@loveui/gooey-toast"

import { Button } from "@/registry/default/ui/button"

export default function GooeyToastWithButton() {
  return (
    <Button
      variant="outline"
      onClick={() => {
        const id = gooey.action({
          title: "Updated File deleted",
          description: "Updated Your file has been moved to trash.",
          button: {
            title: "Updated Undo",
            onClick: () => {
              gooey.dismiss(id)
              gooey.success({
                title: "Updated Restored",
                description: "Updated Your file has been restored.",
              })
            },
          },
        })
      }}
    >
      Updated Delete File
    </Button>
  )
}
