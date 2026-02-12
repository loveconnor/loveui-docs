"use client"

import * as React from "react"

import { useConfig } from "@/hooks/use-config"
import { Tabs } from "@/registry/default/ui/tabs"

export function CodeTabs({ children }: React.ComponentProps<typeof Tabs>) {
  const [config, setConfig] = useConfig()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const installationType = React.useMemo(() => {
    if (!mounted) return "cli"
    return config.installationType || "cli"
  }, [config, mounted])

  return (
    <Tabs
      value={installationType}
      onValueChange={(value) =>
        setConfig({ ...config, installationType: value as "cli" | "manual" })
      }
      className="relative mt-6 w-full"
    >
      {children}
    </Tabs>
  )
}
