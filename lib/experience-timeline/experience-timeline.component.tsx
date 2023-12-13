import {getAnimationOrder} from '../utils/get-animation-order'
import experiences from './snippets/experiences.json'
import styles from './styles/experience-timeline.module.css'
import Experience from '@lib/experience-timeline/experience.component'

const ANIMATION_ORDER = getAnimationOrder(1)

export default function ExperienceTimeline() {
  return (
    <section style={ANIMATION_ORDER}>
      <h2>Experience</h2>
      <ul className={styles.timeline}>
        {experiences.map((experience, index) => <Experience experience={experience} first={index === 0} key={index} />)}
      </ul>
    </section>
  )
}
