import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectsShowcase } from "@/components/sections/ProjectsShowcase";
import { siteConfig } from "@/content/site";
import { projects } from "@/content/projects";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dictionary = await getDictionary(locale);
  const copy = dictionary.projectsShowcase;

  const title = `${copy.eyebrow} | ${siteConfig.fullBrandName}`;
  return {
    title,
    description: copy.description,
    alternates: {
      canonical: `/${locale}/projects`,
      languages: { "bg-BG": "/bg/projects", en: "/en/projects", "x-default": "/bg/projects" },
    },
    openGraph: { title, description: copy.description, url: `/${locale}/projects`, type: "website", images: [projects[0].image] },
  };
}

export default async function ProjectsPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dictionary = await getDictionary(locale);

  return (
    <main id="main-content">
      <ProjectsShowcase locale={locale} dictionary={dictionary} headingLevel={1} />
    </main>
  );
}
