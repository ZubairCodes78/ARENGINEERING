import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Candy,
  Croissant,
  Droplets,
  Package,
  Pill,
  Sparkles,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Container from "@/components/ui/Container";
import { COMPANY, INDUSTRIES } from "@/lib/constants";
import { PRODUCTS, getMachineSlug } from "@/lib/products";

export const metadata: Metadata = {
  title: "Packaging Machine Applications by Industry | AL RAHEEM ENGINEERING",
  description:
    "Industrial packaging solutions for food, confectionery, bakery, snacks, soap, cosmetics, and pharmaceutical manufacturers across Pakistan and worldwide by AL Raheem Engineering.",
  keywords: [
    "food packaging machines Pakistan",
    "confectionery packaging machines",
    "bakery packaging machinery Lahore",
    "soap packaging machines",
    "cosmetic packaging machines",
    "pharmaceutical packaging machinery",
    "industrial packaging solutions Pakistan",
  ],
  alternates: {
    canonical: "/industries",
  },
  openGraph: {
    title: "Packaging Machine Applications by Industry | AL RAHEEM ENGINEERING",
    description:
      "Engineered packaging systems for food, confectionery, bakery, snacks, soap, cosmetics, and pharmaceutical factories.",
    url: `${COMPANY.websiteUrl}/industries`,
    type: "website",
    siteName: COMPANY.name,
    locale: "en_PK",
  },
  twitter: {
    card: "summary_large_image",
    title: "Packaging Machine Applications by Industry | AL RAHEEM ENGINEERING",
    description:
      "Engineered packaging systems for food, confectionery, bakery, snacks, soap, cosmetics, and pharmaceutical factories in Pakistan.",
  },
};

const ICON_MAP: Record<string, LucideIcon> = {
  UtensilsCrossed,
  Candy,
  Croissant,
  Package,
  Droplets,
  Sparkles,
  Pill,
};

export default function IndustriesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${COMPANY.websiteUrl}/industries#list`,
    name: "Industrial Packaging Solutions by Industry",
    description:
      "Industries served with custom packaging machinery by AL Raheem Engineering in Lahore, Pakistan.",
    url: `${COMPANY.websiteUrl}/industries`,
    itemListElement: INDUSTRIES.map((industry, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: `${industry.name} Packaging Machinery`,
      description: industry.description,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
      <PageHeader
        label="Industries We Serve"
        title="Packaging systems for production sectors"
        description="AR machines support practical factory workflows across food, FMCG, personal care, and regulated production environments."
        current="Industries"
      />
      <section className="bg-white py-28 lg:py-[120px]">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.map((industry) => {
              const Icon = ICON_MAP[industry.icon];
              const matchingProducts = PRODUCTS.filter((p) =>
                (industry.machineModels as readonly string[]).includes(p.model)
              );

              return (
                <article
                  key={industry.name}
                  className="flex flex-col rounded-2xl border border-border bg-light-gray p-8 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-secondary/35 hover:bg-white hover:shadow-[0_20px_50px_rgba(8,40,68,0.08)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-secondary shadow-sm">
                    <Icon className="h-6 w-6" strokeWidth={1.8} />
                  </div>
                  <h2 className="mt-6 font-heading text-2xl font-semibold text-primary">
                    {industry.name} Packaging
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-dark-gray">
                    {industry.description}
                  </p>

                  <div className="mt-6 flex-1">
                    <p className="text-xs font-semibold uppercase tracking-wider text-secondary">
                      Recommended AR Machines:
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {matchingProducts.map((product) => (
                        <Link
                          key={product.slug}
                          href={`/machines/${getMachineSlug(product.slug)}`}
                          className="group/tag inline-flex items-center gap-1.5 rounded-lg border border-border bg-white px-3 py-1.5 text-xs font-medium text-primary shadow-xs transition hover:border-secondary hover:bg-secondary hover:text-white"
                        >
                          <span>{product.model}</span>
                          <ArrowRight className="h-3 w-3 transition-transform group-hover/tag:translate-x-0.5" />
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 border-t border-border pt-5">
                    <Link
                      href="/contact"
                      className="inline-flex items-center text-xs font-semibold text-secondary hover:text-primary"
                    >
                      Inquire for {industry.name} Line
                      <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
