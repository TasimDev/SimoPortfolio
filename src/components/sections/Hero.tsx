import Image from "next/image";
import { ChevronDown } from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries/bg";
import heroBackground from "../../../public/images/hero/simo-digital-craftsman.webp";

export function Hero({ dictionary }: { dictionary: Dictionary }) {
  const hero = dictionary.hero;

  return (
    <section className="hero" aria-labelledby="hero-title">
      <Image
        className="hero__background"
        src={heroBackground}
        alt=""
        fill
        preload
        quality={85}
        sizes="100vw"
      />
      <div className="hero__veil" aria-hidden="true" />

      <div className="hero__content">
        <p className="hero__eyebrow">
          {hero.kickerDesign}
          <span aria-hidden="true">{hero.kickerSeparator}</span>
          {hero.kickerCommerce}
          <span aria-hidden="true">{hero.kickerSeparator}</span>
          {hero.kickerSeo}
        </p>
        <h1 id="hero-title">
          <span className="hero__title-line">{hero.titleLineOne}</span>
          <span className="hero__title-line hero__title-highlight">
            {hero.titleLineTwo}
          </span>
        </h1>
        <p className="hero__description">
          {hero.descriptionLineOne}
          <br />
          {hero.descriptionLineTwo}
        </p>
      </div>

      <a className="hero__scroll" href="#services">
        <span className="sr-only">{hero.scrollLabel}</span>
        <span className="hero__scroll-label" aria-hidden="true">
          {hero.scrollPrompt}
        </span>
        <span className="hero__scroll-arrows" aria-hidden="true">
          {Array.from({ length: 4 }, (_, index) => (
            <ChevronDown key={index} />
          ))}
        </span>
      </a>
    </section>
  );
}
