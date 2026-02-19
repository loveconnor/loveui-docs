import type { Metadata } from "next"

import { ThemeProvider } from "../components/theme-provider"

import "./globals.css"

export const metadata: Metadata = {
  title: "Incident Mailbox - LoveUI",
  description:
    "Operations incident inbox with escalation and response workflows",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
