import { trackEvent } from "./analytics";

/**
 * Fügt optional UTM-Parameter zu einem Link hinzu.
 * (Für Amazon/Partnerlinks etc.)
 */
export function withUtm(href, utm = null) {
  if (!utm) return href;

  try {
    const url = new URL(href);
    if (utm.source) url.searchParams.set("utm_source", utm.source);
    if (utm.medium) url.searchParams.set("utm_medium", utm.medium);
    if (utm.campaign) url.searchParams.set("utm_campaign", utm.campaign);
    if (utm.content) url.searchParams.set("utm_content", utm.content);
    return url.toString();
  } catch {
    // falls href keine absolute URL ist, einfach original zurückgeben
    return href;
  }
}

export function trackOutboundClick({
  destination = "",
  label = "",
  location = "",
  page = "",
}) {
  trackEvent("outbound_click", {
    destination,
    label,
    location,
    page,
  });
}
