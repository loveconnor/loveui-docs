"use client"

import { eachDayOfInterval, endOfYear, formatISO, startOfYear } from "date-fns"

import {
  ContributionGraph,
  ContributionGraphBlock,
  ContributionGraphCalendar,
  ContributionGraphFooter,
  ContributionGraphLegend,
  ContributionGraphTotalCount,
} from "../../../../../packages/contribution-graph"

const maxCount = 20
const maxLevel = 4
const now = new Date()
const days = eachDayOfInterval({
  start: startOfYear(now),
  end: endOfYear(now),
})

const data = days.map((date) => {
  const c = Math.round(
    Math.random() * maxCount - Math.random() * (0.8 * maxCount)
  )
  const count = Math.max(0, c)
  const level = Math.ceil((count / maxCount) * maxLevel)

  return {
    date: formatISO(date, { representation: "date" }),
    count,
    level,
  }
})

const Example = () => (
  <ContributionGraph data={data}>
    <ContributionGraphCalendar>
      {({ activity, dayIndex, weekIndex }) => (
        <ContributionGraphBlock
          activity={activity}
          className={
            activity.level > 3
              ? "animate-pulse stroke-emerald-500 stroke-2 dark:stroke-emerald-400"
              : activity.level === 0
                ? "opacity-50"
                : ""
          }
          dayIndex={dayIndex}
          style={{
            filter: activity.level > 2 ? "brightness(1.2)" : undefined,
          }}
          weekIndex={weekIndex}
        />
      )}
    </ContributionGraphCalendar>
    <ContributionGraphFooter>
      <ContributionGraphTotalCount />
      <ContributionGraphLegend />
    </ContributionGraphFooter>
  </ContributionGraph>
)

export default Example
