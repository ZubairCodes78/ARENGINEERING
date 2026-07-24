import Container from "@/components/ui/Container";
import FadeUp from "@/components/ui/FadeUp";
import SectionHeading from "@/components/ui/SectionHeading";
import { TIMELINE } from "@/lib/constants";

export default function JourneyTimeline() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <Container>
        <FadeUp>
          <SectionHeading
            label="Company Journey"
            title="Experience-led engineering since 1990"
            description="AL Raheem Engineering is a young company built on decades of founder-level engineering experience."
            align="center"
            className="mx-auto"
          />
        </FadeUp>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {TIMELINE.map((item, index) => (
            <FadeUp key={item.year} delay={index * 0.06}>
              <div className="h-full border-l-2 border-secondary bg-light-gray p-7">
                <p className="font-heading text-4xl font-semibold text-primary">{item.year}</p>
                <h3 className="mt-5 font-heading text-xl font-semibold text-primary">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-dark-gray">{item.description}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}
