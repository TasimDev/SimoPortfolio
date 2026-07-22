import type { FAQItem } from "@/types/content";

export const faqs = [
  {
    id: "timeline",
    question: {
      bg: "Колко време отнема изработката?",
      en: "How long does a project take?",
    },
    answer: {
      bg: "Срокът зависи от обхвата, съдържанието и необходимите функционалности. Преди началото уточняваме етапите и подготвям ясен график за конкретния проект.",
      en: "The timeline depends on the scope, content and required functionality. Before we begin, we define the stages and set a clear schedule for the specific project.",
    },
  },
  {
    id: "ready-design",
    question: {
      bg: "Трябва ли да имам готов дизайн?",
      en: "Do I need to have a finished design?",
    },
    answer: {
      bg: "Не. Можем да започнем от идея и съдържание, да изградим структурата и след това да преминем през дизайна и разработката като един цял процес.",
      en: "No. We can start with an idea and content, build the structure, and then move through design and development as one connected process.",
    },
  },
  {
    id: "existing-website",
    question: {
      bg: "Можеш ли да подобриш съществуващ сайт?",
      en: "Can you improve an existing website?",
    },
    answer: {
      bg: "Да. Първо преглеждам сегашната структура, дизайн и техническо състояние, след което предлагам подходяща посока за редизайн, оптимизация или развитие.",
      en: "Yes. I first review the current structure, design and technical condition, then recommend the right direction for a redesign, optimisation or further development.",
    },
  },
  {
    id: "platforms",
    question: {
      bg: "С кои платформи работиш?",
      en: "Which platforms do you work with?",
    },
    answer: {
      bg: "Работя с WordPress и WooCommerce, Shopify, CloudCart, както и със съвременни custom решения с Next.js и React.",
      en: "I work with WordPress and WooCommerce, Shopify, CloudCart, as well as modern custom solutions built with Next.js and React.",
    },
  },
  {
    id: "after-launch",
    question: {
      bg: "Предлагаш ли поддръжка след пускането?",
      en: "Do you provide support after launch?",
    },
    answer: {
      bg: "Да. Поддръжката може да включва технически актуализации, промени по съдържанието, оптимизация и планиране на следващите подобрения.",
      en: "Yes. Support can include technical updates, content changes, optimisation and planning the next improvements.",
    },
  },
  {
    id: "starting",
    question: {
      bg: "Как започваме работа?",
      en: "How do we get started?",
    },
    answer: {
      bg: "Изпращаш ми кратко описание на идеята, целите и текущото състояние на проекта. След това уточняваме нуждите и подреждаме следващите стъпки.",
      en: "Send me a short description of the idea, goals and current state of the project. We then clarify what is needed and organise the next steps.",
    },
  },
] satisfies FAQItem[];
