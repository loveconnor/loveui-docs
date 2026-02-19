"use client"

import {
  IconArchive,
  IconCalendar,
  IconChecks,
  IconChevronLeft,
  IconChevronRight,
  IconClock,
  IconDotsVertical,
  IconFile,
  IconFileSpreadsheet,
  IconFileText,
  IconFileZip,
  IconFilter,
  IconFolderOpen,
  IconMailPlus,
  IconPhoto,
  IconReceipt,
  IconSettings,
  IconShare,
  IconShield,
  IconSparkles,
  IconStar,
  IconTag,
  IconTrash,
  IconVolume,
  IconX,
} from "@tabler/icons-react"
import { format } from "date-fns"

import { Avatar, AvatarFallback, AvatarImage } from "@loveui/ui/ui/avatar"
import { Button } from "@loveui/ui/ui/button"

import { cn } from "../../lib/utils"
import { useEmailsStore } from "../../store/emails-store"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip"
import { VerifiedIcon } from "../ui/verified-icon"

function getFileIcon(type: string) {
  if (type.includes("pdf")) {
    return IconFileText
  } else if (type.includes("word") || type.includes("document")) {
    return IconFileText
  } else if (type.includes("excel") || type.includes("spreadsheet")) {
    return IconFileSpreadsheet
  } else if (type.includes("powerpoint") || type.includes("presentation")) {
    return IconFileText
  } else if (
    type.includes("image") ||
    type.includes("png") ||
    type.includes("jpg") ||
    type.includes("jpeg")
  ) {
    return IconPhoto
  } else if (type.includes("zip") || type.includes("archive")) {
    return IconFileZip
  }
  return IconFile
}

function getFileGradient(type: string) {
  if (type.includes("pdf")) {
    return { start: "#f75936", end: "#a73a24" }
  } else if (type.includes("word") || type.includes("document")) {
    return { start: "#2b5797", end: "#1e3d6b" }
  } else if (type.includes("excel") || type.includes("spreadsheet")) {
    return { start: "#217346", end: "#165530" }
  } else if (type.includes("powerpoint") || type.includes("presentation")) {
    return { start: "#d04423", end: "#9b3319" }
  } else if (
    type.includes("image") ||
    type.includes("png") ||
    type.includes("jpg") ||
    type.includes("jpeg")
  ) {
    return { start: "#8b5cf6", end: "#6d28d9" }
  } else if (type.includes("zip") || type.includes("archive")) {
    return { start: "#f59e0b", end: "#d97706" }
  }
  return { start: "#6b7280", end: "#4b5563" }
}

