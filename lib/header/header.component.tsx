import styles from './styles/Header.module.css'
import Logo from '../logo/logo.component'
import {getAnimationOrder} from '../utils/getAnimationOrder'

const ANIMATION_ORDER = getAnimationOrder(0)

export default function Header() {
  return (
    <header style={ANIMATION_ORDER}>
      <Logo width={40} height={40} />
      <div className={`title ${styles.pointer}`}>
        <h1>
          Ross <span className='hidden-xxsm'>MacPhee</span>
        </h1>
        <p>
          /rɒs<span className='hidden-xxsm'> məkfi</span>/{' '}
          <span className='hidden-sm'> - RITTech Advanced MBCS MIET BSc</span>
        </p>
      </div>
    </header>
  )
}