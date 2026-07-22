import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/bg";
import { siteConfig } from "@/content/site";
export function createMetadata(locale: Locale, dictionary: Dictionary): Metadata {
  const url = `/${locale}`; const ogLocale = locale === "bg" ? "bg_BG" : "en_US";
  return { title:dictionary.metadata.home.title, description:dictionary.metadata.home.description,
    alternates:{canonical:url,languages:{"bg-BG":"/bg",en:"/en","x-default":"/bg"}},
    openGraph:{title:dictionary.metadata.home.title,description:dictionary.metadata.home.description,url,type:"website",locale:ogLocale,siteName:siteConfig.fullBrandName,images:[{url:"/images/hero/simo-digital-craftsman.webp",width:3840,height:2160,alt:siteConfig.fullBrandName}]},
    twitter:{card:"summary_large_image",title:dictionary.metadata.home.title,description:dictionary.metadata.home.description,images:["/images/hero/simo-digital-craftsman.webp"]},
  };
}
