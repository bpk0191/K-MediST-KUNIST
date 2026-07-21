import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Sparkles } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:py-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-1.5 text-xs font-semibold text-teal">
            <Sparkles className="size-3.5" />
            고려대학교 의과대학 × UNIST 공동사업단
          </span>
          <h1 className="mt-6 text-balance font-serif text-4xl font-bold leading-tight text-primary sm:text-5xl lg:text-6xl">
            의학과 과학의 경계를 넘어,{' '}
            <span className="text-gradient-brand">미래 의학</span>을 설계하다
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            K-MediST는 임상의 통찰과 첨단 과학기술을 융합하여, 세계를 선도할 의사과학자·의과학자를
            양성하는 공동학위·공동연구·기술사업화 사업단입니다.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/apply"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-3 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-opacity hover:opacity-90"
            >
              지원하기
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/program"
              className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3 text-base font-semibold text-primary transition-colors hover:bg-secondary"
            >
              프로그램 살펴보기
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-4/3 overflow-hidden rounded-3xl border border-border shadow-2xl shadow-primary/10">
            <Image
              src="/institute/hero-lab.png"
              alt="KUNIST 공동연구소 실험실 전경"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/25 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-border bg-background p-5 shadow-xl sm:block">
            <p className="text-xs font-medium text-muted-foreground">KUNIST 공동연구소</p>
            <p className="mt-1 font-serif text-lg font-bold text-primary">정몽구 미래의학관 2F</p>
          </div>
        </div>
      </div>
    </section>
  )
}
