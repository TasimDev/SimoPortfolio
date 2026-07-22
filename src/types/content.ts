import type { Locale } from "@/i18n/config";
export type LocalizedText = Record<Locale, string>;
export interface Service { id: string; number: string; slug: string; icon: string; title: LocalizedText; description: LocalizedText; features?: LocalizedText[] }
export interface Project {
  id: string;
  slug: string;
  number: string;
  name: LocalizedText;
  category: LocalizedText;
  shortDescription?: LocalizedText;
  longDescription?: LocalizedText;
  technologies: string[];
  image: string;
  imageAlt: LocalizedText;
  websiteUrl?: string;
  year?: string;
  ongoingSupport?: boolean;
  testimonial?: Testimonial;
  featured: boolean;
  placeholder?: boolean;
  todo?: readonly string[];
  order: number;
}
export interface Technology { id: string; name: string; category: string }
export interface ProcessStep { id: string; number: string; title: LocalizedText; description?: LocalizedText }
export interface PricingPackage { id: string; title: LocalizedText; price?: LocalizedText; features: LocalizedText[] }
export interface Testimonial { id: string; quote: LocalizedText; author: string; additionalAuthors?: string[]; role?: LocalizedText; company?: string; image?: string; imageAlt?: LocalizedText; imageKind?: "avatar" | "logo" }
export interface FAQItem { id: string; question: LocalizedText; answer: LocalizedText }
export interface PrivacySection { id: string; title: LocalizedText; paragraphs: LocalizedText[] }
export interface SocialLink { id: string; label: string; url: string }
export interface ContactDetails { email?: string; phone?: string; location: LocalizedText }
export const getLocalizedText = (value: LocalizedText, locale: Locale) => value[locale];
