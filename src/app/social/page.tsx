import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Container from "@/components/ui/Container";
import SocialIcon from "@/components/SocialIcon";
import { COMPANY, SOCIAL_LINKS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Social Media | AL Raheem Engineering",
  description:
    "Connect with AL Raheem Engineering on Instagram, Facebook, YouTube, LinkedIn and X.",
  alternates: {
    canonical: "/social",
  },
  openGraph: {
    title: "Connect With AL RAHEEM ENGINEERING",
    description:
      "Follow AL Raheem Engineering on Instagram, Facebook, YouTube, LinkedIn and X.",
    url: `${COMPANY.websiteUrl}/social`,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Connect With AL RAHEEM ENGINEERING",
    description:
      "Official social media links for AL Raheem Engineering.",
  },
};

export default function SocialPage() {
  return (
    <>
      <PageHeader
        label="Social Media"
        title="Connect With AL RAHEEM ENGINEERING"
        description="Follow our official social channels for machine updates, company news, factory visuals and industrial packaging insights."
        current="Social"
      />
      <section className="bg-white py-28 lg:py-[120px]">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {SOCIAL_LINKS.map((item) => (
              <article key={item.platform} className="group rounded-2xl border border-border bg-light-gray p-7 shadow-sm transition duration-200 hover:-translate-y-1 hover:bg-white hover:shadow-[0_22px_54px_rgba(8,40,68,0.10)]">
                <div
                  className={`relative flex h-12 w-12 items-center justify-center rounded-full border border-primary/10 bg-white text-primary shadow-sm transition duration-200 group-hover:scale-[1.08] ${item.groupHoverClass}`}
                  title={item.platform}
                >
                  <SocialIcon platform={item.platform} className="h-5 w-5" />
                  <span className="pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-primary px-2.5 py-1 text-[11px] font-semibold text-white opacity-0 shadow-lg transition group-hover:opacity-100">
                    {item.platform}
                  </span>
                </div>
                <h2 className="mt-6 font-heading text-xl font-semibold text-primary">{item.platform}</h2>
                <p className="mt-3 text-sm leading-7 text-dark-gray">{item.description}</p>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.ariaLabel}
                  className={`mt-6 inline-flex items-center rounded-md border border-primary/10 bg-white px-4 py-2 text-sm font-semibold text-primary transition duration-200 hover:scale-[1.03] ${item.hoverClass}`}
                >
                  Visit Profile
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
