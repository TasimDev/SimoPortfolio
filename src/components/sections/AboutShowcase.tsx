import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/bg";
import { routes } from "@/lib/routes";

export function AboutShowcase({
  locale,
  dictionary,
}: {
  locale: Locale;
  dictionary: Dictionary;
}) {
  const copy = dictionary.aboutShowcase;

  return (
    <section id="about" className="about-showcase" aria-labelledby="about-title">
      <Container className="about-showcase__layout">
        <figure className="about-showcase__portrait">
          <Image
            src="/images/about/simo-portrait.webp"
            alt={copy.portraitAlt}
            fill
            sizes="(min-width: 1024px) 48vw, 100vw"
          />
        </figure>

        <div className="about-showcase__content">
          <p className="about-showcase__eyebrow eyebrow">
            {copy.eyebrow}
            <span>{copy.sectionNumber}</span>
          </p>
          <h2 id="about-title">
            {copy.titleLineOne}
            <span>{copy.titleLineTwo}</span>
          </h2>
          <p>{copy.description}</p>
          <p>{copy.supporting}</p>
          <ul aria-label={copy.focusLabel}>
            <li>{copy.focusDesign}</li>
            <li>{copy.focusDevelopment}</li>
            <li>{copy.focusSupport}</li>
          </ul>
          <Button href={routes.contact(locale)}>{copy.ctaLabel}</Button>
        </div>
      </Container>
    </section>
  );
}
