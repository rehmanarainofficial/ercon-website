import { useRef } from 'react'
import { Globe, Factory, Cpu, ShieldCheck } from 'lucide-react'
import { SectionHeading } from '../../../components/ui/SectionHeading'
import { whyErcon } from '../../../data/whyErcon'
import { useScrollReveal } from '../../../hooks/useScrollReveal'

const icons = [Globe, Factory, Cpu, ShieldCheck]

export function WhyErcon() {
  const sectionRef = useRef(null)
  useScrollReveal(sectionRef, { stagger: 0.07 })

  return (
    <section className="bg-white section-space border-t border-line" ref={sectionRef}>
      <div className="container-main">
        {/* Full-width Section Heading */}
        <SectionHeading
          eyebrow="Why ERCON"
          title="Engineered for Reliability"
          className="mb-12"
        >
          <p>
            Partnering with a leader in custom electrical systems means choosing certified quality, 
            group-wide engineering expertise, and reliable local delivery.
          </p>
        </SectionHeading>

        {/* 3-Column Card Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyErcon.map((item, index) => {
            const Icon = icons[index]
            const stepNum = String(index + 1).padStart(2, '0')
            return (
              <article
                key={item.id}
                className="group relative flex flex-col justify-between rounded-[var(--radius-card)] border border-line bg-surface-soft p-6 shadow-sm transition-all duration-300 hover:border-brand/40 hover:bg-white hover:shadow-card"
                data-reveal
              >
                <div>
                  {/* Step Number in Corner */}
                  <div className="absolute top-4 right-6 text-5xl font-black text-ink/5 select-none transition-colors duration-300 group-hover:text-brand/8">
                    {stepNum}
                  </div>

                  {/* Icon Container */}
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand mb-5 transition-transform duration-300 group-hover:scale-105">
                    <Icon size={22} />
                  </div>

                  <h3 className="text-lg font-bold leading-snug text-ink transition-colors duration-300 group-hover:text-brand">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>

                {/* Accent bottom line */}
                <div className="mt-6 h-1 w-0 bg-brand rounded-full transition-all duration-300 group-hover:w-12" />
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

