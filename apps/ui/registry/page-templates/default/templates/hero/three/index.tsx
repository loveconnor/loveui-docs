import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/ui/button"
import {
  AudioLines,
  ChevronRight,
  MessageCircle,
  Mic2,
  Plus,
} from "lucide-react"

export default function HeroSection() {
  return (
    <>
      <main className="overflow-hidden">
        <section className="bg-background">
          <div className="relative py-40">
            <div className="absolute inset-0 aspect-2/3 mask-radial-[75%_100%] mask-radial-from-45% mask-radial-to-75% mask-radial-at-top opacity-75 blur-xl md:aspect-square lg:aspect-video dark:opacity-5">
              <Image
                src="/page-templates/hero-bg.jpg"
                alt="hero background"
                width={2198}
                height={1685}
                className="h-full w-full object-cover object-top"
              />
            </div>
            <div className="relative z-10 mx-auto w-full max-w-5xl sm:pl-6">
              <div className="flex items-center justify-between max-md:flex-col">
                <div className="max-w-md max-sm:px-6">
                  <h1 className="font-serif text-4xl font-medium text-balance sm:text-5xl">
                    Ship faster. Design with LoveUI.
                  </h1>
                  <p className="mt-4 text-balance text-muted-foreground">
                    LoveUI is your all-in-one kit for shipping polished
                    interfaces in your app.
                  </p>

                  <Button asChild className="mt-6 pr-1.5">
                    <Link href="#link">
                      <span className="text-nowrap">Start Building</span>
                      <ChevronRight className="opacity-50" />
                    </Link>
                  </Button>
                </div>
                <div
                  aria-hidden
                  className="relative mask-y-from-50% max-md:mx-auto max-md:*:scale-90"
                >
                  {[
                    "How do I build auth screens with LoveUI?",
                    "Set up a reusable dashboard with LoveUI",
                    "Connect a design system to product pages",
                    "Implement polished form flows with variants",
                    "Add a component docs page with examples",
                    "Set up theme tokens and dark mode support",
                    "Deploy a LoveUI app with env-safe defaults",
                    "Configure account settings UI patterns",
                    "Build a searchable component command menu",
                    "Create launch-ready pricing page sections",
                    "Set up responsive nav for every breakpoint",
                    "Implement accessible dialogs and toasts",
                  ].map((prompt, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 px-14 py-2 text-sm text-muted-foreground"
                    >
                      <MessageCircle className="size-3.5 opacity-50" />
                      <span className="text-nowrap">{prompt}</span>
                    </div>
                  ))}
                  <div className="absolute inset-0 m-auto mt-auto flex h-fit min-w-sm justify-between gap-3 rounded-full bg-card p-2 shadow-xl ring-1 shadow-foreground/6.5 ring-border sm:inset-2 dark:shadow-black/6.5">
                    <div className="flex items-center gap-2">
                      <div className="flex size-9 cursor-pointer rounded-full *:m-auto *:size-4 hover:bg-muted">
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
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
