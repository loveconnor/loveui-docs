import { InfiniteSlider } from "@/motion-primitives/infinite-slider"
import { ProgressiveBlur } from "@/motion-primitives/progressive-blur"
import { Beacon } from "@/ui/svgs/beacon"
import { Bolt } from "@/ui/svgs/bolt"
import { Cisco } from "@/ui/svgs/cisco"
import { Hulu } from "@/ui/svgs/hulu"
import { Linear } from "@/ui/svgs/linear"
import { Spotify } from "@/ui/svgs/spotify"
import { Supabase } from "@/ui/svgs/supabase"
import { VercelFull } from "@/ui/svgs/vercel"

export default function LogoCloud() {
  return (
    <section className="overflow-hidden bg-background py-16">
      <div className="group relative m-auto max-w-7xl px-6">
        <div className="flex flex-col items-center md:flex-row">
          <div className="md:max-w-44 md:border-r md:pr-6">
            <p className="text-end text-sm">Powering the best teams</p>
          </div>
          <div className="relative py-6 md:w-[calc(100%-11rem)]">
            <InfiniteSlider speedOnHover={20} speed={40} gap={112}>
              <div className="flex">
                <VercelFull className="mx-auto h-3.5 w-full" />
              </div>

              <div className="flex">
                <Spotify className="mx-auto h-4.5 w-full" />
              </div>
              <div className="flex">
                <Supabase className="mx-auto size-5" />
              </div>
              <div className="flex">
                <Hulu className="mx-auto h-3.5 w-full" />
              </div>
              <div className="flex">
                <Bolt className="mx-auto h-4 w-full" />
              </div>
              <div className="flex">
                <Linear className="mx-auto size-4" />
              </div>
              <div className="flex">
                <Cisco className="mx-auto h-5 w-full" />
              </div>

              <div className="flex">
                <Beacon className="mx-auto h-3.5 w-full" />
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
