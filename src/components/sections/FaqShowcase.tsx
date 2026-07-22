import { Plus } from "lucide-react";
import type { CSSProperties } from "react";
import { Container } from "@/components/ui/Container";
import { faqs } from "@/content/faqs";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/bg";
import { getLocalizedText } from "@/types/content";

export function FaqShowcase({
  locale,
  dictionary,
}: {
  locale: Locale;
  dictionary: Dictionary;
}) {
  const copy = dictionary.faqShowcase;

  return (
    <section id="faq" className="faq-showcase" aria-labelledby="faq-title">
      <Container className="faq-showcase__layout">
        <div className="faq-showcase__list">
          {faqs.map((item, index) => (
            <details
              key={item.id}
              name="home-faq"
              style={{ "--faq-delay": `${index * 70}ms` } as CSSProperties}
            >
              <summary>
                <span className="faq-showcase__number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{getLocalizedText(item.question, locale)}</span>
                <span className="faq-showcase__toggle" aria-hidden="true">
                  <Plus />
                </span>
              </summary>
              <div className="faq-showcase__answer">
                <p>{getLocalizedText(item.answer, locale)}</p>
              </div>
            </details>
          ))}
        </div>

        <header className="faq-showcase__intro">
          <p className="faq-showcase__eyebrow eyebrow">
            {copy.eyebrow}
            <span>{copy.sectionNumber}</span>
          </p>
          <h2 id="faq-title">
            {copy.titleLineOne}
            <span>{copy.titleLineTwo}</span>
          </h2>
          <p>{copy.description}</p>
        </header>
      </Container>
    </section>
  );
}
