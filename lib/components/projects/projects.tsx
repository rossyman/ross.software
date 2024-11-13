import type {SectionProps} from '@/lib/types/section-props'
import styles from './projects.module.css'
import projects from './snippets/projects.json'
import {ArrowUpRight} from 'react-feather'

export const Projects = (props: SectionProps) => {
  return (
    <section {...props}>
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
