"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import FadeUp from "@/components/ui/FadeUp";
import { COMPANY } from "@/lib/constants";

const slides = [
  {
    src: "/images/hero-flow-wrap.png",
    alt: "AL Raheem Engineering - Flow Wrap Packaging Machine",
  },
  {
    src: "/images/hero-candy-packing.png",
    alt: "AL Raheem Engineering - High Speed Candy Packing Machine",
  },
  {
    src: "/images/hero-pouch-line.png",
    alt: "AL Raheem Engineering - Pouch Packaging Production Line",
  },
];

export default function Hero() {
  const [active, setActive] = useState(0);
  const [loadedIndices, setLoadedIndices] = useState<number[]>([0]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((prev) => {
        const next = (prev + 1) % slides.length;
        setLoadedIndices((current) =>
          current.includes(next) ? current : [...current, next]
        );
        return next;
      });
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  const handleSlideSelect = (index: number) => {
    setLoadedIndices((current) =>
      current.includes(index) ? current : [...current, index]
    );
    setActive(index);
  };

  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-primary">
      {slides.map((slide, index) => {
        // Strictly only render slide 0 on initial load; render subsequent slides only when needed
        if (!loadedIndices.includes(index)) {
          return null;
        }

        return (
          <div
            key={slide.src}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{ opacity: active === index ? 1 : 0 }}
            aria-hidden={active !== index}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={index === 0}
              loading={index === 0 ? "eager" : "lazy"}
              sizes="100vw"
              quality={85}
              className="object-cover object-center"
            />
          </div>
        );
      })}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,18,31,0.42)_0%,rgba(4,18,31,0.76)_58%,rgba(4,18,31,0.86)_100%)]" />
      <div className="absolute inset-0 bg-primary/24" />

      <Container className="relative flex min-h-[90vh] items-center justify-center pb-20 pt-36 lg:pt-40">
        <FadeUp className="w-full">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-sm font-semibold tracking-[0.02em] text-secondary">
              Industrial packaging machines and processing systems
            </p>
            <h1 className="mx-auto mt-6 max-w-5xl font-heading text-5xl font-semibold leading-[1.02] text-white sm:text-6xl lg:text-7xl">
              {COMPANY.name}
            </h1>
            <p className="mt-5 font-heading text-2xl font-medium text-white/86 sm:text-3xl">
              Industrial Packaging Machines Manufacturer
            </p>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/76">
              Reliable Packaging Solutions Engineered for Precision, Performance and Long-Term
              Industrial Use.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-4 px-5 sm:px-0">
              <Button 
                href="/machines" 
                variant="primary"
                className="w-full sm:w-auto max-w-[340px] h-[56px] rounded-[16px] text-base font-semibold sm:rounded-md sm:px-5 sm:py-2.5 sm:text-sm"
              >
                Explore Machines
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                href="/contact" 
                variant="outline-light"
                className="w-full sm:w-auto max-w-[340px] h-[56px] rounded-[16px] text-base font-semibold sm:rounded-md sm:px-5 sm:py-2.5 sm:text-sm"
              >
                Request Quote
              </Button>
            </div>
          </div>
        </FadeUp>
      </Container>

      <div className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 gap-3">
        {slides.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            className={`h-1.5 rounded-full transition-all ${active === index ? "w-10 bg-white" : "w-2.5 bg-white/45"}`}
            onClick={() => handleSlideSelect(index)}
            aria-label={`Show hero slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
