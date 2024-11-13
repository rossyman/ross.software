import type {SectionProps} from '@/lib/types/section-props'
import experiences from './snippets/experiences.json'
import styles from '@/lib/components/experience-timeline/experience-timeline.module.css'
import {ExperienceItem} from '@/lib/components/experience-timeline/experience-item'

export const ExperienceTimeline = (props: SectionProps) => {
  return (
    <section {...props}>
      <h2>Experience</h2>
      <ul className={styles.timeline}>
        {experiences.map((experience, index) => (
          <ExperienceItem experience={experience} first={index === 0} key={index} />
        ))}
      </ul>
    </section>
  )
}
