import "./globals.css"

import type { Metadata } from "next"
import { Cal_Sans as FontHeading, Inter as FontSans } from "next/font/google"

import { ThemeProvider } from "@loveui/ui/components/theme-provider"

import { SiteHeader } from "@/components/site-header"
import { ToastProvider } from "@/registry/default/ui/toast"
import { Toaster } from "@loveui/gooey-toast"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontHeading = FontHeading({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: "400",
})

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
      <body
        className={`${fontSans.variable} ${fontHeading.variable} bg-sidebar font-sans text-foreground antialiased`}
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
