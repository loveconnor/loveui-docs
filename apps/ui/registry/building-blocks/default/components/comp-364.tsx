import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/registry/building-blocks/default/ui/hover-card"

export default function HoverCardDemo() {
  return (
    <HoverCard>
      <div className="flex items-center gap-3">
        <img
          className="shrink-0 rounded-full"
          src="https://github.com/loveconnor.png"
          width={40}
          height={40}
          alt="Avatar"
        />
        <div className="space-y-0.5">
          <HoverCardTrigger asChild>
            <p>
              <a className="text-sm font-medium hover:underline" href="#">
                Connor Love
              </a>
            </p>
          </HoverCardTrigger>
          <p className="text-xs text-muted-foreground">@loveconnor</p>
        </div>
      </div>
      <HoverCardContent>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <img
              className="shrink-0 rounded-full"
              src="https://avatars.githubusercontent.com/u/91501317?v=4"
              width={40}
              height={40}
              alt="Avatar"
            />
            <div className="space-y-0.5">
              <p className="text-sm font-medium">Connor Love</p>
              <p className="text-xs text-muted-foreground">@loveconnor</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            Designer at{" "}
            <strong className="font-medium text-foreground">@loveui</strong>.
            Crafting web experiences with Tailwind CSS.
          </p>
          <div className="flex items-center gap-2">
            <div className="flex -space-x-1.5">
              <img
                className="rounded-full ring-1 ring-background"
                src="https://github.com/loveconnor.png"
                width={20}
                height={20}
                alt="Friend 01"
              />
              <img
                className="rounded-full ring-1 ring-background"
                src="https://avatars.githubusercontent.com/u/91501317?v=4"
                width={20}
                height={20}
                alt="Friend 02"
              />
              <img
                className="rounded-full ring-1 ring-background"
                src="https://github.com/loveconnor.png"
                width={20}
                height={20}
                alt="Friend 03"
              />
            </div>
            <div className="text-xs text-muted-foreground">
              3 mutual friends
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
