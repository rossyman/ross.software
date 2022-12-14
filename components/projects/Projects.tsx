import { getAnimationOrder } from '../utils/getAnimationOrder'
import projects from './snippets/projects.json'
import styles from './styles/Projects.module.css'

const ANIMATION_ORDER = getAnimationOrder(3)

export default function Projects() {
  return (
    <section style={ANIMATION_ORDER}>
      <h2>Projects</h2>
      <ul className={styles.projects}>
        {projects.map((project, index) => (
          <li key={index}>
            <div>
              <h3><a href={project.href}>{project.name}</a></h3>
              <p>{project.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
