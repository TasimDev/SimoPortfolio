"use client";
import Link from "next/link";import { usePathname } from "next/navigation";import { bg } from "@/i18n/dictionaries/bg";import { en } from "@/i18n/dictionaries/en";
export default function NotFound(){const locale=usePathname().split("/")[1]==="en"?"en":"bg";const d=locale==="en"?en:bg;return <main className="container empty-state"><p className="eyebrow">404</p><h1>{d.common.notFoundTitle}</h1><Link className="button button--primary" href={`/${locale}`}>{d.common.notFoundAction}</Link></main>}
