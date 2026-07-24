import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Container from "@/components/ui/Container";
import { MANUFACTURING_STEPS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Manufacturing Process | AL Raheem Engineering",
  description:
    "Factory workflow, quality control, machine assembly, and testing process for AL Raheem Engineering packaging machines.",
};

export default function ManufacturingPage() {
  return (
    <>
      <PageHeader
        label="Manufacturing Process"
        title="Factory workflow from review to testing"
        description="A disciplined build process helps keep machine configuration clear, assembly quality consistent, and dispatch readiness practical."
        current="Manufacturing"
      />
      <section className="bg-light-gray py-28 lg:py-[120px]">
        <Container>
          <div className="grid gap-6 lg:grid-cols-5">
            {MANUFACTURING_STEPS.map((step) => (
              <article key={step.step} className="rounded-xl border border-border bg-white p-8 shadow-sm">
                <p className="font-heading text-3xl font-semibold text-secondary">{step.step}</p>
                <h2 className="mt-5 font-heading text-lg font-semibold text-primary">{step.title}</h2>
                <p className="mt-3 text-sm leading-7 text-dark-gray">{step.description}</p>
              </article>
            ))}
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              ["Quality Control", "Seal consistency, speed stability, electrical safety, and service access are reviewed before dispatch."],
              ["Machine Assembly", "Drive systems, conveyors, guards, control panels, and sealing assemblies are built around the required application."],
              ["Testing Process", "Machines are checked with product and film requirements so production teams receive practical operating guidance."],
            ].map(([title, text]) => (
              <article key={title} className="rounded-xl border border-border bg-white p-8 shadow-sm">
                <h2 className="font-heading text-xl font-semibold text-primary">{title}</h2>
                <p className="mt-3 text-sm leading-7 text-dark-gray">{text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
