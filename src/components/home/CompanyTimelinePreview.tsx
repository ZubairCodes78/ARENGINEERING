import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import FadeUp from "@/components/ui/FadeUp";

const preview = [
  ["1990", "Abdul Sattar starts engineering career."],
  ["2020", "AL RAHEEM ENGINEERING established"],
  ["Today", "Serving industries across Pakistan."],
] as const;

export default function CompanyTimelinePreview() {
  return (
    <section className="bg-white py-28 lg:py-[120px]">
      <Container>
        <FadeUp>
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold text-secondary">Company timeline</p>
              <h2 className="mt-4 max-w-xl font-heading text-3xl font-semibold text-primary sm:text-4xl">
                A focused journey from engineering experience to industrial support.
              </h2>
              <Link
                href="/about"
                className="mt-8 inline-flex items-center text-sm font-semibold text-secondary hover:text-primary"
              >
                View Company Story
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="mx-auto w-full max-w-xl">
              {preview.map(([year, title], index) => (
                <div key={year} className="relative pb-12 last:pb-0">
                  {index < preview.length - 1 && (
                    <div className="absolute left-[31px] top-16 h-[calc(100%-4rem)] w-px bg-border" aria-hidden />
                  )}
                  <article className="grid grid-cols-[64px_1fr] gap-6">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border border-secondary/30 bg-white font-heading text-sm font-semibold text-secondary shadow-sm">
                      {year}
                    </div>
                    <div className="pt-3">
                      <p className="text-lg font-semibold text-primary">{title}</p>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}
