'use client'

import {Monitor, Moon, Sun} from 'react-feather'
import {useTheme} from 'next-themes'
import styles from './styles/theme-switcher.module.css'
import {useEffect, useRef, useState} from 'react'
import {useOutsideClick} from '@lib/hooks/use-outside-click'

export default function ThemeSwitcher() {

  const [mounted, setMounted] = useState(false)
  const [expanded, setExpanded] = useState(false);
  const {resolvedTheme, setTheme} = useTheme()
  const containerRef = useRef<HTMLDivElement>(null)

  const toggleTheme = () => {
    if (expanded) {
      setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
    }
  }

  const setSystem = () => {
    setTheme('system');
  }

  const toggleExpanded = () => {
    setExpanded(!expanded);
  }

  useEffect(() => setMounted(true), [])

  useOutsideClick(containerRef, () => {
    if (expanded) {
      toggleExpanded()
    }
  })

  return (
    <>
      {mounted && (
        <div className={styles.container} onClick={toggleExpanded} ref={containerRef}>
          <div className={`${styles.switcher} ${expanded ? styles.systemSwitcherIn : styles.systemSwitcherOut}`}
               onClick={setSystem}>
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
