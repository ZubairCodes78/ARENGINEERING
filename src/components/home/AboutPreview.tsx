import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Container from "@/components/ui/Container";
import FadeUp from "@/components/ui/FadeUp";
import SectionHeading from "@/components/ui/SectionHeading";
import { MISSION, VISION } from "@/lib/constants";

export default function AboutPreview() {
  return (
    <section className="bg-white py-28 lg:py-[120px]">
      <Container>
        <div className="grid items-start gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <FadeUp>
            <SectionHeading
              label="About"
              title="Industrial machinery built with practical engineering discipline."
              description="AL Raheem Engineering is an established packaging machine manufacturer based in Lahore. The company designs and manufactures production equipment for factories that need reliability, repeatability, and responsive support."
            />
            <Link
              href="/about"
              className="mt-8 inline-flex items-center text-sm font-semibold text-secondary hover:text-primary"
            >
              Learn More
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </FadeUp>

          <div className="grid gap-5">
            {[
              ["Mission", MISSION],
              ["Vision", VISION],
            ].map(([title, text], index) => (
              <FadeUp key={title} delay={index * 0.08}>
                <div className="rounded-xl border border-border bg-white p-8 shadow-sm">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary" strokeWidth={1.8} />
                    <h3 className="font-heading text-base font-semibold text-primary">{title}</h3>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-dark-gray">{text}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
