import { ArrowUpRight } from 'lucide-react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { SectionHeading } from '../../../components/ui/SectionHeading'
import { SafeImage } from '../../../components/ui/SafeImage'
import { galleryPreviewImages } from '../../../data/gallery'
import { useScrollReveal } from '../../../hooks/useScrollReveal'

export function GalleryPreview() {
  const sectionRef = useRef(null)
  useScrollReveal(sectionRef, { stagger: 0.05 })

  return (
    <section className="bg-white section-space" ref={sectionRef}>
      <div className="container-main">
        <SectionHeading eyebrow="Gallery" title="A glimpse into ERCON’s public project and manufacturing media.">
          <p>Images are sourced from ERCON’s current public gallery API and arranged as a responsive editorial preview.</p>
        </SectionHeading>

        <div className="mt-12 grid gap-4 lg:grid-cols-12">
          {galleryPreviewImages.slice(0, 5).map((item, index) => (
            <figure
              className={`group relative overflow-hidden rounded-[var(--radius-card)] bg-surface-dark ${
                index === 0 ? 'lg:col-span-6 lg:row-span-2' : 'lg:col-span-3'
              } ${index === 3 ? 'lg:col-span-4' : ''} ${index === 4 ? 'lg:col-span-5' : ''}`}
              data-reveal
              key={item.id}
            >
              <SafeImage
                alt={item.alt}
                className={`w-full object-cover opacity-88 transition duration-500 group-hover:scale-[1.03] ${
                  index === 0 ? 'aspect-[4/3] lg:aspect-[5/4]' : 'aspect-[4/3]'
                }`}
                height={index === 0 ? '900' : '520'}
                src={item.image}
                width={index === 0 ? '1100' : '720'}
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-surface-dark/86 to-transparent p-5 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-light">{item.category}</p>
              </figcaption>
            </figure>
          ))}

          <Link
            className="group grid min-h-56 place-items-start rounded-[var(--radius-card)] border border-line bg-surface-blue p-6 transition hover:border-brand lg:col-span-4"
            data-reveal
            to="/gallery"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">View media</p>
              <h3 className="mt-4 text-3xl font-bold leading-tight text-ink">Open the full ERCON gallery</h3>
              <span className="mt-8 inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand text-white transition group-hover:-translate-y-1">
                <ArrowUpRight aria-hidden="true" size={20} />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
