"use client";

import { useState } from "react";
import Image from "next/image";
import FadeUp from "@/components/ui/FadeUp";
import ImageViewer from "@/components/gallery/ImageViewer";

interface EventGalleryClientProps {
  images: string[];
  eventTitle: string;
}

export default function EventGalleryClient({ images, eventTitle }: EventGalleryClientProps) {
  const [viewerOpen, setViewerOpen] = useState(false);
  const [initialIndex, setInitialIndex] = useState(0);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {images.map((img, index) => (
          <FadeUp key={index} delay={index * 0.1}>
            <div
              className="relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl border border-border bg-light-gray group cursor-pointer"
              onClick={() => {
                setInitialIndex(index);
                setViewerOpen(true);
              }}
            >
              <Image
                src={img}
                alt={`${eventTitle} - Photo ${index + 1} - AL Raheem Engineering`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <span className="text-white font-medium">View</span>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>

      {viewerOpen && (
        <ImageViewer
          images={images}
          initialIndex={initialIndex}
          onClose={() => setViewerOpen(false)}
        />
      )}
    </>
  );
}
