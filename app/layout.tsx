import '../styles/globals.css'
import {ReactNode} from 'react'
import {Inter, Vollkorn} from 'next/font/google'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import ThemeSwitcher from '../components/theme-switcher/ThemeSwitcher'
import {Providers} from './providers'

const INTER = Inter({subsets: ['latin'], variable: '--font'})
const VOLLKORN = Vollkorn({subsets: ['latin'], variable: '--stylized-font'})

export default function Layout({children}: {children: ReactNode}) {
  return (
    <html suppressHydrationWarning lang='en'>
      <body className={`${INTER.variable} ${VOLLKORN.variable}`}>
        <Providers>
          <div className='container'>
            <Header />
            <main>{children}</main>
            <Footer />
            <ThemeSwitcher />
          </div>
        </Providers>
      </body>
    </html>
  )
}
