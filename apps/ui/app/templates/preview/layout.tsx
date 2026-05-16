import "../../globals.css"

import { ThemeProvider } from "@loveui/ui/components/theme-provider"

import { loveMono, loveSans } from "@/lib/fonts"

export default function PreviewLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${loveSans.variable} ${loveMono.variable} bg-background font-sans text-foreground antialiased`}
      >
        <ThemeProvider defaultTheme="dark">{children}</ThemeProvider>
      </body>
    </html>
  )
}
