'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { type CSSProperties, type MouseEvent, useEffect, useRef, useState } from 'react'
import { Logo } from '@/lib/components/logo/logo'
import styles from '@/lib/components/not-found-portal/not-found-portal.module.css'

const HOLE_RATIO = 86.5 / 393
const PREVIEW_SCALE = 0.12
const OPEN_DURATION = 1100

export const NotFoundPortal = () => {
  const root = useRef<HTMLElement>(null)
  const ring = useRef<HTMLAnchorElement>(null)
  const [opening, setOpening] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const align = () => {
      if (!root.current || !ring.current) return
      const bounds = ring.current.getBoundingClientRect()
      const x = bounds.left + bounds.width / 2
      const y = bounds.top + bounds.height / 2
      const radius = ring.current.offsetWidth * HOLE_RATIO
      const reach = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y))
      root.current.style.setProperty('--x', `${x}px`)
      root.current.style.setProperty('--y', `${y}px`)
      root.current.style.setProperty('--r', `${radius}px`)
      root.current.style.setProperty('--dx', `${x - (window.innerWidth / 2) * PREVIEW_SCALE}px`)
      root.current.style.setProperty('--dy', `${y - radius}px`)
      root.current.style.setProperty('--preview-scale', `${PREVIEW_SCALE}`)
      root.current.style.setProperty('--open-scale', `${reach / radius}`)
    }

    align()
    window.addEventListener('resize', align)
    window.addEventListener('scroll', align, { passive: true })
    return () => {
      window.removeEventListener('resize', align)
      window.removeEventListener('scroll', align)
    }
  }, [])

  const open = (event: MouseEvent<HTMLAnchorElement>) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    event.preventDefault()
    setOpening(true)
    window.setTimeout(() => router.push('/'), OPEN_DURATION)
  }

  return (
    <section
      ref={root}
      className={styles.notFound}
      data-opening={opening || undefined}
      style={{ '--open-duration': `${OPEN_DURATION}ms` } as CSSProperties}
    >
      <h2 className={styles.code} aria-label="404">
        <span aria-hidden="true">4</span>
        <Link ref={ring} href="/" className={styles.ring} onClick={open} aria-label="Back home">
          <Logo size={200} />
        </Link>
        <span aria-hidden="true">4</span>
      </h2>
      <p className={styles.message}>This page could not be found. Step through the ring to head home.</p>
      <div className={styles.portal} aria-hidden="true">
        <iframe src="/" title="Homepage" tabIndex={-1} />
      </div>
    </section>
  )
}
