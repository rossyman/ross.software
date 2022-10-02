import { ReactNode } from 'react'

interface StylizedTextProps {
  children: ReactNode
  href?: string
}

export function StylizedText({children, href}: StylizedTextProps) {
  return (
    href
      ? <StylizedText><a href={href}>{children}</a></StylizedText>
      : <span className='stylized-text'>{children}</span>
  )
}
