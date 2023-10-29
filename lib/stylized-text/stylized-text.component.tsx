import {ReactNode} from 'react'

interface StylizedTextProps {
  children: ReactNode
  className?: string
  href?: string
}

export function StylizedText({children, href, className}: StylizedTextProps) {
  return href ? (
    <StylizedText>
      <a href={href} className={className}>{children}</a>
    </StylizedText>
  ) : (
    <span className={`stylized-text ${className}`}>{children}</span>
  )
}
