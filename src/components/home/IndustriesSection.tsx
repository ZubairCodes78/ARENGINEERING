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
import Link from "next/link";
import Container from "@/components/ui/Container";
import FadeUp from "@/components/ui/FadeUp";
import SectionHeading from "@/components/ui/SectionHeading";
import { INDUSTRIES } from "@/lib/constants";

const ICON_MAP: Record<string, LucideIcon> = {
  UtensilsCrossed,
  Candy,
  Croissant,
  Package,
  Droplets,
  Sparkles,
  Pill,
};

export default function IndustriesSection() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <Container>
        <FadeUp>
          <SectionHeading
            label="Industries Served"
            title="Packaging systems for production environments"
            description="AR machines are configured for practical factory use across food, FMCG, personal care, and regulated production sectors."
            align="center"
            className="mx-auto"
          />
        </FadeUp>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {INDUSTRIES.map((industry, index) => {
            const Icon = ICON_MAP[industry.icon];

            return (
              <FadeUp key={industry.name} delay={index * 0.04}>
                <div className="h-full rounded-lg border border-border bg-white p-6 shadow-sm">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-light-gray">
                    <Icon className="h-5 w-5 text-primary" strokeWidth={1.7} />
                  </div>
                  <h3 className="mt-5 font-heading text-base font-semibold text-primary">
                    {industry.name}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-dark-gray">{industry.description}</p>
                </div>
              </FadeUp>
            );
          })}
        </div>
        <FadeUp delay={0.12}>
          <div className="mt-10 text-center">
            <Link
              href="/industries"
              className="inline-flex items-center text-sm font-semibold text-secondary hover:text-primary"
            >
              Learn more about industries
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}
