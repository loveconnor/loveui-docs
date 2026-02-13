import { Beacon } from '@/ui/svgs/beacon'
import { Bolt } from '@/ui/svgs/bolt'
import { Cisco } from '@/ui/svgs/cisco'
import { Claude } from '@/ui/svgs/claude'
import { Figma } from '@/ui/svgs/figma'
import { Hulu } from '@/ui/svgs/hulu'
import { Linear } from '@/ui/svgs/linear'
import { Slack } from '@/ui/svgs/slack'
import { Spotify } from '@/ui/svgs/spotify'
import { Supabase } from '@/ui/svgs/supabase'
import { VercelFull } from '@/ui/svgs/vercel'

export default function LogoCloud() {
    return (
        <section className="bg-background py-16">
            <div className="mx-auto max-w-5xl px-6">
                <h2 className="text-center text-lg font-medium">Your favorite companies are our partners.</h2>
                <div className="**:fill-foreground mx-auto mt-20 flex max-w-4xl flex-wrap items-center justify-center gap-x-12 gap-y-8 *:flex *:items-center *:justify-center sm:gap-x-16 sm:gap-y-12">
                    <div>
                        <VercelFull className="h-5 w-full" />
                    </div>
                    <div>
                        <Spotify className="h-6 w-full" />
                    </div>
                    <div>
                        <Supabase className="size-6" />
                    </div>
                    <div>
                        <Hulu className="h-5 w-full" />
                    </div>
                    <div>
                        <Bolt className="h-5 w-full" />
                    </div>
                    <div>
                        <Linear className="size-5" />
                    </div>
                    <div>
                        <Cisco className="h-6 w-full" />
                    </div>
                    <div>
                        <Beacon className="h-5 w-full" />
                    </div>
                    <div>
                        <Slack className="h-6 w-full" />
                    </div>
                    <div>
                        <Claude className="h-5 w-full" />
                    </div>
                    <div>
                        <Figma className="h-5 w-full" />
                    </div>
                </div>
            </div>
        </section>
    )
}
