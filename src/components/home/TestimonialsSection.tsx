import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import Container from "@/components/ui/Container";
import FadeUp from "@/components/ui/FadeUp";
import SectionHeading from "@/components/ui/SectionHeading";

const testimonials = [
  {
    client: "Production Manager",
    company: "Gibs Foods",
    logo: "/images/clients/gibs-foods.png",
    date: "2026",
    review:
      "The machine support and practical guidance helped us improve packaging consistency for daily production.",
  },
  {
    client: "Operations Team",
    company: "Rupali Foods",
    logo: "/images/clients/rupali-foods.png",
    date: "2026",
    review:
      "AL Raheem Engineering understood our production needs and guided us with reliable industrial packaging solutions.",
  },
  {
    client: "Plant Engineering Team",
    company: "Unilever",
    logo: "/images/clients/unilever.png",
    date: "2026",
    review:
      "The team provided responsive communication, practical engineering input and dependable after-sales coordination.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-white py-28 lg:py-[120px]">
      <Container>
        <FadeUp>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              label="Testimonials"
              title="What Our Clients Say"
              description="Feedback from manufacturers who value reliable engineering, practical support and long-term production performance."
            />
            <Link
              href="/testimonials"
              className="inline-flex shrink-0 items-center rounded-md border border-primary/15 bg-white px-5 py-3 text-sm font-semibold text-primary transition hover:border-secondary hover:text-secondary"
            >
              View More Testimonials
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </FadeUp>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((item, index) => (
            <FadeUp key={item.company} delay={index * 0.05}>
              <article className="h-full rounded-2xl border border-border bg-light-gray p-8">
                <div className="flex items-center justify-between gap-4">
                  <div className="relative h-12 w-28">
                    <Image src={item.logo} alt={`${item.company} logo`} fill sizes="112px" loading="lazy" className="object-contain object-left grayscale" />
                  </div>
                  <p className="text-xs font-semibold text-dark-gray/55">{item.date}</p>
                </div>
                <div className="mt-6 flex gap-1 text-secondary">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star key={starIndex} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-5 text-sm leading-7 text-dark-gray">{item.review}</p>
                <div className="mt-7 border-t border-border pt-5">
                  <p className="font-heading text-base font-semibold text-primary">{item.client}</p>
                  <p className="mt-1 text-sm text-dark-gray/70">{item.company}</p>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}

