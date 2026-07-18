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
        <h2 className="text-3xl sm:text-4xl font-extrabold text-brand mb-3 tracking-wide" data-reveal>
          Vision and mission
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {items.map((item) => {
            const Icon = item.icon
            return (
              <article
                key={item.title}
                className={`rounded-card p-6 sm:p-8 border flex flex-col justify-between transition-all duration-300 hover:shadow-card ${
                  item.isDark
                    ? 'bg-surface-dark border-transparent text-white'
                    : 'border-transparent bg-brand text-white'
                }`}
                data-reveal
              >
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                      item.isDark ? 'bg-white/10 text-white' : 'bg-white/10 text-white'
                    }`}>
                      <Icon size={20} />
                    </div>
                    <p className={`text-2xl font-bold tracking-[0.16em] ${
                      item.isDark ? 'text-white' : 'text-white/72'
                    }`}>
                      {item.title}
                    </p>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold leading-snug text-white">
                    {item.statement}
                  </h3>
                </div>

              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
