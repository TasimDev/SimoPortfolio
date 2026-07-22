import type { Technology } from "@/types/content";

export const technologies = [
  { id: "wordpress", name: "WordPress", category: "CMS" },
  { id: "woocommerce", name: "WooCommerce", category: "E-commerce" },
  { id: "shopify", name: "Shopify", category: "E-commerce" },
  { id: "cloudcart", name: "CloudCart", category: "E-commerce" },
  { id: "nextjs", name: "Next.js", category: "Framework" },
  { id: "react", name: "React", category: "Library" },
] satisfies Technology[];
