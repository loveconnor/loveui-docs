import React from "react"
import Image from "next/image"
import Link from "next/link"
import { AnimatedGroup } from "@/motion-primitives/animated-group"
import { TextEffect } from "@/motion-primitives/text-effect"
import { Button } from "@/ui/button"
import { Beacon } from "@/ui/svgs/beacon"
import { Bolt } from "@/ui/svgs/bolt"
import { Claude } from "@/ui/svgs/claude"
import { Hulu } from "@/ui/svgs/hulu"
import { Linear } from "@/ui/svgs/linear"
import { Slack } from "@/ui/svgs/slack"
import { Supabase } from "@/ui/svgs/supabase"
import { Twilio } from "@/ui/svgs/twilio"
import { ArrowRight, ChevronRight } from "lucide-react"

import { assetPath } from "@/lib/page-templates/utils"

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
          className="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block"
        >
          <div className="absolute top-0 left-0 h-320 w-140 -translate-y-87.5 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
          <div className="absolute top-0 left-0 h-320 w-60 [translate:5%_-50%] -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
          <div className="absolute top-0 left-0 h-320 w-60 -translate-y-87.5 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
        </div>
        <section>
          <div className="relative pt-24 md:pt-36">
            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      delayChildren: 1,
                    },
                  },
                },
                item: {
                  hidden: {
                    opacity: 0,
                    y: 20,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      type: "spring",
                      bounce: 0.3,
                      duration: 2,
                    },
                  },
                },
              }}
              className="absolute inset-0 top-56 -z-20 mask-b-from-35% mask-b-to-90% lg:top-32"
            >
              <Image
                src={assetPath("/page-templates/hero-bg.jpg")}
                alt="background"
                className="hidden size-full dark:block"
                width={3276}
                height={4095}
              />
            </AnimatedGroup>

            <div
              aria-hidden
              className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"
            />

            <div className="mx-auto max-w-7xl px-6">
              <div className="text-center sm:mx-auto lg:mt-0 lg:mr-auto">
                <AnimatedGroup variants={transitionVariants}>
                  <Link
                    href="#link"
                    className="group/cta mx-auto flex w-fit items-center gap-4 rounded-full border bg-muted p-1 pl-4 shadow-md shadow-zinc-950/5 transition-colors duration-300 hover:bg-background dark:border-t-white/5 dark:shadow-zinc-950 dark:hover:border-t-border"
                  >
                    <span className="text-sm text-foreground">
                      Introducing LoveUI Pro Components
                    </span>
                    <span className="block h-4 w-0.5 border-l bg-white dark:border-background dark:bg-zinc-700"></span>

                    <div className="size-6 overflow-hidden rounded-full bg-background duration-500 group-hover/cta:bg-muted">
                      <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover/cta:translate-x-0">
                        <span className="flex size-6">
                          <ArrowRight className="m-auto size-3" />
                        </span>
                        <span className="flex size-6">
                          <ArrowRight className="m-auto size-3" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </AnimatedGroup>

                <TextEffect
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  as="h1"
                  className="mx-auto mt-8 max-w-4xl text-5xl text-balance max-md:font-semibold md:text-7xl lg:mt-16 xl:text-[5.25rem]"
                >
                  Modern UI Systems for Product Teams
                </TextEffect>
                <TextEffect
                  per="line"
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  delay={0.5}
                  as="p"
                  className="mx-auto mt-8 max-w-2xl text-lg text-balance"
                >
                  LoveUI ships highly customizable components for building
                  modern websites and applications that feel truly on-brand.
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
                  className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row"
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
                    className="h-10.5 rounded-xl px-5"
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
                <div className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl border bg-background p-4 shadow-lg ring-1 inset-shadow-2xs shadow-zinc-950/15 ring-background dark:inset-shadow-white/20">
                  <Image
                    className="relative hidden aspect-15/8 rounded-2xl bg-background dark:block"
                    src={assetPath("/page-templates/hero/hero-dashboard-dark.png")}
                    alt="app screen"
                    width={2700}
                    height={1440}
                  />
                  <Image
                    className="relative z-2 aspect-15/8 rounded-2xl border border-border/25 dark:hidden"
                    src={assetPath("/page-templates/hero/hero-dashboard.png")}
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
                <Twilio className="mx-auto h-4 w-fit text-foreground dark:text-white" />{" "}
                <span className="text-sm font-medium text-muted-foreground">
                  Twilio
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
