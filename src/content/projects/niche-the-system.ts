import type { Project } from "@/types/content";

export const nicheTheSystem = {
  id: "niche-the-system",
  slug: "niche-the-system",
  number: "05",
  name: { bg: "NICHE The System", en: "NICHE The System" },
  category: { bg: "Онлайн магазин", en: "Online store" },
  shortDescription: {
    bg: "Custom Shopify онлайн магазин, разработен с Liquid и с текуща поддръжка.",
    en: "A custom Shopify online store developed with Liquid and supported on an ongoing basis.",
  },
  longDescription: {
    bg: "Онлайн магазин за NICHE The System, изграден върху Shopify. Структурата, визуалните компоненти и функционалностите са разработени чрез custom Liquid код, за да следват специфичната идентичност и потребителско изживяване на бранда. Проектът продължава да се поддържа и развива.",
    en: "An online store for NICHE The System built on Shopify. Its structure, visual components and functionality were developed through custom Liquid code to reflect the brand's distinctive identity and user experience. The project continues to be maintained and developed.",
  },
  technologies: ["Shopify", "Liquid"],
  image: "/images/projects/niche-the-system/website-showcase.png",
  imageAlt: {
    bg: "Представяне на Shopify онлайн магазина NICHE The System",
    en: "A presentation of the NICHE The System Shopify online store",
  },
  websiteUrl: "https://nichethesystem.com/",
  ongoingSupport: true,
  featured: true,
  order: 5,
  todo: [
    "Добави година на създаване, ако бъде потвърдена.",
    "Добави отзив само след като клиентът потвърди точния текст.",
  ],
} satisfies Project;
