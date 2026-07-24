import type { MetadataRoute } from "next";
import { COMPANY, LEGAL_LINKS, NAV_LINKS } from "@/lib/constants";
import { PRODUCTS, getMachineSlug } from "@/lib/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const deepRoutes = ["/gallery", "/blog", "/testimonials", "/manufacturing", "/founder", "/faqs", "/social"];
  const staticRoutes = [
    ...NAV_LINKS.map((link) => link.href),
    ...deepRoutes,
    ...LEGAL_LINKS.map((link) => link.href),
  ];
  const machineRoutes = PRODUCTS.map((product) => `/machines/${getMachineSlug(product.slug)}`);
  const legacyProductRoutes = ["/products", ...PRODUCTS.map((product) => `/products/${product.slug}`)];

  return [...new Set([...staticRoutes, ...machineRoutes, ...legacyProductRoutes])].map((route) => ({
    url: `${COMPANY.websiteUrl}${route === "/" ? "" : route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route.startsWith("/machines") ? 0.8 : 0.6,
  }));
}
