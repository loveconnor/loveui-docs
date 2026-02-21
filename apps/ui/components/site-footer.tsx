import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="flex flex-col gap-0.5">
      <p>
        <Link href="/" className="font-heading font-bold text-lg text-foreground">
          LoveUI
        </Link>
      </p>
      <p className="text-sm text-muted-foreground">
        Built by {" "}
        <a
          className="font-medium underline-offset-4 hover:underline"
          href="https://connorlove.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Connor Love
        </a>
      </p>
    </footer>
  )
}
