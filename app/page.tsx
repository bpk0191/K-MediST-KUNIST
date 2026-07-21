import { Hero } from '@/components/home/hero'
import { Stats } from '@/components/home/stats'
import { ProgramOverview } from '@/components/home/program-overview'
import { PillarsPreview } from '@/components/home/pillars-preview'
import { InstitutePreview } from '@/components/home/institute-preview'
import { HomeCta } from '@/components/home/cta'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <ProgramOverview />
      <PillarsPreview />
      <InstitutePreview />
      <HomeCta />
    </>
  )
}
