import type {Experience} from '@/lib/components/experience-timeline/types/experience'
import styles from '@/lib/components/experience-timeline/experience-item.module.css'
import {Briefcase, MapPin} from 'react-feather'

type ExperienceProps = {
  experience: Experience
  first: boolean
}

export const ExperienceItem = ({experience, first}: ExperienceProps) => {
  return (
    <li className={styles.timelineItem}>
      <div className={styles.timelineLeft}>
        <div className={styles.timelineTimespan}>
          <small className={styles.timelineTimespanInner}>
            {experience.timespan}
            {first && <div className={`${styles.pulser} hidden-xxsm`} />}
          </small>
        </div>
        <small className={styles.location}>
          <MapPin size={'1rem'} />
          <span>{experience.location}</span>
        </small>
        <small className={styles.roles}>
          <Briefcase size={'1rem'} />
          <ul>
            {experience.roles.map((role, i) =>
              <li key={`${experience.name}-${i}`}>
                {i > 0 && <>&uarr;&nbsp;</>}
                {role}
              </li>
            )}
          </ul>
        </small>
      </div>
      <div className={styles.timelineEntry}>
        <h3><a href={experience.href}>{experience.name}</a></h3>
        <p>{experience.description}</p>
      </div>
    </li>
  )
}
