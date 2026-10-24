import { type ComponentProps, Fragment } from 'react'
import experiences from '../experience-timeline/snippets/experiences.json'

export const AboutMe = (props: ComponentProps<'section'>) => {
  const previousCompanies = experiences.slice(1)

  return (
    <section {...props}>
      <p>
        Based in Scotland, I lead engineering at Phasio, a platform that democratises production knowledge so{' '}
        manufacturers and their agents can ship parts faster.
      </p>
      <p>
        Previously at {previousCompanies.map((company, i) => (
          <Fragment key={`previous-company-${company.shortName}`}>
            <a href={company.href}>{company.shortName}</a>
            {i < previousCompanies.length - 2 ? ', ' : i < previousCompanies.length - 1 ? ', and ' : '.'}
          </Fragment>
        ))}
      </p>
    </section>
  )
}
