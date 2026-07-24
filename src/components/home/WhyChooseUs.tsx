import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Container from "@/components/ui/Container";
import FadeUp from "@/components/ui/FadeUp";
import SectionHeading from "@/components/ui/SectionHeading";
import { WHY_CHOOSE_US } from "@/lib/constants";

export default function WhyChooseUs() {
  return (
    <section className="bg-primary py-28 text-white lg:py-[120px]">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <FadeUp>
            <SectionHeading
              label="Why Choose Us"
              title="Built for factories, supported by engineers."
              description="The value is not only in the machine. It is in the configuration, installation support, practical service access, and long-term reliability."
              light
            />
            <Link
              href="/about"
              className="mt-8 inline-flex items-center text-sm font-semibold text-secondary hover:text-white"
            >
              Learn More
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </FadeUp>
          <div className="grid gap-4 sm:grid-cols-2">
            {WHY_CHOOSE_US.map((item, index) => (
              <FadeUp key={item.title} delay={index * 0.05}>
                <div className="h-full rounded-xl border border-white/10 bg-white/[0.045] p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                  <CheckCircle2 className="h-5 w-5 text-secondary" strokeWidth={1.8} />
                  <h3 className="mt-5 font-heading text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/68">{item.description}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
