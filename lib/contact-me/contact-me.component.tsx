import {getAnimationOrder} from '../utils/get-animation-order'

const ANIMATION_ORDER = getAnimationOrder(3)

export default function ContactMe() {
  const linkedinUrl = 'https://www.linkedin.com/in/ross-macphee'
  const githubUrl = 'https://github.com/rossyman'

  return (
    <section style={ANIMATION_ORDER}>
      <h2>Connect</h2>
      <p>
        Let&apos;s hang out! Contact me on <a href={linkedinUrl}>LinkedIn</a>{' '}
        - If you&apos;re in Glasgow, let&apos;s grab a coffee.
        <br />
        Interested in my work? Find me on <a href={githubUrl}>GitHub</a>.
      </p>
    </section>
  )
}
