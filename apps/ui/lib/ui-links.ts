export function normalizeUiPath(path: string) {
  return path.startsWith("/") ? path : `/${path}`;
}

function buildAbsoluteHref(origin: string, path: string) {
  return new URL(normalizeUiPath(path), `${origin.replace(/\/$/, "")}/`).toString();
}

/**
 * In the /ui app (ui.loveui.dev), paths are relative — no domain prefix needed.
 */
export function buildUiHref(path: string) {
  return normalizeUiPath(path).replace(/\/{2,}/g, "/");
}

export function buildUiActiveHref(path: string) {
  return normalizeUiPath(path).replace(/\/{2,}/g, "/");
}

export function buildUiBrowserHref(path: string) {
  const href = buildUiHref(path);
  const basePath = (process.env.NEXT_PUBLIC_BASE_PATH || "/ui").replace(/\/$/, "");

  if (!basePath || href === basePath || href.startsWith(`${basePath}/`)) {
    return href;
  }

  return `${basePath}${href}`.replace(/\/{2,}/g, "/");
}

export function buildMarketingHref(path = "/") {
  const configuredOrigin = process.env.NEXT_PUBLIC_LOVEUI_URL?.trim();

  if (configuredOrigin) {
    return buildAbsoluteHref(configuredOrigin, path);
  }

  if (process.env.NODE_ENV === "production") {
    return buildAbsoluteHref("https://loveui.dev", path);
  }

  return normalizeUiPath(path).replace(/\/{2,}/g, "/");
}
