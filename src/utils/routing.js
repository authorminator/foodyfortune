export function safeLowerPathSegment() {
  const raw = window.location.pathname.replace(/^\/+|\/+$/g, "");
  if (!raw) return "";
  return raw.toLowerCase().replace(/[^a-z0-9_-]/g, "");
}

export function formatNameForDisplay(slug) {
  if (!slug) return "";
  return slug
    .split(/[-_]/g)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}
