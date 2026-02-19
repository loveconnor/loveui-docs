import { SidebarProvider } from "@/components/ui/sidebar"

import { BookmarksHeader } from "../../components/dashboard/header"
import { BookmarksSidebar } from "../../components/dashboard/sidebar"
import { TrashContent } from "../../components/dashboard/trash-content"

export default function TrashPage() {
  return (
    <SidebarProvider className="bg-sidebar">
      <BookmarksSidebar />
      <div className="h-svh w-full overflow-hidden lg:p-2">
        <div className="bg-container flex h-full w-full flex-col items-center justify-start overflow-hidden bg-background lg:rounded-md lg:border">
          <BookmarksHeader title="Trash" />
          <TrashContent />
        </div>
      </div>
    </SidebarProvider>
  )
}
