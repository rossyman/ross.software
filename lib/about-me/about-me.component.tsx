import {StylizedText} from '../stylized-text/stylized-text.component'
import {getAnimationOrder} from '../utils/getAnimationOrder'

const ANIMATION_ORDER = getAnimationOrder(1)

export default function AboutMe() {
  const rittechLink =
    'https://www.bcs.org/membership-and-registrations/get-registered/professional-registration-for-it-technicians-rittech/'
  const mbcsLink = 'https://www.bcs.org/membership-and-registrations/become-a-member/'
  const mietLink = 'https://www.theiet.org/membership/'
  const strathclydeLink = 'https://www.strath.ac.uk'
  const inflowLink = 'https://getinflow.io'

  return (
    <section style={ANIMATION_ORDER}>
      <p>
        Building experiences; improving the lives of others one screen at a time. A Member of the Chartered Institute
        for I.T. (<StylizedText href={mbcsLink}>MBCS</StylizedText>), a Member of the Institution of Engineering and
        Technology (<StylizedText href={mietLink}>MIET</StylizedText>) and an Advanced Registered I.T. Technician (
        <StylizedText href={rittechLink}>RITTech Advanced</StylizedText>) within the UK.
      </p>
      <p>
        Graduated with Merit from <StylizedText href={strathclydeLink}>The University of Strathclyde</StylizedText> with
        a Bachelors in Software Engineering. Senior Software Engineer at{' '}
        <StylizedText href={inflowLink}>Inflow</StylizedText>.
      </p>
    </section>
  )
}
