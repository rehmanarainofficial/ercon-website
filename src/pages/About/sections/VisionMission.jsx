import { useRef } from 'react'
import { Eye, Target } from 'lucide-react'
import { visionMission } from '../../../data/about'
import { useScrollReveal } from '../../../hooks/useScrollReveal'

export function VisionMission() {
  const sectionRef = useRef(null)
  useScrollReveal(sectionRef, { stagger: 0.05 })

  const items = [
    {
      ...visionMission.vision,
      icon: Eye,
      isDark: true
    },
    {
      ...visionMission.mission,
      icon: Target,
      isDark: false
    }
  ]

  return (
    <section className="bg-white section-space border-t border-line" ref={sectionRef}>
      <div className="container-main">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand" data-reveal>
          Vision and Mission
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {items.map((item) => {
            const Icon = item.icon
            return (
              <article
                key={item.title}
                className={`rounded-[var(--radius-card)] p-6 sm:p-8 border flex flex-col justify-between transition-all duration-300 hover:shadow-card ${
                  item.isDark
                    ? 'bg-surface-dark border-transparent text-white'
                    : 'border-line bg-surface-blue text-ink'
                }`}
                data-reveal
              >
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                      item.isDark ? 'bg-white/10 text-brand-light' : 'bg-brand/10 text-brand'
                    }`}>
                      <Icon size={20} />
                    </div>
                    <p className={`text-xs font-bold uppercase tracking-[0.16em] ${
                      item.isDark ? 'text-brand-light' : 'text-brand'
                    }`}>
                      {item.title}
                    </p>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black leading-snug">
                    {item.statement}
                  </h3>
                </div>

                <p className={`mt-5 text-sm leading-relaxed ${
                  item.isDark ? 'text-white/60' : 'text-muted'
                }`}>
                  {item.supportingText}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
