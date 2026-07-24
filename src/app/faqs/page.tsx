import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Container from "@/components/ui/Container";
import { FAQS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "FAQs | AL Raheem Engineering",
  description:
    "Frequently asked questions about AL Raheem Engineering packaging machines, installation, customization, quotation, and support.",
};

export default function FaqsPage() {
  return (
    <>
      <PageHeader
        label="Frequently Asked Questions"
        title="Answers for machine buyers"
        description="Clear answers for manufacturers evaluating a new packaging machine, replacement line, or support requirement."
        current="FAQs"
      />
      <section className="bg-light-gray py-28 lg:py-[120px]">
        <Container>
          <div className="grid gap-4">
            {FAQS.map((faq) => (
              <article key={faq.question} className="rounded-xl border border-border bg-white p-8 shadow-sm">
                <h2 className="font-heading text-lg font-semibold text-primary">{faq.question}</h2>
                <p className="mt-3 text-sm leading-7 text-dark-gray">{faq.answer}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
