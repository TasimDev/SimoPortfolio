import type { LocalizedText } from "@/types/content";

type PricingPlan = {
  id: "basic" | "store";
  name: LocalizedText;
  description: LocalizedText;
  price: number;
  supportPrice: number;
  featured: boolean;
  features: LocalizedText[];
};

export const pricingPlans = [
  {
    id: "basic",
    name: { bg: "Бизнес уебсайт", en: "Business website" },
    description: {
      bg: "Подходящ за малък бизнес, услуги и лични брандове.",
      en: "Suitable for small businesses, services and personal brands.",
    },
    price: 420,
    supportPrice: 60,
    featured: false,
    features: [
      { bg: "До 5 страници", en: "Up to 5 pages" },
      { bg: "Модерен и адаптивен дизайн", en: "Modern responsive design" },
      { bg: "Контактна форма", en: "Contact form" },
      { bg: "Основна SEO оптимизация", en: "Basic SEO optimisation" },
      { bg: "Инсталация на Google Analytics", en: "Google Analytics setup" },
      { bg: "Безплатен домейн за 1 година", en: "Free domain for 1 year" },
      { bg: "Безплатен хостинг за 1 година", en: "Free hosting for 1 year" },
    ],
  },
  {
    id: "store",
    name: { bg: "Онлайн магазин", en: "Online store" },
    description: {
      bg: "За бизнеси, които искат да продават онлайн.",
      en: "For businesses ready to sell online.",
    },
    price: 900,
    supportPrice: 144,
    featured: true,
    features: [
      { bg: "До 30 включени продукта", en: "Up to 30 products included" },
      { bg: "Категории и филтри", en: "Categories and filters" },
      { bg: "Количка и поръчки", en: "Cart and orders" },
      { bg: "Методи за доставка и плащане", en: "Delivery and payment methods" },
      { bg: "Имейл известия", en: "Email notifications" },
      { bg: "Основна SEO оптимизация", en: "Basic SEO optimisation" },
      { bg: "Обучение за работа с магазина", en: "Store management training" },
      { bg: "Безплатен домейн и хостинг за 1 година", en: "Free domain and hosting for 1 year" },
    ],
  },
] as const satisfies readonly PricingPlan[];

export const marketingFeatures: LocalizedText[] = [
  { bg: "До 4 публикации месечно", en: "Up to 4 posts per month" },
  { bg: "Дизайн на визии", en: "Social media artwork" },
  { bg: "Публикуване във Facebook и Instagram", en: "Publishing on Facebook and Instagram" },
  { bg: "Основна поддръжка на профили", en: "Basic profile management" },
  { bg: "Базова стратегия и консултация", en: "Basic strategy and consultation" },
  { bg: "Безплатна настройка през първия месец", en: "Free setup during the first month" },
];

export const supportFeatures: LocalizedText[] = [
  { bg: "Техническа проверка", en: "Technical check" },
  { bg: "Обновяване на сайта и плъгините", en: "Website and plugin updates" },
  { bg: "Архивиране и сигурност", en: "Backups and security" },
  { bg: "До 1 час промени за Basic пакета", en: "Up to 1 hour of changes for the Basic plan" },
  { bg: "Бърза реакция при проблем", en: "Fast response when an issue occurs" },
];

export const installmentPeriods = [
  { id: "weekly", installments: 4, label: { bg: "Седмично", en: "Weekly" } },
  { id: "biweekly", installments: 2, label: { bg: "На 2 седмици", en: "Every 2 weeks" } },
  { id: "monthly", installments: 3, label: { bg: "Месечно", en: "Monthly" } },
] as const;

export const marketingPrice = 60;
export const installmentFee = 0.08;

