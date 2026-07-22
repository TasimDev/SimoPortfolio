import Link from "next/link";
import type { NavigationItem as Item } from "@/content/navigation";
import type { Dictionary } from "@/i18n/dictionaries/bg";
import type { Locale } from "@/i18n/config";
import { routes } from "@/lib/routes";
import { NavigationIcon } from "./NavigationIcon";
import { NavigationTooltip } from "./NavigationTooltip";
type RouteKey=keyof typeof routes;
export function NavigationItem({item,locale,dictionary,active,onSelect}:{item:Item;locale:Locale;dictionary:Dictionary;active:boolean;onSelect:()=>void}){
 const label=dictionary.navigation[item.labelKey];const href=routes[item.route as RouteKey](locale);
 return <Link className="compact-item tooltip-anchor" href={href} aria-label={label} aria-current={active?"page":undefined} onClick={onSelect}><NavigationIcon name={item.icon}/><NavigationTooltip>{label}</NavigationTooltip></Link>;
}
