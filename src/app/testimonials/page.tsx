import type { Metadata } from "next";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Testimonials | AL Raheem Engineering",
  description:
    "Client testimonials for AL Raheem Engineering industrial packaging machine solutions.",
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHeader
        label="Testimonials"
        title="What Our Clients Say"
        description="Client feedback on machine support, industrial packaging solutions and long-term engineering service."
        current="Testimonials"
      />
      <TestimonialsSection />
    </>
  );
}

