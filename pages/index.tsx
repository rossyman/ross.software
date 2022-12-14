import AboutMe from '../components/about-me/AboutMe'
import ContactMe from '../components/contact-me/ContactMe'
import ExperienceTimeline from '../components/experience-timeline/ExperienceTimeline'
import type { NextPage } from 'next'
import Projects from '../components/projects/Projects'

const Home: NextPage = () => {
  return (
    <>
      <AboutMe />
      <ExperienceTimeline />
      <Projects />
      <ContactMe />
    </>
  )
}

export default Home
