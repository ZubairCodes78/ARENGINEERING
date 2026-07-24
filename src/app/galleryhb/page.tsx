import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Image as ImageIcon } from "lucide-react";
import Container from "@/components/ui/Container";
import FadeUp from "@/components/ui/FadeUp";
import Button from "@/components/ui/Button";
import { EVENTS } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Life at AL RAHEEM ENGINEERING | Company Culture & Events",
  description: "Behind every machine we build is a dedicated team committed to quality, innovation, and excellence. Explore our company culture, team events, and memorable moments.",
};

export default function GalleryPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <Container className="relative py-32 lg:py-48">
          <FadeUp>
            <p className="text-sm font-semibold text-secondary mb-4 tracking-wider uppercase">
              Company Culture
            </p>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-semibold text-primary mb-6 leading-tight">
              Life at
              <br />
              <span className="text-secondary">AL RAHEEM ENGINEERING</span>
            </h1>
            <p className="text-lg md:text-xl text-dark-gray/80 max-w-2xl leading-relaxed">
              Behind every machine we build is a dedicated team committed to quality, innovation, and excellence.
            </p>
          </FadeUp>
        </Container>
      </section>

      {/* Events Grid */}
      <section className="bg-white py-24 lg:py-32">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {EVENTS.map((event, index) => (
              <FadeUp key={event.slug} delay={index * 0.1}>
                <Link href={`/galleryhb/${event.slug}`} className="group block">
                  <div className="relative w-full h-auto min-h-[300px] overflow-hidden rounded-xl border border-border bg-light-gray mb-6">
                    <Image
                      src={event.coverImage}
                      alt={event.title}
                      width={1200}
                      height={630}
                      className="object-contain w-full h-auto transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-secondary mb-3">
                    <Calendar className="h-4 w-4" />
                    <span>{event.date}</span>
                  </div>
                  
                  <h3 className="font-heading text-xl font-semibold text-primary mb-3 group-hover:text-secondary transition-colors">
                    {event.title}
                  </h3>
                  
                  <p className="text-base text-dark-gray/70 leading-relaxed mb-4">
                    {event.description}
                  </p>
                  
                  <div className="flex items-center text-sm font-semibold text-secondary group-hover:text-primary transition-colors">
                    View Memories
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="bg-light-gray py-24 lg:py-32">
        <Container>
          <FadeUp>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-heading text-4xl md:text-5xl font-semibold text-primary mb-6">
                Join Our Team
              </h2>
              <p className="text-lg text-dark-gray/80 mb-8 leading-relaxed">
                Be part of a team that builds precision packaging machines for industries across Pakistan.
              </p>
              <Button href="/contact" variant="primary">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </FadeUp>
        </Container>
      </section>
    </>
  );
}
