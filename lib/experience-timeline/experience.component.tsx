import styles from '@lib/experience-timeline/styles/ExperienceTimeline.module.css'
import {StylizedText} from '@lib/stylized-text/stylized-text.component'
import {type Experience} from '@lib/experience-timeline/interfaces/experience'

interface ExperienceProps {
  experience: Experience
  first: boolean
}

export default function Experience({experience, first}: ExperienceProps) {
  return (
    <>
      <li className={styles.timelineTimespan}>
        <small>{experience.timespan}</small>
        {first && <div className={`${styles.pulser} hidden-xxsm`}></div>}
      </li>

      <li className={styles.timelineEntry}>
        <h3><a href={experience.href}>{experience.name}</a></h3>

        <div>
          <small>{experience.location}</small>
          {Array.isArray(experience.role) ? (
            experience.role.map(role => (
              <p key={`${experience.name}-${role}`} className={styles.role}>
                {role}
              </p>
            ))
          ) : (
            <p className={styles.role}>{experience.role}</p>
          )}
        </div>

        <p>{experience.description}</p>

        {experience.currentlyHiring && (
          <StylizedText href={experience.currentlyHiring} className={styles.hiring}>
            We are hiring!
          </StylizedText>
        )}
      </li>
    </>
  )
}
