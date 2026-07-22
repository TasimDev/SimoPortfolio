import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/bg";
import { DesktopHeader } from "./DesktopHeader";
import { MobileNavigation } from "./MobileNavigation";
export function Header({locale,dictionary}:{locale:Locale;dictionary:Dictionary}){return <><DesktopHeader locale={locale} dictionary={dictionary}/><MobileNavigation locale={locale} dictionary={dictionary}/></>}
