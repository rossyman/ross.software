import { getAnimationOrder } from '../utils/getAnimationOrder'

const ANIMATION_ORDER = getAnimationOrder(5)

export default function Footer() {

  const year = new Date().getFullYear()

  return (
    <footer style={ANIMATION_ORDER}>
      <small><p>&copy; {year}</p></small>
    </footer>
  )
}
