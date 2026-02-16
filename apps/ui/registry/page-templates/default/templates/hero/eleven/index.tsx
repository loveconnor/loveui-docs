"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/ui/button"
import { ArrowRight, Mail, Menu, SendHorizontal, X } from "lucide-react"

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
        <section className="overflow-hidden">
          <div className="relative mx-auto max-w-5xl px-6 py-28 lg:py-20">
            <div className="lg:flex lg:items-center lg:gap-12">
              <div className="relative z-10 mx-auto max-w-xl text-center lg:ml-0 lg:w-1/2 lg:text-left">
                <Link
                  href="/"
                  className="mx-auto flex w-fit items-center gap-2 rounded-(--radius) border p-1 pr-3 lg:ml-0"
                >
                  <span className="rounded-[calc(var(--radius)-0.25rem)] bg-muted px-2 py-1 text-xs">
                    New
                  </span>
                  <span className="text-sm">Introduction LoveUI</span>
                  <span className="block h-4 w-px bg-(--color-border)"></span>

                  <ArrowRight className="size-4" />
                </Link>

                <h1 className="mt-10 text-4xl font-bold text-balance md:text-5xl xl:text-5xl">
                  Production-ready UI blocks for modern teams
                </h1>
                <p className="mt-8">
                  LoveUI helps teams ship polished interfaces faster with
                  accessible components, flexible theming, and production-ready
                  patterns.
                </p>

                <div>
                  <form
                    action=""
                    className="mx-auto my-10 max-w-sm lg:my-12 lg:mr-auto lg:ml-0"
                  >
                    <div className="relative grid grid-cols-[1fr_auto] items-center rounded-[calc(var(--radius)+0.75rem)] border bg-background pr-3 shadow shadow-zinc-950/5 has-[input:focus]:ring-2 has-[input:focus]:ring-muted">
                      <Mail className="text-caption pointer-events-none absolute inset-y-0 left-5 my-auto size-5" />

                      <input
                        placeholder="Your mail address"
                        className="h-14 w-full bg-transparent pl-12 focus:outline-none"
                        type="email"
                      />

                      <div className="md:pr-1.5 lg:pr-0">
                        <Button
                          aria-label="submit"
                          className="rounded-(--radius)"
                        >
                          <span className="hidden md:block">Get Started</span>
                          <SendHorizontal
                            className="relative mx-auto size-5 md:hidden"
                            strokeWidth={2}
                          />
                        </Button>
                      </div>
                    </div>
                  </form>

                  <ul className="list-inside list-disc space-y-2">
                    <li>Faster shipping</li>
                    <li>Modern patterns</li>
                    <li>100% customizable</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 -mx-4 rounded-3xl p-3 lg:col-span-3">
              <div className="relative">
                <div className="absolute -inset-17 z-1 bg-radial-[at_65%_25%] from-transparent to-background to-40%"></div>
                <Image
                  className="hidden dark:block"
                  src="/music.png"
                  alt="app illustration"
                  width={2796}
                  height={2008}
                />
                <Image
                  className="dark:hidden"
                  src="/music-light.png"
                  alt="app illustration"
                  width={2796}
                  height={2008}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
