import { BriefcaseBusiness, FolderKanban, House, Mail, Phone, UserRound } from "lucide-react";
const icons={House,BriefcaseBusiness,FolderKanban,UserRound,Mail,Phone} as const;
export function NavigationIcon({name}:{name:keyof typeof icons}){const Icon=icons[name];return <Icon aria-hidden="true" size={20} strokeWidth={1.8}/>}
