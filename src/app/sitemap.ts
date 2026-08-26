import type { MetadataRoute } from "next";
import { COMPANY, EVENTS, LEGAL_LINKS, NAV_LINKS } from "@/lib/constants";
import { PRODUCTS, getMachineSlug } from "@/lib/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  // Core static pages
  const staticRoutes = [
    { url: COMPANY.websiteUrl, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${COMPANY.websiteUrl}/machines`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${COMPANY.websiteUrl}/industries`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${COMPANY.websiteUrl}/about`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${COMPANY.websiteUrl}/founder`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${COMPANY.websiteUrl}/contact`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${COMPANY.websiteUrl}/faqs`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${COMPANY.websiteUrl}/manufacturing`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${COMPANY.websiteUrl}/testimonials`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${COMPANY.websiteUrl}/galleryhb`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${COMPANY.websiteUrl}/blog`, priority: 0.7, changeFrequency: "weekly" as const },
    { url: `${COMPANY.websiteUrl}/social`, priority: 0.6, changeFrequency: "monthly" as const },
  ];

  // Dedicated machine SEO pages
  const machineRoutes = PRODUCTS.map((product) => ({
    url: `${COMPANY.websiteUrl}/machines/${getMachineSlug(product.slug)}`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  // Gallery / event pages
  const eventRoutes = EVENTS.map((event) => ({
    url: `${COMPANY.websiteUrl}/galleryhb/${event.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Legal & policy pages
  const legalRoutes = LEGAL_LINKS.map((link) => ({
    url: `${COMPANY.websiteUrl}${link.href}`,
    lastModified: currentDate,
    changeFrequency: "yearly" as const,
    priority: 0.4,
  }));

  return [
    ...staticRoutes.map((route) => ({
      ...route,
      lastModified: currentDate,
    })),
    ...machineRoutes,
    ...eventRoutes,
    ...legalRoutes,
  ];
}

