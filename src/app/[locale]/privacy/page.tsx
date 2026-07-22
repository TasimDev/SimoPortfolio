import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Phone } from "lucide-react";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { privacySections } from "@/content/privacy";
import { siteConfig } from "@/content/site";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale } from "@/i18n/config";
import { defaultSocialImage } from "@/lib/metadata";
import { routes } from "@/lib/routes";
import { getLocalizedText } from "@/types/content";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dictionary = await getDictionary(locale);
  const title = `${dictionary.privacy.title} | ${siteConfig.fullBrandName}`;
  return {
    title,
    description: dictionary.privacy.intro,
    robots: { index: true, follow: true },
    alternates: {
      canonical: routes.privacy(locale),
      languages: { "bg-BG": routes.privacy("bg"), en: routes.privacy("en"), "x-default": routes.privacy("bg") },
    },
    openGraph: { title, description: dictionary.privacy.intro, url: routes.privacy(locale), type: "website", images: [defaultSocialImage] },
    twitter: { card: "summary_large_image", title, description: dictionary.privacy.intro, images: [defaultSocialImage.url] },
  };
}

export default async function PrivacyPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dictionary = await getDictionary(locale);
  const copy = dictionary.privacy;

  return (
    <main id="main-content" className="privacy-page">
      <Container>
        <Link className="privacy-page__back" href={routes.home(locale)}><ArrowLeft aria-hidden="true" />{copy.backHome}</Link>
        <header className="privacy-page__header">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h1>{copy.title}</h1>
          <p>{copy.intro}</p>
          <p><strong>{copy.updatedLabel}:</strong> {copy.updatedValue}</p>
        </header>

        <div className="privacy-page__content">
          {privacySections.map((section, index) => (
            <section key={section.id} id={section.id}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h2>{getLocalizedText(section.title, locale)}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph.bg}>{getLocalizedText(paragraph, locale)}</p>)}
              </div>
            </section>
          ))}
        </div>

        <aside className="privacy-page__contact">
          <p>{copy.contactLabel}</p>
          <a href={siteConfig.phoneHref}><Phone aria-hidden="true" />{siteConfig.phoneDisplay}</a>
          <a href="https://cpdp.bg/" target="_blank" rel="noreferrer">{copy.authorityLabel}<ExternalLink aria-hidden="true" /></a>
        </aside>
      </Container>
    </main>
  );
}
