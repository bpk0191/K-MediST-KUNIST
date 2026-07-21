import Link from 'next/link'
import { GraduationCap, FlaskConical, Rocket, Globe } from 'lucide-react'

const PROGRAMS = [
  {
    icon: GraduationCap,
    title: '공동 학위제',
    description: '고려대 의대와 UNIST가 공동으로 운영하는 MD-PhD·PhD 학위 과정으로 융합형 커리큘럼을 제공합니다.',
    href: '/program#degree',
  },
  {
    icon: FlaskConical,
    title: '공동연구',
    description: '4대 Pillar를 중심으로 양 기관 연구진이 함께 임상 난제 해결을 위한 융합연구를 수행합니다.',
    href: '/program#research',
  },
  {
    icon: Rocket,
    title: '기술사업화',
    description: '특허·기술이전·창업까지 연구 성과가 실제 가치로 이어지도록 전 주기를 지원합니다.',
    href: '/program#tech',
  },
  {
    icon: Globe,
    title: '글로벌 석학 프로그램',
    description: '국내외 저명 석학의 멘토링과 국제 공동연구를 통해 글로벌 연구 네트워크를 형성합니다.',
    href: '/program#global',
  },
]

export function ProgramOverview() {
  return (
    <section className="bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal">Program</p>
          <h2 className="mt-3 text-balance font-serif text-3xl font-bold text-primary sm:text-4xl">
            학위부터 사업화까지, 하나의 여정
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            K-MediST는 교육·연구·사업화를 유기적으로 연결하여 의사과학자의 성장을 전 주기적으로
            지원합니다.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PROGRAMS.map((program) => {
            const Icon = program.icon
            return (
              <Link
                key={program.title}
                href={program.href}
                className="group flex flex-col rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex size-12 items-center justify-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-gradient-brand group-hover:text-primary-foreground">
                  <Icon className="size-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-primary">{program.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {program.description}
                </p>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
