import styles from './header.module.css'
import {Logo} from '@/lib/components/logo/logo'

export const Header = () => {
  return (
    <header>
      <Logo width={40} height={40} />
      <div className={`title ${styles.pointer}`}>
        <h1>
          Ross <span className="hidden-xxsm">MacPhee</span>
        </h1>
        <p>
          /rɒs<span className="hidden-xxsm"> məkfi</span>/{' '}
          <span className="hidden-sm"> - RITTech Advanced MBCS MIET BSc</span>
        </p>
      </div>
    </header>
  )
}
