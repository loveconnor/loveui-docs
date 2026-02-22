import "./globals.css"

import type { Metadata } from "next"
import Script from "next/script"

import { ThemeProvider } from "@loveui/ui/components/theme-provider"

import { geistMono, geistSans } from "@/lib/fonts"
import { SiteHeader } from "@/components/site-header"
import { ToastProvider } from "@/registry/default/ui/toast"
import { Toaster } from "@loveui/gooey-toast"

export const metadata: Metadata = {
  metadataBase: new URL("https://loveui.dev"),
  title:
    "loveui - A new, modern UI component library built on top of Base UI. Built for developers and AI.",
  description:
    "loveui is a collection of accessible, and composable React components. Built on top of Base UI and styled with Tailwind CSS,",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script defer src="https://cloud.umami.is/script.js" data-website-id="dd5a0d5c-a40d-4c3b-9278-1cb0368dba2a" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-sidebar font-sans text-foreground antialiased`}
      >
        <ThemeProvider defaultTheme="dark">
          <ToastProvider>
            <div className="relative flex min-h-svh flex-col overflow-clip [--header-height:4rem] before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:bg-sidebar">
              <SiteHeader />
              {children}
            </div>
          </ToastProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
