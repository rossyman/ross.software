import type {Metadata, Viewport} from 'next'
import type {ComponentType, CSSProperties} from 'react'
import type {SectionProps} from '@/lib/types/section-props'
import {AboutMe} from '@/lib/components/about-me/about-me'
import {ExperienceTimeline} from '@/lib/components/experience-timeline/experience-timeline'
import {Projects} from '@/lib/components/projects/projects'
import {ContactMe} from '@/lib/components/contact-me/contact-me'

const url = 'https://ross.software'
const title = 'Ross MacPhee'
const description = 'Improving the lives of others, one piece of software at a time. Senior Software Engineer and DevOps / Infrastructure Engineer based out of Glasgow, Scotland.'

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL(url),
  alternates: {
    canonical: '/'
  },
  openGraph: {title, description, url},
  twitter: {title, description}
}

export const viewport: Viewport = {
  themeColor: '#0a0a0b'
}

export default function Home() {

  const sections: ComponentType<SectionProps>[] = [
    AboutMe,
    ExperienceTimeline,
    Projects,
    ContactMe
  ]

  const getAnimationOrder = (order: number): CSSProperties =>
    ({'--animation-order': order}) as CSSProperties

  return <>{sections.map((Section, i) => <Section key={`section-${i}`} style={getAnimationOrder(i)} />)}</>
}
