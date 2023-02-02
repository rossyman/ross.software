import {StylizedText} from '../stylized-text/StylizedText'
import {getAnimationOrder} from '../utils/getAnimationOrder'
import styles from './styles/AboutMe.module.css'

const ANIMATION_ORDER = getAnimationOrder(1)

export default function AboutMe() {

    const rittechLink = 'https://www.bcs.org/membership-and-registrations/get-registered/professional-registration-for-it-technicians-rittech/'
    const mbcsLink = 'https://www.bcs.org/membership-and-registrations/become-a-member/'
    const mietLink = 'https://www.theiet.org/membership/'
    const strathclydeLink = 'https://www.strath.ac.uk'
    const inflowLink = 'https://getinflow.io'

    return (
        <section style={ANIMATION_ORDER}>
            <p className={styles.contentItem}>
                <StylizedText>Building experiences;</StylizedText> improving the lives of others one screen at a time. A{' '}
                Member of the Chartered Institute for I.T. (<StylizedText href={mbcsLink}>MBCS</StylizedText>), a Member{' '}
                of the Institution of Engineering and Technology (<StylizedText href={mietLink}>MIET</StylizedText>) and{' '}
                a Registered I.T. Technician (<StylizedText href={rittechLink}>RITTech</StylizedText>) within the UK.
            </p>
            <p className={styles.contentItem}>
                Graduated with Merit from <StylizedText href={strathclydeLink}>The University of{' '}
                Strathclyde</StylizedText> with a Bachelors in Software Engineering. Full-stack Engineer{' '}
                at <StylizedText><a href={inflowLink}>Inflow</a></StylizedText>.
            </p>
        </section>
    )
}
