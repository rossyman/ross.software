import { CSSProperties } from 'react'
import experiences from './snippets/experiences.json'
import { getAnimationOrder } from '../utils/getAnimationOrder'
import { isTimespanEntry } from './interfaces/Experience'
import styles from './styles/ExperienceTimeline.module.css'

const ANIMATION_ORDER = getAnimationOrder(2)

export default function ExperienceTimeline() {
  return (
    <section style={ANIMATION_ORDER}>
      <h2>Experience</h2>
      <ul className={styles.timeline}>
        {experiences.map((experience, index) => (
          isTimespanEntry(experience)
            ? (
              <li className={styles.timelineTimespan} key={index}>
                <small>{experience.timespan}</small>
                {index === 0 && (
                  <div className={`${styles.pulser} hidden-xxsm`}></div>
                )}
              </li>
            ) : (
              <li className={styles.timelineEntry} key={index}>
                <div>
                  <h4>{experience.role}</h4>
                  <h3><a href={experience.href}>{experience.name}</a>, {experience.location}</h3>
                  <p>{experience.description}</p>
                  {experience.currentlyHiring && (
                    <a className={styles.hiring} href={experience.currentlyHiring}>
                      We are hiring!
                    </a>
                  )}
                </div>
              </li>
            )
        ))}
      </ul>
    </section>
  )
}