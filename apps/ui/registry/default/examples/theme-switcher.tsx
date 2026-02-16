"use client"

import { useState } from "react"

import { ThemeSwitcher } from "../../../../../packages/theme-switcher"

const Example = () => {
  const [theme, setTheme] = useState<"light" | "dark" | "system">("system")

  return (
    <ThemeSwitcher defaultValue="system" onChange={setTheme} value={theme} />
  )
}

export default Example
