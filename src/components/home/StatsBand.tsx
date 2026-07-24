import Container from "@/components/ui/Container";
import FadeUp from "@/components/ui/FadeUp";
import { STATS } from "@/lib/constants";

export default function StatsBand() {
  return (
    <section className="border-y border-border bg-white py-20">
      <Container>
        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-3">
          {STATS.map((stat, index) => (
            <FadeUp key={stat.label} delay={index * 0.04}>
              <div className="text-center">
                <p className="font-heading text-5xl font-semibold text-primary">{stat.value}</p>
                <p className="mt-3 text-sm font-medium text-dark-gray/72">{stat.label}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}
