import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale,locales } from "@/i18n/config";
export function generateStaticParams(){return locales.map((locale)=>({locale}))}
export default async function LocaleLayout({children,params}:{children:React.ReactNode;params:Promise<{locale:string}>}){const {locale}=await params;if(!isLocale(locale))notFound();const dictionary=await getDictionary(locale);return <><a className="skip-link" href="#main-content">{dictionary.navigation.skipToContent}</a><Header locale={locale} dictionary={dictionary}/>{children}<Footer locale={locale} dictionary={dictionary}/></>}
