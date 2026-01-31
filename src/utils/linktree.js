// Linktree-Tracking Helper

import { trackEvent } from "./analytics.js";

const BASE_LINKTREE_URL = "https://linktr.fitandtravel.ai";

export function buildLinktreeUrl({ 
    source, 
    medium = "cta", 
    campaign = "" 
  , content = ""
}) {
  const params = new URLSearchParams({
    utm_source: source,
    utm_medium: medium,
    utm_campaign: campaign,
  });

  if (content) {
    params.set("utm_content", content);
  }
  return `${BASE_LINKTREE_URL}?${params.toString()}`;
}

export function trackLinktreeClick(data = {}) {
  trackEvent("linktree_click", data);
}

export function isLinktreeLink(href = "") {
  return href.includes("linktr.ee/fitandtravel.ai");
}
