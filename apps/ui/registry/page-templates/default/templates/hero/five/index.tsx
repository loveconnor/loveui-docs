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
          <div className="relative pt-16 pb-32">
            <div className="relative z-10 mx-auto w-full max-w-5xl px-6">
              <div className="pointer-events-none relative mx-auto aspect-3/2 max-w-xl mask-radial-from-35% mask-radial-to-75% opacity-75 mix-blend-darken">
                <div className="absolute inset-0 bg-background mix-blend-overlay"></div>
                <Image
                  src="/page-templates/hero-bg.jpg"
                  alt="watch in dark"
                  className="not-dark:invert dark:mix-blend-lighten"
                  width={1340}
                  height={560}
                />
              </div>
              <div className="mx-auto mt-6 max-w-md text-center">
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
