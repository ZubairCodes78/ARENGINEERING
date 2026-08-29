import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import FounderPremium from "@/components/FounderPremium";
import Container from "@/components/ui/Container";
import { COMPANY, MISSION, TIMELINE, VISION, WHY_CHOOSE_US } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us | Packaging Machine Manufacturer Pakistan | AL RAHEEM ENGINEERING",
  description:
    "Learn about AL Raheem Engineering, a leading industrial packaging machinery manufacturer based in Lahore, Pakistan. Built on over 35 years of engineering experience since 1990.",
  keywords: [
    "Packaging Machine Manufacturer Pakistan",
    "Packaging Machinery Pakistan",
    "Packing Machine Manufacturer Pakistan",
    "packaging machine manufacturer Lahore",
    "industrial packaging company Pakistan",
    "Abdul Sattar packaging engineer",
    "packaging machinery fabrication Lahore",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us | Packaging Machine Manufacturer Pakistan | AL RAHEEM ENGINEERING",
    description:
      "AL Raheem Engineering designs and manufactures dependable packaging machines for food, confectionery, bakery, and FMCG factories across Pakistan.",
    url: `${COMPANY.websiteUrl}/about`,
    type: "website",
    siteName: COMPANY.name,
    locale: "en_PK",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Packaging Machine Manufacturer Pakistan",
    description:
      "Industrial packaging machine manufacturer serving Pakistan with precision engineering since 1990.",
  },
};

export default function AboutPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${COMPANY.websiteUrl}/about#webpage`,
    name: "About AL RAHEEM ENGINEERING",
    description:
      "Overview of AL Raheem Engineering company history, mission, vision, and packaging machinery capabilities in Lahore, Pakistan.",
    url: `${COMPANY.websiteUrl}/about`,
    mainEntity: {
      "@type": "Organization",
      name: COMPANY.name,
      legalName: COMPANY.legalName,
      url: COMPANY.websiteUrl,
      foundingDate: "2020",
      description: COMPANY.description,
      address: {
        "@type": "PostalAddress",
        streetAddress: `${COMPANY.address.line1}, ${COMPANY.address.line2}`,
        addressLocality: COMPANY.address.city,
        addressCountry: COMPANY.address.countryCode,
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
      <section className="bg-white pb-20 pt-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold text-secondary">
                Company
              </p>
              <h1 className="mt-4 font-heading text-4xl font-semibold leading-tight text-primary sm:text-5xl">
                {COMPANY.name}
              </h1>
              <p className="mt-5 text-xl font-medium text-primary">{COMPANY.tagline}</p>
            </div>
            <div className="space-y-5 text-base leading-8 text-dark-gray">
              <p>
                AL Raheem Engineering is an established industrial packaging machine manufacturer
                based in Lahore, Pakistan. The company designs and manufactures AR series packaging
                machines for factories that need dependable performance and practical support.
              </p>
              <p>
                The company serves food, confectionery, bakery, snacks, soap, cosmetics, and
                pharmaceutical manufacturers with equipment configured around real production needs:
                product handling, film behavior, output speed, and long-term serviceability.
              </p>
            </div>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {[
              ["Mission", MISSION],
              ["Vision", VISION],
            ].map(([title, text]) => (
              <div key={title} className="rounded-xl border border-border bg-light-gray p-8">
                <h2 className="font-heading text-xl font-semibold text-primary">{title}</h2>
                <p className="mt-4 text-sm leading-7 text-dark-gray">{text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <FounderPremium />

      <section className="bg-white pb-28 lg:pb-[120px]">
        <Container>
          <div className="mt-20">
            <p className="text-sm font-semibold text-secondary">
              Why Choose Us
            </p>
            <h2 className="mt-3 font-heading text-3xl font-semibold text-primary">
              Practical advantages for industrial buyers
            </h2>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {WHY_CHOOSE_US.map((item) => (
                <div key={item.title} className="rounded-xl border border-border bg-white p-8 shadow-sm">
                  <CheckCircle2 className="h-5 w-5 text-secondary" strokeWidth={1.8} />
                  <h3 className="mt-5 font-heading text-lg font-semibold text-primary">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-dark-gray">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-20">
            <p className="text-sm font-semibold text-secondary">
              Timeline
            </p>
            <h2 className="mt-3 font-heading text-3xl font-semibold text-primary">
              Company development
            </h2>
            <div className="mt-8 grid gap-4">
              {TIMELINE.map((item) => (
                <div key={item.year} className="grid gap-4 rounded-xl border border-border bg-light-gray p-8 md:grid-cols-[120px_1fr]">
                  <p className="font-heading text-2xl font-semibold text-secondary">{item.year}</p>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-primary">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-dark-gray">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
