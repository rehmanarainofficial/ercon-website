import { useState, useEffect, useRef, useCallback } from 'react'
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react'
import { fetchGallery } from '../../../services/api'
import { SectionHeading } from '../../../components/ui/SectionHeading'
import { SafeImage } from '../../../components/ui/SafeImage'
import { useScrollReveal } from '../../../hooks/useScrollReveal'

export function GalleryGrid() {
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const [imagesList, setImagesList] = useState([])
  const [loading, setLoading] = useState(true)
  
  const sectionRef = useRef(null)
  useScrollReveal(sectionRef, { stagger: 0.05 })

  useEffect(() => {
    let active = true
    const loadGallery = async () => {
      try {
        setLoading(true)
        const apiImages = await fetchGallery()
        if (apiImages && apiImages.length > 0 && active) {
          setImagesList(apiImages)
        }
      } catch (err) {
        console.error('Error loading gallery api:', err)
      } finally {
        if (active) setLoading(false)
      }
    }
    loadGallery()
    return () => {
      active = false
    }
  }, [])

  // Handle Lightbox Next / Prev / Close actions
  const showPrev = useCallback((e) => {
    e?.stopPropagation()
    setLightboxIndex((prev) => (prev === 0 ? imagesList.length - 1 : prev - 1))
  }, [imagesList.length])

  const showNext = useCallback((e) => {
    e?.stopPropagation()
    setLightboxIndex((prev) => (prev === imagesList.length - 1 ? 0 : prev + 1))
  }, [imagesList.length])

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

        {/* Gallery Image Grid */}
        {loading ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((idx) => (
              <div key={idx} className="animate-pulse bg-surface-blue rounded-[var(--radius-card)] aspect-[4/3]" />
            ))}
          </div>
        ) : (
          <>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {imagesList.map((item, index) => {
                const isWider = index % 5 === 0 // 1st, 6th, etc. items span 2 columns on large viewports
                return (
                  <figure
                    key={item.id}
                    className={`group relative overflow-hidden rounded-[20px] bg-surface-dark border border-line cursor-pointer shadow-sm hover:shadow-card-hover transition-all duration-300 ${
                      isWider ? 'lg:col-span-2 aspect-[16/10]' : 'aspect-[4/3]'
                    }`}
                    onClick={() => setLightboxIndex(index)}
                    data-reveal
                  >
                    <SafeImage
                      src={item.image}
                      alt={item.alt || 'ERCON media image'}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      width={isWider ? "1080" : "720"}
                      height={isWider ? "675" : "540"}
                    />
                    
                    {/* Modern gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-dark/95 via-surface-dark/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-end p-6 text-white">
                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-light">
                        ERCON Media
                      </span>
                      <h4 className="mt-2 text-base md:text-lg font-bold leading-snug">
                        {item.alt || 'ERCON manufacturing facilities and project execution'}
                      </h4>
                      <p className="mt-1.5 text-xs text-white/60">
                        Click to expand detail view
                      </p>
                    </div>

                    {/* Expand icon badge */}
                    <div className="absolute top-4 right-4 h-9 w-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Maximize2 size={16} />
                    </div>
                  </figure>
                )
              })}
            </div>

            {/* Empty State */}
            {imagesList.length === 0 && (
              <div className="py-20 text-center text-muted">
                <p>No media files found in the database.</p>
              </div>
            )}
          </>
        )}
      </div>

      {/* Lightbox Dialog Modal */}
      {lightboxIndex !== null && imagesList[lightboxIndex] && (
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
                src={imagesList[lightboxIndex].image}
                alt={imagesList[lightboxIndex].alt || 'ERCON media image'}
                className="max-h-[70vh] w-auto max-w-full object-contain mx-auto"
                width="1200"
                height="900"
              />
            </div>
            
            {/* Image Details Caption */}
            <div className="mt-4 text-center max-w-xl text-white">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-light">
                ERCON Media
              </span>
              <p className="mt-2 text-sm text-white/80 leading-relaxed">
                {imagesList[lightboxIndex].alt || 'ERCON manufacturing facilities and project execution'}
              </p>
              <div className="mt-2 text-xs text-white/50 font-medium">
                {lightboxIndex + 1} of {imagesList.length}
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
