import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import FadeUp from "@/components/ui/FadeUp";
import SectionHeading from "@/components/ui/SectionHeading";
import { BLOG_POSTS } from "@/lib/constants";

export default function LatestNewsPreview() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <Container>
        <FadeUp>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              label="Latest News"
              title="Industrial articles and company updates"
              description="Short previews from packaging tips, manufacturing notes, and AL Raheem Engineering updates."
            />
            <Link
              href="/blog"
              className="inline-flex shrink-0 items-center text-sm font-semibold text-secondary hover:text-primary"
            >
              Visit blog
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </FadeUp>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {BLOG_POSTS.map((post, index) => (
            <FadeUp key={post.title} delay={index * 0.05}>
              <Link
                href={post.href}
                className="block h-full rounded-lg border border-border bg-light-gray p-6 shadow-sm transition-colors hover:border-secondary hover:bg-white"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-secondary">
                  {post.category}
                </p>
                <h3 className="mt-4 font-heading text-lg font-semibold text-primary">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-dark-gray">{post.excerpt}</p>
              </Link>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}
