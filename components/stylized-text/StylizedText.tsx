import { ReactNode } from 'react'

interface StylizedTextProps {
  children: ReactNode
  href?: string
}

export function StylizedText({children, href}: StylizedTextProps) {
  return (
    href
      ? <a href={href}><StylizedText>{children}</StylizedText></a>
      : <span className='stylized-text'>{children}</span>
  )
}
