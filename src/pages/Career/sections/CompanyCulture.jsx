import { useRef } from 'react'
import { Shield, Zap, TrendingUp, Users } from 'lucide-react'
import { SectionHeading } from '../../../components/ui/SectionHeading'
import { useScrollReveal } from '../../../hooks/useScrollReveal'

const pillars = [
  {
    id: 'safety',
    title: 'Safety & Quality First',
    description: 'We prioritize a secure workspace for our manufacturing staff and deliver high reliability in our switchgear systems.',
    icon: Shield,
  },
  {
    id: 'innovation',
    title: 'Engineering Innovation',
    description: 'We encourage our engineers to design and fabricate smart solutions, adopting modern industry standards.',
    icon: Zap,
  },
  {
    id: 'growth',
    title: 'Career Progression',
    description: 'We invest in our people, providing technical training, hands-on factory experience, and clear leadership paths.',
    icon: TrendingUp,
  },
  {
    id: 'collaboration',
    title: 'One-Team Culture',
    description: 'We leverage the combined expertise of our local teams and the broader ERCON Group heritage across the GCC.',
    icon: Users,
  },
]

export function CompanyCulture() {
  const sectionRef = useRef(null)
  useScrollReveal(sectionRef, { stagger: 0.05 })

  return (
    <section className="bg-white section-space" ref={sectionRef}>
      <div className="container-main">
        <SectionHeading
          eyebrow="Our Culture"
          title="Why Build Your Career at ERCON?"
          className="mb-12"
        >
          <p>
            At ERCON Industries, we believe our engineering expertise is our greatest asset. 
            We offer a collaborative, safe, and challenging environment where professionals can thrive.
          </p>
        </SectionHeading>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map(({ description, icon: Icon, id, title }) => (
            <article
              key={id}
              className="rounded-[var(--radius-card)] border border-line bg-surface-soft p-6 shadow-sm transition-all duration-300 hover:border-brand/40 hover:-translate-y-1"
              data-reveal
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/10 text-brand mb-6">
                <Icon aria-hidden="true" size={24} />
              </div>
              <h3 className="text-xl font-bold leading-tight text-ink">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-muted">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
