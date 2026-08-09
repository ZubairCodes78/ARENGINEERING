import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Award, Factory } from "lucide-react";
import Container from "@/components/ui/Container";
import FadeUp from "@/components/ui/FadeUp";
import SectionHeading from "@/components/ui/SectionHeading";
import { FOUNDER } from "@/lib/constants";

export default function FounderSection() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <FadeUp>
            <div className="relative aspect-[4/5] max-w-md overflow-hidden rounded-lg border border-border bg-light-gray">
              <Image
                src="/images/Founder.png"
                alt={FOUNDER.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <SectionHeading
              label="Founder"
              title={`${FOUNDER.name} - ${FOUNDER.experience}`}
              description="A leadership profile grounded in industrial machine building, factory problem-solving, and long-term customer relationships."
            />

            <div className="mt-8 grid gap-5">
              <div className="rounded-lg border border-border bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <Award className="h-5 w-5 text-secondary" strokeWidth={1.8} />
                  <h3 className="font-heading text-lg font-semibold text-primary">Professional Message</h3>
                </div>
                <p className="mt-4 text-sm leading-7 text-dark-gray">{FOUNDER.message}</p>
              </div>
              <div className="rounded-lg border border-border bg-light-gray p-6">
                <div className="flex items-center gap-3">
                  <Factory className="h-5 w-5 text-secondary" strokeWidth={1.8} />
                  <h3 className="font-heading text-lg font-semibold text-primary">Vision & Leadership</h3>
                </div>
                <p className="mt-4 text-sm leading-7 text-dark-gray">{FOUNDER.vision}</p>
              </div>
            </div>
            <Link
              href="/founder"
              className="mt-8 inline-flex items-center text-sm font-semibold text-secondary hover:text-primary"
            >
              Read founder profile
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </FadeUp>
        </div>
      </Container>
    </section>
  );
}
