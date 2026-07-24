import Container from "@/components/ui/Container";
import FadeUp from "@/components/ui/FadeUp";
import SectionHeading from "@/components/ui/SectionHeading";
import { FAQS } from "@/lib/constants";

export default function FaqSection() {
  return (
    <section className="bg-light-gray py-24 lg:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <FadeUp>
            <SectionHeading
              label="FAQs"
              title="Common production questions"
              description="Clear answers for manufacturers evaluating a new packaging machine or replacement line."
            />
          </FadeUp>
          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <FadeUp key={faq.question} delay={index * 0.04}>
                <div className="rounded-lg border border-border bg-white p-6 shadow-sm">
                  <h3 className="font-heading text-base font-semibold text-primary">{faq.question}</h3>
                  <p className="mt-3 text-sm leading-7 text-dark-gray">{faq.answer}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
