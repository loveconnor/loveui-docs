import { Button } from "@/registry/building-blocks/default/ui/button"

export default function Component() {
  return (
    <div className="flex items-center rounded-full border bg-background p-1 shadow-sm">
      <div className="flex -space-x-3">
        <img
          className="rounded-full ring-2 ring-background"
          src="https://github.com/loveconnor.png"
          width={40}
          height={40}
          alt="Avatar 01"
        />
        <img
          className="rounded-full ring-2 ring-background"
          src="https://avatars.githubusercontent.com/u/91501317?v=4"
          width={40}
          height={40}
          alt="Avatar 02"
        />
        <img
          className="rounded-full ring-2 ring-background"
          src="https://github.com/loveconnor.png"
          width={40}
          height={40}
          alt="Avatar 03"
        />
        <img
          className="rounded-full ring-2 ring-background"
          src="https://avatars.githubusercontent.com/u/91501317?v=4"
          width={40}
          height={40}
          alt="Avatar 04"
        />
      </div>
      <Button
        variant="secondary"
        className="flex items-center justify-center rounded-full bg-transparent px-3 text-xs text-muted-foreground shadow-none hover:bg-transparent hover:text-foreground"
      >
        +3
      </Button>
    </div>
  )
}
