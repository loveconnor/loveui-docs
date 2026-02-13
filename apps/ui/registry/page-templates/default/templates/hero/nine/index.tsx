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

export default function HeroSection() {
  return (
    <>
      <main className="overflow-x-hidden">
        <section>
          <div className="pt-12 pb-24 md:pb-32 lg:pt-44 lg:pb-56">
            <div className="relative mx-auto flex max-w-6xl flex-col px-6 lg:block">
              <div className="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left">
                <h1 className="mt-8 max-w-2xl text-5xl font-medium text-balance md:text-6xl lg:mt-16 xl:text-7xl">
                  Ship 10x Faster with LoveUI
                </h1>
                <p className="mt-8 max-w-2xl text-lg text-pretty">
                  LoveUI ships highly customizable components for building
                  modern websites and applications that feel truly on-brand.
                </p>

                <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                  <Button asChild size="lg" className="px-5 text-base">
                    <Link href="#link">
                      <span className="text-nowrap">Start Building</span>
                    </Link>
                  </Button>
                  <Button
                    key={2}
                    asChild
                    size="lg"
                    variant="ghost"
                    className="px-5 text-base"
                  >
                    <Link href="#link">
                      <span className="text-nowrap">Request a demo</span>
                    </Link>
                  </Button>
                </div>
              </div>
              <Image
                className="-z-10 order-first ml-auto h-56 w-full object-cover invert sm:h-96 lg:absolute lg:inset-0 lg:-top-96 lg:-right-20 lg:order-last lg:h-max lg:w-2/3 lg:object-contain dark:mix-blend-lighten dark:invert-0"
                src="/page-templates/hero-bg.jpg"
                alt="Abstract Object"
                height="4000"
                width="3000"
              />
            </div>
          </div>
        </section>
        <section className="bg-background pb-16 md:pb-32">
          <div className="group relative m-auto max-w-6xl px-6">
            <div className="flex flex-col items-center md:flex-row">
              <div className="md:max-w-44 md:border-r md:pr-6">
                <p className="text-end text-sm">Trusted by modern product teams</p>
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
