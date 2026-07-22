"use client";
import { usePathname } from "next/navigation";import { bg } from "@/i18n/dictionaries/bg";import { en } from "@/i18n/dictionaries/en";
export default function Error({reset}:{error:Error&{digest?:string};reset:()=>void}){const d=usePathname().startsWith("/en")?en:bg;return <main className="container empty-state"><h1>{d.common.errorTitle}</h1><button className="button button--primary" onClick={reset}>{d.common.errorAction}</button></main>}
