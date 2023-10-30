import {getAnimationOrder} from '../utils/getAnimationOrder'
import projects from './snippets/projects.json'
import styles from './styles/Projects.module.css'
import {ArrowUpRight} from 'react-feather'

const ANIMATION_ORDER = getAnimationOrder(2)

export default function Projects() {
  return (
    <section style={ANIMATION_ORDER}>
      <h2>Projects</h2>
      <ul className={styles.projects}>
        {projects.map((project, index) => (
          <li key={index}>
            <h3><a href={project.href}>{project.name} <ArrowUpRight strokeWidth={3} size={'.9rem'} /></a></h3>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
