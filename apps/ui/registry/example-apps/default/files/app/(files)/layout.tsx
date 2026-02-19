import { SidebarProvider } from "@/components/ui/sidebar"

import { FilesHeader } from "../../components/files/header"
import { FilesSidebar } from "../../components/files/sidebar"

export default function FilesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider className="bg-sidebar">
      <FilesSidebar />
      <div className="h-svh w-full overflow-hidden lg:p-2">
        <div className="flex h-full w-full flex-col items-center justify-start overflow-hidden bg-background lg:rounded-xl lg:border">
          <FilesHeader />
          {children}
        </div>
      </div>
    </SidebarProvider>
  )
}
