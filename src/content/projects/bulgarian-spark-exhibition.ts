import type { Project } from "@/types/content";

export const bulgarianSparkExhibition = {
  id: "bulgarian-spark-exhibition",
  slug: "bulgarian-spark-exhibition",
  number: "06",
  name: {
    bg: "Българската искрица",
    en: "The Bulgarian Spark",
  },
  category: { bg: "Landing страница", en: "Landing page" },
  shortDescription: {
    bg: "Custom WordPress landing страница за онлайн фотографска изложба с текуща поддръжка.",
    en: "A custom WordPress landing page for an online photography exhibition with ongoing support.",
  },
  longDescription: {
    bg: "Landing страница за онлайн фотографската изложба „Българската искрица в Италия – разкази през обектива“, част от уебсайта на Неделно училище „Пенчо Славейков“. Страницата е реализирана в WordPress с изцяло custom HTML, CSS и JavaScript код за нейната структура, визуално представяне и интерактивни елементи. Проектът продължава да се поддържа и развива.",
    en: "A landing page for the online photography exhibition ‘The Bulgarian Spark in Italy — Stories Through the Lens’, part of the Pencho Slaveykov Bulgarian School website. The page was implemented in WordPress with fully custom HTML, CSS and JavaScript for its structure, visual presentation and interactive elements. The project continues to be maintained and developed.",
  },
  technologies: ["WordPress", "HTML", "CSS", "JavaScript"],
  image: "/images/projects/bulgarian-spark-exhibition/website-showcase.png",
  imageAlt: {
    bg: "Представяне на landing страницата за онлайн изложбата Българската искрица",
    en: "A presentation of The Bulgarian Spark online exhibition landing page",
  },
  websiteUrl: "https://scuolabulgara.org/%d0%be%d0%bd%d0%bb%d0%b0%d0%b9%d0%bd-%d0%b8%d0%b7%d0%bb%d0%be%d0%b6%d0%b1%d0%b0/",
  ongoingSupport: true,
  featured: true,
  order: 6,
  todo: [
    "Добави година на създаване, ако бъде потвърдена.",
    "Добави отзив само след като клиентът потвърди точния текст.",
  ],
} satisfies Project;
