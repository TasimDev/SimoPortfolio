import { isLocale, type Locale } from "./config";
const dictionaries = { bg: () => import("./dictionaries/bg").then((m) => m.bg), en: () => import("./dictionaries/en").then((m) => m.en) };
export async function getDictionary(locale: Locale) { return dictionaries[locale](); }
export async function getValidatedDictionary(value: string) { if (!isLocale(value)) return null; return getDictionary(value); }
