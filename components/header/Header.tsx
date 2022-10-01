import Link from 'next/link'
import Logo from '../logo/Logo'
import { getAnimationOrder } from '../utils/getAnimationOrder'
import styles from './styles/Header.module.css'

const ANIMATION_ORDER = getAnimationOrder(0)

export default function Header() {
  return (
    <header style={ANIMATION_ORDER}>
      <Logo width={40} height={40} />
      <Link href='/'>
        <div className={`title ${styles.pointer}`}>
          <h1>Ross <span className='hidden-xxsm'>MacPhee</span></h1>
          <p>/rɒs<span className='hidden-xxsm'> məkfi</span>/ <span className='hidden-sm'>- MBCS, RITTech, BSc</span></p>
        </div>
      </Link>
    </header>
  )
}
