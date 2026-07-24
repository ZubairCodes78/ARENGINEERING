'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight, Maximize2, Minimize2 } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface ImageViewerProps {
  images: string[]
  initialIndex?: number
  onClose: () => void
}

export default function ImageViewer({ images, initialIndex = 0, onClose }: ImageViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isZoomed, setIsZoomed] = useState(false)

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }, [images.length])

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }, [images.length])

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft') goToPrevious()
    if (e.key === 'ArrowRight') goToNext()
    if (e.key === 'Escape') onClose()
    if (e.key === 'f' || e.key === 'F') setIsFullscreen((prev) => !prev)
  }, [goToPrevious, goToNext, onClose])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
  }

  const toggleZoom = () => {
    setIsZoomed(!isZoomed)
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className={`fixed inset-0 z-50 bg-black/95 flex items-center justify-center ${
          isFullscreen ? 'p-0' : 'p-4 md:p-8'
        }`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all"
          aria-label="Close"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Navigation Buttons */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all hidden md:block"
          aria-label="Previous image"
        >
          <ChevronLeft className="h-8 w-8" />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-4 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all hidden md:block"
          aria-label="Next image"
        >
          <ChevronRight className="h-8 w-8" />
        </button>

        {/* Main Image */}
        <div className="relative w-full h-full flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: isZoomed ? 1.2 : 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-full max-w-7xl max-h-[90vh] cursor-zoom-in"
              onClick={toggleZoom}
            >
              <Image
                src={images[currentIndex]}
                alt={`Image ${currentIndex + 1}`}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Image Counter */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium">
          {currentIndex + 1} / {images.length}
        </div>

        {/* Thumbnail Strip */}
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex gap-2 max-w-[90vw] overflow-x-auto pb-2 px-2">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`relative flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                idx === currentIndex ? 'border-white' : 'border-transparent opacity-60 hover:opacity-100'
              }`}
            >
              <Image
                src={img}
                alt={`Thumbnail ${idx + 1}`}
                fill
                className="object-cover"
                sizes="64px"
              />
            </button>
          ))}
        </div>

        {/* Fullscreen Toggle */}
        <button
          onClick={toggleFullscreen}
          className="absolute top-4 left-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all"
          aria-label="Toggle fullscreen"
        >
          {isFullscreen ? (
            <Minimize2 className="h-6 w-6" />
          ) : (
            <Maximize2 className="h-6 w-6" />
          )}
        </button>

        {/* Mobile Swipe Indicators */}
        <div className="absolute bottom-4 left-4 md:hidden flex gap-1">
          {images.map((_, idx) => (
            <div
              key={idx}
              className={`w-2 h-2 rounded-full transition-all ${
                idx === currentIndex ? 'bg-white' : 'bg-white/40'
              }`}
            />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
