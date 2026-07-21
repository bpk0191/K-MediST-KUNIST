import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { PILLARS } from '@/lib/data'

export function PillarsPreview() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal">Research Pillars</p>
          <h2 className="mt-3 text-balance font-serif text-3xl font-bold text-primary sm:text-4xl">
            4대 융합 연구 분야
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            임상 난제를 해결하기 위한 네 개의 핵심 Pillar를 중심으로 의학과 공학이 유기적으로
            협력합니다.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon
            return (
              <article
                key={pillar.id}
                className="group relative flex flex-col rounded-2xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-teal/40 hover:shadow-xl hover:shadow-primary/5"
              >
                <div className="flex items-center gap-4">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground">
                    <Icon className="size-6" />
                  </div>
                  <span className="font-serif text-4xl font-bold text-border transition-colors group-hover:text-teal/30">
                    0{pillar.id}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-bold text-primary">{pillar.title}</h3>
                <p className="text-sm font-medium text-teal">{pillar.subtitle}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {pillar.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {pillar.topics.map((topic) => (
                    <span
                      key={topic}
                      className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </article>
            )
          })}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/program"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent"
          >
            공동연구 프로그램 자세히 보기
            <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
