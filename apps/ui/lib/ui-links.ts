export function normalizeUiPath(path: string) {
  return path.startsWith("/") ? path : `/${path}`;
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
