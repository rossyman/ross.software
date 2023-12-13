'use client'

import {Monitor, Moon, Sun} from 'react-feather'
import {useTheme} from 'next-themes'
import styles from './styles/theme-switcher.module.css'
import {useEffect, useState} from 'react'

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const [expanded, setExpanded] = useState(false);
  const {resolvedTheme, setTheme} = useTheme()

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

  return (
    <>
      {mounted && (
        <div onClick={toggleExpanded}>
          {expanded && (
            <div className={`${styles.container} ${styles.systemContainer}`} onClick={setSystem}>
              <Monitor />
            </div>
          )}
          <div className={`${styles.container} ${styles.themeContainer}`} onClick={toggleTheme}>
            {resolvedTheme === 'dark' ? <Sun /> : <Moon />}
          </div>
        </div>
      )}
    </>
  )
}
