import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import FadeUp from "@/components/ui/FadeUp";
import { FOUNDER } from "@/lib/constants";

interface FounderPremiumProps {
  preview?: boolean;
}

export default function FounderPremium({ preview = false }: FounderPremiumProps) {
  const paragraphs = preview ? FOUNDER.story.slice(0, 3) : FOUNDER.story;

  return (
    <section className="bg-white py-28 lg:py-[120px]">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
          <FadeUp>
            <div className="relative mx-auto max-w-md lg:mx-0">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-border bg-light-gray shadow-sm">
                <Image
                  src="/images/Founder.jpeg"
                  alt={FOUNDER.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.08}>
            <p className="text-sm font-semibold text-secondary">Meet Our Founder</p>
            <h2 className="mt-4 font-heading text-4xl font-semibold text-primary sm:text-5xl">
              {FOUNDER.name}
            </h2>
            <p className="mt-4 font-heading text-xl font-semibold text-primary/82">
              {FOUNDER.experience}
            </p>

            <div className="mt-8 space-y-4 text-base leading-8 text-dark-gray">
              {paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-9 grid gap-3 sm:grid-cols-2">
              {FOUNDER.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="rounded-xl border border-border bg-light-gray px-5 py-4 text-sm font-semibold text-primary"
                >
                  {highlight}
                </div>
              ))}
            </div>

            <figure className="mt-9 border-l-2 border-secondary pl-6">
              <blockquote className="font-heading text-xl font-semibold leading-8 text-primary">
                &ldquo;{FOUNDER.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-dark-gray">
                — Abdul Sattar
              </figcaption>
            </figure>

            {preview && (
              <Link
                href="/about"
                className="mt-9 inline-flex items-center rounded-md border border-primary/15 bg-white px-5 py-3 text-sm font-semibold text-primary transition hover:border-secondary hover:text-secondary"
              >
                Read Our Story
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            )}
          </FadeUp>
        </div>
      </Container>
    </section>
  );
}
