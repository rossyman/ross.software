import '../styles/globals.css'
import type {PropsWithChildren} from 'react'
import {Figtree, Montagu_Slab} from 'next/font/google'
import {Analytics} from '@vercel/analytics/next'
import {SpeedInsights} from '@vercel/speed-insights/next'
import {ThemeProvider} from 'next-themes'
import {Header} from '@/lib/components/header/header'
import {Footer} from '@/lib/components/footer/footer'
import {ThemeSwitcher} from '@/lib/components/theme-switcher/theme-switcher'

const FIGTREE = Figtree({subsets: ['latin'], variable: '--font'})
const MONTAGU = Montagu_Slab({subsets: ['latin'], variable: '--stylized-font'})

export default function Layout({children}: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${FIGTREE.variable} ${MONTAGU.variable}`}>
        <ThemeProvider disableTransitionOnChange>
          <div className="container">
            <Header />
            <main>{children}</main>
            <Footer />
            <ThemeSwitcher />
          </div>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
