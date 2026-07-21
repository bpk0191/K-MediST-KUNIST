import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export function InstitutePreview() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 grid grid-cols-2 gap-4 lg:order-1">
            <div className="relative col-span-2 aspect-16/10 overflow-hidden rounded-2xl border border-border shadow-lg">
              <Image src="/institute/lab.png" alt="KUNIST 연구소 실험실" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
            <div className="relative aspect-4/3 overflow-hidden rounded-2xl border border-border shadow-lg">
              <Image src="/institute/seminar.png" alt="KUNIST 연구소 세미나실" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
            </div>
            <div className="relative aspect-4/3 overflow-hidden rounded-2xl border border-border shadow-lg">
              <Image src="/institute/equipment.png" alt="KUNIST 연구소 공용장비실" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <p className="text-sm font-semibold uppercase tracking-widest text-teal">KUNIST 공동연구소</p>
            <h2 className="mt-3 text-balance font-serif text-3xl font-bold text-primary sm:text-4xl">
              연구에 몰입할 수 있는 최고의 공간
            </h2>
            <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
              고려대학교 의과대학 정몽구 미래의학관 2층에 자리한 KUNIST 공동연구소는 첨단 실험실,
              세미나실, 공용장비실, 협업 라운지를 갖추고 있습니다. 세련된 공간에서 임상과 과학이
              만나 새로운 발견이 시작됩니다.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-foreground">
              {['첨단 장비를 갖춘 공용 실험 공간', '자유로운 토론을 위한 세미나·협업 공간', '양 기관 연구진이 상주하는 융합 연구 환경'].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="size-1.5 rounded-full bg-gradient-brand" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/program#institute"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              공동연구소 갤러리 보기
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
