/**
 * Wrapper export for embedding the dashboard in the docs app
 */
"use client";

import { DashboardSidebar } from "./components/dashboard/sidebar";
import { DashboardHeader } from "./components/dashboard/header";
import { DashboardContent } from "./components/dashboard/content";
import { SidebarProvider } from "./components/ui/sidebar";
import { ThemeProvider } from "./components/theme-provider";

export default function Dashboard1Wrapper() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <SidebarProvider className="bg-sidebar">
        <DashboardSidebar />
        <div className="h-full min-h-0 w-full overflow-hidden lg:px-2 lg:pb-2">
          <div className="lg:border lg:rounded-md overflow-hidden flex h-full min-h-0 w-full flex-col items-center justify-start bg-container bg-background">
            <DashboardHeader />
            <DashboardContent />
          </div>
        </div>
      </SidebarProvider>
    </ThemeProvider>
  );
}
