import type { Project } from "@/types/content";

export const milenaHarizanova = {
  id: "milena-harizanova",
  slug: "milena-harizanova",
  number: "03",
  name: { bg: "Milena Harizanova", en: "Milena Harizanova" },
  category: { bg: "Професионален уебсайт", en: "Professional website" },
  shortDescription: {
    bg: "Двуезичен WordPress уебсайт за юнгиански аналитик с текуща поддръжка.",
    en: "A bilingual WordPress website for a Jungian analyst with ongoing support.",
  },
  longDescription: {
    bg: "Професионален двуезичен уебсайт за юнгианския аналитик Milena Harizanova, разработен с WordPress и Elementor Theme Builder. Сайтът представя нейната професионална практика и съдържание на български и английски език. Проектът продължава да се поддържа и развива.",
    en: "A professional bilingual website for Jungian analyst Milena Harizanova, developed with WordPress and Elementor Theme Builder. The website presents her professional practice and content in Bulgarian and English. The project continues to be maintained and developed.",
  },
  technologies: ["WordPress", "Elementor Theme Builder"],
  image: "/images/projects/milena-harizanova/website-showcase.webp",
  imageAlt: {
    bg: "Представяне на уебсайта на юнгианския аналитик Milena Harizanova",
    en: "A presentation of Jungian analyst Milena Harizanova's website",
  },
  websiteUrl: "https://milenaharizanova.com/bg/",
  ongoingSupport: true,
  featured: true,
  order: 3,
  todo: [
    "Добави година на създаване, ако бъде потвърдена.",
    "Добави отзив само след като клиентът потвърди точния текст.",
  ],
} satisfies Project;
