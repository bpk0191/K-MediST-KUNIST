import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Mail, Phone } from 'lucide-react'
import { NAV_LINKS } from '@/lib/nav'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Image
              src="/kunist-logo.png"
              alt="KUNIST 로고"
              width={180}
              height={52}
              className="h-10 w-auto"
            />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              고려대학교 의과대학과 UNIST가 함께하는 의사과학자·의과학자 양성 사업단.
              공동학위, 공동연구, 기술사업화를 통해 미래 의학을 선도합니다.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-foreground">바로가기</h3>
            <ul className="mt-4 grid grid-cols-2 gap-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-foreground">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0 text-teal" />
                <span>서울특별시 성북구 고려대로 73 고려대학교 의과대학 정몽구 미래의학관 2층 KUNIST 연구소</span>
              </li>
              {/* TODO: 임시 전화번호입니다. app/contact/page.tsx의 값과 동일하게 실제 번호로 교체해주세요. */}
              <li className="flex items-center gap-2">
                <Phone className="size-4 shrink-0 text-teal" />
                <span>02-0000-0000</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="size-4 shrink-0 text-teal" />
                <span>kmedist@korea.ac.kr</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} K-MediST 사업단 (Korea University College of Medicine × UNIST). All rights reserved.</p>
          <div className="flex gap-4">
            <span>고려대학교 의과대학</span>
            <span aria-hidden>·</span>
            <span>UNIST</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
