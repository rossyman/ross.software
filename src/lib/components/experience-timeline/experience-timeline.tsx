import { ExperienceItem } from '@/lib/components/experience-timeline/experience-item'
import styles from '@/lib/components/experience-timeline/experience-timeline.module.css'
import type { ComponentProps } from 'react'
import experiences from './snippets/experiences.json'

export const ExperienceTimeline = (props: ComponentProps<'section'>) => {
  return (
    <section {...props}>
      <h2>Experience</h2>
      <ol className={styles.timeline}>
        {experiences.map((experience) => (
          <ExperienceItem experience={experience} key={`${experience.name}-${experience.start}`} />
        ))}
      </ol>
    </section>
  )
}
