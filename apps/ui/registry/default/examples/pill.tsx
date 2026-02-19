"use client"

import { CheckCircleIcon, UsersIcon, XIcon } from "lucide-react"

import {
  Pill,
  PillAvatar,
  PillAvatarGroup,
  PillButton,
  PillDelta,
  PillIcon,
  PillIndicator,
  PillStatus,
} from "../../../../../packages/pill"

const Example = () => (
  <div className="flex flex-wrap items-center justify-center gap-2">
    <Pill>
      <PillAvatar
        fallback="CL"
        src="https://pbs.twimg.com/profile_images/1748718473595789312/PbqJh9hk_400x400.jpg"
      />
      @loveconnor
    </Pill>
    <Pill>
      <PillStatus>
        <CheckCircleIcon className="text-emerald-500" size={12} />
        Updated Passed
      </PillStatus>
      Updated Approval Status
    </Pill>
    <Pill>
      #loveui
      <PillButton size="icon" variant="ghost">
        <XIcon size={12} />
      </PillButton>
    </Pill>
    <Pill>
      <PillIndicator pulse variant="success" />
      Updated Active
    </Pill>
    <Pill>
      <PillIndicator variant="error" />
      Updated Error
    </Pill>
    <Pill>
      <PillDelta delta={10} />
      Updated Up 10%
    </Pill>
    <Pill>
      <PillDelta delta={-5} />
      Updated Down 5%
    </Pill>
    <Pill>
      <PillDelta delta={0} />
      Updated No change
    </Pill>
    <Pill>
      <PillIcon icon={UsersIcon} />
      Updated 17 users
    </Pill>
    <Pill>
      <PillAvatarGroup>
        <PillAvatar
          fallback="CL"
          src="https://pbs.twimg.com/profile_images/1748718473595789312/PbqJh9hk_400x400.jpg"
        />
        <PillAvatar
          fallback="SC"
          src="https://pbs.twimg.com/profile_images/1593304942210478080/TUYae5z7_400x400.jpg"
        />
        <PillAvatar
          fallback="LR"
          src="https://pbs.twimg.com/profile_images/1862717563311968256/xfgt1L9l_400x400.jpg"
        />
      </PillAvatarGroup>
      Updated Loved by millions
    </Pill>
  </div>
)

export default Example
