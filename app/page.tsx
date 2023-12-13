import AboutMeComponent from '@lib/about-me/about-me.component'
import ContactMe from '@lib/contact-me/contact-me.component'
import ExperienceTimeline from '@lib/experience-timeline/experience-timeline.component'
import Projects from '@lib/projects/projects.component'
import {Metadata, Viewport} from 'next'

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
  return (
    <>
      <AboutMeComponent />
      <ExperienceTimeline />
      <Projects />
      <ContactMe />
    </>
  )
}
