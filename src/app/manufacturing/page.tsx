import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Container from "@/components/ui/Container";
import { COMPANY, MANUFACTURING_STEPS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Packaging Machine Manufacturing Process | AL RAHEEM ENGINEERING Pakistan",
  description:
    "Explore the industrial packaging machine manufacturing process at AL Raheem Engineering in Lahore, Pakistan. Application review, engineering design, fabrication, assembly, and pre-dispatch testing.",
  keywords: [
    "Packaging Machine Manufacturer Pakistan",
    "packaging machine manufacturing Lahore",
    "industrial machine fabrication Pakistan",
    "packaging machinery assembly Pakistan",
    "packaging machine quality control",
    "custom machine manufacturing Pakistan",
  ],
  alternates: {
    canonical: "/manufacturing",
  },
  openGraph: {
    title: "Packaging Machine Manufacturing Process | AL RAHEEM ENGINEERING Pakistan",
    description:
      "Disciplined factory workflow from application review and precision engineering to fabrication, assembly, and testing in Pakistan.",
    url: `${COMPANY.websiteUrl}/manufacturing`,
    type: "website",
    siteName: COMPANY.name,
    locale: "en_PK",
  },
  twitter: {
    card: "summary_large_image",
    title: "Packaging Machine Manufacturing Process | AL RAHEEM ENGINEERING Pakistan",
    description:
      "Factory workflow and engineering discipline behind AR industrial packaging machines in Pakistan.",
  },
};

export default function ManufacturingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": `${COMPANY.websiteUrl}/manufacturing#howto`,
    name: "Industrial Packaging Machine Manufacturing Process",
    description:
      "Step-by-step engineering and fabrication process for industrial packaging machines by AL Raheem Engineering in Lahore, Pakistan.",
    step: MANUFACTURING_STEPS.map((s, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: s.title,
      text: s.description,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
      <PageHeader
        label="Manufacturing Process"
        title="Factory workflow from review to testing"
        description="A disciplined build process helps keep machine configuration clear, assembly quality consistent, and dispatch readiness practical across Pakistan."
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
