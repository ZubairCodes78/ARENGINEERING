import type { Metadata } from "next";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import PageHeader from "@/components/PageHeader";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Client Testimonials & Reviews | Packaging Machinery Pakistan",
  description:
    "Read industrial client reviews and feedback on AL Raheem Engineering packaging machines from food, confectionery, bakery, and FMCG manufacturers across Pakistan.",
  keywords: [
    "AL Raheem Engineering reviews",
    "packaging machine testimonials Pakistan",
    "Packaging Machine Manufacturer Pakistan",
    "industrial packaging machine clients Pakistan",
  ],
  alternates: {
    canonical: "/testimonials",
  },
  openGraph: {
    title: "Client Testimonials & Reviews | Packaging Machinery Pakistan",
    description:
      "Client feedback on machine reliability, sealing quality, and after-sales engineering support across Pakistan.",
    url: `${COMPANY.websiteUrl}/testimonials`,
    type: "website",
    siteName: COMPANY.name,
    locale: "en_PK",
  },
  twitter: {
    card: "summary_large_image",
    title: "Client Testimonials | AL RAHEEM ENGINEERING Pakistan",
    description:
      "Feedback from confectionery, bakery, and FMCG packaging manufacturers across Pakistan.",
  },
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHeader
        label="Testimonials"
        title="What Our Clients Say"
        description="Client feedback on machine support, industrial packaging solutions and long-term engineering service across Pakistan."
        current="Testimonials"
      />
      <TestimonialsSection />
    </>
  );
}
