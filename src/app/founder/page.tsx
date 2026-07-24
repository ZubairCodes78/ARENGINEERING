import type { Metadata } from "next";
import { Award, Factory, UserRound } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Container from "@/components/ui/Container";
import { FOUNDER } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Founder Abdul Sattar | AL Raheem Engineering",
  description:
    "Founder profile of Abdul Sattar, with 35+ years of engineering experience and a journey in machine building since 1990.",
};

export default function FounderPage() {
  return (
    <>
      <PageHeader
        label="Founder"
        title="Abdul Sattar"
        description="35+ years of engineering experience, a journey since 1990, and leadership focused on dependable industrial machine building."
        current="Founder"
      />
      <section className="bg-white py-28 lg:py-[120px]">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="flex aspect-[4/5] max-w-md items-center justify-center rounded-xl border border-border bg-light-gray">
              <div className="text-center">
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-border bg-white">
                  <UserRound className="h-10 w-10 text-primary" strokeWidth={1.5} />
                </div>
                <p className="mt-6 text-sm font-semibold text-secondary">
                  Founder Portrait
                </p>
                <p className="mt-2 text-sm text-dark-gray">Professional image placeholder</p>
              </div>
            </div>

            <div className="space-y-6">
              {[
                ["Leadership Message", FOUNDER.message, Award],
                ["Vision", FOUNDER.vision, Factory],
                [
                  "Achievements",
                  "Founder-level practical engineering experience, company establishment in 2020, AR machine development, and long-term customer support across Pakistan.",
                  Award,
                ],
              ].map(([title, text, Icon]) => (
                <article key={String(title)} className="rounded-xl border border-border bg-light-gray p-8 shadow-sm">
                  <Icon className="h-5 w-5 text-secondary" strokeWidth={1.8} />
                  <h2 className="mt-5 font-heading text-xl font-semibold text-primary">{String(title)}</h2>
                  <p className="mt-3 text-sm leading-7 text-dark-gray">{String(text)}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
