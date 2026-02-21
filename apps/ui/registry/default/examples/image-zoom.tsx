"use client"

import Image from "next/image"

import { ImageZoom } from "../../../../../packages/image-zoom"

const Example = () => (
  <ImageZoom>
    <Image
      alt="Placeholder image"
      className="h-auto w-96"
      height={800}
      src="https://placehold.co/1200x800"
      unoptimized
      width={1200}
    />
  </ImageZoom>
)

export default Example
