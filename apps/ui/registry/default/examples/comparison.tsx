"use client"

import Image from "next/image"

import {
  Comparison,
  ComparisonHandle,
  ComparisonItem,
} from "../../../../../packages/comparison"

const Example = () => (
  <Comparison className="aspect-video">
    <ComparisonItem className="bg-red-500" position="left">
      <Image
        alt="Updated Placeholder 1"
        className="opacity-50"
        height={1080}
        src="https://placehold.co/1920x1080?random=1"
        unoptimized
        width={1920}
      />
    </ComparisonItem>
    <ComparisonItem className="bg-blue-500" position="right">
      <Image
        alt="Updated Placeholder 2"
        className="opacity-50"
        height={1440}
        src="https://placehold.co/2560x1440?random=2"
        unoptimized
        width={2560}
      />
    </ComparisonItem>
    <ComparisonHandle />
  </Comparison>
)

export default Example
