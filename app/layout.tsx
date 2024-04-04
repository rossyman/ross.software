import '../styles/globals.css'
import {ReactNode} from 'react'
import {Figtree, Montagu_Slab} from 'next/font/google'
import Footer from '@lib/footer/footer.component'
import Header from '@lib/header/header.component'
import ThemeSwitcher from '@lib/theme-switcher/theme-switcher.component'
import {Providers} from '@lib/utils/providers'
import {Analytics} from '@vercel/analytics/react'

const FIGTREE = Figtree({subsets: ['latin'], variable: '--font'})
const MONTAGU = Montagu_Slab({subsets: ['latin'], variable: '--stylized-font'})

export default function Layout({children}: {children: ReactNode}) {
  return (
    <html suppressHydrationWarning lang="en">
    <body className={`${FIGTREE.variable} ${MONTAGU.variable}`}>
      <Providers>
        <div className="container">
          <Header />
          <main>{children}</main>
          <Footer />
          <ThemeSwitcher />
        </div>
      </Providers>
      <Analytics />
    </body>
    </html>
  )
}
