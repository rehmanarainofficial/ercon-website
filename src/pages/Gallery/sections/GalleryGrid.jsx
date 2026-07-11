import { useState, useEffect, useRef, useMemo, useCallback } from 'react'
import { X, ChevronLeft, ChevronRight, Image as ImageIcon, LayoutGrid } from 'lucide-react'
import { galleryPreviewImages } from '../../../data/gallery'
import { SectionHeading } from '../../../components/ui/SectionHeading'
import { SafeImage } from '../../../components/ui/SafeImage'
import { useScrollReveal } from '../../../hooks/useScrollReveal'

export function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightboxIndex, setLightboxIndex] = useState(null)
  
  const sectionRef = useRef(null)
  useScrollReveal(sectionRef, { stagger: 0.05 })

  // Extract unique categories (first-letter capitalized)
  const categories = useMemo(() => {
    const cats = new Set(galleryPreviewImages.map((img) => img.category))
    return ['All', ...Array.from(cats)]
  }, [])

  // Filtered list of images based on active category
  const filteredImages = useMemo(() => {
    if (activeCategory === 'All') return galleryPreviewImages
    return galleryPreviewImages.filter((img) => img.category === activeCategory)
  }, [activeCategory])

  // Handle Lightbox Next / Prev / Close actions
  const showPrev = useCallback((e) => {
    e?.stopPropagation()
    setLightboxIndex((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1))
  }, [filteredImages.length])

  const showNext = useCallback((e) => {
    e?.stopPropagation()
    setLightboxIndex((prev) => (prev === filteredImages.length - 1 ? 0 : prev + 1))
  }, [filteredImages.length])

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null)
  }, [])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return
      if (e.key === 'ArrowRight') showNext()
      if (e.key === 'ArrowLeft') showPrev()
      if (e.key === 'Escape') closeLightbox()
    }
    
    if (lightboxIndex !== null) {
      window.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [lightboxIndex, showPrev, showNext, closeLightbox])

  return (
    <section className="bg-white section-space" ref={sectionRef}>
      <div className="container-main">
        {/* Page Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="Media Center"
            title="Explore our Projects, Manufacturing, and Infrastructure Facilities"
          >
            <p>
              View the real-world execution of ERCON's projects, our modern manufacturing lines, and specialized testing equipment.
            </p>
          </SectionHeading>
        </div>

        {/* Category Filters */}
        <div className="mb-10 flex flex-wrap gap-2 border-b border-line pb-6" data-reveal>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category)
                setLightboxIndex(null) // Reset lightbox context when filter changes
              }}
              className={`flex items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${
                activeCategory === category
                  ? 'bg-brand text-white shadow-md'
                  : 'bg-surface-soft text-ink hover:bg-surface-blue hover:text-brand'
              }`}
            >
              {category === 'All' ? <LayoutGrid size={16} /> : <ImageIcon size={16} />}
              <span>{category}</span>
            </button>
          ))}
        </div>

        {/* Gallery Image Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredImages.map((item, index) => (
            <figure
              key={item.id}
              className="group relative overflow-hidden rounded-[var(--radius-card)] bg-surface-dark border border-line cursor-pointer aspect-[4/3] shadow-sm hover:shadow-card transition-all duration-300"
              onClick={() => setLightboxIndex(index)}
              data-reveal
            >
              <SafeImage
                src={item.image}
                alt={item.alt}
                className="h-full w-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-[1.03]"
                width="720"
                height="540"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-dark/80 via-surface-dark/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-end p-5 text-white">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-light">
                  {item.category}
                </span>
                <p className="mt-2 text-sm leading-relaxed text-white/90">
                  {item.alt}
                </p>
              </div>
              <figcaption className="absolute top-4 left-4 bg-white/90 text-ink backdrop-blur-md px-3 py-1 text-xs font-semibold rounded-full border border-line shadow-sm">
                {item.category}
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className="py-20 text-center text-muted">
            <p>No media files found in this category.</p>
          </div>
        )}
      </div>

      {/* Lightbox Dialog Modal */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-surface-dark/95 p-4 backdrop-blur-md transition-opacity duration-300"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            className="absolute top-6 right-6 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            onClick={closeLightbox}
            aria-label="Close gallery lightbox"
          >
            <X size={24} />
          </button>

          {/* Left Arrow */}
          <button
            className="absolute left-4 md:left-8 z-10 flex h-14 w-14 items-center justify-center rounded-full bg-white/5 text-white hover:bg-white/15 border border-white/10 hover:border-white/20 transition-all"
            onClick={(e) => showPrev(e)}
            aria-label="Previous image"
          >
            <ChevronLeft size={30} />
          </button>

          {/* Image Container */}
          <div
            className="relative max-h-[80vh] max-w-[85vw] flex flex-col items-center select-none"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 shadow-floating">
              <SafeImage
                src={filteredImages[lightboxIndex].image}
                alt={filteredImages[lightboxIndex].alt}
                className="max-h-[70vh] w-auto max-w-full object-contain mx-auto"
                width="1200"
                height="900"
              />
            </div>
            
            {/* Image Details Caption */}
            <div className="mt-4 text-center max-w-xl text-white">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-light">
                {filteredImages[lightboxIndex].category}
              </span>
              <p className="mt-2 text-sm text-white/80 leading-relaxed">
                {filteredImages[lightboxIndex].alt}
              </p>
              <div className="mt-2 text-xs text-white/50 font-medium">
                {lightboxIndex + 1} of {filteredImages.length}
              </div>
            </div>
          </div>

          {/* Right Arrow */}
          <button
            className="absolute right-4 md:right-8 z-10 flex h-14 w-14 items-center justify-center rounded-full bg-white/5 text-white hover:bg-white/15 border border-white/10 hover:border-white/20 transition-all"
            onClick={(e) => showNext(e)}
            aria-label="Next image"
          >
            <ChevronRight size={30} />
          </button>
        </div>
      )}
    </section>
  )
}
