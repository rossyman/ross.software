import { ImageResponse } from 'next/og'
import { LOGO_BACKGROUND, LOGO_FOREGROUND, Logo } from '@/lib/components/logo/logo'

const SIZES = [32, 48]

export function generateImageMetadata() {
  return SIZES.map((size) => ({
    id: size,
    size: { width: size, height: size },
    contentType: 'image/png'
  }))
}

export default async function Icon({ id }: { id: Promise<string> }) {
  const size = Number(await id)
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
      <Logo size={Math.round(size * 0.8)} />
    </div>,
    { width: size, height: size }
  )
}
