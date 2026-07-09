import type { MetadataRoute } from "next";

const BASE = "https://www.roomieuy.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${BASE}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/exchange`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/concierge`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/concierge/en`, changeFrequency: "weekly", priority: 0.8 },
  ];
}
