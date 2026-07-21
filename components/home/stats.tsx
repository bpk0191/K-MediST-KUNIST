import { HOME_STATS } from '@/lib/data'
import { AnimatedCounter } from '@/components/animated-counter'

export function Stats() {
  return (
    <section className="bg-gradient-brand">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        {HOME_STATS.map((stat) => (
          <div key={stat.label} className="text-center text-primary-foreground">
            <div className="font-serif text-4xl font-bold sm:text-5xl">
              <AnimatedCounter end={Number(stat.value)} />
              <span>{stat.suffix}</span>
            </div>
            <p className="mt-2 text-sm font-semibold">{stat.label}</p>
            <p className="mt-1 text-xs text-primary-foreground/75">{stat.detail}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
