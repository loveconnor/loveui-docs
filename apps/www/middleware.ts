import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const UI_ORIGIN = process.env.NEXT_PUBLIC_UI_ORIGIN || "http://localhost:4000";
const UI_TOP_LEVEL_PREFIXES = [
  "/docs",
  "/building-blocks",
  "/templates",
  "/examples",
  "/features",
  "/particles",
  "/r",
  "/api/raw",
] as const;

function isUiTopLevelPath(pathname: string) {
  return UI_TOP_LEVEL_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`)
  );
}

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const referer = request.headers.get("referer") || "";
  const cameFromUiRoute = referer.includes("/ui");

  if (pathname === "/ui" || pathname.startsWith("/ui/")) {
    const url = new URL(`${pathname}${search}`, UI_ORIGIN);
    return NextResponse.rewrite(url);
  }

  if (cameFromUiRoute && isUiTopLevelPath(pathname)) {
    const url = new URL(`${pathname}${search}`, UI_ORIGIN);
    return NextResponse.rewrite(url);
  }

  if (pathname.startsWith("/_next")) {
    if (cameFromUiRoute) {
      const url = new URL(`${pathname}${search}`, UI_ORIGIN);
      return NextResponse.rewrite(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/ui/:path*",
    "/ui",
    "/_next/:path*",
    "/docs",
    "/docs/:path*",
    "/building-blocks",
    "/building-blocks/:path*",
    "/templates",
    "/templates/:path*",
    "/examples",
    "/examples/:path*",
    "/features",
    "/features/:path*",
    "/particles",
    "/particles/:path*",
    "/r",
    "/r/:path*",
    "/api/raw",
    "/api/raw/:path*",
  ],
};
