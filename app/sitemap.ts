import type { MetadataRoute } from "next";
import { site } from "@/lib/data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1 },
    { path: "/services", priority: 0.9 },
    { path: "/industries", priority: 0.9 },
    { path: "/solutions", priority: 0.9 },
    { path: "/case-studies", priority: 0.8 },
    { path: "/about", priority: 0.7 },
    { path: "/contact", priority: 0.8 },
    { path: "/book-audit", priority: 0.9 },
  ];

  return routes.map(({ path, priority }) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority,
  }));
}
