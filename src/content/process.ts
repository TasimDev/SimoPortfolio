import type { ProcessStep } from "@/types/content";

export const processSteps = [
  {
    id: "discovery",
    number: "01",
    title: { bg: "Запознаване и цели", en: "Discovery and goals" },
    description: {
      bg: "Изясняваме идеята, аудиторията и какво трябва да постигне дигиталният продукт.",
      en: "We clarify the idea, the audience and what the digital product needs to achieve.",
    },
  },
  {
    id: "structure",
    number: "02",
    title: { bg: "Структура и стратегия", en: "Structure and strategy" },
    description: {
      bg: "Подреждаме съдържанието, потребителските пътища и техническата посока.",
      en: "We organise the content, user journeys and technical direction.",
    },
  },
  {
    id: "design",
    number: "03",
    title: { bg: "UI/UX дизайн", en: "UI/UX design" },
    description: {
      bg: "Изграждаме ясна визуална система и адаптивни екрани за ключовите устройства.",
      en: "We build a clear visual system and responsive screens for the key devices.",
    },
  },
  {
    id: "development",
    number: "04",
    title: { bg: "Разработка", en: "Development" },
    description: {
      bg: "Превръщаме одобрения дизайн в бърз, достъпен и лесен за управление продукт.",
      en: "We turn the approved design into a fast, accessible and manageable product.",
    },
  },
  {
    id: "testing",
    number: "05",
    title: { bg: "Тестване", en: "Testing" },
    description: {
      bg: "Проверяваме съдържанието, функционалностите и поведението на различни екрани.",
      en: "We check the content, functionality and behaviour across different screens.",
    },
  },
  {
    id: "launch-support",
    number: "06",
    title: { bg: "Пускане и поддръжка", en: "Launch and support" },
    description: {
      bg: "Публикуваме проекта и планираме следващите подобрения според реалните нужди.",
      en: "We launch the project and plan the next improvements around real needs.",
    },
  },
] satisfies ProcessStep[];
