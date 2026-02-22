"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/ui/button"
import { Beacon } from "@/ui/svgs/beacon"
import { Bolt } from "@/ui/svgs/bolt"
import { Cisco } from "@/ui/svgs/cisco"
import { Claude } from "@/ui/svgs/claude"
import { Figma } from "@/ui/svgs/figma"
import { Hulu } from "@/ui/svgs/hulu"
import { Linear } from "@/ui/svgs/linear"
import { Slack } from "@/ui/svgs/slack"
import { Supabase } from "@/ui/svgs/supabase"
import { Twilio } from "@/ui/svgs/twilio"
import { Vercel } from "@/ui/svgs/vercel"
import { Menu, X } from "lucide-react"

import { assetPath } from "@/lib/page-templates/utils"

const menuItems = [
  { name: "Features", href: "#" },
  { name: "Solution", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "About", href: "#" },
]

export default function HeroSection() {
  const [menuState, setMenuState] = useState(false)
  return (
    <>
      <header>
        <nav
          data-state={menuState && "active"}
          className="fixed z-20 w-full border-b border-dashed bg-white backdrop-blur md:relative dark:bg-zinc-950/50 lg:dark:bg-transparent"
        >
          <div className="m-auto max-w-5xl px-6">
            <div className="flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
              <div className="flex w-full justify-between lg:w-auto">
                <button
                  onClick={() => setMenuState(!menuState)}
                  aria-label={menuState == true ? "Close Menu" : "Open Menu"}
                  className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
                >
                  <Menu className="m-auto size-6 duration-200 in-data-[state=active]:scale-0 in-data-[state=active]:rotate-180 in-data-[state=active]:opacity-0" />
                  <X className="absolute inset-0 m-auto size-6 scale-0 -rotate-180 opacity-0 duration-200 in-data-[state=active]:scale-100 in-data-[state=active]:rotate-0 in-data-[state=active]:opacity-100" />
                </button>
              </div>

              <div className="mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border bg-background p-6 shadow-2xl shadow-zinc-300/20 in-data-[state=active]:block md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none lg:in-data-[state=active]:flex dark:shadow-none dark:lg:bg-transparent">
                <div className="lg:pr-4">
                  <ul className="space-y-6 text-base lg:flex lg:gap-8 lg:space-y-0 lg:text-sm">
                    {menuItems.map((item, index) => (
                      <li key={index}>
                        <Link
                          href={item.href}
                          className="block text-muted-foreground duration-150 hover:text-accent-foreground"
                        >
                          <span>{item.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit lg:border-l lg:pl-6">
                  <Button asChild variant="outline" size="sm">
                    <Link href="#">
                      <span>Login</span>
                    </Link>
                  </Button>
                  <Button asChild size="sm">
                    <Link href="#">
                      <span>Login</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <div
          aria-hidden
          className="absolute inset-0 isolate z-2 hidden opacity-50 contain-strict lg:block"
        >
          <div className="absolute top-0 left-0 h-320 w-140 -translate-y-87.5 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
          <div className="absolute top-0 left-0 h-320 w-60 [translate:5%_-50%] -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
          <div className="absolute top-0 left-0 h-320 w-60 -translate-y-87.5 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
        </div>

        <section className="overflow-hidden bg-muted/50 dark:bg-background">
          <div className="relative mx-auto max-w-5xl px-6 pt-28 lg:pt-24">
            <div className="relative z-10 mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-semibold text-balance md:text-5xl lg:text-6xl">
                Modern UI building reimagined
              </h1>
              <p className="mx-auto my-8 max-w-2xl text-xl text-muted-foreground">
                LoveUI gives product teams a faster path to polished interfaces
                with accessible primitives, reusable patterns, and flexible
                theming out of the box.
              </p>

              <Button asChild size="lg">
                <Link href="#">
                  <span className="btn-label">Start Building</span>
                </Link>
              </Button>
            </div>
          </div>

          <div className="mx-auto 2xl:max-w-7xl">
            <div className="pl-8 perspective-distant lg:pl-44">
              <div className="rotate-x-20 skew-x-12 mask-r-from-75% mask-b-from-55% mask-b-to-100% pt-6 pl-6 lg:h-176">
                <Image
                  className="rounded-(--radius) border shadow-xl dark:hidden"
                  src={assetPath("/page-templates/hero/hero-dashboard.png")}
                  alt="LoveUI hero section"
                  width={2700}
                  height={1440}
                />
                <Image
                  className="hidden rounded-(--radius) border shadow-xl dark:block"
                  src={assetPath("/page-templates/hero/hero-dashboard-dark.png")}
                  alt="LoveUI hero section"
                  width={2700}
                  height={1440}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="relative z-10 bg-muted/50 py-16 dark:bg-background">
          <div className="m-auto max-w-5xl px-6">
            <h2 className="text-center text-lg font-medium">
              Trusted by teams building with LoveUI.
            </h2>
            <div className="mx-auto mt-20 flex max-w-4xl flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16 sm:gap-y-12">
              <div className="flex items-center gap-2">
                <Beacon className="h-5 w-fit text-foreground dark:text-white" />
                <span className="text-sm font-medium text-muted-foreground">
                  Beacon
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Bolt className="h-4 w-fit text-foreground dark:text-white" />
                <span className="text-sm font-medium text-muted-foreground">
                  Bolt
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Twilio className="h-4 w-fit text-foreground dark:text-white" />
                <span className="text-sm font-medium text-muted-foreground">
                  Twilio
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Hulu className="h-5 w-fit text-foreground dark:text-white" />
                <span className="text-sm font-medium text-muted-foreground">
                  Hulu
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Linear className="h-4 w-fit text-foreground dark:text-white" />
                <span className="text-sm font-medium text-muted-foreground">
                  Linear
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Slack className="h-7 w-fit text-foreground dark:text-white" />
                <span className="text-sm font-medium text-muted-foreground">
                  Slack
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Supabase className="h-5 w-fit text-foreground dark:text-white" />
                <span className="text-sm font-medium text-muted-foreground">
                  Supabase
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Claude className="h-6 w-fit text-foreground dark:text-white" />
                <span className="text-sm font-medium text-muted-foreground">
                  Claude
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Figma className="h-4 w-fit text-foreground dark:text-white" />
                <span className="text-sm font-medium text-muted-foreground">
                  Figma
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Vercel className="h-5 w-fit text-foreground dark:text-white" />
                <span className="text-sm font-medium text-muted-foreground">
                  Vercel
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Cisco className="h-5 w-fit text-foreground dark:text-white" />
                <span className="text-sm font-medium text-muted-foreground">
                  Cisco
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
