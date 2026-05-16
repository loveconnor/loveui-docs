import type { LinkItemType } from "./sheard";
import { buildUiBrowserHref } from "@/lib/ui-links";
import {
	BlocksIcon,
	BookOpenIcon,
	BookTextIcon,
	GalleryHorizontalEndIcon,
	ScaleIcon,
	PanelsTopLeftIcon,
	RocketIcon,
	SparklesIcon,
	SwatchBookIcon,
} from "lucide-react";

export const productLinks: LinkItemType[] = [
	{
		label: "Building Blocks",
		href: buildUiBrowserHref("/building-blocks"),
		description: "Ready-made building blocks for composing interfaces",
		icon: (
			<BlocksIcon
			/>
		),
	},
	{
		label: "Docs",
		href: buildUiBrowserHref("/docs"),
		description: "Guides and API docs to get started quickly",
		icon: (
			<BookOpenIcon
			/>
		),
	},
	{
		label: "Features",
		href: buildUiBrowserHref("/docs/features/avatar-stack"),
		description: "Explore component capabilities and core features",
		icon: (
			<SparklesIcon
			/>
		),
	},
];

export const companyLinks: LinkItemType[] = [
	{
		label: "Examples",
		href: buildUiBrowserHref("/examples"),
		description: "Browse practical examples built with LoveUI",
		icon: (
			<GalleryHorizontalEndIcon
			/>
		),
	},
	{
		label: "Templates",
		href: buildUiBrowserHref("/templates"),
		description: "Start from complete template foundations",
		icon: (
			<PanelsTopLeftIcon
			/>
		),
	},
	{
		label: "Backgrounds",
		href: buildUiBrowserHref("/docs/backgrounds/ether"),
		description: "Explore animated and visual background patterns",
		icon: (
			<SwatchBookIcon
			/>
		),
	},
];

export const companyLinks2: LinkItemType[] = [
	{
		label: "Get Started",
		href: buildUiBrowserHref("/docs/get-started"),
		icon: (
			<RocketIcon
			/>
		),
	},
	{
		label: "LoveUI MCP Server",
		href: buildUiBrowserHref("/docs/resources/loveui-mcp-server"),
		icon: (
			<SparklesIcon
			/>
		),
	},
	{
		label: "LoveUI Skills",
		href: buildUiBrowserHref("/docs/resources/loveui-skills"),
		icon: (
			<BlocksIcon
			/>
		),
	},
	{
		label: "Contributing Guide",
		href: buildUiBrowserHref("/docs/contributing"),
		icon: (
			<BookTextIcon
			/>
		),
	},
	{
		label: "License",
		href: buildUiBrowserHref("/docs"),
		icon: (
			<ScaleIcon
			/>
		),
	},
];
