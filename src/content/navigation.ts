export const navigationItems = [
  { id: "home", route: "home", labelKey: "home", icon: "House", mobileUtility: false },
  { id: "services", route: "services", labelKey: "services", icon: "BriefcaseBusiness", mobileUtility: false },
  { id: "projects", route: "projects", labelKey: "projects", icon: "FolderKanban", mobileUtility: false },
  { id: "about", route: "about", labelKey: "about", icon: "UserRound", mobileUtility: false },
  { id: "contact", route: "contact", labelKey: "contact", icon: "Mail", mobileUtility: false },
] as const;
export type NavigationItem = (typeof navigationItems)[number];
