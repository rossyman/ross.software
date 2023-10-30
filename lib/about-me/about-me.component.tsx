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
        Improving the lives of others, one piece of software at a time. A Member of the Chartered Institute
        for I.T. (<a href={mbcsLink}>MBCS</a>), a Member of the Institution of Engineering and Technology (
        <a href={mietLink}>MIET</a>) and an Advanced Registered I.T. Technician (
        <a href={rittechLink}>RITTech Advanced</a>) within the UK.
      </p>
      <p>
        Graduated with Merit from <a href={strathclydeLink}>The University of Strathclyde</a> with a Bachelors in
        Software Engineering. Senior Software Engineer at <a href={inflowLink}>Inflow</a>.
      </p>
    </section>
  )
}
