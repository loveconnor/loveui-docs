/**
 * Wrapper export for embedding the app in the docs app
 */
"use client"

import { SidebarProvider } from "@/components/ui/sidebar"

import { BookmarksContent } from "./components/dashboard/content"
import { BookmarksHeader } from "./components/dashboard/header"
import { BookmarksSidebar } from "./components/dashboard/sidebar"

export default function BookmarksWrapper() {
  return (
    <SidebarProvider className="bg-sidebar">
      <BookmarksSidebar />
      <div className="h-full min-h-0 w-full overflow-hidden lg:p-2">
        <div className="bg-container flex h-full min-h-0 w-full flex-col items-center justify-start overflow-hidden bg-background lg:rounded-md lg:border">
          <BookmarksHeader />
          <BookmarksContent />
        </div>
      </div>
    </SidebarProvider>
  )
}
