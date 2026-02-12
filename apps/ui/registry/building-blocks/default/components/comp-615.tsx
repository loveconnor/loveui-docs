"use client";

import {
  IconBell,
  IconBolt,
  IconCalendar,
  IconChartBar,
  IconChartPie,
  IconClock,
  IconFileText,
  IconHelp,
  IconKeyboard,
  IconLayoutDashboard,
  IconLayoutKanban,
  IconLogout,
  IconMessage,
  IconPalette,
  IconSettings,
  IconSquareCheck,
  IconTarget,
  IconTrendingUp,
  IconUsers,
} from "@tabler/icons-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/registry/building-blocks/default/ui/command";
import { Kbd } from "@/registry/building-blocks/default/ui/kbd";

const workspaceItems = [
  { icon: IconLayoutDashboard, label: "Dashboard" },
  { icon: IconLayoutKanban, label: "Projects" },
  { icon: IconSquareCheck, label: "Tasks" },
  { icon: IconCalendar, label: "Calendar" },
  { icon: IconUsers, label: "Team members" },
  { icon: IconMessage, label: "Messages" },
  { icon: IconFileText, label: "Documents" },
  { icon: IconBell, label: "Notifications" },
  { icon: IconClock, label: "Time tracking" },
  { icon: IconTarget, label: "Goals" },
];

const analyticsItems = [
  { icon: IconChartBar, label: "Overview" },
  { icon: IconTrendingUp, label: "Performance" },
  { icon: IconChartPie, label: "Reports" },
  { icon: IconBolt, label: "Insights" },
];

const settingsItems = [
  { icon: IconSettings, label: "Preferences" },
  { icon: IconPalette, label: "Appearance" },
  { icon: IconKeyboard, label: "Keyboard shortcuts" },
  { icon: IconHelp, label: "Help & support" },
  { icon: IconLogout, label: "Sign out" },
];

export default function CommandMenu01() {
  return (
    <div className="w-full max-w-lg overflow-hidden rounded-xl border border-border/50 bg-popover shadow-lg">
      <Command className="rounded-none border-0 bg-transparent [&_[cmdk-item]_svg]:size-4">
        <CommandInput
          className="h-12"
          placeholder="Type a command or search..."
        />
        <CommandList className="h-[320px] max-h-[320px]">
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Workspace">
            {workspaceItems.map((item) => (
              <CommandItem key={item.label}>
                <item.icon className="mr-2 h-4 w-4" />
                <span>{item.label}</span>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup heading="Analytics">
            {analyticsItems.map((item) => (
              <CommandItem key={item.label}>
                <item.icon className="mr-2 h-4 w-4" />
                <span>{item.label}</span>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup heading="Settings">
            {settingsItems.map((item) => (
              <CommandItem key={item.label}>
                <item.icon className="mr-2 h-4 w-4" />
                <span>{item.label}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </Command>
      <div className="flex h-12 items-center justify-end border-t px-3">
        <span className="flex items-center gap-1 text-muted-foreground text-sm">
          <span>Close</span>
          <Kbd className="ml-1">Esc</Kbd>
        </span>
      </div>
    </div>
  );
}
