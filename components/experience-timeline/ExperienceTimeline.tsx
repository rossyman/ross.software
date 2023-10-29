import {StylizedText} from '../stylized-text/StylizedText'
import {getAnimationOrder} from '../utils/getAnimationOrder'
import experiences from './snippets/experiences.json'
import styles from './styles/ExperienceTimeline.module.css'

const ANIMATION_ORDER = getAnimationOrder(2)

export default function ExperienceTimeline() {
  return (
    <section style={ANIMATION_ORDER}>
      <h2>Experience</h2>
      <ul className={styles.timeline}>
        {experiences.map((experience, index) => (
          <>
            <li className={styles.timelineTimespan} key={index}>
              <small>{experience.timespan}</small>
              {index === 0 && <div className={`${styles.pulser} hidden-xxsm`}></div>}
            </li>
            <li className={styles.timelineEntry} key={index}>
              <div className={styles.timelineEntryContent}>
                <h3>
                  <a href={experience.href}>{experience.name}</a>
                </h3>
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
                  <StylizedText>
                    <a className={styles.hiring} href={experience.currentlyHiring}>
                      We are hiring!
                    </a>
                  </StylizedText>
                )}
              </div>
            </li>
          </>
        ))}
      </ul>
    </section>
  )
}
