import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContactShowcase } from "@/components/sections/ContactShowcase";
import { siteConfig } from "@/content/site";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale } from "@/i18n/config";
import { defaultSocialImage } from "@/lib/metadata";
import { routes } from "@/lib/routes";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dictionary = await getDictionary(locale);
  const copy = dictionary.contactShowcase;
  const title = `${copy.eyebrow} | ${siteConfig.fullBrandName}`;
  return {
    title,
    description: copy.description,
    alternates: {
      canonical: routes.contact(locale),
      languages: { "bg-BG": routes.contact("bg"), en: routes.contact("en"), "x-default": routes.contact("bg") },
    },
    openGraph: { title, description: copy.description, url: routes.contact(locale), type: "website", images: [defaultSocialImage] },
    twitter: { card: "summary_large_image", title, description: copy.description, images: [defaultSocialImage.url] },
  };
}

export default async function Contact({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dictionary = await getDictionary(locale);

  return <main id="main-content"><ContactShowcase locale={locale} dictionary={dictionary} headingLevel={1} /></main>;
}
