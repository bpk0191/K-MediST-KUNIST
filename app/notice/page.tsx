'use client'

import { useState } from 'react'
import { Megaphone, FileCheck2, Bell, ChevronRight } from 'lucide-react'
import { PageHeader } from '@/components/page-header'
import { cn } from '@/lib/utils'

type Category = '전체' | '공지사항' | '모집공고' | '결과안내'

type Notice = {
  category: Exclude<Category, '전체'>
  title: string
  date: string
  pinned?: boolean
}

const NOTICES: Notice[] = [
  { category: '모집공고', title: '2026학년도 전기 K-MediST 공동학위과정 대학원생 모집 공고', date: '2026.03.15', pinned: true },
  { category: '공지사항', title: 'KUNIST 공동연구소 공용장비 이용 신청 안내', date: '2026.03.10' },
  { category: '공지사항', title: '2026년 글로벌 석학 초청 세미나 시리즈 일정 안내', date: '2026.03.02' },
  { category: '결과안내', title: '2025학년도 후기 대학원생 선발 최종 합격자 발표', date: '2025.10.28' },
  { category: '모집공고', title: '2025학년도 후기 공동학위과정 대학원생 모집 공고', date: '2025.09.01' },
  { category: '공지사항', title: 'K-MediST 연구윤리 교육 이수 안내', date: '2025.08.20' },
  { category: '결과안내', title: '2025년 상반기 공동연구 과제 선정 결과 안내', date: '2025.07.15' },
  { category: '공지사항', title: '기술사업화 지원 프로그램 참가자 모집', date: '2025.06.30' },
]

const CATEGORIES: Category[] = ['전체', '공지사항', '모집공고', '결과안내']

const CATEGORY_STYLE: Record<Exclude<Category, '전체'>, { icon: typeof Bell; className: string }> = {
  공지사항: { icon: Bell, className: 'bg-secondary text-teal' },
  모집공고: { icon: Megaphone, className: 'bg-gradient-brand text-primary-foreground' },
  결과안내: { icon: FileCheck2, className: 'bg-secondary text-accent' },
}

export default function NoticePage() {
  const [filter, setFilter] = useState<Category>('전체')

  const filtered = NOTICES.filter((n) => filter === '전체' || n.category === filter)

  return (
    <>
      <PageHeader
        eyebrow="Notice"
        title="공지사항"
        description="K-MediST 사업단의 공지사항, 모집공고, 선발 결과를 확인하세요."
      />

      <section className="bg-background">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={cn(
                  'rounded-full px-5 py-2 text-sm font-semibold transition-colors',
                  filter === cat
                    ? 'bg-primary text-primary-foreground'
                    : 'border border-border text-muted-foreground hover:bg-secondary',
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          <ul className="mt-8 divide-y divide-border border-y border-border">
            {filtered.map((notice) => {
              const style = CATEGORY_STYLE[notice.category]
              const Icon = style.icon
              return (
                <li key={notice.title}>
                  <button
                    type="button"
                    className="flex w-full items-center gap-4 py-5 text-left transition-colors hover:bg-secondary/40"
                  >
                    <span className={cn('flex size-10 shrink-0 items-center justify-center rounded-xl', style.className)}>
                      <Icon className="size-5" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground">
                          {notice.category}
                        </span>
                        {notice.pinned && (
                          <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-semibold text-accent">
                            중요
                          </span>
                        )}
                      </div>
                      <p className="mt-1.5 truncate font-semibold text-primary">{notice.title}</p>
                    </div>
                    <span className="hidden shrink-0 text-sm text-muted-foreground sm:block">{notice.date}</span>
                    <ChevronRight className="size-5 shrink-0 text-muted-foreground" />
                  </button>
                </li>
              )
            })}
          </ul>

          {filtered.length === 0 && (
            <p className="py-16 text-center text-muted-foreground">해당하는 게시물이 없습니다.</p>
          )}
        </div>
      </section>
    </>
  )
}
