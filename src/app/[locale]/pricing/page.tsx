import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PricingShowcase } from "@/components/sections/PricingShowcase";
import { siteConfig } from "@/content/site";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale } from "@/i18n/config";
import { routes } from "@/lib/routes";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dictionary = await getDictionary(locale);
  const metadata = dictionary.pricingPage.metadata;
  return {
    title: metadata.title,
    description: metadata.description,
    robots: { index: false, follow: false },
    alternates: {
      canonical: `${siteConfig.siteUrl}${routes.pricing(locale)}`,
      languages: {
        "bg-BG": `${siteConfig.siteUrl}${routes.pricing("bg")}`,
        en: `${siteConfig.siteUrl}${routes.pricing("en")}`,
        "x-default": `${siteConfig.siteUrl}${routes.pricing("bg")}`,
      },
    },
  };
}

export default async function PricingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dictionary = await getDictionary(locale);
  return <PricingShowcase locale={locale} dictionary={dictionary} />;
}
