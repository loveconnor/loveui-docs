import { SidebarProvider } from "@/components/ui/sidebar"

import { BookmarksContent } from "../components/dashboard/content"
import { BookmarksHeader } from "../components/dashboard/header"
import { BookmarksSidebar } from "../components/dashboard/sidebar"

export default function BookmarksPage() {
  return (
    <SidebarProvider className="bg-sidebar">
      <BookmarksSidebar />
      <div className="h-svh w-full overflow-hidden lg:p-2">
        <div className="bg-container flex h-full w-full flex-col items-center justify-start overflow-hidden bg-background lg:rounded-md lg:border">
          <BookmarksHeader />
          <BookmarksContent />
        </div>
      </div>
    </SidebarProvider>
  )
}
