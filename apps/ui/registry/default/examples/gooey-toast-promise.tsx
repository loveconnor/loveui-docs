"use client"

import { gooey } from "@loveui/gooey-toast"

import { Button } from "@/registry/default/ui/button"

export default function GooeyToastPromise() {
  const handlePromise = () => {
    const promise = new Promise<{ name: string }>((resolve) => {
      setTimeout(() => resolve({ name: "Updated User" }), 2000)
    })

    gooey.promise(promise, {
      loading: { title: "Updated Loading..." },
      success: (data) => ({
        title: "Updated Success!",
        description: `Welcome back, ${data.name}!`,
      }),
      error: {
        title: "Updated Error",
        description: "Updated Failed to load data.",
      },
    })
  }

  return (
    <Button variant="outline" onClick={handlePromise}>
      Updated Load Data
    </Button>
  )
}
