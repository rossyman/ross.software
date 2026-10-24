import type { ComponentProps } from 'react'

export const LOGO_FOREGROUND = '#0A0A0B'
export const LOGO_BACKGROUND = '#FAF7EC'

type LogoProps = Omit<ComponentProps<'svg'>, 'width' | 'height' | 'role' | 'aria-label' | 'fill' | 'xmlns'> & {
  size: number
}

export const Logo = ({ size, children, ...props }: LogoProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 393 393"
    width={size}
    height={size}
    fill="none"
    role="img"
    aria-label="Ross MacPhee"
    {...props}
  >
    {children}
    <circle cx="196.5" cy="196.5" r="141.5" stroke="currentColor" strokeWidth="110" />
  </svg>
)
