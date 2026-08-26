import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Container from "@/components/ui/Container";
import { BLOG_POSTS, COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Industrial Packaging Articles & Guides | AL RAHEEM ENGINEERING",
  description:
    "Industrial articles, machinery buying guides, packaging tips, and engineering updates from AL Raheem Engineering in Lahore, Pakistan.",
  keywords: [
    "packaging machine buying guide",
    "industrial packaging articles Pakistan",
    "how to choose a packaging machine",
    "flow wrap machine guide",
    "packaging tips Pakistan",
  ],
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Industrial Packaging Articles & Guides | AL RAHEEM ENGINEERING",
    description:
      "Practical guidance on packaging machinery selection, film handling, and factory maintenance from Lahore, Pakistan.",
    url: `${COMPANY.websiteUrl}/blog`,
    type: "website",
    siteName: COMPANY.name,
    locale: "en_PK",
  },
  twitter: {
    card: "summary_large_image",
    title: "Packaging Articles & Guides | AL RAHEEM ENGINEERING",
    description:
      "Expert industrial packaging guidance and technical articles from AL Raheem Engineering.",
  },
};

export default function BlogPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${COMPANY.websiteUrl}/blog#blog`,
    name: "AL RAHEEM ENGINEERING Industrial Articles & Packaging Guides",
    description:
      "Packaging machinery selection guides, industrial articles, and company updates.",
    url: `${COMPANY.websiteUrl}/blog`,
    blogPost: BLOG_POSTS.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      articleSection: post.category,
      publisher: {
        "@type": "Organization",
        name: COMPANY.name,
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
        label="Industrial Articles"
        title="Packaging tips and company updates"
        description="A dedicated publishing area for industrial packaging guidance, machine selection advice, and AL Raheem Engineering updates."
        current="Blog"
      />
      <section className="bg-white py-28 lg:py-[120px]">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {BLOG_POSTS.map((post) => (
              <article key={post.title} className="rounded-2xl border border-border bg-light-gray p-8 shadow-sm transition hover:border-secondary/35 hover:bg-white hover:shadow-[0_16px_40px_rgba(8,40,68,0.06)]">
                <p className="text-xs font-semibold uppercase tracking-wider text-secondary">
                  {post.category}
                </p>
                <h2 className="mt-4 font-heading text-xl font-semibold text-primary">{post.title}</h2>
                <p className="mt-3 text-sm leading-7 text-dark-gray">{post.excerpt}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
