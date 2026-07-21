import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function HomeCta() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-brand px-6 py-16 text-center sm:px-12">
          <h2 className="text-balance font-serif text-3xl font-bold text-primary-foreground sm:text-4xl">
            미래 의학의 주인공이 되어 주세요
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-primary-foreground/85">
            K-MediST와 함께 임상과 과학의 경계를 넘어 세상을 바꾸는 연구를 시작하세요.
            지금 모집 일정과 지원 절차를 확인해 보세요.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/apply"
              className="inline-flex items-center gap-2 rounded-full bg-background px-7 py-3 text-base font-semibold text-primary shadow-lg transition-transform hover:scale-[1.02]"
            >
              지원하기
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-7 py-3 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              문의하기
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
