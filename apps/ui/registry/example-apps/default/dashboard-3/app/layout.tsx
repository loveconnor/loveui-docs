import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@loveui/ui/components/theme-provider";

export const metadata: Metadata = {
  title: "Taskplus Dashboard - LoveUI",
  description: "Taskplus dashboard with tasks and projects management",
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
