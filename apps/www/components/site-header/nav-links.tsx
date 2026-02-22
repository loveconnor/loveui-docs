import type { LinkItemType } from "./sheard";
import { buildUiHref } from "@/lib/ui-links";
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
		href: buildUiHref("/building-blocks"),
		description: "Ready-made building blocks for composing interfaces",
		icon: (
			<BlocksIcon
			/>
		),
	},
	{
		label: "Docs",
		href: buildUiHref("/docs"),
		description: "Guides and API docs to get started quickly",
		icon: (
			<BookOpenIcon
			/>
		),
	},
	{
		label: "Features",
		href: buildUiHref("/docs/features"),
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
		href: buildUiHref("/examples"),
		description: "Browse practical examples built with LoveUI",
		icon: (
			<GalleryHorizontalEndIcon
			/>
		),
	},
	{
		label: "Templates",
		href: buildUiHref("/templates"),
		description: "Start from complete template foundations",
		icon: (
			<PanelsTopLeftIcon
			/>
		),
	},
	{
		label: "Backgrounds",
		href: buildUiHref("/docs/backgrounds/ether"),
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
		href: buildUiHref("/docs/get-started"),
		icon: (
			<RocketIcon
			/>
		),
	},
	{
		label: "LoveUI MCP Server",
		href: buildUiHref("/docs/resources/loveui-mcp-server"),
		icon: (
			<SparklesIcon
			/>
		),
	},
	{
		label: "LoveUI Skills",
		href: buildUiHref("/docs/resources/loveui-skills"),
		icon: (
			<BlocksIcon
			/>
		),
	},
	{
		label: "Contributing Guide",
		href: buildUiHref("/docs/contributing"),
		icon: (
			<BookTextIcon
			/>
		),
	},
	{
		label: "License",
		href: buildUiHref("/docs"),
		icon: (
			<ScaleIcon
			/>
		),
	},
];
