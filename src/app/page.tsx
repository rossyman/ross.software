import { AboutMe } from '@/lib/components/about-me/about-me'
import { ExperienceTimeline } from '@/lib/components/experience-timeline/experience-timeline'

export const revalidate = 86400

export default function Home() {
  return (
    <>
      <AboutMe />
      <ExperienceTimeline />
    </>
  )
}
