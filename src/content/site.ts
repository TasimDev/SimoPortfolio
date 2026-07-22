const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://tasimtasimov.com";

export const siteConfig = {
  brandName: "SIMO", brandDescriptor: "Digital Craftsman", fullBrandName: "SIMO | Digital Craftsman",
  siteUrl: configuredSiteUrl.replace(/\/$/, ""),
  defaultLocale: "bg", phoneDisplay: "+359 89 272 9253", phoneHref: "tel:+359892729253",
  location: { bg: "България", en: "Bulgaria" },
  socialLinks: [
    { id: "instagram", label: "Instagram", url: "https://www.instagram.com/tasimerdinc" },
    { id: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/tasimdev/" },
    { id: "facebook", label: "Facebook", url: "https://www.facebook.com/tasimerdinc/" },
  ],
  projectAvailability: true,
  logo: "/images/brand/simo-logo-light-surface.png",
  logoOnDark: "/images/brand/simo-logo-dark-surface.png",
} as const;
