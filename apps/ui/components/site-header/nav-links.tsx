import type { LinkItemType } from "./sheard";
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
		href: "/ui/building-blocks",
		description: "Ready-made building blocks for composing interfaces",
		icon: (
			<BlocksIcon
			/>
		),
	},
	{
		label: "Docs",
		href: "/ui/docs",
		description: "Guides and API docs to get started quickly",
		icon: (
			<BookOpenIcon
			/>
		),
	},
	{
		label: "Features",
		href: "/ui/docs/features",
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
		href: "/ui/examples",
		description: "Browse practical examples built with LoveUI",
		icon: (
			<GalleryHorizontalEndIcon
			/>
		),
	},
	{
		label: "Templates",
		href: "/ui/templates",
		description: "Start from complete template foundations",
		icon: (
			<PanelsTopLeftIcon
			/>
		),
	},
	{
		label: "Backgrounds",
		href: "/ui/docs/backgrounds/ether",
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
		href: "/ui/docs/get-started",
		icon: (
			<RocketIcon
			/>
		),
	},
	{
		label: "LoveUI MCP Server",
		href: "/ui/docs/resources/loveui-mcp-server",
		icon: (
			<SparklesIcon
			/>
		),
	},
	{
		label: "LoveUI Skills",
		href: "/ui/docs/resources/loveui-skills",
		icon: (
			<BlocksIcon
			/>
		),
	},
	{
		label: "Contributing Guide",
		href: "/ui/docs/contributing",
		icon: (
			<BookTextIcon
			/>
		),
	},
	{
		label: "License",
		href: "/ui/docs",
		icon: (
			<ScaleIcon
			/>
		),
	},
];
