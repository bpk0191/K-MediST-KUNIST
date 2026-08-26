import type { Metadata } from 'next'
import { FileText, Award, Users, GraduationCap, Flag, Target, CalendarClock } from 'lucide-react'
import { PageHeader } from '@/components/page-header'
import { AnimatedCounter } from '@/components/animated-counter'

export const metadata: Metadata = {
  title: '성과 목표 | K-MediST',
  description:
    'K-MediST 사업단이 2026~2030년 5개년에 걸쳐 달성해 나갈 목표 지표와 단계별·연차별 추진 계획을 안내합니다.',
}

// 아래 수치는 모두 연구개발계획서상 "5개년 최종 목표"이며, 실제 달성 실적이 아닙니다.
// 사업 진행에 따라 실제 달성 현황으로 점진적으로 교체해주세요.
const GOALS = [
  { icon: FileText, end: 18, suffix: '편', label: '논문 게재 목표', detail: 'JCR 상위 10% 이내 SCI(E)급 (5년 누적)' },
  { icon: Award, end: 20, suffix: '건', label: '특허 출원 목표', detail: '등록 목표 5건 (국내·국제 포함)' },
  { icon: Users, end: 80, suffix: '명', label: '참여자 목표', detail: '의사과학자 16명 · 의과학자 64명 (누적)' },
  { icon: GraduationCap, end: 12, suffix: '명', label: '전임교원 임용 목표', detail: 'MD-PhD 4명 · PhD 8명' },
]

const ROADMAP = [
  {
    phase: '1단계',
    period: '1~2차년도 (2026~2027)',
    color: 'from-navy',
    goals: [
      '공동학위 운영체계 구축 및 1·2기 참여자 모집 (20명 이상)',
      'KUNIST 공동연구소 출범 및 핵심 인프라 구축',
      '4대 Pillar 기반 Seed 연구 과제 착수 (누적 20건)',
      '글로벌 석학 네트워크 초기 구축, 특허 출원 2건',
    ],
  },
  {
    phase: '2단계',
    period: '3~5차년도 (2028~2030)',
    color: 'from-brand-red',
    goals: [
      '참여자 누적 80명, 전임교원 12명 임용 완료',
      '공동연구 과제 누적 60건 수행, 첨단 장비 가동률 60%',
      'SCI(E) 상위 10% 논문 18편, 특허 출원 20건(등록 5건)',
      '기술이전·창업 등 사업화 성과 확산 및 자립 운영체계 완성',
    ],
  },
]

const ANNUAL = [
  {
    year: '1차년도 (2026)',
    status: '진행중',
    items: ['공동학위 운영체계·협약 체결', 'KUNIST 공동연구소 출범 준비', 'Pillar별 시범 과제 기획, 착수 6건'],
  },
  {
    year: '2차년도 (2027)',
    status: '예정',
    items: ['신규 참여자 20명 모집', 'Seed 연구 15건 수행', '공동연구 누적 20건, 특허 출원 2건'],
  },
  {
    year: '3차년도 (2028)',
    status: '예정',
    items: ['첨단 장비 가동률 50% 달성', '공동연구 누적 40건', 'SCI(E) 상위 10% 논문 4편, 특허 누적 6건'],
  },
  {
    year: '4차년도 (2029)',
    status: '예정',
    items: ['공동연구 누적 50건', '논문 누적 10편, 특허 누적 13건', '기술이전 1건 이상 달성'],
  },
  {
    year: '5차년도 (2030)',
    status: '예정',
    items: ['공동연구 누적 60건 완료', '논문 최종 18편, 특허 출원 누적 20건(등록 5건)', '장비 가동률 60%, 자립 운영체계 완성'],
  },
]

const PERSONNEL_GOALS = [
  { label: '의사과학자(MD-PhD) 전임교원', target: 4, unit: '명', detail: '2단계(3~5차년도) 중 임용' },
  { label: '의과학자(PhD) 전임교원', target: 8, unit: '명', detail: '2단계(3~5차년도) 중 임용' },
  { label: '5개년 신규 참여자 누적', target: 80, unit: '명', detail: '1단계 20명 + 2단계 60명' },
]

