import { StylizedText } from '../stylized-text/StylizedText'
import { getAnimationOrder } from '../utils/getAnimationOrder'
import styles from './styles/ContactMe.module.css'

const ANIMATION_ORDER = getAnimationOrder(4)

export default function ContactMe() {
  const linkedinUrl = 'https://www.linkedin.com/in/ross-macphee'
  const githubUrl = 'https://github.com/rossyman'

  return (
    <section style={ANIMATION_ORDER}>
      <h2>Connect</h2>
      <p className={styles.contactMe}>
        <StylizedText>Let&apos;s hang out</StylizedText>; Contact me on <StylizedText><a href={linkedinUrl}>LinkedIn</a></StylizedText> - 
        If you&apos;re in Glasgow, let&apos;s grab a coffee.
      </p>
      <p>
        <StylizedText>Interested in my work? </StylizedText> Find me on <StylizedText><a href={githubUrl}>GitHub</a></StylizedText>.
      </p>
    </section>
  )
}
