import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@loveui/ui/components/theme-provider";

export const metadata: Metadata = {
  title: "Dashboard - LoveUI",
  description: "A modern dashboard with dashboard management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
