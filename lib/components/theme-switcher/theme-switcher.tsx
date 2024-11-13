'use client'

import styles from './theme-switcher.module.css'
import {Monitor, Moon, Sun} from 'react-feather'
import {useTheme} from 'next-themes'
import {useCallback, useEffect, useMemo, useRef, useState} from 'react'
import {useOutsideClick} from '@/lib/hooks/use-outside-click'

export const ThemeSwitcher = () => {

  const {resolvedTheme, setTheme} = useTheme()
  const [mounted, setMounted] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const toggleTheme = useCallback(
    () => expanded && setTheme(resolvedTheme === 'dark' ? 'light' : 'dark'),
    [expanded, resolvedTheme, setTheme]
  )

  const toggleExpanded = useCallback(
    () => setExpanded(!expanded),
    [expanded]
  )

  const switcherStyles = useMemo(
    () => expanded ? styles.systemSwitcherIn : styles.systemSwitcherOut,
    [expanded]
  )

  useOutsideClick(containerRef, () => expanded && toggleExpanded())
  useEffect(() => setMounted(true), [])

  return (
    <>
      {mounted && (
        <div className={styles.container} onClick={toggleExpanded} ref={containerRef}>
          <div className={`${styles.switcher} ${switcherStyles}`} onClick={() => setTheme('system')}>
            <Monitor />
          </div>
          <div className={styles.switcher} onClick={toggleTheme}>
            {resolvedTheme === 'dark' ? <Sun /> : <Moon />}
          </div>
        </div>
      )}
    </>
  )
}
