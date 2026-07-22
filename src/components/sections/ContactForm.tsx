"use client";

import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useState, type FormEvent } from "react";
import type { Service } from "@/types/content";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/bg";
import { getLocalizedText } from "@/types/content";
import { routes } from "@/lib/routes";

type FormState = "idle" | "sending" | "success" | "error";

export function ContactForm({
  locale,
  copy,
  services,
}: {
  locale: Locale;
  copy: Dictionary["contactShowcase"];
  services: Service[];
}) {
  const [state, setState] = useState<FormState>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setState("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });

      if (!response.ok) throw new Error("Contact request failed");
      form.reset();
      setState("success");
    } catch {
      setState("error");
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate={false}>
      <div className="contact-form__heading">
        <h3>{copy.formTitle}</h3>
        <p>{copy.requiredHint}</p>
      </div>

      <div className="contact-form__grid">
        <label>
          <span>{copy.nameLabel} *</span>
          <input name="name" type="text" autoComplete="name" minLength={2} maxLength={80} required placeholder={copy.namePlaceholder} />
        </label>
        <label>
          <span>{copy.emailLabel} *</span>
          <input name="email" type="email" autoComplete="email" maxLength={160} required placeholder={copy.emailPlaceholder} />
        </label>
        <label>
          <span>{copy.phoneLabel} <small>{copy.optional}</small></span>
          <input name="phone" type="tel" autoComplete="tel" maxLength={40} placeholder={copy.phonePlaceholder} />
        </label>
        <label>
          <span>{copy.serviceLabel} *</span>
          <select name="service" defaultValue="" required>
            <option value="" disabled>{copy.servicePlaceholder}</option>
            {services.map((service) => (
              <option key={service.id} value={service.id}>{getLocalizedText(service.title, locale)}</option>
            ))}
            <option value="other">{copy.serviceOther}</option>
          </select>
        </label>
        <label className="contact-form__message">
          <span>{copy.messageLabel} *</span>
          <textarea name="message" minLength={20} maxLength={4000} required placeholder={copy.messagePlaceholder} rows={5} />
        </label>
      </div>

      <label className="contact-form__trap" aria-hidden="true">
        Website
        <input name="website" type="text" tabIndex={-1} autoComplete="off" />
      </label>

      <div className="contact-form__footer">
        <p>{copy.privacyNote} <Link href={routes.privacy(locale)}>{copy.privacyLink}</Link>.</p>
        <button type="submit" disabled={state === "sending" || state === "success"}>
          {state === "sending" ? copy.sending : copy.submit}
          {state === "success" ? <CheckCircle2 /> : <ArrowUpRight />}
        </button>
      </div>

      <div className="contact-form__status" aria-live="polite" role="status">
        {state === "success" && <p><strong>{copy.successTitle}</strong>{copy.successMessage}</p>}
        {state === "error" && <p>{copy.errorMessage}</p>}
      </div>
    </form>
  );
}
