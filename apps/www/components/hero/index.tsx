"use client";

import Link from "next/link";
import { PageHeaderHeading } from "@loveui/ui/components/page-header";
import { Button } from "@loveui/ui/ui/button";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate flex min-h-[calc(100vh-var(--header-height))] flex-col overflow-hidden border-b border-border/40 transition-colors duration-300 bg-background dark:bg-sidebar"
    >
      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-1 flex-col items-center justify-center gap-8 px-4 py-24 text-center lg:gap-10 lg:py-32">
        <PageHeaderHeading className="max-w-3xl text-balance text-5xl leading-tight text-foreground md:text-6xl lg:text-7xl">
          Build polished interfaces at the speed of copy&nbsp;+&nbsp;paste
        </PageHeaderHeading>
        <p className="max-w-xl text-balance text-lg text-muted-foreground">
          Curated React components and docs. Copy, paste, ship.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button size="xl" render={<Link href="https://ui.loveui.dev/ui/docs" />}>
            Browse the docs
          </Button>
          <Button size="xl" variant="outline" render={<Link href="https://ui.loveui.dev/ui/building-blocks" />}>
            Explore blocks
          </Button>
        </div>
      </div>
    </section>
  );
}
