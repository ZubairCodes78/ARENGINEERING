'use client'

import { useState, use } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Calendar } from 'lucide-react'
import Container from '@/components/ui/Container'
import FadeUp from '@/components/ui/FadeUp'
import Button from '@/components/ui/Button'
import ImageViewer from '@/components/gallery/ImageViewer'
import { EVENTS } from '@/lib/constants'

export default function EventPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const event = EVENTS.find((e) => e.slug === slug)

  if (!event) {
    return null
  }

  const images = [
    `/images/events/${event.folder}/1.png`,
    `/images/events/${event.folder}/2.jpeg`,
  ]

  const [viewerOpen, setViewerOpen] = useState(false)
  const [initialIndex, setInitialIndex] = useState(0)

  return (
    <>
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
                alt={event.title}
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {images.map((img, index) => (
              <FadeUp key={index} delay={index * 0.1}>
                <div 
                  className="relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl border border-border bg-light-gray group cursor-pointer"
                  onClick={() => {
                    setInitialIndex(index)
                    setViewerOpen(true)
                  }}
                >
                  <Image
                    src={img}
                    alt={`${event.title} - Photo ${index + 1}`}
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
        </Container>
      </section>

      {/* Image Viewer Modal */}
      {viewerOpen && (
        <ImageViewer
          images={images}
          initialIndex={initialIndex}
          onClose={() => setViewerOpen(false)}
        />
      )}
    </>
  )
}
