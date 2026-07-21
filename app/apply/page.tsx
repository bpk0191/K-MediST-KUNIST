import type { Metadata } from 'next'
import Link from 'next/link'
import { FileText, Download, CheckCircle2, ArrowRight } from 'lucide-react'
import { PageHeader } from '@/components/page-header'

export const metadata: Metadata = {
  title: '지원안내 | K-MediST',
  description: 'K-MediST 사업단 지원 자격, 절차, 모집 일정 및 제출 서류를 안내합니다.',
}

const STEPS = [
  { step: '01', title: '온라인 지원서 접수', desc: '모집 기간 내 온라인 지원 시스템을 통해 지원서 및 서류 제출' },
  { step: '02', title: '서류 심사', desc: '학업 성취도, 연구 계획서, 자기소개서 등 종합 평가' },
  { step: '03', title: '면접 심사', desc: '연구 역량과 융합연구에 대한 이해도를 평가하는 심층 면접' },
  { step: '04', title: '최종 합격 발표', desc: '합격자 개별 통보 및 등록 안내' },
]

const SCHEDULE = [
  { phase: '전기 모집', apply: '2026.04.01 ~ 04.30', interview: '2026.05.중순', result: '2026.05.말', status: '예정' },
  { phase: '후기 모집', apply: '2026.09.01 ~ 09.30', interview: '2026.10.중순', result: '2026.10.말', status: '예정' },
]

const DOCUMENTS = [
  { name: '입학지원서 양식', type: 'HWP · PDF' },
  { name: '연구계획서 양식', type: 'DOCX' },
  { name: '자기소개서 양식', type: 'DOCX' },
  { name: '모집요강 (전문)', type: 'PDF' },
]

const ELIGIBILITY = [
  '국내외 대학에서 학사 이상 학위를 취득(예정)한 자',
  '의과대학 재학생·졸업생 (의사과학자 MD-PhD 트랙)',
  '이공계 전공 학사·석사 학위 소지자 (의과학자 PhD 트랙)',
  '의과학 융합연구에 대한 명확한 동기와 연구 계획을 갖춘 자',
]

export default function ApplyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Apply"
        title="지원안내"
        description="K-MediST와 함께할 미래의 의사과학자를 기다립니다. 지원 자격과 절차, 모집 일정을 확인하고 지원해 주세요."
      />

      {/* Eligibility */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-serif text-3xl font-bold text-primary">지원 자격</h2>
              <ul className="mt-6 space-y-4">
                {ELIGIBILITY.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-teal" />
                    <span className="text-sm leading-relaxed text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-secondary/50 p-8">
              <h3 className="text-lg font-bold text-primary">지원 전 확인하세요</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                트랙별 세부 자격 요건과 제출 서류는 모집 회차마다 상이할 수 있습니다. 반드시 해당
                회차의 모집요강을 확인한 후 지원해 주시기 바랍니다.
              </p>
              <Link
                href="/notice"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent"
              >
                최신 모집공고 확인하기 <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Procedure */}
      <section className="bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-primary">지원 절차</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {STEPS.map((item, idx) => (
              <div key={item.step} className="relative rounded-2xl border border-border bg-card p-6">
                <span className="font-serif text-3xl font-bold text-gradient-brand">{item.step}</span>
                <h3 className="mt-3 font-bold text-primary">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                {idx < STEPS.length - 1 && (
                  <ArrowRight className="absolute -right-4 top-1/2 hidden size-5 -translate-y-1/2 text-border md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-primary">모집 일정</h2>
          <div className="mt-8 overflow-hidden rounded-2xl border border-border">
            <table className="w-full text-left text-sm">
              <thead className="bg-gradient-brand text-primary-foreground">
                <tr>
                  <th className="px-6 py-4 font-semibold">구분</th>
                  <th className="px-6 py-4 font-semibold">서류 접수</th>
                  <th className="px-6 py-4 font-semibold">면접 심사</th>
                  <th className="px-6 py-4 font-semibold">합격 발표</th>
                  <th className="px-6 py-4 font-semibold">상태</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-card">
                {SCHEDULE.map((row) => (
                  <tr key={row.phase}>
                    <td className="px-6 py-4 font-bold text-primary">{row.phase}</td>
                    <td className="px-6 py-4 text-muted-foreground">{row.apply}</td>
                    <td className="px-6 py-4 text-muted-foreground">{row.interview}</td>
                    <td className="px-6 py-4 text-muted-foreground">{row.result}</td>
                    <td className="px-6 py-4">
                      <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-teal">
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Documents */}
      <section className="bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-primary">서류 다운로드</h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
            지원에 필요한 서류 양식을 내려받으세요. 작성 후 온라인 지원 시스템에 업로드하시면 됩니다.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {DOCUMENTS.map((doc) => (
              <div
                key={doc.name}
                className="flex items-center justify-between rounded-2xl border border-border bg-card p-5"
              >
                <div className="flex items-center gap-4">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-secondary text-teal">
                    <FileText className="size-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary">{doc.name}</p>
                    <p className="text-xs text-muted-foreground">{doc.type}</p>
                  </div>
                </div>
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-secondary"
                >
                  <Download className="size-4" /> 다운로드
                </button>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-3xl bg-gradient-brand px-6 py-12 text-center">
            <h3 className="font-serif text-2xl font-bold text-primary-foreground">지원 준비가 되셨나요?</h3>
            <p className="mx-auto mt-3 max-w-lg text-sm text-primary-foreground/85">
              온라인 지원 시스템을 통해 간편하게 지원할 수 있습니다. 문의사항은 언제든 사업단으로 연락 주세요.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <button
                type="button"
                className="rounded-full bg-background px-6 py-3 text-sm font-semibold text-primary shadow-lg transition-transform hover:scale-[1.02]"
              >
                온라인 지원하기
              </button>
              <Link
                href="/contact"
                className="rounded-full border border-primary-foreground/40 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                문의하기
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
