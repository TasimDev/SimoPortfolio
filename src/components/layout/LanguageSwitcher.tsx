"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/i18n/config";
export function LanguageSwitcher({locale,label,compact=false}:{locale:Locale;label:string;compact?:boolean}){
  const pathname=usePathname();
  const hrefFor=(next:Locale)=>{const parts=pathname.split("/");parts[1]=next;return parts.join("/")||`/${next}`};
  return <nav className={`language ${compact?"language--compact":""}`} aria-label={label}>{(["bg","en"] as const).map((item)=><Link key={item} href={hrefFor(item)} hrefLang={item} aria-current={locale===item?"page":undefined}>{item.toUpperCase()}</Link>)}</nav>;
}
