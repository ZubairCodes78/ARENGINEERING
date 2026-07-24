import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Container from "@/components/ui/Container";
import { BLOG_POSTS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Blog | AL Raheem Engineering",
  description:
    "Industrial articles, packaging tips, and company updates from AL Raheem Engineering.",
};

export default function BlogPage() {
  return (
    <>
      <PageHeader
        label="Industrial Articles"
        title="Packaging tips and company updates"
        description="A dedicated publishing area for industrial packaging guidance, application notes, and AL Raheem Engineering updates."
        current="Blog"
      />
      <section className="bg-white py-28 lg:py-[120px]">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {BLOG_POSTS.map((post) => (
              <article key={post.title} className="rounded-xl border border-border bg-light-gray p-8 shadow-sm">
                <p className="text-sm font-semibold text-secondary">
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
