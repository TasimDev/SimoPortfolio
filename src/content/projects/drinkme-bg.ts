import type { Project } from "@/types/content";

export const drinkMeBg = {
  id: "drinkme-bg",
  slug: "drinkme-bg",
  number: "02",
  name: { bg: "DrinkMe.bg", en: "DrinkMe.bg" },
  category: { bg: "Онлайн магазин", en: "Online store" },
  shortDescription: {
    bg: "CloudCart онлайн магазин за алкохолни напитки с custom функционалности и текуща административна поддръжка.",
    en: "A CloudCart online store for alcoholic beverages with custom functionality and ongoing administrative support.",
  },
  longDescription: {
    bg: "Онлайн магазин за алкохолни напитки, изграден върху CloudCart. За отделни компоненти, визуални елементи и функционалности са разработени custom решения с HTML, CSS и JavaScript. Поемам цялостната административна поддръжка и текущото управление на магазина.",
    en: "An online store for alcoholic beverages built on CloudCart. Selected components, visual elements and functionality use custom HTML, CSS and JavaScript solutions. I provide full administrative support and ongoing store management.",
  },
  technologies: ["CloudCart", "HTML", "CSS", "JavaScript"],
  image: "/images/projects/drinkme-bg/website-showcase.png",
  imageAlt: {
    bg: "Представяне на началната страница на онлайн магазина DrinkMe.bg",
    en: "A presentation of the DrinkMe.bg online store homepage",
  },
  websiteUrl: "https://drinkme.bg/",
  ongoingSupport: true,
  testimonial: {
    id: "drinkme-bg-testimonial",
    quote: {
      bg: "Симо е наш доверен партньор в дигиталния свят — нашият дигитален майстор. Работи сериозно, предлага иновативни решения и винаги е насреща, когато имаме нужда от съдействие. Дори когато не сме запознати с техническата страна, той ни обяснява всичко ясно и разбираемо. Само за четири месеца увеличихме продажбите си със 100%. Изключително доволни сме от съвместната ни работа и го препоръчваме с две ръце.",
      en: "Simo is our trusted partner in the digital world — our digital craftsman. He works with dedication, offers innovative solutions and is always available when we need support. Even when we are unfamiliar with the technical side, he explains everything clearly and understandably. In just four months, we increased our sales by 100%. We are extremely pleased with our collaboration and wholeheartedly recommend him.",
    },
    author: "Станислав Чорбаджийски",
    additionalAuthors: ["Георги Георгиев"],
    company: "DrinkMe.bg",
    image: "/images/projects/drinkme-bg/logo.svg",
    imageAlt: { bg: "Лого на DrinkMe.bg", en: "DrinkMe.bg logo" },
  },
  featured: true,
  order: 2,
  todo: ["Добави година на създаване, ако бъде потвърдена."],
} satisfies Project;
