import type { Metadata } from 'next'
import Image from 'next/image'
import { Target, Compass, Handshake, Building2, Microscope, Users2 } from 'lucide-react'
import { PageHeader } from '@/components/page-header'

export const metadata: Metadata = {
  title: '사업단 소개 | K-MediST',
  description:
    'K-MediST 사업단의 소개, Vision & Mission, 연혁, 참여기관 및 조직 구성을 안내합니다.',
}

// TODO: 실제 진행 상황에 맞춰 문구를 계속 업데이트해주세요. (마지막 항목이 "진행중" 단계입니다)
const HISTORY = [
  {
    year: '2025.05',
    title: '미래 국가전략기술 공동연구 MOU 체결',
    desc: '고려대학교와 UNIST가 AI·바이오 등 핵심 전략분야의 공동연구·교육협력을 위한 업무협약을 체결했습니다.',
  },
  {
    year: '2026 (1차년도, 진행중)',
    title: 'K-MediST 지원사업 선정 및 사업단 출범 준비',
    desc: '공동학위운영위원회·교육과정혁신위원회 구성, 양교 세부 협약 체결, KUNIST 공동연구소(메디사이언스 파크) 출범을 위한 인프라 구축을 진행하고 있습니다.',
  },
  {
    year: '2027 (2차년도, 예정)',
    title: '공동학위 과정 운영 활성화',
    desc: '참여 교수진 임용을 시작하고, 의사과학자·의과학자 신규 참여자를 모집하여 Dual-PI 멘토링과 융합교과목 운영을 본격화할 예정입니다.',
  },
  {
    year: '2028~2030 (2단계, 예정)',
    title: '연구 성과 확산 및 자립 운영 체계 완성',
    desc: '4대 Pillar 공동연구 확대, 전임교원 임용, 논문·특허 성과 창출을 거쳐 사업 종료 후에도 지속 가능한 자립형 융합의학 연구·교육 모델을 완성할 계획입니다.',
  },
]

const VALUES = [
  {
    icon: Target,
    title: 'Mission',
    text: '임상 현장의 난제를 과학기술로 해결하는 세계적 수준의 의사과학자·의과학자를 양성하고, 융합연구를 통해 인류 건강 증진에 기여한다.',
  },
  {
    icon: Compass,
    title: 'Vision',
    text: '의학과 첨단과학이 융합하는 미래 의학 생태계를 선도하는 글로벌 융합의학 연구·교육 허브로 도약한다.',
  },
  {
    icon: Handshake,
    title: 'Value',
    text: '개방과 협력, 도전과 혁신의 가치를 바탕으로 연구·교육·사업화가 선순환하는 지속가능한 성장 모델을 실현한다.',
  },
]

const ORGS = [
  {
    icon: Building2,
    name: '고려대학교 의과대학',
    role: '임상 연구 및 의학교육 총괄',
    detail: '풍부한 임상 데이터와 의료 인프라, 우수한 의료진을 기반으로 임상 중심 연구를 주도합니다.',
  },
  {
    icon: Microscope,
    name: 'UNIST',
    role: '첨단 과학기술 연구 총괄',
    detail: 'AI·바이오공학·로보틱스 등 첨단 이공계 역량으로 융합연구의 기술적 기반을 제공합니다.',
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About K-MediST"
        title="의학과 과학이 만나 미래를 여는 사업단"
        description="K-MediST(Korea University College of Medicine × UNIST)는 임상의 통찰과 첨단 과학기술을 융합해 차세대 의사과학자·의과학자를 양성하는 공동학위·공동연구·기술사업화 사업단입니다."
      />

      {/* Intro */}
      <section className="bg-background">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="relative aspect-4/3 overflow-hidden rounded-3xl border border-border shadow-xl">
            <Image src="/institute/lounge.png" alt="KUNIST 공동연구소 협업 공간" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
          </div>
          <div>
            <h2 className="font-serif text-3xl font-bold text-primary">왜 K-MediST인가</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              의학과 과학기술의 융합은 더 이상 선택이 아닌 필수입니다. K-MediST는 임상 현장에서
              마주하는 실제 문제를 첨단 과학기술로 풀어내는 인재, 즉 &lsquo;문제를 정의하고 해결하는&rsquo;
              의사과학자를 길러냅니다.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              고려대학교 의과대학의 임상·의학교육 역량과 UNIST의 첨단 이공계 연구 역량이 하나로
              결합하여, 학위 과정부터 공동연구, 기술사업화까지 이어지는 전 주기적 성장 환경을
              제공합니다.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { icon: Building2, label: '2개 참여기관' },
                { icon: Microscope, label: '4대 연구 Pillar' },
                { icon: Users2, label: '전 주기 지원' },
              ].map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.label} className="rounded-2xl border border-border bg-card p-5 text-center">
                    <Icon className="mx-auto size-6 text-teal" />
                    <p className="mt-3 text-sm font-semibold text-primary">{item.label}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-teal">Vision &amp; Mission</p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-primary sm:text-4xl">우리가 지향하는 미래</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {VALUES.map((value) => {
              const Icon = value.icon
              return (
                <div key={value.title} className="rounded-2xl border border-border bg-card p-8">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="mt-5 font-serif text-xl font-bold text-primary">{value.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{value.text}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* History timeline */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-teal">History</p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-primary sm:text-4xl">사업단 연혁</h2>
          </div>
          <ol className="mt-12 space-y-8 border-l-2 border-border pl-8">
            {HISTORY.map((item) => (
              <li key={item.year} className="relative">
                <span className="absolute -left-[41px] flex size-5 items-center justify-center rounded-full border-4 border-background bg-gradient-brand" />
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4">
                  <span className="font-serif text-2xl font-bold text-gradient-brand">{item.year}</span>
                  <h3 className="text-lg font-bold text-primary">{item.title}</h3>
                </div>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Participating orgs */}
      <section className="bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-teal">Organization</p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-primary sm:text-4xl">참여기관 및 조직</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              두 기관의 강점이 유기적으로 결합하여 사업단을 함께 운영합니다.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {ORGS.map((org) => {
              const Icon = org.icon
              return (
                <div key={org.name} className="rounded-2xl border border-border bg-card p-8">
                  <div className="flex items-center gap-4">
                    <div className="flex size-12 items-center justify-center rounded-xl bg-secondary text-primary">
                      <Icon className="size-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-primary">{org.name}</h3>
                      <p className="text-sm font-medium text-teal">{org.role}</p>
                    </div>
                  </div>
                  <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{org.detail}</p>
                </div>
              )
            })}
          </div>

          {/* Org chart */}
          <div className="mt-10 rounded-2xl border border-border bg-card p-8">
            <h3 className="text-center text-lg font-bold text-primary">사업단 조직 구성</h3>
            <div className="mt-8 flex flex-col items-center gap-6">
              <div className="rounded-xl bg-gradient-brand px-8 py-4 text-center text-sm font-bold text-primary-foreground">
                사업단장 / 운영위원회
              </div>
              <div className="h-6 w-px bg-border" aria-hidden />
              <div className="grid w-full gap-4 sm:grid-cols-3">
                {['교육·학사 운영팀', '공동연구 지원팀', '기술사업화·행정팀'].map((team) => (
                  <div key={team} className="rounded-xl border border-border bg-secondary/60 px-4 py-4 text-center text-sm font-semibold text-primary">
                    {team}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
