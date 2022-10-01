import Link from 'next/link'
import styles from '../styles/_error.module.css'

export default function Error404() {
  return (
    <div className={styles.error}>
      <h1>404</h1>
      <div>
        <h2>This page could not be found.</h2>
        <p className={styles.backButton}><small><Link href="/">Go home</Link></small></p>
      </div>
    </div>
  )
}
