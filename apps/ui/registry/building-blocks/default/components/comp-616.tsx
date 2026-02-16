"use client"

import { useState } from "react"
import {
  IconArrowRight,
  IconAt,
  IconCopy,
  IconDeviceDesktop,
  IconDownload,
  IconFile,
  IconFileSearch,
  IconKeyboard,
  IconLink,
  IconLogout,
  IconMessage,
  IconPencil,
  IconPlus,
  IconSend,
  IconSettings,
  IconTemplate,
  IconUser,
  IconUsers,
} from "@tabler/icons-react"

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/registry/building-blocks/default/ui/command"
import { Kbd, KbdGroup } from "@/registry/building-blocks/default/ui/kbd"

export default function CommandMenu02() {
  const [inputValue, setInputValue] = useState("")

  return (
    <div className="w-full max-w-lg overflow-hidden rounded-xl border border-border/50 bg-popover shadow-lg">
      <Command className="flex h-full w-full flex-col overflow-hidden bg-popover [&_[cmdk-item]_svg]:size-4">
        <div className="relative">
          <CommandInput
            className="h-10 pe-16 text-sm"
            onValueChange={setInputValue}
            placeholder="What do you need?"
            value={inputValue}
          />
          <Kbd className="absolute top-1/2 right-4 -translate-y-1/2">Esc</Kbd>
        </div>

        <CommandList className="max-h-[400px] py-2">
          <CommandEmpty>No results found.</CommandEmpty>

          <CommandGroup>
            <CommandItem className="mx-2 rounded-lg py-2.5">
              <IconSettings aria-hidden />
              Account Settings...
              <KbdGroup className="ml-auto">
                <Kbd>⌘</Kbd>
                <Kbd>,</Kbd>
              </KbdGroup>
            </CommandItem>
            <CommandItem className="mx-2 rounded-lg py-2.5">
              <IconUser aria-hidden />
              Switch Workspace...
            </CommandItem>
            <CommandItem className="mx-2 rounded-lg py-2.5">
              <IconLogout aria-hidden />
              Log Out
              <KbdGroup className="ml-auto">
                <Kbd>⌘</Kbd>
                <Kbd>Q</Kbd>
              </KbdGroup>
            </CommandItem>
          </CommandGroup>

          <CommandGroup heading="Documents">
            <CommandItem className="mx-2 rounded-lg py-2.5">
              <IconFile aria-hidden />
              Search Documents...
              <KbdGroup className="ml-auto">
                <Kbd>⌘</Kbd>
                <Kbd>F</Kbd>
              </KbdGroup>
            </CommandItem>
            <CommandItem className="mx-2 rounded-lg py-2.5">
              <IconPlus aria-hidden />
              Create New Document...
              <KbdGroup className="ml-auto">
                <Kbd>⌘</Kbd>
                <Kbd>N</Kbd>
              </KbdGroup>
            </CommandItem>
            <CommandItem className="mx-2 rounded-lg py-2.5">
              <IconFile aria-hidden />
              Upload Document...
              <KbdGroup className="ml-auto">
                <Kbd>⌘</Kbd>
                <Kbd>U</Kbd>
              </KbdGroup>
            </CommandItem>
          </CommandGroup>

          <CommandGroup heading="Signing">
            <CommandItem className="mx-2 rounded-lg py-2.5">
              <IconSend aria-hidden />
              Request Signature...
            </CommandItem>
            <CommandItem className="mx-2 rounded-lg py-2.5">
              <IconPencil aria-hidden />
              Sign a Document...
            </CommandItem>
            <CommandItem className="mx-2 rounded-lg py-2.5">
              <IconUsers aria-hidden />
              Bulk Send for Signature...
            </CommandItem>
          </CommandGroup>

          <CommandGroup heading="Templates">
            <CommandItem className="mx-2 rounded-lg py-2.5">
              <IconTemplate aria-hidden />
              Search Templates...
            </CommandItem>
            <CommandItem className="mx-2 rounded-lg py-2.5">
              <IconPlus aria-hidden />
              Create New Template...
            </CommandItem>
          </CommandGroup>

          <CommandGroup heading="General">
            <CommandItem className="mx-2 rounded-lg py-2.5">
              <IconDeviceDesktop aria-hidden />
              Change Theme...
              <KbdGroup className="ml-auto">
                <Kbd>⌘</Kbd>
                <Kbd>T</Kbd>
              </KbdGroup>
            </CommandItem>
            <CommandItem className="mx-2 rounded-lg py-2.5">
              <IconCopy aria-hidden />
              Copy Current URL
              <KbdGroup className="ml-auto">
                <Kbd>⌘</Kbd>
                <Kbd>⇧</Kbd>
                <Kbd>C</Kbd>
              </KbdGroup>
            </CommandItem>
          </CommandGroup>

          <CommandGroup heading="Navigation">
            <CommandItem className="mx-2 rounded-lg py-2.5">
              <IconArrowRight aria-hidden />
              <span>
                Go to&nbsp;<strong className="font-semibold">Inbox</strong>
              </span>
            </CommandItem>
            <CommandItem className="mx-2 rounded-lg py-2.5">
              <IconArrowRight aria-hidden />
              <span>
                Go to&nbsp;
                <strong className="font-semibold">Action Required</strong>
              </span>
            </CommandItem>
            <CommandItem className="mx-2 rounded-lg py-2.5">
              <IconArrowRight aria-hidden />
              <span>
                Go to&nbsp;
                <strong className="font-semibold">Waiting for Others</strong>
              </span>
            </CommandItem>
            <CommandItem className="mx-2 rounded-lg py-2.5">
              <IconArrowRight aria-hidden />
              <span>
                Go to&nbsp;
                <strong className="font-semibold">Completed</strong>
              </span>
            </CommandItem>
            <CommandItem className="mx-2 rounded-lg py-2.5">
              <IconArrowRight aria-hidden />
              <span>
                Go to&nbsp;<strong className="font-semibold">Drafts</strong>
              </span>
            </CommandItem>
            <CommandItem className="mx-2 rounded-lg py-2.5">
              <IconArrowRight aria-hidden />
              <span>
                Go to&nbsp;
                <strong className="font-semibold">Templates</strong>
              </span>
            </CommandItem>
            <CommandItem className="mx-2 rounded-lg py-2.5">
              <IconArrowRight aria-hidden />
              <span>
                Go to&nbsp;
                <strong className="font-semibold">Archive</strong>
              </span>
            </CommandItem>
            <CommandItem className="mx-2 rounded-lg py-2.5">
              <IconArrowRight aria-hidden />
              <span>
                Go to&nbsp;<strong className="font-semibold">Trash</strong>
              </span>
            </CommandItem>
            <CommandItem className="mx-2 rounded-lg py-2.5">
              <IconArrowRight aria-hidden />
              <span>
                Go to&nbsp;
                <strong className="font-semibold">Settings</strong>
              </span>
            </CommandItem>
          </CommandGroup>

          <CommandGroup heading="Quick Actions">
            <CommandItem className="mx-2 rounded-lg py-2.5">
              <IconLink aria-hidden />
              Copy Signing Link
            </CommandItem>
            <CommandItem className="mx-2 rounded-lg py-2.5">
              <IconDownload aria-hidden />
              Download Document
            </CommandItem>
          </CommandGroup>

          <CommandGroup heading="Help">
            <CommandItem className="mx-2 rounded-lg py-2.5">
              <IconFileSearch aria-hidden />
              Search Help Center...
            </CommandItem>
            <CommandItem className="mx-2 rounded-lg py-2.5">
              <IconMessage aria-hidden />
              Send Feedback...
            </CommandItem>
            <CommandItem className="mx-2 rounded-lg py-2.5">
              <IconAt aria-hidden />
              Contact Support
            </CommandItem>
          </CommandGroup>

          <CommandGroup heading="Keyboard Shortcuts">
            <CommandItem className="mx-2 rounded-lg py-2.5">
              <IconKeyboard aria-hidden />
              View Keyboard Shortcuts
              <KbdGroup className="ml-auto">
                <Kbd>⌘</Kbd>
                <Kbd>/</Kbd>
              </KbdGroup>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  )
}
