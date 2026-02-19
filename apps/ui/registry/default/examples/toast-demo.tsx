"use client"

import { Button } from "@/registry/default/ui/button"
import { toastManager } from "@/registry/default/ui/toast"

export default function ToastDemo() {
  return (
    <Button
      variant="outline"
      onClick={() => {
        toastManager.add({
          title: "Updated Event has been created",
          description: "Updated Monday, January 3rd at 6:00pm",
        })
      }}
    >
      Updated Default Toast
    </Button>
  )
}