export function EmailDetail() {
  const {
    emails,
    selectedEmailId,
    toggleStar,
    clearSelectedEmail,
    selectEmail,
  } = useEmailsStore()
  const email = emails.find((e) => e.id === selectedEmailId)

  const currentIndex = emails.findIndex((e) => e.id === selectedEmailId)
  const isFirstEmail = currentIndex === 0
  const isLastEmail = currentIndex === emails.length - 1

  const goToPreviousEmail = () => {
    if (!isFirstEmail && currentIndex > 0) {
      selectEmail(emails[currentIndex - 1].id)
    }
  }

  const goToNextEmail = () => {
    if (!isLastEmail && currentIndex < emails.length - 1) {
      selectEmail(emails[currentIndex + 1].id)
    }
  }

  if (!email) {
    return (
      <div className="flex h-full items-center justify-center bg-card">
        <div className="text-center text-muted-foreground">
          <p>Select an alert to review</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex h-full flex-col bg-card">
      <div className="flex items-center justify-between border-b border-border px-3 py-3 md:px-6 md:py-4">
        <div className="hidden items-center gap-3 lg:flex">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon-sm">
                <IconSparkles className="size-4 text-foreground" stroke={1.5} />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>AI Assistant</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon-sm">
                <IconArchive
                  className="size-4 text-muted-foreground"
                  stroke={1.5}
                />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Archive</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon-sm">
                <IconSettings
                  className="size-4 text-muted-foreground"
                  stroke={1.5}
                />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Mark as noise</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon-sm">
                <IconTrash
                  className="size-4 text-muted-foreground"
                  stroke={1.5}
                />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Delete</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon-sm">
                <IconMailPlus
                  className="size-4 text-muted-foreground"
                  stroke={1.5}
                />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Mark as unread</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon-sm">
                <IconFolderOpen
                  className="size-4 text-muted-foreground"
                  stroke={1.5}
                />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Move to folder</p>
            </TooltipContent>
          </Tooltip>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon-sm">
                <IconDotsVertical
                  className="size-4 text-muted-foreground"
                  stroke={1.5}
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-64">
              <DropdownMenuItem>
                <IconClock className="mr-2 size-4" stroke={1.5} />
                Snooze
              </DropdownMenuItem>
              <DropdownMenuItem>
                <IconChecks className="mr-2 size-4" stroke={1.5} />
                Add to Tasks
              </DropdownMenuItem>
              <DropdownMenuItem>
                <IconCalendar className="mr-2 size-4" stroke={1.5} />
                Create event
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <IconTag className="mr-2 size-4" stroke={1.5} />
                  Label as
                </DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>Ops</DropdownMenuItem>
                  <DropdownMenuItem>Investigation</DropdownMenuItem>
                  <DropdownMenuItem>SEV-1</DropdownMenuItem>
                  <DropdownMenuItem>Postmortem</DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
              <DropdownMenuItem>
                <IconFilter className="mr-2 size-4" stroke={1.5} />
                Filter messages like these
              </DropdownMenuItem>
              <DropdownMenuItem>
                <IconVolume className="mr-2 size-4" stroke={1.5} />
                Mute
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <IconSettings className="mr-2 size-4" stroke={1.5} />
                Switch to advanced toolbar
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="flex items-center gap-1 md:gap-2 lg:hidden">
          <Button variant="ghost" size="icon-sm">
            <IconSparkles className="size-4 text-foreground" stroke={1.5} />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon-sm">
                <IconDotsVertical
                  className="size-4 text-muted-foreground"
                  stroke={1.5}
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48">
              <DropdownMenuItem>
                <IconArchive className="size-4" stroke={1.5} />
                <span>Archive</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <IconSettings className="size-4" stroke={1.5} />
                <span>Mark as noise</span>
              </DropdownMenuItem>
              <DropdownMenuItem variant="destructive">
                <IconTrash className="size-4" stroke={1.5} />
                <span>Delete</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <IconMailPlus className="size-4" stroke={1.5} />
                <span>Mark as unread</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <IconFolderOpen className="size-4" stroke={1.5} />
                <span>Move to folder</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          <Button
            variant="ghost"
            size="icon-sm"
            onClick={clearSelectedEmail}
            className="hidden md:flex"
          >
            <IconX className="size-4 text-muted-foreground" stroke={1.5} />
          </Button>
          <p className="hidden text-[11px] whitespace-nowrap text-muted-foreground sm:block md:text-[13px]">
            {currentIndex + 1} from {emails.length}
          </p>
          <div className="flex items-center gap-0.5 md:gap-1">
            <Button
              variant="ghost"
              size="icon-sm"
              onClick={goToPreviousEmail}
              disabled={isFirstEmail}
            >
              <IconChevronLeft
                className={cn(
                  "size-4",
                  isFirstEmail
                    ? "text-muted-foreground/30"
                    : "text-muted-foreground"
                )}
                stroke={1.5}
              />
            </Button>
            <Button
              variant="ghost"
              size="icon-sm"
              onClick={goToNextEmail}
              disabled={isLastEmail}
            >
              <IconChevronRight
                className={cn(
                  "size-4",
                  isLastEmail
                    ? "text-muted-foreground/30"
                    : "text-muted-foreground"
                )}
                stroke={1.5}
              />
            </Button>
          </div>
        </div>
      </div>

      <div className="border-b border-border px-3 py-3 md:px-6 md:py-4">
        <div className="flex items-start justify-between gap-2 md:items-center md:gap-4">
          <div className="flex min-w-0 flex-1 items-start gap-2 md:items-center md:gap-2.5">
            <Avatar className="size-8 shrink-0 md:size-10">
              <AvatarImage src={email.from.avatar} alt={email.from.name} />
              <AvatarFallback>{email.from.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1">
                <p className="truncate text-sm font-medium text-foreground md:text-base">
                  {email.from.name}
                </p>
                {email.from.verified && (
                  <VerifiedIcon className="size-3 shrink-0 md:size-4" />
                )}
              </div>
              <p className="truncate text-[12px] text-muted-foreground md:text-[14px]">
                <span className="hidden sm:inline">From: </span>
                <span className="text-foreground">{email.from.email}</span>
              </p>
              <p className="mt-0.5 text-[11px] text-muted-foreground md:hidden">
                {format(email.date, "MMM dd, yyyy")}
              </p>
            </div>
          </div>

          <div className="hidden items-center gap-3 md:flex lg:gap-4">
            <p className="hidden text-[14px] whitespace-nowrap text-muted-foreground opacity-70 lg:block">
              {format(email.date, "MMMM dd, yyyy hh:mm")}
            </p>
            <Button
              variant="ghost"
              size="icon-sm"
              onClick={() => toggleStar(email.id)}
            >
              <IconStar
                className={cn(
                  "size-4",
                  email.starred
                    ? "fill-yellow-500 text-yellow-500"
                    : "text-muted-foreground"
                )}
                stroke={1.5}
              />
            </Button>
            <Button variant="ghost" size="icon-sm" className="hidden lg:flex">
              <IconShare
                className="size-4 text-muted-foreground"
                stroke={1.5}
              />
            </Button>
            <Button variant="ghost" size="icon-sm" className="hidden lg:flex">
              <IconReceipt
                className="size-4 text-muted-foreground"
                stroke={1.5}
              />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon-sm">
                  <IconDotsVertical
                    className="size-4 text-muted-foreground"
                    stroke={1.5}
                  />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem className="lg:hidden">
                  <IconShare className="size-4" stroke={1.5} />
                  <span>Reply</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="lg:hidden">
                  <IconReceipt className="size-4" stroke={1.5} />
                  <span>Forward</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator className="lg:hidden" />
                <DropdownMenuItem>
                  <IconArchive className="size-4" stroke={1.5} />
                  <span>Archive</span>
                </DropdownMenuItem>
                <DropdownMenuItem variant="destructive">
                  <IconTrash className="size-4" stroke={1.5} />
                  <span>Delete</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="flex shrink-0 items-center gap-1 md:hidden">
            <Button
              variant="ghost"
              size="icon-sm"
              onClick={() => toggleStar(email.id)}
            >
              <IconStar
                className={cn(
                  "size-4",
                  email.starred
                    ? "fill-yellow-500 text-yellow-500"
                    : "text-muted-foreground"
                )}
                stroke={1.5}
              />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon-sm">
                  <IconDotsVertical
                    className="size-4 text-muted-foreground"
                    stroke={1.5}
                  />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem>
                  <IconShare className="size-4" stroke={1.5} />
                  <span>Reply</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <IconReceipt className="size-4" stroke={1.5} />
                  <span>Forward</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <IconArchive className="size-4" stroke={1.5} />
                  <span>Archive</span>
                </DropdownMenuItem>
                <DropdownMenuItem variant="destructive">
                  <IconTrash className="size-4" stroke={1.5} />
                  <span>Delete</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-3 py-3 md:px-6 md:py-4">
        <p className="mb-3 text-[18px] leading-tight font-medium tracking-tight text-foreground md:mb-4 md:text-[20px]">
          {email.subject}
        </p>

        <div className="text-[13px] leading-relaxed tracking-tight whitespace-pre-wrap text-foreground/80 md:text-[14px] dark:text-[#cccccc]">
          {email.body}
        </div>

        {email.attachments && email.attachments.length > 0 && (
          <div className="mt-4 md:mt-6">
            <div className="mb-2 flex items-center gap-1.5">
              <p className="text-[12px] font-semibold text-foreground md:text-[13px]">
                Attachment
              </p>
              <div className="flex items-center gap-0.5">
                <p className="text-[11px] text-muted-foreground md:text-[12px]">
                  Secure by
                </p>
                <p className="text-[11px] text-foreground md:text-[12px]">
                  data.ai
                </p>
                <IconShield
                  className="size-3 text-[#38bdf8] md:size-4"
                  stroke={1.5}
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {email.attachments.map((attachment) => {
                const FileIconComponent = getFileIcon(attachment.type)
                const gradient = getFileGradient(attachment.type)

                return (
                  <div
                    key={attachment.id}
                    className="flex items-center gap-2 rounded-md border border-border bg-muted px-2 py-1.5 md:px-3"
                  >
                    <div
                      className="flex size-5 shrink-0 items-center justify-center rounded md:size-6"
                      style={{
                        background: `linear-gradient(135deg, ${gradient.start}, ${gradient.end})`,
                      }}
                    >
                      <FileIconComponent
                        className="size-3 text-white md:size-3.5"
                        stroke={1.5}
                      />
                    </div>
                    <div className="leading-tight">
                      <p className="max-w-[150px] truncate text-[12px] font-medium text-foreground md:max-w-none md:text-[13px]">
                        {attachment.name}
                      </p>
                      <p className="text-[11px] text-muted-foreground md:text-[12px]">
                        {attachment.size}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
