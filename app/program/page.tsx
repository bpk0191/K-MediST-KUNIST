import type { Metadata } from 'next'
import { GraduationCap, Rocket, Globe, CheckCircle2, CalendarDays, BookOpen } from 'lucide-react'
import { PageHeader } from '@/components/page-header'
import { ImageGallery } from '@/components/image-gallery'
import { PILLARS } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Program | K-MediST',
  description:
    '공동 학위제, 4대 Pillar 공동연구, KUNIST 공동연구소, 기술사업화, 글로벌 석학 프로그램을 안내합니다.',
}

const INSTITUTE_IMAGES = [
  { src: '/institute/lab.png', alt: '첨단 실험실', caption: '첨단 실험실 (Wet Lab)' },
  { src: '/institute/seminar.png', alt: '세미나실', caption: '세미나실 & 강의 공간' },
  { src: '/institute/equipment.png', alt: '공용장비실', caption: '공용장비실 (Core Facility)' },
  { src: '/institute/lounge.png', alt: '협업 라운지', caption: '협업 라운지' },
  { src: '/institute/hero-lab.png', alt: '연구소 전경', caption: '연구소 전경' },
  { src: '/events/workshop1.png', alt: '공동 워크샵', caption: '공동 연구 워크샵' },
]

const CURRICULUM = [
  { term: '1학년', focus: '융합 기초', courses: ['의생명과학 기초', '데이터사이언스 입문', '연구윤리·방법론'] },
  { term: '2학년', focus: '전공 심화', courses: ['Pillar별 전공 과목', '중개연구(Translational)', '랩 로테이션'] },
  { term: '3학년~', focus: '연구 집중', courses: ['공동연구 프로젝트', '논문 연구', '기술사업화 실습'] },
]

const GLOBAL_SCHEDULE = [
  { period: '매 학기', item: '글로벌 석학 초청 세미나' },
  { period: '연 2회', item: '국제 공동연구 워크샵' },
  { period: '방학 중', item: '해외 연구실 파견·인턴십' },
]

