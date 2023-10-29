import AboutMe from '../components/about-me/AboutMe'
import ContactMe from '../components/contact-me/ContactMe'
import ExperienceTimeline from '../components/experience-timeline/ExperienceTimeline'
import Projects from '../components/projects/Projects'
import {Metadata, Viewport} from 'next'

const url = 'https://ross.software'
const title = 'Ross MacPhee'
const description =
  'Building experiences; improving the lives of others one screen at a time. Senior Software Engineer at Inflow'

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL(url),
  alternates: {
    canonical: '/'
  },
  icons: {
    icon: [
      {url: '/favicon.svg', type: 'image/svg+xml'},
      {url: '/favicon.ico', type: 'image/x-icon', sizes: 'any'}
    ],
    apple: '/icons/apple-touch-icon.png'
  },
  manifest: '/manifest.json',
  openGraph: {title, description, url},
  twitter: {title, description}
}

export const viewport: Viewport = {
  themeColor: '#0a0a0b'
}

export default function Home() {
  return (
    <>
      <AboutMe />
      <ExperienceTimeline />
      <Projects />
      <ContactMe />
    </>
  )
}
