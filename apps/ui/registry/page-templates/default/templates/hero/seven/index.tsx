import React from "react"
import Image from "next/image"
import Link from "next/link"
import { AnimatedGroup } from "@/motion-primitives/animated-group"
import { TextEffect } from "@/motion-primitives/text-effect"
import { assetPath } from "@/lib/page-templates/utils"
import { Button } from "@/ui/button"
import { Beacon } from "@/ui/svgs/beacon"
import { Bolt } from "@/ui/svgs/bolt"
import { Claude } from "@/ui/svgs/claude"
import { Github } from "@/ui/svgs/github"
import { Hulu } from "@/ui/svgs/hulu"
import { Linear } from "@/ui/svgs/linear"
import { Slack } from "@/ui/svgs/slack"
import { Supabase } from "@/ui/svgs/supabase"
import { ChevronRight } from "lucide-react"

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
}

export default function HeroSection() {
  return (
    <>
      <main className="overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 isolate hidden contain-strict lg:block"
        >
          <div className="absolute top-0 left-0 h-320 w-140 -translate-y-87.5 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
          <div className="absolute top-0 left-0 h-320 w-60 [translate:5%_-50%] -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
          <div className="absolute top-0 left-0 h-320 w-60 -translate-y-87.5 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
        </div>
        <section>
          <div className="relative pt-24">
            <div className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"></div>
            <div className="mx-auto max-w-5xl px-6">
              <div className="sm:mx-auto lg:mt-0 lg:mr-auto">
                <TextEffect
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  as="h1"
                  className="mt-8 max-w-2xl text-5xl font-medium text-balance md:text-6xl lg:mt-16"
                >
                  Build and Ship 10x faster with LoveUI
                </TextEffect>
                <TextEffect
                  per="line"
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  delay={0.5}
                  as="p"
                  className="mt-8 max-w-2xl text-lg text-pretty"
                >
                  LoveUI delivers highly customizable components for building
                  modern websites and applications that look and feel exactly
                  right.
                </TextEffect>

                <AnimatedGroup
                  variants={{
                    container: {
                      visible: {
                        transition: {
                          staggerChildren: 0.05,
                          delayChildren: 0.75,
                        },
                      },
                    },
                    ...transitionVariants,
                  }}
                  className="mt-12 flex items-center gap-2"
                >
                  <div
                    key={1}
                    className="rounded-[calc(var(--radius-xl)+0.125rem)] border bg-foreground/10 p-0.5"
                  >
                    <Button
                      asChild
                      size="lg"
                      className="rounded-xl px-5 text-base"
                    >
                      <Link href="#link">
                        <span className="text-nowrap">Start Building</span>
                      </Link>
                    </Button>
                  </div>
                  <Button
                    key={2}
                    asChild
                    size="lg"
                    variant="ghost"
                    className="h-10.5 rounded-xl px-5 text-base"
                  >
                    <Link href="#link">
                      <span className="text-nowrap">Request a demo</span>
                    </Link>
                  </Button>
                </AnimatedGroup>
              </div>
            </div>
            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                      delayChildren: 0.75,
                    },
                  },
                },
                ...transitionVariants,
              }}
            >
              <div className="relative mt-8 -mr-56 overflow-hidden mask-b-from-55% px-2 sm:mt-12 sm:mr-0 md:mt-20">
                <div className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl border bg-background p-4 shadow-lg ring-1 inset-shadow-2xs shadow-zinc-950/15 ring-background dark:inset-shadow-white/20">
                  <Image
                    className="relative hidden aspect-15/8 rounded-2xl bg-background dark:block"
                    src={assetPath("/page-templates/hero/mail2.webp")}
                    alt="app screen"
                    width={2700}
                    height={1440}
                  />
                  <Image
                    className="relative z-2 aspect-15/8 rounded-2xl border border-border/25 dark:hidden"
                    src={assetPath("/page-templates/hero/mail2-light.webp")}
                    alt="app screen"
                    width={2700}
                    height={1440}
                  />
                </div>
              </div>
            </AnimatedGroup>
          </div>
        </section>
        <section className="bg-background pt-16 pb-16 md:pb-32">
          <div className="group/logo-grid relative m-auto max-w-5xl px-6">
            <div className="absolute inset-0 z-10 flex scale-95 items-center justify-center opacity-0 duration-500 group-hover/logo-grid:scale-100 group-hover/logo-grid:opacity-100">
              <Link
                href="/"
                className="block text-sm duration-150 hover:opacity-75"
              >
                <span> Explore LoveUI Customers</span>

                <ChevronRight className="ml-1 inline-block size-3" />
              </Link>
            </div>
            <div className="mx-auto mt-12 grid max-w-2xl grid-cols-4 gap-x-12 gap-y-8 transition-all duration-500 group-hover/logo-grid:opacity-50 group-hover/logo-grid:blur-xs sm:gap-x-16 sm:gap-y-14">
              <div className="flex">
                <Beacon className="mx-auto h-5 w-fit text-foreground dark:text-white" />{" "}
                <span className="text-sm font-medium text-muted-foreground">
                  Beacon
                </span>
              </div>

              <div className="flex">
                <Bolt className="mx-auto h-4 w-fit text-foreground dark:text-white" />{" "}
                <span className="text-sm font-medium text-muted-foreground">
                  Bolt
                </span>
              </div>
              <div className="flex">
                <Github className="mx-auto h-4 w-fit text-foreground dark:text-white" />{" "}
                <span className="text-sm font-medium text-muted-foreground">
                  GitHub
                </span>
              </div>
              <div className="flex">
                <Hulu className="mx-auto h-5 w-fit text-foreground dark:text-white" />{" "}
                <span className="text-sm font-medium text-muted-foreground">
                  Hulu
                </span>
              </div>
              <div className="flex">
                <Supabase className="mx-auto h-5 w-fit text-foreground dark:text-white" />{" "}
                <span className="text-sm font-medium text-muted-foreground">
                  Supabase
                </span>
              </div>
              <div className="flex">
                <Linear className="mx-auto h-4 w-fit text-foreground dark:text-white" />{" "}
                <span className="text-sm font-medium text-muted-foreground">
                  Linear
                </span>
              </div>
              <div className="flex">
                <Slack className="mx-auto h-7 w-fit text-foreground dark:text-white" />{" "}
                <span className="text-sm font-medium text-muted-foreground">
                  Slack
                </span>
              </div>

              <div className="flex">
                <Claude className="mx-auto h-6 w-fit text-foreground dark:text-white" />{" "}
                <span className="text-sm font-medium text-muted-foreground">
                  Claude
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
