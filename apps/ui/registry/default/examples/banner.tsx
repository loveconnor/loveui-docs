"use client"

import { CircleAlert } from "lucide-react"

import {
  Banner,
  BannerAction,
  BannerClose,
  BannerIcon,
  BannerTitle,
} from "../../../../../packages/banner"

const Example = () => (
  <Banner>
    <BannerIcon icon={CircleAlert} />
    <BannerTitle>
      Scheduled maintenance tonight from 1-3 AM Pacific.
    </BannerTitle>
    <BannerAction>View status page</BannerAction>
    <BannerClose />
  </Banner>
)

export default Example
