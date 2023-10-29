'use client'

import {Moon, Sun} from 'react-feather'
import {useTheme} from 'next-themes'
import styles from './styles/ThemeSwitcher.module.css'
import {useEffect, useState} from 'react'

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const {resolvedTheme, setTheme} = useTheme()

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  useEffect(() => setMounted(true), [])

  return (
    <div className={styles.container} onClick={toggleTheme}>
      {mounted && <>{resolvedTheme === 'dark' ? <Sun color='var(--bg)' /> : <Moon color='var(--bg)' />}</>}
    </div>
  )
}
