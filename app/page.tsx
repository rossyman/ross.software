import AboutMe from '../components/about-me/AboutMe'
import ContactMe from '../components/contact-me/ContactMe'
import ExperienceTimeline from '../components/experience-timeline/ExperienceTimeline'
import Projects from '../components/projects/Projects'

export default function Home() {
    return (
        <>
            <AboutMe/>
            <ExperienceTimeline/>
            <Projects/>
            <ContactMe/>
        </>
    )
}
