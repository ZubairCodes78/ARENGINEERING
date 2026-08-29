import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Container from "@/components/ui/Container";
import { COMPANY, FAQS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Packaging Machinery FAQs Pakistan | AL RAHEEM ENGINEERING",
  description:
    "Frequently asked questions about industrial packaging machines in Pakistan. Learn about machine types, manufacturing in Lahore, installation, speed capabilities, and quotations.",
  keywords: [
    "Packaging Machine FAQs Pakistan",
    "Packaging Machine Manufacturer Pakistan",
    "packaging machine price Pakistan",
    "flow wrap machine questions",
    "packaging machinery buying guide Pakistan",
    "AL Raheem Engineering FAQs",
  ],
  alternates: {
    canonical: "/faqs",
  },
  openGraph: {
    title: "Packaging Machinery FAQs Pakistan | AL RAHEEM ENGINEERING",
    description:
      "Clear answers for manufacturers evaluating a new packaging machine, factory installation, film compatibility, or maintenance support in Pakistan.",
    url: `${COMPANY.websiteUrl}/faqs`,
    type: "website",
    siteName: COMPANY.name,
    locale: "en_PK",
  },
  twitter: {
    card: "summary_large_image",
    title: "Packaging Machinery FAQs Pakistan | AL RAHEEM ENGINEERING",
    description:
      "Answers to top industrial packaging machinery questions from AL Raheem Engineering in Pakistan.",
  },
};

export default function FaqsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${COMPANY.websiteUrl}/faqs#faqs`,
    name: "Industrial Packaging Machine Frequently Asked Questions",
    url: `${COMPANY.websiteUrl}/faqs`,
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
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
        label="Frequently Asked Questions"
        title="Answers for machine buyers"
        description="Clear, factual answers for manufacturers evaluating a new packaging machine, replacement line, custom build, or technical support requirement in Pakistan."
        current="FAQs"
      />
      <section className="bg-light-gray py-28 lg:py-[120px]">
        <Container>
          <div className="grid gap-6">
            {FAQS.map((faq) => (
              <article key={faq.question} className="rounded-2xl border border-border bg-white p-8 shadow-sm">
                <h2 className="font-heading text-xl font-semibold text-primary">{faq.question}</h2>
                <p className="mt-4 text-base leading-8 text-dark-gray">{faq.answer}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
