"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export default function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const goTo = (next: number) => {
    setActive((next + images.length) % images.length);
  };

  const handleTouchEnd = (x: number) => {
    if (touchStart === null) return;
    const distance = touchStart - x;
    if (Math.abs(distance) > 42) {
      goTo(active + (distance > 0 ? 1 : -1));
    }
    setTouchStart(null);
  };

  return (
    <>
      <div className="relative">
        <div
          className="group relative mx-7 min-h-[380px] overflow-hidden rounded-2xl border border-border bg-light-gray shadow-[0_20px_54px_rgba(8,40,68,0.09)] sm:min-h-[500px] xl:min-h-[520px]"
          onTouchStart={(event) => setTouchStart(event.touches[0].clientX)}
          onTouchEnd={(event) => handleTouchEnd(event.changedTouches[0].clientX)}
        >
          <div className="absolute right-4 top-4 z-20 rounded-full border border-white/25 bg-primary/72 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur">
            {active + 1}/{images.length}
          </div>
          {images.map((image, index) => (
            <button
              key={image}
              type="button"
              onClick={() => setLightbox(true)}
              className={`absolute inset-0 transition-all duration-500 ease-out ${
                index === active
                  ? "translate-x-0 opacity-100"
                  : index < active
                    ? "-translate-x-full opacity-0"
                    : "translate-x-full opacity-0"
              }`}
              aria-label={`Open ${productName} image ${index + 1}`}
            >
              <Image
                src={image}
                alt={`${productName} image ${index + 1}`}
                fill
                priority={index === 0}
                sizes="(min-width: 1280px) 38vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.025]"
              />
              <span className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,40,68,0.01),rgba(8,40,68,0.26))]" />
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={() => goTo(active - 1)}
          className="absolute left-0 top-[190px] z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-white text-primary shadow-[0_12px_28px_rgba(8,40,68,0.12)] transition hover:-translate-x-0.5 hover:border-secondary/40 hover:text-secondary sm:top-[250px] xl:top-[260px]"
          aria-label="Previous product image"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => goTo(active + 1)}
          className="absolute right-0 top-[190px] z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-white text-primary shadow-[0_12px_28px_rgba(8,40,68,0.12)] transition hover:translate-x-0.5 hover:border-secondary/40 hover:text-secondary sm:top-[250px] xl:top-[260px]"
          aria-label="Next product image"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        <div className="mt-5 flex flex-wrap justify-center gap-4">
          {images.map((image, index) => (
            <button
              key={image}
              type="button"
              onClick={() => setActive(index)}
              className={`relative h-[110px] w-[132px] overflow-hidden rounded-2xl border bg-light-gray shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md sm:h-[128px] sm:w-[154px] ${
                active === index ? "border-secondary ring-2 ring-secondary/15" : "border-border hover:border-secondary/50"
              }`}
              aria-label={`Show ${productName} thumbnail ${index + 1}`}
            >
              <Image src={image} alt={`${productName} thumbnail ${index + 1}`} fill sizes="160px" className="object-cover transition-transform duration-500 hover:scale-105" />
            </button>
          ))}
        </div>
      </div>

      {lightbox && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-primary/92 p-5" role="dialog" aria-modal="true">
          <button
            type="button"
            onClick={() => setLightbox(false)}
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-primary"
            aria-label="Close lightbox"
          >
            <X className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => goTo(active - 1)}
            className="absolute left-5 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-primary md:flex"
            aria-label="Previous lightbox image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <div className="relative h-[72vh] w-full max-w-6xl overflow-hidden rounded-2xl bg-black">
            <Image src={images[active]} alt={`${productName} enlarged image`} fill sizes="90vw" className="object-contain" />
          </div>
          <button
            type="button"
            onClick={() => goTo(active + 1)}
            className="absolute right-5 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-primary md:flex"
            aria-label="Next lightbox image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </>
  );
}
