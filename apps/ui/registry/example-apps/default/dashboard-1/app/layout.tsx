import type { Metadata } from "next"

import "./globals.css"

import { ThemeProvider } from "@loveui/ui/components/theme-provider"

export const metadata: Metadata = {
  title: "Dashboard 3 - LoveUI",
  description: "HR Dashboard template built with Next.js and shadcn/ui",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-[#f3f3f3] antialiased dark:bg-background">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
