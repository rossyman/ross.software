import type { Experience } from '@/lib/components/experience-timeline/types/experience'
import styles from '@/lib/components/experience-timeline/experience-item.module.css'
import { formatMonth, tenure } from '@/lib/components/experience-timeline/utils/dates'
import { ArrowUpRight, MapPin } from 'lucide-react'

type ExperienceProps = {
  experience: Experience
}

export const ExperienceItem = ({ experience }: ExperienceProps) => {
  const current = experience.end === null

  return (
    <li className={styles.item} data-current={current || undefined}>
      <span className={styles.node} aria-hidden="true" />
      <div className={styles.card}>
        <h3 className={styles.company}>
          <a href={experience.href}>
            {experience.name}
            <ArrowUpRight className={styles.arrow} size={'1rem'} aria-hidden="true" />
          </a>
        </h3>
        <p className={styles.meta}>
          <time dateTime={experience.start}>{formatMonth(experience.start)}</time>
          {' — '}
          {experience.end ? <time dateTime={experience.end}>{formatMonth(experience.end)}</time> : 'Present'}
          <span className={styles.tenure}>{tenure(experience.start, experience.end)}</span>
        </p>
        <p className={styles.detail}>
          <MapPin size={'0.875rem'} aria-hidden="true" />
          <span>{experience.location}</span>
        </p>
      </div>
    </li>
  )
}
