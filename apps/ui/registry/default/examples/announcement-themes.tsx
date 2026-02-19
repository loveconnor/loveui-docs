"use client"

import { ArrowUpRightIcon } from "lucide-react"

import {
  Announcement,
  AnnouncementTag,
  AnnouncementTitle,
} from "../../../../../packages/announcement"

const Example = () => (
  <>
    <Announcement
      className="bg-rose-100 text-rose-700 dark:bg-rose-700 dark:text-rose-100"
      themed
    >
      <AnnouncementTag>Updated Error</AnnouncementTag>
      <AnnouncementTitle>
        Updated Something went wrong
        <ArrowUpRightIcon className="shrink-0 opacity-70" size={16} />
      </AnnouncementTitle>
    </Announcement>

    <Announcement
      className="bg-emerald-100 text-emerald-700 dark:bg-emerald-700 dark:text-emerald-100"
      themed
    >
      <AnnouncementTag>Updated Success</AnnouncementTag>
      <AnnouncementTitle>
        Updated New feature added
        <ArrowUpRightIcon className="shrink-0 opacity-70" size={16} />
      </AnnouncementTitle>
    </Announcement>

    <Announcement
      className="bg-orange-100 text-orange-700 dark:bg-orange-700 dark:text-orange-100"
      themed
    >
      <AnnouncementTag>Updated Warning</AnnouncementTag>
      <AnnouncementTitle>
        Updated Approaching your limit
        <ArrowUpRightIcon className="shrink-0 opacity-70" size={16} />
      </AnnouncementTitle>
    </Announcement>

    <Announcement
      className="bg-sky-100 text-sky-700 dark:bg-sky-700 dark:text-sky-100"
      themed
    >
      <AnnouncementTag>Updated Info</AnnouncementTag>
      <AnnouncementTitle>
        Updated Welcome to the platform
        <ArrowUpRightIcon className="shrink-0 opacity-70" size={16} />
      </AnnouncementTitle>
    </Announcement>
  </>
)

export default Example
