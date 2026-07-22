import { NextResponse, type NextRequest } from "next/server";
import { isLocale } from "@/i18n/config";
export function proxy(request:NextRequest){const locale=request.nextUrl.pathname.split("/")[1];const requestHeaders=new Headers(request.headers);if(isLocale(locale))requestHeaders.set("x-simo-locale",locale);const response=NextResponse.next({request:{headers:requestHeaders}});if(isLocale(locale))response.cookies.set("NEXT_LOCALE",locale,{path:"/",maxAge:60*60*24*365,sameSite:"lax"});return response}
export const config={matcher:["/bg/:path*","/en/:path*"]};
