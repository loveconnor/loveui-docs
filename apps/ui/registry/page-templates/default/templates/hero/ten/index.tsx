import React from "react"
import Image from "next/image"
import Link from "next/link"
import { InfiniteSlider } from "@/motion-primitives/infinite-slider"
import { ProgressiveBlur } from "@/motion-primitives/progressive-blur"
import { Button } from "@/ui/button"
import { Claude } from "@/ui/svgs/claude"
import { Figma } from "@/ui/svgs/figma"
import { Firebase } from "@/ui/svgs/firebase"
import { Linear } from "@/ui/svgs/linear"
import { Slack } from "@/ui/svgs/slack"
import { Supabase } from "@/ui/svgs/supabase"
import { Twilio } from "@/ui/svgs/twilio"
import { Vercel } from "@/ui/svgs/vercel"
import { ChevronRight } from "lucide-react"

export default function HeroSection() {
  return (
    <>
      <main className="overflow-x-hidden">
        <section>
          <div className="py-24 md:pb-32 lg:pt-72 lg:pb-36">
            <div className="relative mx-auto flex max-w-7xl flex-col px-6 lg:block lg:px-12">
              <div className="mx-auto max-w-lg text-center lg:ml-0 lg:max-w-full lg:text-left">
                <h1 className="mt-8 max-w-2xl text-5xl text-balance md:text-6xl lg:mt-16 xl:text-7xl">
                  Build 10x Faster with LoveUI
                </h1>
                <p className="mt-8 max-w-2xl text-lg text-balance">
                  LoveUI delivers highly customizable components for building
                  modern websites and applications that feel exactly right.
                </p>

                <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                  <Button
                    asChild
                    size="lg"
                    className="h-12 rounded-full pr-3 pl-5 text-base"
                  >
                    <Link href="#link">
                      <span className="text-nowrap">Start Building</span>
                      <ChevronRight className="ml-1" />
                    </Link>
                  </Button>
                  <Button
                    key={2}
                    asChild
                    size="lg"
                    variant="ghost"
                    className="h-12 rounded-full px-5 text-base hover:bg-zinc-950/5 dark:hover:bg-white/5"
                  >
                    <Link href="#link">
                      <span className="text-nowrap">Request a demo</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            <div className="absolute inset-1 -z-10 aspect-2/3 overflow-hidden rounded-3xl border border-black/10 lg:aspect-video lg:rounded-[3rem] dark:border-white/5">
              <Image
                src="/page-templates/hero-bg.jpg"
                alt="hero background"
                className="size-full object-cover opacity-50 invert dark:opacity-35 dark:invert-0 dark:lg:opacity-75"
                width={2268}
                height={1740}
              />
            </div>
          </div>
        </section>
        <section className="bg-background pb-2">
          <div className="group relative m-auto max-w-7xl px-6">
            <div className="flex flex-col items-center md:flex-row">
              <div className="md:max-w-44 md:border-r md:pr-6">
                <p className="text-end text-sm">
                  Trusted by modern product teams
                </p>
              </div>
              <div className="relative py-6 md:w-[calc(100%-11rem)]">
                <InfiniteSlider speedOnHover={20} speed={40} gap={112}>
                  <div className="flex items-center gap-2">
                    <Figma className="size-4 shrink-0" />
                    <span className="text-sm font-medium text-muted-foreground">
                      Figma
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Firebase className="size-5 shrink-0" />
                    <span className="text-sm font-medium text-muted-foreground">
                      Firebase
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Supabase className="size-4 shrink-0" />
                    <span className="text-sm font-medium text-muted-foreground">
                      Supabase
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Linear className="size-4 shrink-0" />
                    <span className="text-sm font-medium text-muted-foreground">
                      Linear
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Slack className="size-5 shrink-0" />
                    <span className="text-sm font-medium text-muted-foreground">
                      Slack
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Twilio className="size-4 shrink-0" />
                    <span className="text-sm font-medium text-muted-foreground">
                      Twilio
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Vercel className="size-4 shrink-0 text-foreground dark:text-white" />
                    <span className="text-sm font-medium text-muted-foreground">
                      Vercel
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Claude className="size-5 shrink-0" />
                    <span className="text-sm font-medium text-muted-foreground">
                      Claude
                    </span>
                  </div>
                </InfiniteSlider>

                <div className="absolute inset-y-0 left-0 w-20 bg-linear-to-r from-background"></div>
                <div className="absolute inset-y-0 right-0 w-20 bg-linear-to-l from-background"></div>
                <ProgressiveBlur
                  className="pointer-events-none absolute top-0 left-0 h-full w-20"
                  direction="left"
                  blurIntensity={1}
                />
                <ProgressiveBlur
                  className="pointer-events-none absolute top-0 right-0 h-full w-20"
                  direction="right"
                  blurIntensity={1}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
