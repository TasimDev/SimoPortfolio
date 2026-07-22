import type { Locale } from "@/i18n/config";
export const routes = { home:(l:Locale)=>`/${l}`, services:(l:Locale)=>`/${l}#services`, pricing:(l:Locale)=>`/${l}/pricing`, projects:(l:Locale)=>`/${l}/projects`, about:(l:Locale)=>`/${l}#about`, contact:(l:Locale)=>`/${l}/contact`, privacy:(l:Locale)=>`/${l}/privacy` } as const;
export const projectRoute = (locale: Locale, slug: string) => `/${locale}/projects/${slug}`;
