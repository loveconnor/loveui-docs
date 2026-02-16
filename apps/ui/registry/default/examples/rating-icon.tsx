"use client"

import { HeartIcon } from "lucide-react"

import { Rating, RatingButton } from "../../../../../packages/rating"

const Example = () => (
  <Rating defaultValue={3}>
    {Array.from({ length: 5 }).map((_, index) => (
      <RatingButton icon={<HeartIcon />} key={index} />
    ))}
  </Rating>
)

export default Example
