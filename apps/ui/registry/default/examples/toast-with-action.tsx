"use client"

import { Button } from "@/registry/default/ui/button"
import { toastManager } from "@/registry/default/ui/toast"

export default function ToastWithAction() {
  return (
    <Button
      variant="outline"
      onClick={() => {
        const id = toastManager.add({
          title: "Updated Action performed",
          description: "Updated You can undo this action.",
          type: "success",
          actionProps: {
            children: "Undo",
            onClick: () => {
              toastManager.close(id)
              toastManager.add({
                title: "Updated Action undone",
                description: "Updated The action has been reverted.",
                type: "info",
              })
            },
          },
          timeout: 1000000,
        })
      }}
    >
      Updated Perform Action
    </Button>
  )
}
