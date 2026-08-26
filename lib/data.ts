import {
  Brain,
  Dna,
  HeartPulse,
  Bot,
  type LucideIcon,
} from 'lucide-react'

export type Pillar = {
  id: number
  title: string
  subtitle: string
  description: string
  icon: LucideIcon
  topics: string[]
}

export const PILLARS: Pillar[] = [
  {
    id: 1,
    title: '의료AI · 데이터사이언스',
    subtitle: 'Medical AI & Data Science',
    description:
      '대규모 의료 데이터와 인공지능을 활용해 진단·예후 예측 모델을 개발하고, 임상 현장에 적용 가능한 AI 솔루션을 연구합니다.',
    icon: Brain,
    topics: ['의료영상 AI', '임상 예측 모델', '멀티오믹스 분석', '연합학습·데이터 거버넌스'],
  },
  {
    id: 2,
    title: '정밀의료 · 바이오공학',
    subtitle: 'Precision Medicine & Bioengineering',
    description:
      '유전체·분자 수준의 정밀의료 기술과 바이오공학을 결합하여 환자 맞춤형 치료 전략과 차세대 치료제를 개발합니다.',
    icon: Dna,
    topics: ['유전체 정밀의료', '오가노이드·조직공학', '차세대 치료제', '바이오마커 발굴'],
  },
  {
    id: 3,
    title: '디지털헬스케어 · 스마트병원',
    subtitle: 'Digital Healthcare & Smart Hospital',
    description:
      '웨어러블·IoT·디지털치료제 기반의 헬스케어 기술과 스마트병원 시스템을 연구하여 의료 서비스의 패러다임을 혁신합니다.',
    icon: HeartPulse,
    topics: ['디지털치료제(DTx)', '원격의료·모니터링', '스마트병원 플랫폼', '헬스케어 IoT'],
  },
  {
    id: 4,
    title: '의료로보틱스 · 극한의료',
    subtitle: 'Medical Robotics & Extreme Medicine',
    description:
      '수술·재활 로봇과 극한환경 의료기술을 연구하여 정밀하고 안전한 치료를 실현하고 의료의 물리적 한계를 확장합니다.',
    icon: Bot,
    topics: ['수술·중재 로봇', '재활·보조 로봇', '극한환경 의료', '햅틱·원격수술'],
  },
]

export const HOME_STATS = [
  { value: '2', suffix: '개', label: '참여기관', detail: '고려대 의대 · UNIST' },
  { value: '4', suffix: '대', label: '연구 Pillar', detail: '융합 연구 분야' },
  { value: '80', suffix: '명', label: '5개년 참여자 목표', detail: '의사과학자 16 · 의과학자 64(누적)' },
  { value: '5', suffix: '년', label: '사업 기간', detail: '2026~2030년 (1단계 2년 + 2단계 3년)' },
]

export type FaqItem = { q: string; a: string }

export const FAQS: FaqItem[] = [
  {
    q: '공동 학위제는 어떤 학위를 받게 되나요?',
    a: '고려대학교 의과대학과 UNIST가 공동으로 운영하는 학위 과정으로, 소정의 요건을 충족하면 양 기관의 공동학위(공동명의 학위)를 수여받습니다. 의사과학자(MD-PhD) 및 의과학자(PhD) 트랙으로 운영됩니다.',
  },
  {
    q: '지원 자격은 어떻게 되나요?',
    a: '의과대학 재학생·졸업생, 이공계 학사·석사 학위 소지자 등 의과학 연구에 관심 있는 대학원생·의대생이 지원할 수 있습니다. 트랙별 세부 자격은 지원안내 페이지를 확인해 주세요.',
  },
  {
    q: '연구는 어디에서 진행되나요?',
    a: '고려대학교 의과대학 정몽구 미래의학관 2층에 위치한 KUNIST 공동연구소를 중심으로, 양 기관의 실험실과 공용장비실을 활용하여 연구를 수행합니다.',
  },
  {
    q: '장학금이나 연구비 지원이 있나요?',
    a: '사업단 참여 대학원생에게는 등록금 및 인건비, 연구활동비 등 다양한 형태의 지원이 제공됩니다. 세부 지원 내용은 매 모집 공고에서 안내됩니다.',
  },
  {
    q: '글로벌 석학 프로그램은 무엇인가요?',
    a: '국내외 저명 석학을 멘토로 초빙하여 세미나, 공동연구, 멘토링을 진행하는 프로그램입니다. 학생들은 글로벌 네트워크를 형성하고 국제 공동연구 경험을 쌓을 수 있습니다.',
  },
  {
    q: '기술사업화 지원은 어떻게 이루어지나요?',
    a: '연구 성과의 특허 출원, 기술이전, 창업까지 전 주기를 지원합니다. 전담 조직이 IP 관리, 사업화 컨설팅, 투자 연계 등을 지원하여 연구가 실제 가치 창출로 이어지도록 돕습니다.',
  },
]
