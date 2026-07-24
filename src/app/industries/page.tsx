import type { Metadata } from "next";
import {
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
import { INDUSTRIES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Industries | AL Raheem Engineering",
  description:
    "Packaging machine applications for food, bakery, confectionery, snacks, soap, cosmetics, and pharmaceutical manufacturers.",
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
  return (
    <>
      <PageHeader
        label="Industries We Serve"
        title="Packaging systems for production sectors"
        description="AR machines support practical factory workflows across food, FMCG, personal care, and regulated production environments."
        current="Industries"
      />
      <section className="bg-white py-28 lg:py-[120px]">
        <Container>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.map((industry) => {
              const Icon = ICON_MAP[industry.icon];

              return (
                <article key={industry.name} className="rounded-xl border border-border bg-light-gray p-8 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-white text-secondary">
                    <Icon className="h-6 w-6" strokeWidth={1.7} />
                  </div>
                  <h2 className="mt-6 font-heading text-xl font-semibold text-primary">{industry.name}</h2>
                  <p className="mt-3 text-sm leading-7 text-dark-gray">{industry.description}</p>
                  <p className="mt-5 text-sm leading-7 text-dark-gray">
                    Machines can be reviewed for product handling, film behavior, target speed, sealing style, and available production floor space.
                  </p>
                </article>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
