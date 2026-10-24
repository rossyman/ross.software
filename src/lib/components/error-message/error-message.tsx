import type { PropsWithChildren } from 'react'
import styles from '@/lib/components/error-message/error-message.module.css'

type ErrorMessageProps = PropsWithChildren<{
  code: string
  title: string
}>

export const ErrorMessage = ({ code, title, children }: ErrorMessageProps) => {
  return (
    <section className={styles.error}>
      <h2 className={styles.code}>{code}</h2>
      <div className={styles.body}>
        <p className={styles.title}>{title}</p>
        <div className={styles.actions}>{children}</div>
      </div>
    </section>
  )
}
