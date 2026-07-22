import type { CSSProperties } from "react";
import {
  siNextdotjs,
  siReact,
  siShopify,
  siWoo,
  siWordpress,
  type SimpleIcon,
} from "simple-icons";
import { Container } from "@/components/ui/Container";
import { technologies } from "@/content/technologies";
import type { Dictionary } from "@/i18n/dictionaries/bg";

const technologyIcons: Record<string, SimpleIcon> = {
  wordpress: siWordpress,
  woocommerce: siWoo,
  shopify: siShopify,
  nextjs: siNextdotjs,
  react: siReact,
};

function TechnologyMark({ id }: { id: string }) {
  if (id === "cloudcart") {
    return (
      <svg viewBox="0 0 37 37" aria-hidden="true">
        <path d="M36.263 33.857c0 1.636-1.319 2.957-2.954 2.957H2.956C1.327 36.814 0 35.493 0 33.857V3.506C0 1.878 1.327.555 2.956.555h30.353c1.635 0 2.954 1.323 2.954 2.951v30.351ZM21.8 19.266s3.276-3.276 3.292-3.298c1.5-1.5 3.935-1.5 5.436 0l3.051-3.05c-3.183-3.179-8.358-3.179-11.535 0-.025.021-8.503 8.503-8.503 8.503a3.807 3.807 0 0 1-2.699 1.104 3.82 3.82 0 0 1-2.717-1.125c-1.497-1.502-1.497-3.938 0-5.433a3.82 3.82 0 0 1 2.717-1.124c1.026 0 1.989.399 2.717 1.124l3.053-3.05a8.105 8.105 0 0 0-5.77-2.395 8.105 8.105 0 0 0-5.77 2.395c-3.178 3.18-3.178 8.352 0 11.535a8.1 8.1 0 0 0 5.77 2.389c2.153 0 4.182-.83 5.716-2.339L21.8 19.266Zm6.007 3.261a3.82 3.82 0 0 1-2.717-1.129 3.82 3.82 0 0 1-1.041-1.942l-3.305 3.303a8.2 8.2 0 0 0 1.295 1.693 8.1 8.1 0 0 0 5.768 2.389 8.1 8.1 0 0 0 5.771-2.389l-3.051-3.054a3.82 3.82 0 0 1-2.72 1.129Z" />
      </svg>
    );
  }

  const icon = technologyIcons[id];
  return icon ? (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d={icon.path} />
    </svg>
  ) : null;
}

export function TechnologiesShowcase({ dictionary }: { dictionary: Dictionary }) {
  const copy = dictionary.technologiesShowcase;
  return (
    <section id="technologies" className="technologies-showcase" aria-labelledby="technologies-title">
      <Container>
        <header className="technologies-showcase__header">
          <p className="technologies-showcase__eyebrow eyebrow"><span>{copy.sectionNumber}</span>{copy.eyebrow}</p>
          <h2 id="technologies-title">{copy.title}</h2>
        </header>
        <ul className="technologies-showcase__list">
          {technologies.map((technology, index) => (
            <li key={technology.id} style={{ "--technology-delay": `${index * 60}ms` } as CSSProperties}>
              <TechnologyMark id={technology.id}/><span>{technology.name}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
