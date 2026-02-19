import { SidebarProvider } from "@/components/ui/sidebar"

import { ArchiveContent } from "../../components/dashboard/archive-content"
import { BookmarksHeader } from "../../components/dashboard/header"
import { BookmarksSidebar } from "../../components/dashboard/sidebar"

export default function ArchivePage() {
  return (
    <SidebarProvider className="bg-sidebar">
      <BookmarksSidebar />
      <div className="h-svh w-full overflow-hidden lg:p-2">
        <div className="bg-container flex h-full w-full flex-col items-center justify-start overflow-hidden bg-background lg:rounded-md lg:border">
          <BookmarksHeader title="Archive" />
          <ArchiveContent />
        </div>
      </div>
    </SidebarProvider>
  )
}
