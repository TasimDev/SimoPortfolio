import type { Service } from "@/types/content";
const serviceRecords = [
  ["corporate-websites", "Корпоративни уебсайтове", "Corporate websites", "Ясно представяне на бизнеса, услугите и стойността зад бранда.", "A clear presentation of the business, its services and the value behind the brand."],
  ["online-stores", "Онлайн магазини", "Online stores", "Удобно пазаруване, структурирани продукти и необходимите търговски функционалности.", "Convenient shopping, structured products and the essential commerce functionality."],
  ["landing-pages", "Landing страници", "Landing pages", "Фокусирани страници за кампании, услуги, продукти и конкретни действия.", "Focused pages for campaigns, services, products and clear conversion goals."],
  ["custom-development", "Custom разработка", "Custom development", "Компоненти и функционалности, съобразени със специфичните нужди на проекта.", "Components and functionality tailored to the specific needs of the project."],
  ["ui-ux-redesign", "UI/UX и редизайн", "UI/UX and redesign", "Подобрена структура, визуална посока и потребителско изживяване.", "Improved structure, visual direction and user experience."],
  ["seo-maintenance", "SEO и поддръжка", "SEO and maintenance", "Техническа грижа, актуализации и основа за по-добра откриваемост.", "Technical care, updates and a foundation for better discoverability."],
] as const;

export const services: Service[] = serviceRecords.map(([id, bg, en, descriptionBg, descriptionEn], index) => ({
  id,
  slug: id,
  number: String(index + 1).padStart(2, "0"),
  icon: "ArrowUpRight",
  title: { bg, en },
  description: { bg: descriptionBg, en: descriptionEn },
}));
