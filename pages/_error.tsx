import Link from 'next/link'
import styles from '../styles/_error.module.css'

export default function Error() {
  return (
    <div className={styles.error}>
      <h1>Error</h1>
      <div>
        <h2>Unfortunately, an error has occurred</h2>
        <p className={styles.backButton}><small><Link href='/'>Go home</Link></small></p>
      </div>
    </div>
  )
}
