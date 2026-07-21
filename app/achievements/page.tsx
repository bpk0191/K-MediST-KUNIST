import type { Metadata } from 'next'
import { FileText, Award, Users, UserPlus, Flag, Target } from 'lucide-react'
import { PageHeader } from '@/components/page-header'
import { AnimatedCounter } from '@/components/animated-counter'
import { ProgressBar } from '@/components/progress-bar'

export const metadata: Metadata = {
  title: '성과 | K-MediST',
  description:
    'K-MediST 사업단의 성과지표 로드맵, 연차별 추진현황, 논문·특허 실적, 참여인력 현황을 확인하세요.',
}

const ROADMAP = [
  {
    phase: '1단계',
    period: '1~2차년도',
    color: 'from-navy',
    goals: [
      '공동학위제 정착 및 1·2기 대학원생 선발',
      'KUNIST 공동연구소 인프라 구축 완료',
      '4대 Pillar 기반 공동연구 과제 착수',
      '글로벌 석학 네트워크 초기 구축',
    ],
  },
  {
    phase: '2단계',
    period: '3~5차년도',
    color: 'from-brand-red',
    goals: [
      '공동연구 성과의 논문·특허 본격 창출',
      '기술이전·창업 등 사업화 성과 확산',
      '국제 공동연구 및 글로벌 협력 강화',
      '자립형 융합의학 연구·교육 모델 완성',
    ],
  },
]

const ANNUAL = [
  { label: '대학원생 선발 (목표 대비)', value: 92, target: 100 },
  { label: '공동연구 과제 착수 (목표 대비)', value: 85, target: 100 },
  { label: '논문 게재 실적 (목표 대비)', value: 78, target: 100 },
  { label: '특허 출원 실적 (목표 대비)', value: 71, target: 100 },
  { label: '기술이전·사업화 (목표 대비)', value: 64, target: 100 },
]

const COUNTS = [
  { icon: FileText, end: 48, suffix: '편', label: '누적 논문 게재', detail: 'SCI(E)급 국제학술지 포함' },
  { icon: Award, end: 23, suffix: '건', label: '누적 특허 출원', detail: '국내·국제 특허 포함' },
  { icon: Users, end: 36, suffix: '명', label: '참여 대학원생', detail: '의사과학자·의과학자 과정' },
  { icon: UserPlus, end: 12, suffix: '명', label: '신규 참여 연구자', detail: '당해년도 신규 임용·합류' },
]

const PERSONNEL = [
  { label: '의사과학자(MD-PhD) 임용', value: 8, target: 12, unit: '명' },
  { label: '의과학자(PhD) 임용', value: 15, target: 20, unit: '명' },
  { label: '신규 참여 연구자', value: 12, target: 15, unit: '명' },
]

export default function AchievementsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Achievements"
        title="성과와 추진 현황"
        description="K-MediST 사업단의 단계별 목표와 달성 현황, 연구 실적을 데이터로 투명하게 공개합니다."
      />

      {/* Cumulative counts */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-primary">누적 성과 지표</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {COUNTS.map((item) => {
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
            <h2 className="font-serif text-3xl font-bold text-primary">성과지표 로드맵</h2>
          </div>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
            사업단은 2단계에 걸친 로드맵을 통해 단계적으로 목표를 달성해 나갑니다.
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

      {/* Annual progress */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-primary">연차별 추진 현황</h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
            당해년도 주요 목표 대비 달성률입니다. 스크롤 시 실제 진행률이 시각화됩니다.
          </p>
          <div className="mt-10 grid gap-8 rounded-3xl border border-border bg-card p-8 sm:p-10 lg:grid-cols-2 lg:gap-x-16">
            {ANNUAL.map((item) => (
              <ProgressBar key={item.label} label={item.label} value={item.value} target={item.target} unit="%" />
            ))}
          </div>
        </div>
      </section>

      {/* Personnel */}
      <section className="bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <Users className="size-7 text-teal" />
            <h2 className="font-serif text-3xl font-bold text-primary">참여인력 현황</h2>
          </div>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
            의사과학자·의과학자 임용 및 신규 참여자 현황을 목표 대비로 나타냅니다.
          </p>
          <div className="mt-10 grid gap-8 rounded-3xl border border-border bg-card p-8 sm:p-10 md:grid-cols-3 md:gap-x-12">
            {PERSONNEL.map((item) => (
              <ProgressBar
                key={item.label}
                label={item.label}
                value={item.value}
                target={item.target}
                unit={item.unit}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
