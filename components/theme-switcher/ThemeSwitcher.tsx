import { Moon, Sun } from 'react-feather'
import { useEffect, useState } from 'react'

import { Theme } from './interfaces/Theme'
import styles from './styles/ThemeSwitcher.module.css'

export default function ThemeSwitcher() {

  const [theme, setTheme] = useState<Theme>('light')

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  useEffect(() => {
    const prefersDarkTheme = window.matchMedia('(prefers-color-scheme: dark)')
    const prefersLightTheme = window.matchMedia('(prefers-color-scheme: light)')

    setTheme(
      prefersDarkTheme.matches
        ? 'dark'
        : 'light'
    )

    prefersDarkTheme.addEventListener('change', (e) => e.matches && setTheme('dark'))
    prefersLightTheme.addEventListener('change', (e) => e.matches && setTheme('light'))
  }, [])

  useEffect(() => {
    document.body.dataset.theme = theme
  }, [theme])

  return (
    <div className={styles.container} onClick={toggleTheme}>
      {theme === 'dark' ? (
        <Sun color='var(--bg)' />
      ) : (
        <Moon color='var(--bg)' />
      )}
    </div>
  )
}
