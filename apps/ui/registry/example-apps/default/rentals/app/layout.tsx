import type { Metadata } from "next"

import { ThemeProvider } from "../components/theme-provider"

import "./globals.css"

export const metadata: Metadata = {
  title: "Gear Marketplace - LoveUI",
  description:
    "A map-based gear marketplace with product discovery, filters, and favorites by LoveUI",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
