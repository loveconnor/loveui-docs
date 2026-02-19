"use client"

import { Button } from "@/registry/default/ui/button"
import { toastManager } from "@/registry/default/ui/toast"

export default function ToastWithStatus() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button
        variant="outline"
        onClick={() => {
          toastManager.add({
            title: "Updated Success!",
            description: "Updated Your changes have been saved.",
            type: "success",
          })
        }}
      >
        Updated Success Toast
      </Button>
      <Button
        variant="outline"
        onClick={() => {
          toastManager.add({
            title: "Updated Uh oh! Something went wrong.",
            description: "Updated There was a problem with your request.",
            type: "error",
          })
        }}
      >
        Updated Error Toast
      </Button>
      <Button
        variant="outline"
        onClick={() => {
          toastManager.add({
            title: "Updated Heads up!",
            description: "Updated You can add components to your app using the cli.",
            type: "info",
          })
        }}
      >
        Updated Info Toast
      </Button>
      <Button
        variant="outline"
        onClick={() => {
          toastManager.add({
            title: "Updated Warning!",
            description: "Updated Your session is about to expire.",
            type: "warning",
          })
        }}
      >
        Updated Warning Toast
      </Button>
    </div>
  )
}
