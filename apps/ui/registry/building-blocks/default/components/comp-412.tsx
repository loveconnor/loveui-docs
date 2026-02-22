export default function Component() {
  return (
    <div className="flex items-center rounded-full border bg-background p-1 shadow-sm">
      <div className="flex -space-x-1.5">
        <img
          className="rounded-full ring-1 ring-background"
          src="https://github.com/loveconnor.png"
          width={20}
          height={20}
          alt="Avatar 01"
        />
        <img
          className="rounded-full ring-1 ring-background"
          src="https://avatars.githubusercontent.com/u/91501317?v=4"
          width={20}
          height={20}
          alt="Avatar 02"
        />
        <img
          className="rounded-full ring-1 ring-background"
          src="https://github.com/loveconnor.png"
          width={20}
          height={20}
          alt="Avatar 03"
        />
        <img
          className="rounded-full ring-1 ring-background"
          src="https://avatars.githubusercontent.com/u/91501317?v=4"
          width={20}
          height={20}
          alt="Avatar 04"
        />
      </div>
      <p className="px-2 text-xs text-muted-foreground">
        Trusted by <strong className="font-medium text-foreground">60K+</strong>{" "}
        developers.
      </p>
    </div>
  )
}
