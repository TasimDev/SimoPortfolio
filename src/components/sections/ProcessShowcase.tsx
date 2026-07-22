import type { CSSProperties } from "react";
import { Container } from "@/components/ui/Container";
import { processSteps } from "@/content/process";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/bg";
import { getLocalizedText } from "@/types/content";

export function ProcessShowcase({
  locale,
  dictionary,
}: {
  locale: Locale;
  dictionary: Dictionary;
}) {
  const copy = dictionary.processShowcase;

  return (
    <section id="process" className="process-showcase" aria-labelledby="process-title">
      <Container className="process-showcase__layout">
        <header className="process-showcase__intro">
          <p className="process-showcase__eyebrow eyebrow">
            <span>{copy.sectionNumber}</span>
            {copy.eyebrow}
          </p>
          <h2 id="process-title">
            {copy.titleLineOne}
            <span>{copy.titleLineTwo}</span>
          </h2>
          <p>{copy.description}</p>
        </header>

        <ol className="process-showcase__steps">
          {processSteps.map((step, index) => (
            <li
              style={{ "--process-delay": `${index * 90}ms` } as CSSProperties}
              key={step.id}
            >
              <span>{step.number}</span>
              <div>
                <h3>{getLocalizedText(step.title, locale)}</h3>
                <p>{getLocalizedText(step.description, locale)}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
