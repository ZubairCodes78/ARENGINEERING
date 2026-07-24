import Container from "@/components/ui/Container";
import FadeUp from "@/components/ui/FadeUp";
import SectionHeading from "@/components/ui/SectionHeading";
import { TESTIMONIALS } from "@/lib/constants";

export default function TestimonialSection() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <Container>
        <FadeUp>
          <SectionHeading
            label="Testimonials"
            title="Trusted by production teams"
            description="Feedback from manufacturing teams that value machine uptime, practical support, and consistent packing quality."
            align="center"
            className="mx-auto"
          />
        </FadeUp>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial, index) => (
            <FadeUp key={testimonial.company} delay={index * 0.06}>
              <figure className="h-full rounded-lg border border-border bg-white p-6 shadow-sm">
                <blockquote className="text-sm leading-7 text-dark-gray">
                  &quot;{testimonial.quote}&quot;
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-5">
                  <p className="font-heading text-sm font-semibold text-primary">{testimonial.author}</p>
                  <p className="mt-1 text-xs text-dark-gray/70">{testimonial.company}</p>
                </figcaption>
              </figure>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}
