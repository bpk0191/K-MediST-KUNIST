import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHeader } from '@/components/page-header'
import { FaqAccordion } from '@/components/faq-accordion'
import { FAQS } from '@/lib/data'

export const metadata: Metadata = {
  title: '자주 묻는 질문 | K-MediST',
  description:
    'K-MediST 공동 학위제, 지원 자격, 연구 환경, 장학·연구비 지원, 기술사업화 등에 대해 자주 묻는 질문을 확인하세요.',
}

export default function FaqPage() {
  return (
    <>
      <PageHeader
        eyebrow="FAQ"
        title="자주 묻는 질문"
        description="지원과 참여에 관해 가장 많이 문의하시는 내용을 모았습니다. 추가 문의는 Contact 페이지를 이용해 주세요."
      />
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <FaqAccordion items={FAQS} />

        <div className="mt-12 rounded-2xl border border-border bg-secondary/40 p-8 text-center">
          <h2 className="font-serif text-xl font-bold text-primary">원하는 답변을 찾지 못하셨나요?</h2>
          <p className="mx-auto mt-3 max-w-md leading-relaxed text-muted-foreground">
            사업단 행정실로 문의해 주시면 담당자가 자세히 안내해 드립니다.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
          >
            문의하기
          </Link>
        </div>
      </div>
    </>
  )
}
