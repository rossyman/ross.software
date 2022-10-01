import Link from 'next/link'
import styles from '../styles/_error.module.css'

export default function Error500() {
  return (
    <div className={styles.error}>
      <h1>500</h1>
      <div>
        <h2>Server-side error occurred</h2>
        <p className={styles.backButton}><small><Link href="/">Go home</Link></small></p>
      </div>
    </div>
  )
}
