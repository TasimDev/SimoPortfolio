import { ArrowUpRight, Check, CreditCard, Megaphone, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import {
  installmentFee,
  installmentPeriods,
  marketingFeatures,
  marketingPrice,
  pricingPlans,
  supportFeatures,
} from "@/content/pricing";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/bg";
import { routes } from "@/lib/routes";

const localized = <T extends Record<Locale, string>>(value: T, locale: Locale) => value[locale];

function price(value: number, locale: Locale) {
  return new Intl.NumberFormat(locale === "bg" ? "bg-BG" : "en-GB", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: Number.isInteger(value) ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(value);
}

export function PricingShowcase({ locale, dictionary }: { locale: Locale; dictionary: Dictionary }) {
  const copy = dictionary.pricingPage;

  return (
    <main id="main-content" className="pricing-page">
      <section className="pricing-hero">
        <Container>
          <p className="eyebrow pricing-hero__eyebrow">{copy.eyebrow}</p>
          <h1>{copy.titleLineOne}<span>{copy.titleLineTwo}</span></h1>
          <div className="pricing-hero__intro">
            <p>{copy.description}</p>
            <Link className="button button--primary" href={routes.contact(locale)}>
              {copy.cta}<ArrowUpRight aria-hidden="true" size={18} />
            </Link>
          </div>
        </Container>
      </section>

      <section className="pricing-plans" aria-labelledby="pricing-plans-title">
        <Container>
          <div className="pricing-section-heading">
            <p className="eyebrow">01 / {copy.plansEyebrow}</p>
            <h2 id="pricing-plans-title">{copy.plansTitle}</h2>
          </div>
          <div className="pricing-plans__grid">
            {pricingPlans.map((plan, index) => (
              <article className={`pricing-card${plan.featured ? " pricing-card--featured" : ""}`} key={plan.id}>
                <div className="pricing-card__topline">
                  <span>0{index + 1}</span>
                  {plan.featured && <strong>{copy.popular}</strong>}
                </div>
                <h3>{localized(plan.name, locale)}</h3>
                <p className="pricing-card__description">{localized(plan.description, locale)}</p>
                <p className="pricing-card__price"><strong>{price(plan.price, locale)}</strong><span>{copy.oneTime}</span></p>
                <p className="pricing-card__support"><ShieldCheck aria-hidden="true" size={18} />{copy.support}: <strong>{price(plan.supportPrice, locale)}{copy.perMonth}</strong></p>
                <ul>
                  {plan.features.map((feature) => <li key={feature.bg}><Check aria-hidden="true" />{localized(feature, locale)}</li>)}
                </ul>
                <div className="pricing-card__marketing">
                  <span>{copy.firstMonth}</span>
                  <strong>{copy.free}</strong>
                  <small>{copy.afterFirstMonth} {price(marketingPrice, locale)}{copy.perMonth}</small>
                </div>
                <Link className={`button ${plan.featured ? "button--primary" : "button--secondary"}`} href={routes.contact(locale)}>
                  {copy.choosePlan}<ArrowUpRight aria-hidden="true" size={18} />
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="pricing-extras">
        <Container>
          <article className="marketing-card">
            <div className="marketing-card__intro">
              <Megaphone aria-hidden="true" />
              <p className="eyebrow">02 / {copy.marketingEyebrow}</p>
              <h2>{copy.marketingTitle}</h2>
              <p className="marketing-card__price"><strong>+{price(marketingPrice, locale)}</strong><span>{copy.perMonth}</span></p>
            </div>
            <ul>
              {marketingFeatures.map((feature) => <li key={feature.bg}><Check aria-hidden="true" />{localized(feature, locale)}</li>)}
            </ul>
            <p className="marketing-card__note"><strong>{copy.important}</strong> {copy.adBudgetNote}</p>
          </article>

          <article className="support-card">
            <div>
              <ShieldCheck aria-hidden="true" />
              <p className="eyebrow">03 / {copy.supportEyebrow}</p>
              <h2>{copy.supportTitle}</h2>
            </div>
            <ul>
              {supportFeatures.map((feature) => <li key={feature.bg}><Check aria-hidden="true" />{localized(feature, locale)}</li>)}
            </ul>
          </article>
        </Container>
      </section>

      <section className="installments" aria-labelledby="installments-title">
        <Container>
          <div className="pricing-section-heading">
            <p className="eyebrow">04 / {copy.installmentsEyebrow}</p>
            <h2 id="installments-title">{copy.installmentsTitle}</h2>
            <p>{copy.installmentsDescription}</p>
          </div>
          <div className="installments__grid">
            {pricingPlans.map((plan) => {
              const total = plan.price * (1 + installmentFee);
              return (
                <article className="installment-card" key={plan.id}>
                  <div className="installment-card__heading">
                    <CreditCard aria-hidden="true" />
                    <h3>{localized(plan.name, locale)}</h3>
                  </div>
                  <dl>
                    <div className="installment-card__cash"><dt>{copy.cash}</dt><dd>1 × {price(plan.price, locale)}</dd></div>
                    {installmentPeriods.map((period) => (
                      <div key={period.id}>
                        <dt>{localized(period.label, locale)}</dt>
                        <dd>{period.installments} × {price(total / period.installments, locale)}</dd>
                      </div>
                    ))}
                  </dl>
                  <p>{copy.installmentTotal}: <strong>{price(total, locale)}</strong></p>
                </article>
              );
            })}
          </div>
          <p className="installments__note">{copy.installmentNote}</p>
        </Container>
      </section>

      <section className="pricing-cta">
        <Container>
          <p className="eyebrow">{copy.finalEyebrow}</p>
          <h2>{copy.finalTitle}</h2>
          <p>{copy.finalDescription}</p>
          <Link className="button button--primary" href={routes.contact(locale)}>{copy.cta}<ArrowUpRight aria-hidden="true" /></Link>
        </Container>
      </section>
    </main>
  );
}

