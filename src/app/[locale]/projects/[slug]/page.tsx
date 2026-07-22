import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetail } from "@/components/sections/ProjectDetail";
import { getProjectBySlug, projects } from "@/content/projects";
import { siteConfig } from "@/content/site";
import { isLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { projectRoute } from "@/lib/routes";
import { getLocalizedText } from "@/types/content";

type Props = { params: Promise<{ locale: string; slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    projects.map((project) => ({ locale, slug: project.slug })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const project = getProjectBySlug(slug);
  if (!project) return {};
  const dictionary = await getDictionary(locale);
  const title = getLocalizedText(project.name, locale);
  const description =
    project.placeholder || !project.shortDescription
      ? dictionary.projectDetail.pendingDescription
      : getLocalizedText(project.shortDescription, locale);

  const metadataTitle = `${title} | ${siteConfig.fullBrandName}`;
  return {
    title: metadataTitle,
    description,
    robots: project.placeholder ? { index: false, follow: false } : undefined,
    alternates: {
      canonical: projectRoute(locale, slug),
      languages: {
        "bg-BG": projectRoute("bg", slug),
        en: projectRoute("en", slug),
        "x-default": projectRoute("bg", slug),
      },
    },
    openGraph: { title: metadataTitle, description, url: projectRoute(locale, slug), type: "website", images: [project.image] },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const project = getProjectBySlug(slug);
  if (!project) notFound();
  const dictionary = await getDictionary(locale);
  const projectIndex = projects.findIndex((item) => item.id === project.id);
  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <ProjectDetail
      project={project}
      nextProject={nextProject}
      locale={locale}
      dictionary={dictionary}
    />
  );
}
