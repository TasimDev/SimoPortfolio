import type { PrivacySection } from "@/types/content";

export const privacySections = [
  {
    id: "controller",
    title: { bg: "Кой обработва данните", en: "Who processes the data" },
    paragraphs: [{
      bg: "Администратор на данните, изпратени през този сайт, е SIMO | Digital Craftsman. За въпроси и искания относно личните данни можеш да използваш потвърдения телефон за контакт, публикуван на сайта.",
      en: "The controller of data submitted through this website is SIMO | Digital Craftsman. For questions and requests concerning personal data, you can use the confirmed contact phone number published on the website.",
    }],
  },
  {
    id: "data",
    title: { bg: "Какви данни се събират", en: "Data that is collected" },
    paragraphs: [{
      bg: "Формата за запитване събира име, имейл адрес, избрана услуга и описание на проекта. Телефонът е незадължителен. Не изпращай чувствителни лични данни или информация, която не е необходима за първоначалното запитване.",
      en: "The enquiry form collects your name, email address, selected service and project description. A phone number is optional. Do not submit sensitive personal data or information that is not needed for the initial enquiry.",
    }],
  },
  {
    id: "purpose",
    title: { bg: "Цел и правно основание", en: "Purpose and legal basis" },
    paragraphs: [{
      bg: "Данните се използват за разглеждане и отговор на запитването, уточняване на нуждите и предприемане на стъпки преди евентуално сключване на договор. Технически данни могат да се обработват и за сигурността и надеждната работа на формата.",
      en: "The data is used to review and respond to your enquiry, clarify requirements and take steps before potentially entering into a contract. Technical data may also be processed to protect the security and reliable operation of the form.",
    }],
  },
  {
    id: "providers",
    title: { bg: "Доставчици и предаване на данни", en: "Providers and data transfers" },
    paragraphs: [{
      bg: "Достъп получават само технически доставчици, необходими за хостинга и доставянето на запитването. При активиране на имейл изпращането Resend обработва адреса и съдържанието на съобщението като доставчик. Resend посочва, че основните му операции са в САЩ и предвижда подходящи гаранции, включително стандартни договорни клаузи за приложимите трансфери.",
      en: "Access is limited to technical providers required for hosting and delivering the enquiry. When email delivery is enabled, Resend processes the address and message content as a provider. Resend states that its primary operations are in the United States and provides appropriate safeguards, including Standard Contractual Clauses for applicable transfers.",
    }],
  },
  {
    id: "retention",
    title: { bg: "Срок на съхранение", en: "Retention" },
    paragraphs: [{
      bg: "Данните се пазят само докато са необходими за комуникацията по запитването, евентуалните последващи отношения и приложимите законови задължения. Запитванията, които не са необходими за тези цели, се изтриват.",
      en: "Data is kept only while needed for communication about the enquiry, any resulting relationship and applicable legal obligations. Enquiries that are no longer needed for these purposes are deleted.",
    }],
  },
  {
    id: "security",
    title: { bg: "Сигурност", en: "Security" },
    paragraphs: [{
      bg: "Прилагат се мерки за ограничаване на достъпа, валидация на изпратените данни, ограничаване на автоматизирани заявки и защитено предаване към конфигурираните доставчици. Никоя интернет система не може да гарантира абсолютна сигурност.",
      en: "Measures include restricted access, validation of submitted data, limits on automated requests and protected transmission to configured providers. No internet-based system can guarantee absolute security.",
    }],
  },
  {
    id: "rights",
    title: { bg: "Твоите права", en: "Your rights" },
    paragraphs: [{
      bg: "Съгласно приложимото законодателство можеш да поискаш информация, достъп, коригиране, изтриване или ограничаване на обработването, както и да възразиш, когато това е приложимо. Имаш право и да подадеш жалба до Комисията за защита на личните данни.",
      en: "Under applicable law, you may request information, access, correction, deletion or restriction of processing, and object where applicable. You also have the right to lodge a complaint with the Bulgarian Commission for Personal Data Protection.",
    }],
  },
  {
    id: "cookies",
    title: { bg: "Бисквитки", en: "Cookies" },
    paragraphs: [{
      bg: "Сайтът не използва рекламни или аналитични бисквитки. Използва се функционална бисквитка NEXT_LOCALE за запомняне на избрания език за срок до една година.",
      en: "The website does not use advertising or analytics cookies. A functional NEXT_LOCALE cookie is used to remember the selected language for up to one year.",
    }],
  },
] satisfies PrivacySection[];
