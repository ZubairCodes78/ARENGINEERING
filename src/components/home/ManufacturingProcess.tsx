import Container from "@/components/ui/Container";
import FadeUp from "@/components/ui/FadeUp";
import SectionHeading from "@/components/ui/SectionHeading";
import { MANUFACTURING_STEPS } from "@/lib/constants";

export default function ManufacturingProcess() {
  return (
    <section className="bg-light-gray py-24 lg:py-32">
      <Container>
        <FadeUp>
          <SectionHeading
            label="Manufacturing Process"
            title="From application review to machine testing"
            description="A disciplined process keeps machine configuration clear, build quality consistent, and support practical after delivery."
          />
        </FadeUp>

        <div className="mt-14 grid gap-4 lg:grid-cols-5">
          {MANUFACTURING_STEPS.map((step, index) => (
            <FadeUp key={step.step} delay={index * 0.05}>
              <div className="h-full rounded-lg border border-border bg-white p-6 shadow-sm">
                <p className="font-heading text-3xl font-semibold text-secondary">{step.step}</p>
                <h3 className="mt-5 font-heading text-base font-semibold text-primary">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-dark-gray">{step.description}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}
