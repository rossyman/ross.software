import { ImageResponse } from 'next/og'
import { LOGO_BACKGROUND, LOGO_FOREGROUND, Logo } from '@/lib/components/logo/logo'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: LOGO_BACKGROUND,
        color: LOGO_FOREGROUND
      }}
    >
      <Logo size={142} />
    </div>,
    size
  )
}
