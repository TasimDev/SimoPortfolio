import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { CSSProperties } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { services } from "@/content/services";
import { siteConfig } from "@/content/site";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/bg";
import { routes } from "@/lib/routes";
import { getLocalizedText } from "@/types/content";

function ServiceWireframe({ variant }: { variant: number }) {
  return (
    <span className={`service-wireframe service-wireframe--${variant}`} aria-hidden="true">
      <span className="service-wireframe__bar">
        <i />
        <i />
        <i />
      </span>
      <span className="service-wireframe__body">
        <i className="service-wireframe__headline" />
        <i className="service-wireframe__copy" />
        <i className="service-wireframe__copy service-wireframe__copy--short" />
        <i className="service-wireframe__button" />
        <i className="service-wireframe__shape" />
      </span>
    </span>
  );
}

export function ServicesShowcase({
  locale,
  dictionary,
}: {
  locale: Locale;
  dictionary: Dictionary;
}) {
  const copy = dictionary.servicesShowcase;

  return (
    <section id="services" className="services-showcase" aria-labelledby="services-title">
      <Container className="services-showcase__layout">
        <header className="services-showcase__intro">
          <p className="services-showcase__eyebrow eyebrow">
            <span>{copy.sectionNumber}</span>
            {copy.eyebrow}
          </p>
          <h2 id="services-title">
            {copy.titleLineOne}
            <span>{copy.titleLineTwo}</span>
          </h2>
          <p className="services-showcase__description">{copy.description}</p>
          <div className="services-showcase__signature" aria-hidden="true">
            <i />
            {siteConfig.fullBrandName}
          </div>
        </header>

        <nav className="services-showcase__services" aria-label={copy.listLabel}>
          {services.map((service, index) => {
            const title = getLocalizedText(service.title, locale);

            return (
              <Link
                className="service-row"
                href={`${routes.contact(locale)}?service=${service.slug}`}
                aria-label={copy.enquireAbout.replace("{service}", title)}
                style={{ "--reveal-delay": `${120 + index * 75}ms` } as CSSProperties}
                key={service.id}
              >
                <span className="service-row__number">{service.number}</span>
                <h3>{title}</h3>
                <ServiceWireframe variant={(index % 3) + 1} />
                <span className="service-row__arrow" aria-hidden="true">
                  <ArrowUpRight />
                </span>
              </Link>
            );
          })}

          <footer className="services-showcase__cta">
            <p>{copy.ctaPrompt}</p>
            <Button href={routes.contact(locale)}>{copy.ctaLabel}</Button>
          </footer>
        </nav>
      </Container>
    </section>
  );
}
