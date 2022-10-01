import Logo from '../logo/Logo'
import { getAnimationOrder } from '../utils/getAnimationOrder'

const ANIMATION_ORDER = getAnimationOrder(0)

export default function Header() {
  return (
    <header style={ANIMATION_ORDER}>
      <Logo width={40} height={40} />
      <div className='title'>
        <h1>Ross <span className='hidden-xxsm'>MacPhee</span></h1>
        <p>/rɒs<span className='hidden-xxsm'> məkfi</span>/ <span className='hidden-sm'>- MBCS, RITTech, BSc</span></p>
      </div>
    </header>
  )
}
