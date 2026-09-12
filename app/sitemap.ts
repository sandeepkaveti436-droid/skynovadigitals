import type { MetadataRoute } from "next";

const siteUrl = "https://skynovadigitals.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/services",
    "/process",
    "/projects",
    "/projects/digify-agency",
    "/projects/orvixa-workspace",
  ];

  return routes.map((route, index) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: index === 0 ? "weekly" : "monthly",
    priority: index === 0 ? 1 : 0.8,
  }));
}
