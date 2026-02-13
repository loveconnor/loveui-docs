import { InfiniteSlider } from "@/motion-primitives/infinite-slider"
import { ProgressiveBlur } from "@/motion-primitives/progressive-blur"
import { Claude } from "@/ui/svgs/claude"
import { Figma } from "@/ui/svgs/figma"
import { Firebase } from "@/ui/svgs/firebase"
import { Linear } from "@/ui/svgs/linear"
import { Slack } from "@/ui/svgs/slack"
import { Supabase } from "@/ui/svgs/supabase"
import { Twilio } from "@/ui/svgs/twilio"
import { Vercel } from "@/ui/svgs/vercel"

export const LogoCloud = () => {
  return (
    <section className="bg-background pb-16 md:pb-32">
      <div className="group relative m-auto max-w-6xl px-6">
        <div className="flex flex-col items-center md:flex-row">
          <div className="inline md:max-w-44 md:border-r md:pr-6">
            <p className="text-end text-sm">Trusted by modern product teams</p>
          </div>
          <div className="relative py-6 md:w-[calc(100%-11rem)]">
            <InfiniteSlider speedOnHover={20} speed={40} gap={112}>
              <div className="flex items-center gap-2">
                <Figma className="size-4 shrink-0" />
                <span className="text-sm font-medium text-muted-foreground">Figma</span>
              </div>

              <div className="flex items-center gap-2">
                <Firebase className="size-5 shrink-0" />
                <span className="text-sm font-medium text-muted-foreground">Firebase</span>
              </div>
              <div className="flex items-center gap-2">
                <Supabase className="size-4 shrink-0" />
                <span className="text-sm font-medium text-muted-foreground">Supabase</span>
              </div>
              <div className="flex items-center gap-2">
                <Linear className="size-4 shrink-0" />
                <span className="text-sm font-medium text-muted-foreground">Linear</span>
              </div>
              <div className="flex items-center gap-2">
                <Slack className="size-5 shrink-0" />
                <span className="text-sm font-medium text-muted-foreground">Slack</span>
              </div>
              <div className="flex items-center gap-2">
                <Twilio className="size-4 shrink-0" />
                <span className="text-sm font-medium text-muted-foreground">Twilio</span>
              </div>

              <div className="flex items-center gap-2">
                <Vercel className="size-4 shrink-0 text-foreground dark:text-white" />
                <span className="text-sm font-medium text-muted-foreground">Vercel</span>
              </div>
              <div className="flex items-center gap-2">
                <Claude className="size-5 shrink-0" />
                <span className="text-sm font-medium text-muted-foreground">Claude</span>
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
  )
}
