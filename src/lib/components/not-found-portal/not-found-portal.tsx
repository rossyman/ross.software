'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { type MouseEvent, useLayoutEffect, useRef } from 'react'
import { Logo } from '@/lib/components/logo/logo'
import styles from '@/lib/components/not-found-portal/not-found-portal.module.css'

const HOLE_RATIO = 86.5 / 393
const PORTAL_TIMING: KeyframeAnimationOptions = { duration: 1100, easing: 'cubic-bezier(0.7, 0, 0.3, 1)', fill: 'both' }

export const NotFoundPortal = () => {
  const ring = useRef<HTMLAnchorElement>(null)
  const arrived = useRef<() => void>(null)
  const router = useRouter()

  useLayoutEffect(() => () => arrived.current?.(), [])

  const open = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!ring.current || !('startViewTransition' in document)) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    event.preventDefault()

    const bounds = ring.current.getBoundingClientRect()
    const x = bounds.left + bounds.width / 2
    const y = bounds.top + bounds.height / 2
    const radius = bounds.width * HOLE_RATIO
    const reach = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y))

    const root = document.documentElement
    root.dataset.portal = ''

    const transition = document.startViewTransition(
      () =>
        new Promise<void>((resolve) => {
          arrived.current = resolve
          router.push('/', { scroll: false })
        })
    )
    transition.ready.then(() => {
      root.animate(
        { transformOrigin: [`${x}px ${y}px`, `${x}px ${y}px`], scale: [1, reach / radius] },
        { ...PORTAL_TIMING, pseudoElement: '::view-transition-old(root)' }
      )
      root.animate(
        { clipPath: [`circle(${radius}px at ${x}px ${y}px)`, `circle(${reach}px at ${x}px ${y}px)`] },
        { ...PORTAL_TIMING, pseudoElement: '::view-transition-new(root)' }
      )
    })
    transition.finished.finally(() => delete root.dataset.portal)
  }

  return (
    <section className={styles.notFound}>
      <h2 className={styles.code} aria-label="404">
        <span aria-hidden="true">4</span>
        <Link ref={ring} href="/" className={styles.ring} onClick={open} aria-label="Back home">
          <Logo size={200} />
        </Link>
        <span aria-hidden="true">4</span>
      </h2>
      <p className={styles.message}>This page could not be found. Step through the ring to head home.</p>
    </section>
  )
}
