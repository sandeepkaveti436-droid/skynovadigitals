import type { MetadataRoute } from "next";

const siteUrl = "https://skynovadigitals.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  // List all your website routes here
  const routes = [
    "", // Homepage
    "/about",
    "/services",
    "/process",
    "/projects",
    "/projects/digify-agency",
    "/projects/orvixa-workspace",
  ];

  return routes.map((route) => {
    // Set higher priority and frequency for the homepage
    const isHomepage = route === "";

    return {
      url: `${siteUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: isHomepage ? "daily" : "weekly", // Homepage changes more often
      priority: isHomepage ? 1.0 : 0.8, // Homepage is the most important
    };
  });
}
