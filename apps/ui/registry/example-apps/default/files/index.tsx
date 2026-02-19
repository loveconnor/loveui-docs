/**
 * Wrapper export for embedding the app in the docs app
 */
"use client"

import { SidebarProvider } from "@/components/ui/sidebar"

import { FilesContent } from "./components/files/content"
import { FilesHeader } from "./components/files/header"
import { FilesSidebar } from "./components/files/sidebar"

export default function FilesWrapper() {
  return (
    <SidebarProvider className="bg-sidebar">
      <FilesSidebar />
      <div className="h-full min-h-0 w-full overflow-hidden lg:p-2">
        <div className="flex h-full min-h-0 w-full flex-col items-center justify-start overflow-hidden bg-background lg:rounded-xl lg:border">
          <FilesHeader />
          <FilesContent view="all" />
        </div>
      </div>
    </SidebarProvider>
  )
}
