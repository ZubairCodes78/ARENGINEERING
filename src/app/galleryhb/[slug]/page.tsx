import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar } from "lucide-react";
import Container from "@/components/ui/Container";
import FadeUp from "@/components/ui/FadeUp";
import Button from "@/components/ui/Button";
import EventGalleryClient from "@/components/gallery/EventGalleryClient";
import { COMPANY, EVENTS } from "@/lib/constants";

interface EventPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return EVENTS.map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({ params }: EventPageProps): Promise<Metadata> {
  const { slug } = await params;
  const event = EVENTS.find((e) => e.slug === slug);

  if (!event) {
    return { title: "Event Not Found | AL RAHEEM ENGINEERING" };
  }

  const canonical = `/galleryhb/${event.slug}`;
  const title = `${event.title} | Life at AL RAHEEM ENGINEERING`;
  const description = event.description;

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: `${COMPANY.websiteUrl}${canonical}`,
      type: "article",
      siteName: COMPANY.name,
      locale: "en_PK",
      images: [
        {
          url: event.coverImage,
          width: 1200,
          height: 630,
          alt: event.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [event.coverImage],
    },
  };
}

export default async function EventPage({ params }: EventPageProps) {
  const { slug } = await params;
  const event = EVENTS.find((e) => e.slug === slug);

  if (!event) {
    notFound();
  }

  const images = [
    `/images/events/${event.folder}/1.png`,
    `/images/events/${event.folder}/2.jpeg`,
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.title,
    description: event.description,
    image: `${COMPANY.websiteUrl}${event.coverImage}`,
    startDate: "2026-01-15",
    location: {
      "@type": "Place",
      name: "Lahore, Pakistan",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lahore",
        addressCountry: "PK",
      },
    },
    organizer: {
      "@type": "Organization",
      name: COMPANY.name,
      url: COMPANY.websiteUrl,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
      {/* Back Button */}
      <section className="bg-white pt-8 pb-4">
        <Container>
          <Link href="/galleryhb">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Gallery
            </Button>
          </Link>
        </Container>
      </section>

      {/* Hero Image */}
      <section className="bg-white pb-16">
        <Container>
          <FadeUp>
            <div className="relative w-full h-auto overflow-hidden rounded-xl border border-border bg-light-gray mb-8">
              <Image
                src={event.coverImage}
                alt={`${event.title} - AL Raheem Engineering Company Event Lahore`}
                width={1920}
                height={1080}
                className="object-contain w-full h-auto"
                priority
                sizes="100vw"
              />
            </div>
            <div className="flex items-center gap-2 text-sm text-secondary mb-4">
              <Calendar className="h-4 w-4" />
              <span>{event.date}</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-primary mb-6 leading-tight">
              {event.title}
            </h1>
            <p className="text-lg text-dark-gray/80 max-w-3xl leading-relaxed">
              {event.description}
            </p>
          </FadeUp>
        </Container>
      </section>

      {/* Gallery Grid */}
      <section className="bg-white pb-24">
        <Container>
          <FadeUp>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-primary mb-8">
              Photo Gallery
            </h2>
          </FadeUp>
          <EventGalleryClient images={images} eventTitle={event.title} />
        </Container>
      </section>
    </>
  );
}
