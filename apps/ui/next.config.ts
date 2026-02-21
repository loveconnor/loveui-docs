import type { NextConfig } from "next"
import { createMDX } from "fumadocs-mdx/next"

const { NEXT_PUBLIC_ORIGIN_URL } = process.env

const withMDX = createMDX()

const nextConfig: NextConfig = {
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "/ui",
  transpilePackages: ["@loveui/ui", "@loveui/ether", "@loveui/silk", "@loveui/gradiant-blinds", "@loveui/gooey-toast"],
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack: (config, { webpack }) => {
    // Add alias for page templates to use @/ui/ -> @/registry/default/ui/
    config.resolve.alias = {
      ...config.resolve.alias,
      '@/ui': require('path').resolve(__dirname, 'registry/default/ui'),
    }
    
    // Exclude standalone example apps from webpack processing
    // These are meant to be run independently
    const exampleAppPaths = [
      'registry/example-apps/default/dashboard-1/(app|components|lib|hooks|store)',
      'registry/example-apps/default/dashboard-2/(app|components|lib|hooks|store)',
      'registry/example-apps/default/dashboard-3/(app|components|lib|hooks|store)',
      'registry/example-apps/default/bookmarks/(app|components|lib|hooks|store|mock-data)',
      'registry/example-apps/default/calendar/(app|components|lib|hooks|store|mock-data)',
      'registry/example-apps/default/emails/(app|components|lib|hooks|store|mock-data)',
      'registry/example-apps/default/files/(app|components|lib|hooks|store|mock-data)',
      'registry/example-apps/default/leads/(app|components|lib|hooks|store|mock-data)',
      'registry/example-apps/default/maps/(app|components|lib|hooks|store|mock-data)',
      'registry/example-apps/default/rentals/(app|components|lib|hooks|store|mock-data)',
    ]
    
    config.plugins.push(
      new webpack.IgnorePlugin({
        resourceRegExp: new RegExp(exampleAppPaths.join('|')),
      })
    )
    
    return config
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "wajxiz6qhqyqkm0o.public.blob.vercel-storage.com",
      },
      {
        protocol: "https",
        hostname: "stream.mux.com",
      },
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
      },
      {
        protocol: "https",
        hostname: "www.google.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/docs",
        permanent: false,
      },
      {
        source: "/docs/features",
        destination: "/docs/features/avatar-stack",
        permanent: false,
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: "/docs/:path*.md",
        destination: "/api/raw/docs/:path*",
      },
    ]
  },
}

export default withMDX(nextConfig)
