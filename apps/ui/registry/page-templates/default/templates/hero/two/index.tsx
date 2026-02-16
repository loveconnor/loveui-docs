import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/ui/button"
import { Card } from "@/ui/card"
import { Claude } from "@/ui/svgs/claude"
import { ClerkIconLight as Clerk } from "@/ui/svgs/clerk"
import { Figma } from "@/ui/svgs/figma"
import { Firebase } from "@/ui/svgs/firebase"
import { Linear } from "@/ui/svgs/linear"
import { Slack } from "@/ui/svgs/slack"
import { Supabase } from "@/ui/svgs/supabase"
import { Twilio } from "@/ui/svgs/twilio"
import { Vercel } from "@/ui/svgs/vercel"
import { ChevronRight } from "lucide-react"

import { assetPath } from "@/lib/page-templates/utils"

export default function HeroSection() {
  return (
    <>
      <main className="overflow-hidden">
        <section className="bg-background">
          <div className="relative pt-44 pb-32">
            <div className="absolute inset-0 aspect-square mask-radial-[75%_100%] mask-radial-from-45% mask-radial-to-75% mask-radial-at-top opacity-65 md:aspect-9/4 dark:opacity-5">
              <Image
                src={assetPath("/page-templates/hero-bg.jpg")}
                alt="hero background"
                width={2102}
                height={1694}
                className="h-full w-full object-cover object-top"
              />
            </div>
            <div className="relative z-10 mx-auto w-full max-w-5xl px-6">
              <div className="mx-auto mb-16 max-w-xl lg:mb-24">
                <div className="grid scale-95 grid-cols-3 gap-12">
                  <div className="ml-auto blur-[2px]">
                    <Card className="flex h-8 w-fit flex-row items-center gap-2 rounded-xl px-3 py-0 shadow-foreground/10 sm:h-10 sm:px-4">
                      <Supabase className="size-4 shrink-0" />
                      <span className="font-medium text-nowrap max-sm:text-xs">
                        Supabase
                      </span>
                    </Card>
                  </div>
                  <div className="ml-auto">
                    <Card className="flex h-8 w-fit flex-row items-center gap-2 rounded-xl px-3 py-0 shadow-foreground/10 sm:h-10 sm:px-4">
                      <Slack className="size-4 shrink-0" />
                      <span className="font-medium text-nowrap max-sm:text-xs">
                        Slack
                      </span>
                    </Card>
                  </div>
                  <div className="ml-auto blur-[2px]">
                    <Card className="flex h-8 w-fit flex-row items-center gap-2 rounded-xl px-3 py-0 shadow-foreground/10 sm:h-10 sm:px-4">
                      <Figma className="size-4 shrink-0" />
                      <span className="font-medium text-nowrap max-sm:text-xs">
                        Figma
                      </span>
                    </Card>
                  </div>
                  <div className="mr-auto">
                    <Card className="flex h-8 w-fit flex-row items-center gap-2 rounded-xl px-3 py-0 shadow-foreground/10 sm:h-10 sm:px-4">
                      <Vercel className="size-4 shrink-0" />
                      <span className="font-medium text-nowrap max-sm:text-xs">
                        Vercel
                      </span>
                    </Card>
                  </div>
                  <div className="blur-[2px]">
                    <Card className="flex h-8 w-fit flex-row items-center gap-2 rounded-xl px-3 py-0 shadow-foreground/10 sm:h-10 sm:px-4">
                      <Firebase className="size-3 shrink-0 sm:size-4" />
                      <span className="font-medium text-nowrap max-sm:text-xs">
                        Firebase
                      </span>
                    </Card>
                  </div>
                  <div>
                    <Card className="mx-auto flex h-8 w-fit flex-row items-center gap-2 rounded-xl px-3 py-0 shadow-foreground/10 sm:h-10 sm:px-4">
                      <Linear className="size-3 shrink-0 sm:size-4" />
                      <span className="font-medium text-nowrap max-sm:text-xs">
                        Linear
                      </span>
                    </Card>
                  </div>
                  <div className="ml-auto blur-[2px]">
                    <Card className="flex h-8 w-fit flex-row items-center gap-2 rounded-xl px-3 py-0 shadow-foreground/10 sm:h-10 sm:px-4">
                      <Twilio className="size-3 shrink-0 sm:size-4" />
                      <span className="font-medium text-nowrap max-sm:text-xs">
                        Twilio
                      </span>
                    </Card>
                  </div>
                  <div>
                    <Card className="mx-auto flex h-8 w-fit flex-row items-center gap-2 rounded-xl px-3 py-0 shadow-foreground/10 sm:h-10 sm:px-4">
                      <Claude className="size-3 shrink-0 sm:size-4" />
                      <span className="font-medium text-nowrap max-sm:text-xs">
                        Claude AI
                      </span>
                    </Card>
                  </div>
                  <div className="blur-[2px]">
                    <Card className="flex h-8 w-fit flex-row items-center gap-2 rounded-xl px-3 py-0 shadow-foreground/10 sm:h-10 sm:px-4">
                      <Clerk className="size-3 shrink-0 sm:size-4" />
                      <span className="font-medium text-nowrap max-sm:text-xs">
                        Clerk{" "}
                      </span>
                    </Card>
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
