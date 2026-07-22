import { Phone } from "lucide-react";
import { siFacebook, siInstagram, type SimpleIcon } from "simple-icons";
import { ContactForm } from "@/components/sections/ContactForm";
import { Container } from "@/components/ui/Container";
import { services } from "@/content/services";
import { siteConfig } from "@/content/site";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/bg";

export function ContactShowcase({ locale, dictionary, headingLevel = 2 }: { locale: Locale; dictionary: Dictionary; headingLevel?: 1 | 2 }) {
  const copy = dictionary.contactShowcase;
  const Heading = headingLevel === 1 ? "h1" : "h2";
  const socialIcons: Partial<Record<(typeof siteConfig.socialLinks)[number]["id"], SimpleIcon>> = {
    instagram: siInstagram,
    facebook: siFacebook,
  };

  return (
    <section id="contact" className="contact-showcase" aria-labelledby="contact-title">
      <Container className="contact-showcase__layout">
        <header className="contact-showcase__intro">
          <p className="contact-showcase__eyebrow eyebrow"><span>{copy.sectionNumber}</span>{copy.eyebrow}</p>
          <Heading id="contact-title">{copy.titleLineOne}<span>{copy.titleLineTwo}</span></Heading>
          <p>{copy.description}</p>
          <a className="contact-showcase__phone" href={siteConfig.phoneHref}>
            <Phone aria-hidden="true" />
            <span>{siteConfig.phoneDisplay}</span>
          </a>
          <ul className="contact-showcase__socials">
            {siteConfig.socialLinks.map((social) => {
              const icon = socialIcons[social.id];
              return (
                <li key={social.id}>
                  <a href={social.url} target="_blank" rel="noreferrer">
                    {icon ? (
                      <svg viewBox="0 0 24 24" aria-hidden="true"><path d={icon.path} /></svg>
                    ) : (
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M19 0H5a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5ZM8 19H5v-9h3v9ZM6.5 8.73A1.76 1.76 0 1 1 6.5 5.2a1.76 1.76 0 0 1 0 3.53ZM20 19h-3v-4.6c0-2.78-3-2.57-3 0V19h-3v-9h3v1.45c1.4-2.58 6-2.77 6 2.48V19Z" />
                      </svg>
                    )}
                    <span>{social.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </header>
        <ContactForm locale={locale} copy={copy} services={services} />
      </Container>
    </section>
  );
}
