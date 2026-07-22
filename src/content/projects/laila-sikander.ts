import type { Project } from "@/types/content";

export const lailaSikander = {
  id: "laila-sikander",
  slug: "laila-sikander",
  number: "01",
  name: { bg: "Laila Sikander", en: "Laila Sikander" },
  category: { bg: "Професионален уебсайт", en: "Professional website" },
  shortDescription: {
    bg: "Двуезичен професионален WordPress уебсайт за психолог с онлайн записване.",
    en: "A bilingual professional WordPress website for a psychologist with online booking.",
  },
  longDescription: {
    bg: "Професионален уебсайт за психолог, създаден през 2024 г. с WordPress и Elementor Theme Builder. Проектът съчетава двуезично съдържание, представяне на услугите, блог и директни възможности за онлайн записване. За отделни компоненти и визуални детайли са разработени custom решения с HTML, CSS и JavaScript. Уебсайтът продължава да се поддържа и развива.",
    en: "A professional website for a psychologist, created in 2024 with WordPress and Elementor Theme Builder. The project combines bilingual content, service presentation, a blog and direct online booking options. Selected components and visual details use custom HTML, CSS and JavaScript. The website continues to be maintained and developed.",
  },
  technologies: ["WordPress", "Elementor Theme Builder", "HTML", "CSS", "JavaScript"],
  image: "/images/projects/laila-sikander/project-showcase.avif",
  imageAlt: {
    bg: "Началната страница на уебсайта на психолога Laila Sikander",
    en: "The homepage of psychologist Laila Sikander's website",
  },
  websiteUrl: "https://lailasikander.com/en/",
  year: "2024",
  ongoingSupport: true,
  testimonial: {
    id: "laila-sikander-testimonial",
    quote: {
      bg: "I sincerely thank you for your professionalism, attention to every detail and incredible success in aesthetics! Working with you was a real pleasure – easy, calm and with full confidence that everything would be done at a high level. I am glad that I chose you to create the website – the result exceeded my expectations!",
      en: "I sincerely thank you for your professionalism, attention to every detail and incredible success in aesthetics! Working with you was a real pleasure – easy, calm and with full confidence that everything would be done at a high level. I am glad that I chose you to create the website – the result exceeded my expectations!",
    },
    author: "Laila Sikander",
    image: "/images/projects/laila-sikander/profile.jpg",
    imageAlt: { bg: "Портрет на Laila Sikander", en: "Portrait of Laila Sikander" },
  },
  featured: true,
  order: 1,
} satisfies Project;
