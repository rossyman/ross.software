import {getAnimationOrder} from '../utils/getAnimationOrder'

const ANIMATION_ORDER = getAnimationOrder(4)

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={ANIMATION_ORDER}>
      <small>
        &copy; {year}
      </small>
    </footer>
  )
}
