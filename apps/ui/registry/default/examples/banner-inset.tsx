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
  <Banner inset>
    <BannerIcon icon={CircleAlert} />
    <BannerTitle>
      Your trial ends in 3 days. Add a payment method to stay live.
    </BannerTitle>
    <BannerAction>Update billing</BannerAction>
    <BannerClose />
  </Banner>
)

export default Example
