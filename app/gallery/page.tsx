import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { ImageGallery, type GalleryImage } from '@/components/image-gallery'

export const metadata: Metadata = {
  title: '갤러리 | K-MediST',
  description:
    'K-MediST(KUNIST) 공동연구소의 연구 공간, 세미나, 워크숍, 심포지엄 등 주요 활동 현장을 사진으로 만나보세요.',
}

const INSTITUTE_IMAGES: GalleryImage[] = [
  { src: '/institute/hero-lab.png', alt: '정몽구 미래의학관 연구실 전경', caption: '공동연구소 전경' },
  { src: '/institute/lab.png', alt: '분자생물학 실험실', caption: '분자생물학 실험실' },
  { src: '/institute/equipment.png', alt: '공용 장비실', caption: '공용 핵심장비실' },
  { src: '/institute/seminar.png', alt: '세미나실', caption: '세미나·회의실' },
  { src: '/institute/lounge.png', alt: '협업 라운지', caption: '연구자 협업 라운지' },
]

const EVENT_IMAGES: GalleryImage[] = [
  { src: '/events/workshop1.png', alt: '융합연구 워크숍', caption: '융합연구 워크숍' },
  { src: '/events/symposium.png', alt: '국제 심포지엄', caption: '국제 심포지엄' },
  { src: '/events/networking.png', alt: '네트워킹 리셉션', caption: '연구자 네트워킹' },
  { src: '/events/award.png', alt: '우수성과 시상식', caption: '우수성과 시상식' },
]

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="현장의 순간들"
        description="KUNIST 공동연구소의 연구 공간과 사업단의 주요 활동을 사진으로 소개합니다."
      />
      <div className="mx-auto max-w-7xl space-y-16 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <section>
          <h2 className="font-serif text-2xl font-bold text-primary sm:text-3xl">연구 공간</h2>
          <p className="mt-2 max-w-2xl leading-relaxed text-muted-foreground">
            고려대학교 의과대학 정몽구 미래의학관에 위치한 KUNIST 공동연구소의 실험실과 공용 인프라입니다.
          </p>
          <div className="mt-8">
            <ImageGallery images={INSTITUTE_IMAGES} columns={3} />
          </div>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold text-primary sm:text-3xl">활동 &amp; 행사</h2>
          <p className="mt-2 max-w-2xl leading-relaxed text-muted-foreground">
            워크숍, 심포지엄, 네트워킹 등 사업단이 진행한 주요 프로그램의 현장입니다.
          </p>
          <div className="mt-8">
            <ImageGallery images={EVENT_IMAGES} columns={2} />
          </div>
        </section>
      </div>
    </>
  )
}
