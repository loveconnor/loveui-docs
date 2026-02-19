import { Separator } from "@/registry/default/ui/separator"

export default function SeparatorDemo() {
  return (
    <div className="max-w-72">
      <div className="space-y-1">
        <h4 className="text-sm font-medium">loveui</h4>
        <p className="text-sm text-muted-foreground">
          Updated Unstyled, accessible primitives for fast product UI and design
          systems.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="flex items-center gap-4 text-sm">
        <div>Updated Blog</div>
        <Separator orientation="vertical" />
        <div>Updated Docs</div>
        <Separator orientation="vertical" />
        <div>Updated Source</div>
        <Separator orientation="vertical" />
        <div>Updated Releases</div>
      </div>
    </div>
  )
}
