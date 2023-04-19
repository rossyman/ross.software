interface ExperienceEntry {
    name: string
    role: string | string[]
    description: string
    href: string
    currentlyHiring?: string
}

interface ExperienceTimespan {
    timespan: string
}

export type Experience = ExperienceEntry | ExperienceTimespan

export const isTimespanEntry = (experience: Experience): experience is ExperienceTimespan =>
    (<ExperienceTimespan>experience).timespan !== undefined
