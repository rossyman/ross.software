import type {SectionProps} from '@/lib/types/section-props'

export const ContactMe = (props: SectionProps) => {

  const linkedinUrl = 'https://www.linkedin.com/in/ross-macphee'
  const githubUrl = 'https://github.com/rossyman'

  return (
    <section {...props}>
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
