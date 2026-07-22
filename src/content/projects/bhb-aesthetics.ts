import type { Project } from "@/types/content";

export const bhbAesthetics = {
  id: "bhb-aesthetics",
  slug: "bhb-aesthetics",
  number: "04",
  name: { bg: "BHB Aesthetics", en: "BHB Aesthetics" },
  category: { bg: "Уебсайт и онлайн магазин", en: "Website and online store" },
  shortDescription: {
    bg: "Професионален WordPress и WooCommerce уебсайт за естетичен център.",
    en: "A professional WordPress and WooCommerce website for an aesthetics center.",
  },
  longDescription: {
    bg: "Професионален тематичен уебсайт и онлайн магазин за BHB Aesthetics, разработен с WordPress, WooCommerce и Elementor. За отделни визуални елементи и функционалности са използвани custom решения с HTML, CSS и JavaScript. Проектът не се поддържа от мен в момента.",
    en: "A professional theme-based website and online store for BHB Aesthetics, developed with WordPress, WooCommerce and Elementor. Selected visual elements and functionality use custom HTML, CSS and JavaScript solutions. I do not currently maintain this project.",
  },
  technologies: ["WordPress", "WooCommerce", "Elementor", "HTML", "CSS", "JavaScript"],
  image: "/images/projects/bhb-aesthetics/website-showcase.avif",
  imageAlt: {
    bg: "Представяне на уебсайта и онлайн магазина на BHB Aesthetics",
    en: "A presentation of the BHB Aesthetics website and online store",
  },
  websiteUrl: "https://bhb-aesthetics.com",
  featured: true,
  order: 4,
  todo: [
    "Добави година на създаване, ако бъде потвърдена.",
    "Добави отзив само след като клиентът потвърди точния текст.",
  ],
} satisfies Project;
