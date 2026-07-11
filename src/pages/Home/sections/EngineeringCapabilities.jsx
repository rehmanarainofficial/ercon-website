import { useRef } from 'react'
import { ImageReveal } from '../../../components/animation/ImageReveal'
import { GlassCard } from '../../../components/ui/GlassCard'
import { SectionHeading } from '../../../components/ui/SectionHeading'
import { SafeImage } from '../../../components/ui/SafeImage'
import { capabilities } from '../../../data/capabilities'
import { media } from '../../../data/home'
import { useScrollReveal } from '../../../hooks/useScrollReveal'

export function EngineeringCapabilities() {
  const sectionRef = useRef(null)
  useScrollReveal(sectionRef, { stagger: 0.05 })

  return (
    <section className="relative overflow-hidden bg-surface-dark text-white section-space" ref={sectionRef}>
      <div className="absolute inset-0 technical-grid opacity-20" />
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-brand/18 blur-3xl" />
      <div className="container-main relative">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.82fr)_minmax(360px,0.58fr)] lg:items-start">
          <div>
            <SectionHeading
              bodyClassName="text-white/68"
              eyebrowClassName="text-brand-light"
              headingClassName="text-white"
              eyebrow="Engineering and manufacturing"
              title="Built around electrical systems that need to perform reliably."
            >
              <p>
                ERCON’s public material highlights LV/MV switchgear, power distribution systems, solar energy solutions,
                cable management, and precision sheet metal fabrication.
              </p>
            </SectionHeading>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {capabilities.map(({ description, icon: Icon, id, title }) => (
                <GlassCard className="p-5 shadow-none" data-reveal key={id}>
                  <div className="mb-5 grid h-11 w-11 place-items-center rounded-2xl bg-white/12 text-brand-light">
                    <Icon aria-hidden="true" size={22} />
                  </div>
                  <h3 className="text-xl font-bold leading-tight text-white">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/66">{description}</p>
                </GlassCard>
              ))}
            </div>
          </div>

          <div data-reveal className="lg:sticky lg:top-28">
            <ImageReveal className="bg-surface-dark-2">
              <SafeImage
                alt="ERCON production and electrical solutions visual"
                className="aspect-[4/5] h-full w-full object-cover"
                height="900"
                src={media.process}
                width="720"
              />
            </ImageReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
