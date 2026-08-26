import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { ContactForm } from '@/components/contact-form'
import { MapPin, Mail, Phone, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: '문의하기 | K-MediST',
  description:
    'K-MediST(KUNIST) 사업단 행정실 연락처와 오시는 길. 지원, 교육과정, 연구 협력에 관한 문의를 남겨주세요.',
}

// TODO: 아래 이메일·전화번호는 임시 값입니다. 실제 사업단 행정실 연락처로 교체해주세요.
// (푸터의 연락처와 반드시 동일한 값으로 맞춰주세요: components/site-footer.tsx)
const CONTACTS = [
  {
    icon: MapPin,
    label: '주소',
    value: '서울특별시 성북구 고려대로 73\n고려대학교 의과대학 정몽구 미래의학관 2층',
  },
  { icon: Mail, label: '이메일', value: 'kmedist@korea.ac.kr' },
  { icon: Phone, label: '전화', value: '02-0000-0000' },
  { icon: Clock, label: '운영시간', value: '평일 09:00 – 18:00\n(주말·공휴일 휴무)' },
]

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="문의하기"
        description="사업단 참여, 교육과정, 연구 협력 등 궁금한 점을 남겨주시면 담당자가 신속히 안내해 드립니다."
      />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <h2 className="font-serif text-2xl font-bold text-primary">사업단 행정실</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              K-MediST 사업단 운영과 관련한 모든 문의는 아래 연락처 또는 문의 양식을 통해 접수하실 수 있습니다.
            </p>
            <dl className="mt-8 space-y-6">
              {CONTACTS.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex gap-4">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-teal">
                    <Icon className="size-5" />
                  </div>
                  <div>
                    <dt className="text-sm font-semibold text-primary">{label}</dt>
                    <dd className="mt-1 whitespace-pre-line leading-relaxed text-muted-foreground">
                      {value}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>

          <ContactForm />
        </div>
      </div>
    </>
  )
}
