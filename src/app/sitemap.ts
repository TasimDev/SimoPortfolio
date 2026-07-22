import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { siteConfig } from "@/content/site";
import { locales } from "@/i18n/config";
import { projectRoute, routes } from "@/lib/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = locales.flatMap((locale) => [
    {
      url: `${siteConfig.siteUrl}${routes.home(locale)}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1,
    },
    {
      url: `${siteConfig.siteUrl}${routes.projects(locale)}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${siteConfig.siteUrl}${routes.contact(locale)}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${siteConfig.siteUrl}${routes.privacy(locale)}`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
  ]);
  const projectPages = locales.flatMap((locale) =>
    projects
      .filter((project) => !project.placeholder)
      .map((project) => ({
        url: `${siteConfig.siteUrl}${projectRoute(locale, project.slug)}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.7,
      })),
  );

  return [...pages, ...projectPages];
}
