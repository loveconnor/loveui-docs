"use client"

import Image from "next/image"

import { cn } from "@/lib/utils"

import { ImageZoom } from "../../../../../packages/image-zoom"

const Example = () => (
  <ImageZoom
    backdropClassName={cn(
      '[&_[data-rmiz-modal-overlay="visible"]]:bg-black/80'
    )}
  >
    <Image
      alt="Updated Placeholder image"
      className="h-auto w-96"
      height={800}
      src="https://placehold.co/1200x800"
      unoptimized
      width={1200}
    />
  </ImageZoom>
)

export default Example