export default function AchievementsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Achievements"
        title="성과 목표와 추진 로드맵"
        description="K-MediST 사업단은 2026년 1차년도 사업을 시작했습니다. 아래는 2030년까지 5개년에 걸쳐 달성해 나갈 목표 지표와 단계별 추진 계획입니다."
      />

      {/* 5-year targets */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            <h2 className="font-serif text-3xl font-bold text-primary">5개년(2026~2030) 목표 지표</h2>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            아래 수치는 사업 종료 시점(2030년) 달성을 목표로 하는 지표이며, 현재까지의 달성 실적이 아닙니다.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {GOALS.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.label} className="rounded-2xl border border-border bg-card p-7">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground">
                    <Icon className="size-6" />
                  </div>
                  <div className="mt-5 font-serif text-4xl font-bold text-primary">
                    <AnimatedCounter end={item.end} />
                    <span className="text-2xl">{item.suffix}</span>
                  </div>
                  <p className="mt-2 font-semibold text-primary">{item.label}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{item.detail}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <Flag className="size-7 text-teal" />
            <h2 className="font-serif text-3xl font-bold text-primary">단계별 추진 목표</h2>
          </div>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
            사업단은 2단계에 걸친 로드맵을 통해 단계적으로 목표를 달성해 나갈 계획입니다.
          </p>
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {ROADMAP.map((stage) => (
              <div key={stage.phase} className="relative overflow-hidden rounded-3xl border border-border bg-card p-8">
                <div className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${stage.color} to-teal`} />
                <div className="flex items-baseline gap-3">
                  <span className="font-serif text-3xl font-bold text-gradient-brand">{stage.phase}</span>
                  <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-teal">
                    {stage.period}
                  </span>
                </div>
                <ul className="mt-6 space-y-4">
                  {stage.goals.map((goal) => (
                    <li key={goal} className="flex items-start gap-3">
                      <Target className="mt-0.5 size-5 shrink-0 text-accent" />
                      <span className="text-sm leading-relaxed text-foreground">{goal}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Annual roadmap (no fabricated progress %) */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <CalendarClock className="size-7 text-teal" />
            <h2 className="font-serif text-3xl font-bold text-primary">연차별 핵심 목표</h2>
          </div>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
            연차별 주요 추진 계획입니다. 1차년도(2026년)는 현재 진행 중이며, 이후 연차는 계획서 상의 예정 목표입니다.
          </p>
          <ol className="mt-12 space-y-8 border-l-2 border-border pl-8">
            {ANNUAL.map((row) => (
              <li key={row.year} className="relative">
                <span
                  className={`absolute -left-[41px] flex size-5 items-center justify-center rounded-full border-4 border-background ${
                    row.status === '진행중' ? 'bg-gradient-brand' : 'bg-border'
                  }`}
                />
                <div className="flex flex-wrap items-baseline gap-3">
                  <span className="font-serif text-xl font-bold text-primary">{row.year}</span>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      row.status === '진행중' ? 'bg-gradient-brand text-primary-foreground' : 'bg-secondary text-teal'
                    }`}
                  >
                    {row.status}
                  </span>
                </div>
                <ul className="mt-3 space-y-1.5">
                  {row.items.map((item) => (
                    <li key={item} className="text-sm leading-relaxed text-muted-foreground">
                      · {item}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Personnel goals (targets only, no fabricated current count) */}
      <section className="bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <Users className="size-7 text-teal" />
            <h2 className="font-serif text-3xl font-bold text-primary">교원 임용 목표</h2>
          </div>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
            2단계(3~5차년도) 기간 중 4개 중점 연구분야에 전략적으로 배치될 전임교원 임용 목표입니다.
          </p>
          <div className="mt-10 grid gap-6 rounded-3xl border border-border bg-card p-8 sm:p-10 md:grid-cols-3 md:gap-x-8">
            {PERSONNEL_GOALS.map((item) => (
              <div key={item.label} className="rounded-2xl bg-secondary/50 p-6 text-center">
                <p className="font-serif text-3xl font-bold text-primary">
                  {item.target}
                  <span className="text-lg">{item.unit}</span>
                </p>
                <p className="mt-2 text-sm font-semibold text-primary">{item.label}</p>
                <p className="mt-1 text-xs text-muted-foreground">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
