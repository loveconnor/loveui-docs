import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/ui/button"
import {
  AudioLines,
  ChevronRight,
  Github,
  ImageIcon,
  Lightbulb,
  Mic2,
  Paperclip,
  Plus,
  ShoppingBag,
  Telescope,
} from "lucide-react"

export default function HeroSection() {
  return (
    <>
      <main className="overflow-hidden">
        <section className="bg-background">
          <div className="relative py-32">
            <div className="absolute inset-0 aspect-2/3 mask-t-from-50% mask-radial-[75%_100%] mask-radial-from-45% mask-radial-to-75% mask-radial-at-top md:aspect-square lg:aspect-9/4 dark:opacity-5">
              <Image
                src="/page-templates/hero-bg.jpg"
                alt="hero background"
                width={2268}
                height={1740}
                className="h-full w-full object-cover object-top"
              />
            </div>
            <div className="relative z-10 mx-auto w-full max-w-5xl px-6">
              <div
                aria-hidden
                className="mb-6 ml-auto max-w-3xl min-w-2xl scale-90 mask-radial-[75%_100%] mask-radial-from-65% mask-radial-to-90% mask-radial-at-left py-12 pl-6 perspective-near sm:mb-12 md:pl-12 lg:mb-20"
              >
                <div className="relative flex h-56 -rotate-12 rotate-x-12 rotate-y-2 rotate-z-10 flex-col rounded-3xl border bg-muted py-4 pl-4">
                  <div className="absolute bottom-15 left-4 min-w-56 rounded-2xl bg-card p-1 shadow-xl ring-1 shadow-foreground/10 ring-border dark:shadow-black/25">
                    <div className="flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2 text-sm hover:bg-muted [&>svg]:size-4 [&>svg]:opacity-65">
                      <Paperclip />
                      <span>Add docs and assets</span>
                    </div>
                    <span className="mx-3 my-0.5 block h-px bg-[linear-gradient(90deg,var(--color-foreground)_1px,transparent_1px)] bg-size-[6px_1px] bg-bottom bg-repeat-x opacity-30 dark:opacity-15" />
                    <div className="flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2 text-sm hover:bg-muted [&>svg]:size-4 [&>svg]:opacity-65">
                      <ImageIcon />
                      <span>Create preview</span>
                    </div>
                    <div className="flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2 text-sm hover:bg-muted [&>svg]:size-4 [&>svg]:opacity-65">
                      <Lightbulb />
                      <span>Design ideas</span>
                    </div>
                    <div className="flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2 text-sm hover:bg-muted [&>svg]:size-4 [&>svg]:opacity-65">
                      <Telescope />
                      <span>Pattern search</span>
                    </div>
                    <div className="flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2 text-sm hover:bg-muted [&>svg]:size-4 [&>svg]:opacity-65">
                      <ShoppingBag />
                      <span>Template packs</span>
                    </div>
                    <div className="flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2 text-sm hover:bg-muted [&>svg]:size-4 [&>svg]:opacity-65">
                      <Github />
                      <span>Open source kits</span>
                    </div>
                  </div>

                  <div className="mt-auto flex h-fit justify-between gap-3 rounded-full bg-card p-2 shadow-xs ring-1 shadow-foreground/6.5 ring-border dark:shadow-black/6.5">
                    <div className="flex items-center gap-2">
                      <div className="flex size-9 cursor-pointer rounded-full bg-muted *:m-auto *:size-4">
                        <Plus />
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Ask LoveUI...
                      </div>
                    </div>
                    <div className="flex items-center gap-0.5">
                      <div className="flex size-9 cursor-pointer rounded-full *:m-auto *:size-4 hover:bg-muted">
                        <Mic2 />
                      </div>
                      <div className="flex size-9 cursor-pointer rounded-full bg-foreground text-background *:m-auto *:size-4 hover:brightness-110">
                        <AudioLines />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mx-auto max-w-md text-center">
                <h1 className="font-serif text-4xl font-medium text-balance sm:text-5xl">
                  Ship faster. Design with LoveUI.
                </h1>
                <p className="mt-4 text-balance text-muted-foreground">
                  LoveUI is your all-in-one kit for shipping polished interfaces
                  in your app.
                </p>

                <Button asChild className="mt-6 pr-1.5">
                  <Link href="#link">
                    <span className="text-nowrap">Start Building</span>
                    <ChevronRight className="opacity-50" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
