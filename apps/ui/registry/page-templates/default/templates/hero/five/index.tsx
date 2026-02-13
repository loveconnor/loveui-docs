import React from 'react'
import Link from 'next/link'
import { Button } from '@/ui/button'
import { AudioLines, ChevronRight, Github, ImageIcon, Lightbulb, Mic2, Paperclip, Plus, ShoppingBag, Telescope } from 'lucide-react'
import Image from 'next/image'

export default function HeroSection() {
    return (
        <>
            <main className="overflow-hidden">
                <section className="bg-background">
                    <div className="relative pb-32 pt-16">
                        <div className="relative z-10 mx-auto w-full max-w-5xl px-6">
                            <div className="mask-radial-from-35% aspect-3/2 mask-radial-to-75% pointer-events-none relative mx-auto max-w-xl opacity-75 mix-blend-darken">
                                <div className="bg-background absolute inset-0 mix-blend-overlay"></div>
                                <Image
                                    src="/page-templates/hero-bg.jpg"
                                    alt="watch in dark"
                                    className="not-dark:invert dark:mix-blend-lighten"
                                    width={1340}
                                    height={560}
                                />
                            </div>
                            <div className="mx-auto mt-6 max-w-md text-center">
                                <h1 className="text-balance font-serif text-4xl font-medium sm:text-5xl">Ship faster. Design with LoveUI.</h1>
                                <p className="text-muted-foreground mt-4 text-balance">LoveUI is your all-in-one kit for shipping polished interfaces in your app.</p>

                                <Button
                                    asChild
                                    className="mt-6 pr-1.5">
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
