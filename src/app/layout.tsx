import type { Metadata } from "next";
import { headers } from "next/headers";
import localFont from "next/font/local";
import { siteConfig } from "@/content/site";
import "./globals.css";

const manrope = localFont({
  src: [
    { path: "./fonts/manrope-latin.woff2", weight: "200 800", style: "normal" },
    { path: "./fonts/manrope-cyrillic.woff2", weight: "200 800", style: "normal" },
  ],
  variable: "--font-manrope",
  display: "swap",
});

const robotoCondensed = localFont({
  src: [
    { path: "./fonts/roboto-condensed-latin.woff2", weight: "100 900", style: "normal" },
    { path: "./fonts/roboto-condensed-cyrillic.woff2", weight: "100 900", style: "normal" },
  ],
  variable: "--font-barlow",
  display: "swap",
});

export const metadata:Metadata={metadataBase:new URL(siteConfig.siteUrl),title:siteConfig.fullBrandName,description:siteConfig.brandDescriptor};
export default async function RootLayout({children}:{children:React.ReactNode}){const locale=(await headers()).get("x-simo-locale")==="en"?"en":"bg";return <html lang={locale} data-scroll-behavior="smooth" className={`${manrope.variable} ${robotoCondensed.variable}`}><body>{children}</body></html>}
