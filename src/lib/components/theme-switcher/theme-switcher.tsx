'use client'

import styles from './theme-switcher.module.css'
import { Monitor, Moon, Sun } from 'lucide-react'
import { useTheme } from '@wrksz/themes/client'
import { useEffect, useState } from 'react'

export const ThemeSwitcher = () => {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return null
  }

  const nextTheme = resolvedTheme === 'dark' ? 'light' : 'dark'

  return (
    <div className={styles.container}>
      <button
        type="button"
        className={`${styles.switcher} ${styles.systemSwitcher}`}
        onClick={() => setTheme('system')}
        aria-label="Use system theme"
      >
        <Monitor />
      </button>
      <button
        type="button"
        className={styles.switcher}
        onClick={() => setTheme(nextTheme)}
        aria-label={`Switch to ${nextTheme} theme`}
      >
        {resolvedTheme === 'dark' ? <Sun /> : <Moon />}
      </button>
    </div>
  )
}
