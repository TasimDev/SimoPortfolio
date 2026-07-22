import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/bg";
import { siteConfig } from "@/content/site";

export const defaultSocialImage = {
  url: `${siteConfig.assetUrl}/images/social/simo-social-preview.jpg`,
  width: 1200,
  height: 630,
  alt: siteConfig.fullBrandName,
  type: "image/jpeg",
} as const;

export function createMetadata(locale: Locale, dictionary: Dictionary): Metadata {
  const url = `/${locale}`; const ogLocale = locale === "bg" ? "bg_BG" : "en_US";
  return { title:dictionary.metadata.home.title, description:dictionary.metadata.home.description,
    alternates:{canonical:url,languages:{"bg-BG":"/bg",en:"/en","x-default":"/bg"}},
    openGraph:{title:dictionary.metadata.home.title,description:dictionary.metadata.home.description,url,type:"website",locale:ogLocale,siteName:siteConfig.fullBrandName,images:[defaultSocialImage]},
    twitter:{card:"summary_large_image",title:dictionary.metadata.home.title,description:dictionary.metadata.home.description,images:[defaultSocialImage.url]},
  };
}
