import type { ReactNode } from "react";
export function NavigationTooltip({children,detail}:{children:ReactNode;detail?:string}){return <span className="nav-tooltip" role="tooltip"><span>{children}</span>{detail&&<small>{detail}</small>}</span>}
