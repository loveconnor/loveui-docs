"use client"

import React from "react"
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
import { ArrowRight, Menu, Rocket, X } from "lucide-react"

import { assetPath } from "@/lib/page-templates/utils"

const menuItems = [
  { name: "Features", href: "#" },
  { name: "Solution", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "About", href: "#" },
]

export default function HeroSection() {
  const [menuState, setMenuState] = React.useState(false)

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
      <main className="overflow-hidden">
        <section>
          <div className="relative pt-24">
            <div className="mx-auto max-w-7xl px-6">
              <div className="max-w-3xl text-center sm:mx-auto lg:mt-0 lg:mr-auto lg:w-4/5">
                <Link
                  href="/"
                  className="mx-auto flex w-fit items-center gap-2 rounded-(--radius) border p-1 pr-3"
                >
                  <span className="rounded-[calc(var(--radius)-0.25rem)] bg-muted px-2 py-1 text-xs">
                    New
                  </span>
                  <span className="text-sm">Introduction LoveUI</span>
                  <span className="block h-4 w-px bg-(--color-border)"></span>

                  <ArrowRight className="size-4" />
                </Link>

                <h1 className="mt-8 text-4xl font-semibold text-balance md:text-5xl xl:text-6xl xl:[line-height:1.125]">
                  Modern UI building reimagined
                </h1>
                <p className="mx-auto mt-8 hidden max-w-2xl text-lg text-wrap sm:block">
                  LoveUI delivers highly customizable components for building
                  modern websites and applications that look and feel exactly
                  right.
                </p>
                <p className="mx-auto mt-6 max-w-2xl text-wrap sm:hidden">
                  LoveUI provides customizable components for building modern
                  websites and applications, with your own brand spark.
                </p>

                <div className="mt-8">
                  <Button size="lg" asChild>
                    <Link href="#">
                      <Rocket className="relative size-4" />
                      <span className="text-nowrap">Start Building</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="relative mx-auto mt-16 max-w-6xl overflow-hidden mask-b-from-55% px-4">
              <Image
                className="relative z-2 hidden rounded-2xl border border-border/25 dark:block"
                src={assetPath("/page-templates/hero/mail2.webp")}
                alt="app screen"
                width={2700}
                height={1440}
              />
              <Image
                className="relative z-2 rounded-2xl border border-border/25 dark:hidden"
                src={assetPath("/page-templates/hero/mail2-light.webp")}
                alt="app screen"
                width={2700}
                height={1440}
              />
            </div>
          </div>
        </section>
        <section className="relative z-10 bg-background pb-16">
          <div className="m-auto max-w-5xl px-6">
            <h2 className="text-center text-lg font-medium">
              Trusted by teams building with LoveUI.
            </h2>
            <div className="mx-auto mt-12 flex max-w-4xl flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16 sm:gap-y-12">
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
