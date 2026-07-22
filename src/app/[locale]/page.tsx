import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AboutShowcase } from "@/components/sections/AboutShowcase";
import { ContactShowcase } from "@/components/sections/ContactShowcase";
import { FaqShowcase } from "@/components/sections/FaqShowcase";
import { Hero } from "@/components/sections/Hero";
import { ProcessShowcase } from "@/components/sections/ProcessShowcase";
import { ProjectsShowcase } from "@/components/sections/ProjectsShowcase";
import { SectionsJourney } from "@/components/sections/SectionsJourney";
import { ServicesShowcase } from "@/components/sections/ServicesShowcase";
import { TechnologiesShowcase } from "@/components/sections/TechnologiesShowcase";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale } from "@/i18n/config";
import { createMetadata } from "@/lib/metadata";
type Props={params:Promise<{locale:string}>};
export async function generateMetadata({params}:Props):Promise<Metadata>{const {locale}=await params;if(!isLocale(locale))return {};return createMetadata(locale,await getDictionary(locale))}
export default async function Home({params}:Props){const {locale}=await params;if(!isLocale(locale))notFound();const dictionary=await getDictionary(locale);return <main id="main-content"><Hero dictionary={dictionary}/><SectionsJourney serviceMarker={dictionary.servicesShowcase.sectionNumber} projectMarker={dictionary.projectsShowcase.sectionNumber} processMarker={dictionary.processShowcase.sectionNumber} aboutMarker={dictionary.aboutShowcase.sectionNumber} technologyMarker={dictionary.technologiesShowcase.sectionNumber} faqMarker={dictionary.faqShowcase.sectionNumber} contactMarker={dictionary.contactShowcase.sectionNumber}><ServicesShowcase locale={locale} dictionary={dictionary}/><ProjectsShowcase locale={locale} dictionary={dictionary}/><ProcessShowcase locale={locale} dictionary={dictionary}/><AboutShowcase locale={locale} dictionary={dictionary}/><TechnologiesShowcase dictionary={dictionary}/><FaqShowcase locale={locale} dictionary={dictionary}/><ContactShowcase locale={locale} dictionary={dictionary}/></SectionsJourney></main>}
