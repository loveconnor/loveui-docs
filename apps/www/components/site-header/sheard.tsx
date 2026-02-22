import { cn } from "@/lib/utils";
import type React from "react";

export type LinkItemType = {
	label: string;
	href: string;
	icon: React.ReactNode;
	description?: string;
};

export function LinkItem({
	label,
	description,
	icon,
	className,
	href,
	...props
}: React.ComponentProps<"a"> & LinkItemType) {
	return (
		<a
			className={cn("flex items-center gap-x-2", className)}
			href={href}
			{...props}
		>
			<div
				className={cn(
					"flex aspect-square size-9 items-center justify-center rounded-md border bg-card text-sm shadow-sm",
					"[&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='size-'])]:text-foreground"
				)}
			>
				{icon}
			</div>
			<div className="flex flex-col items-start justify-center">
				<span className="text-sm font-medium">{label}</span>
				<span className="line-clamp-2 text-muted-foreground text-xs">
					{description}
				</span>
			</div>
		</a>
	);
}
