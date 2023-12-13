import styles from '@lib/experience-timeline/styles/experience-timeline.module.css'
import {type Experience} from '@lib/experience-timeline/interfaces/experience'
import {Briefcase, MapPin} from 'react-feather'

interface ExperienceProps {
  experience: Experience
  first: boolean
}

export default function Experience({experience, first}: ExperienceProps) {
  return (
    <li className={styles.timelineItem}>
      <div className={styles.timelineLeft}>
        <div className={styles.timelineTimespan}>
          <small className={styles.timelineTimespanInner}>{experience.timespan} {first &&
            <div className={`${styles.pulser} hidden-xxsm`}></div>}</small>
        </div>
        <small className={styles.location}><Briefcase size={'1rem'} /> {experience.role}</small>
        <small className={styles.location}><MapPin size={'1rem'} /> {experience.location}</small>
      </div>

      <div className={styles.timelineEntry}>
        <h3><a href={experience.href}>{experience.name}</a></h3>
        <p>{experience.description}</p>
      </div>
    </li>
  )
}
