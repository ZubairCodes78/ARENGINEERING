import type { Metadata } from "next";
import { Award, Factory } from "lucide-react";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import Container from "@/components/ui/Container";
import { COMPANY, FOUNDER } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Abdul Sattar | 35+ Years Packaging Machine Engineer in Pakistan",
  description:
    "Founder profile of Abdul Sattar, chief packaging machinery engineer at AL Raheem Engineering with over 35 years of machine design and manufacturing experience in Pakistan since 1990.",
  keywords: [
    "Abdul Sattar packaging engineer",
    "founder AL Raheem Engineering",
    "packaging machine builder Pakistan",
    "Packaging Machine Manufacturer Pakistan",
    "industrial machinery designer Lahore",
    "packaging engineer Pakistan",
  ],
  alternates: {
    canonical: "/founder",
  },
  openGraph: {
    title: "Abdul Sattar | 35+ Years Packaging Machine Engineer in Pakistan",
    description:
      "Abdul Sattar has designed, manufactured, and delivered dependable packaging machinery across Pakistan with 35+ years of practical engineering expertise since 1990.",
    url: `${COMPANY.websiteUrl}/founder`,
    type: "profile",
    siteName: COMPANY.name,
    locale: "en_PK",
    images: [
      {
        url: "/images/Founder.png",
        width: 800,
        height: 1000,
        alt: "Abdul Sattar - Founder of AL RAHEEM ENGINEERING Lahore Pakistan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdul Sattar | 35+ Years Packaging Machine Engineer in Pakistan",
    description:
      "35+ years of industrial packaging machine engineering expertise since 1990 in Pakistan.",
    images: ["/images/Founder.png"],
  },
};

export default function FounderPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${COMPANY.websiteUrl}/founder#profile`,
    name: "Abdul Sattar - Founder Profile",
    url: `${COMPANY.websiteUrl}/founder`,
    mainEntity: {
      "@type": "Person",
      name: FOUNDER.name,
      jobTitle: "Founder & Chief Packaging Machinery Engineer",
      worksFor: {
        "@type": "Organization",
        name: COMPANY.name,
        url: COMPANY.websiteUrl,
      },
      description:
        "Industrial packaging machinery engineer with over 35 years of machine building, fabrication, and commissioning experience in Pakistan since 1990.",
      image: `${COMPANY.websiteUrl}/images/Founder.png`,
      address: {
        "@type": "PostalAddress",
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
      <PageHeader
        label="Founder"
        title="Abdul Sattar"
        description="35+ years of engineering experience, a journey since 1990, and leadership focused on dependable industrial machine building across Pakistan."
        current="Founder"
      />
      <section className="bg-white py-28 lg:py-[120px]">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="relative aspect-[4/5] max-w-md overflow-hidden rounded-xl border border-border bg-light-gray shadow-sm">
              <Image
                src="/images/Founder.png"
                alt="Abdul Sattar - Founder of AL Raheem Engineering packaging machinery Lahore"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 450px"
              />
            </div>

            <div className="space-y-6">
              {[
                ["Leadership Message", FOUNDER.message, Award],
                ["Vision", FOUNDER.vision, Factory],
                [
                  "Achievements",
                  "Founder-level practical engineering experience since 1990, company establishment in 2020, AR machine development, and long-term customer support across Pakistan.",
                  Award,
                ],
              ].map(([title, text, Icon]) => (
                <article key={String(title)} className="rounded-xl border border-border bg-light-gray p-8 shadow-sm">
                  <Icon className="h-5 w-5 text-secondary" strokeWidth={1.8} />
                  <h2 className="mt-5 font-heading text-xl font-semibold text-primary">{String(title)}</h2>
                  <p className="mt-3 text-sm leading-7 text-dark-gray">{String(text)}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