export default function ProgramPage() {
  return (
    <>
      <PageHeader
        eyebrow="Program"
        title="교육 · 연구 · 사업화를 잇는 통합 프로그램"
        description="공동 학위제부터 4대 Pillar 공동연구, 첨단 공동연구소, 기술사업화, 글로벌 석학 프로그램까지 의사과학자의 성장을 전 주기적으로 지원합니다."
      />

      {/* Degree */}
      <section id="degree" className="scroll-mt-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <GraduationCap className="size-7 text-teal" />
            <h2 className="font-serif text-3xl font-bold text-primary">공동 학위제</h2>
          </div>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
            고려대학교 의과대학과 UNIST가 공동으로 운영하는 학위 과정으로, 의사과학자(MD-PhD) 및
            의과학자(PhD) 트랙을 통해 융합형 연구 인재를 양성합니다.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-8">
              <h3 className="flex items-center gap-2 text-lg font-bold text-primary">
                <CheckCircle2 className="size-5 text-accent" /> 지원 자격
              </h3>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                <li>· 의과대학 재학생 또는 졸업생 (MD-PhD 트랙)</li>
                <li>· 이공계 학사·석사 학위 소지자 (PhD 트랙)</li>
                <li>· 의과학 융합연구에 대한 열정과 연구 계획을 갖춘 자</li>
                <li>· 소정의 어학 및 학업 요건을 충족하는 자</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-card p-8">
              <h3 className="flex items-center gap-2 text-lg font-bold text-primary">
                <BookOpen className="size-5 text-accent" /> 커리큘럼 개요
              </h3>
              <div className="mt-4 space-y-4">
                {CURRICULUM.map((row) => (
                  <div key={row.term} className="rounded-xl bg-secondary/60 p-4">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-primary">{row.term}</span>
                      <span className="text-xs font-semibold text-teal">{row.focus}</span>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {row.courses.map((c) => (
                        <span key={c} className="rounded-full bg-background px-3 py-1 text-xs text-muted-foreground">
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research pillars */}
      <section id="research" className="scroll-mt-20 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal">Joint Research</p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-primary sm:text-4xl">공동연구 · 4대 Pillar</h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
            임상 난제 해결을 위한 네 개의 융합연구 축을 중심으로 양 기관 연구진이 협력합니다.
          </p>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {PILLARS.map((pillar) => {
              const Icon = pillar.icon
              return (
                <article key={pillar.id} className="rounded-2xl border border-border bg-card p-8">
                  <div className="flex items-center gap-4">
                    <div className="flex size-12 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground">
                      <Icon className="size-6" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-teal">Pillar 0{pillar.id}</p>
                      <h3 className="text-lg font-bold text-primary">{pillar.title}</h3>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{pillar.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {pillar.topics.map((t) => (
                      <span key={t} className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Institute gallery - highlighted */}
      <section id="institute" className="scroll-mt-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-teal">KUNIST 공동연구소</p>
            <h2 className="mt-3 text-balance font-serif text-3xl font-bold text-primary sm:text-4xl">
              연구에 몰입하는 공간, 정몽구 미래의학관 2F
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              첨단 실험실, 세미나실, 공용장비실, 협업 라운지까지. 세련된 인테리어와 최신 인프라를
              갖춘 KUNIST 공동연구소에서 임상과 과학이 만나 새로운 발견이 시작됩니다. 이미지를
              클릭하면 크게 볼 수 있습니다.
            </p>
          </div>
          <div className="mt-12">
            <ImageGallery images={INSTITUTE_IMAGES} columns={3} />
          </div>
        </div>
      </section>

      {/* Tech commercialization */}
      <section id="tech" className="scroll-mt-20 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <Rocket className="size-7 text-teal" />
            <h2 className="font-serif text-3xl font-bold text-primary">기술사업화</h2>
          </div>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
            연구 성과가 실제 가치 창출로 이어지도록 특허 출원부터 기술이전, 창업까지 전 주기를
            체계적으로 지원합니다.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {[
              { step: '01', title: 'IP 발굴·보호', desc: '연구 성과의 특허성 분석 및 국내외 출원 지원' },
              { step: '02', title: '기술 고도화', desc: '시제품 제작 및 실증을 통한 기술 성숙도 향상' },
              { step: '03', title: '기술이전', desc: '기업 매칭 및 라이선싱 협상 지원' },
              { step: '04', title: '창업 지원', desc: '창업 컨설팅·투자 연계 및 후속 지원' },
            ].map((item) => (
              <div key={item.step} className="rounded-2xl border border-border bg-card p-6">
                <span className="font-serif text-3xl font-bold text-gradient-brand">{item.step}</span>
                <h3 className="mt-3 font-bold text-primary">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global scholar */}
      <section id="global" className="scroll-mt-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <div className="flex items-center gap-3">
                <Globe className="size-7 text-teal" />
                <h2 className="font-serif text-3xl font-bold text-primary">글로벌 석학 프로그램</h2>
              </div>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                국내외 저명 석학을 멘토로 초빙하여 세미나, 공동연구, 멘토링을 진행합니다. 학생들은
                글로벌 연구 네트워크를 형성하고 국제 공동연구 경험을 쌓을 수 있습니다.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {['Mentorship', 'Joint Research', 'Global Network'].map((tag) => (
                  <div key={tag} className="rounded-xl border border-border bg-secondary/60 p-4 text-center text-sm font-semibold text-primary">
                    {tag}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-card p-8">
              <h3 className="flex items-center gap-2 text-lg font-bold text-primary">
                <CalendarDays className="size-5 text-accent" /> 운영 일정
              </h3>
              <ul className="mt-5 divide-y divide-border">
                {GLOBAL_SCHEDULE.map((row) => (
                  <li key={row.item} className="flex items-center justify-between py-4">
                    <span className="text-sm text-foreground">{row.item}</span>
                    <span className="rounded-full bg-gradient-brand px-3 py-1 text-xs font-semibold text-primary-foreground">
                      {row.period}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
