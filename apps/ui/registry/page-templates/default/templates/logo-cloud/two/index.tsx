import Link from "next/link"
import { Beacon } from "@/ui/svgs/beacon"
import { Bolt } from "@/ui/svgs/bolt"
import { Cisco } from "@/ui/svgs/cisco"
import { Hulu } from "@/ui/svgs/hulu"
import { Linear } from "@/ui/svgs/linear"
import { Spotify } from "@/ui/svgs/spotify"
import { Supabase } from "@/ui/svgs/supabase"
import { VercelFull } from "@/ui/svgs/vercel"
import { ChevronRight } from "lucide-react"

export default function LogoCloudTwo() {
  return (
    <section className="bg-background py-16">
      <div className="group relative m-auto max-w-5xl px-6">
        <div className="absolute inset-0 z-10 flex scale-95 items-center justify-center opacity-0 duration-500 group-hover:scale-100 group-hover:opacity-100">
          <Link
            href="/"
            className="block text-sm duration-150 hover:opacity-75"
          >
            <span> Meet Our Customers</span>

            <ChevronRight className="ml-1 inline-block size-3" />
          </Link>
        </div>
        <div className="mx-auto mt-12 grid max-w-2xl grid-cols-4 gap-x-12 gap-y-8 transition-all duration-500 **:fill-foreground group-hover:opacity-50 group-hover:blur-xs sm:gap-x-16 sm:gap-y-14">
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
        </div>
      </div>
    </section>
  )
}
