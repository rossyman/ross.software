import Footer from '../components/footer/Footer'
import Head from 'next/head'
import Header from '../components/header/Header'
import { ReactNode } from 'react'
import ThemeSwitcher from '../components/theme-switcher/ThemeSwitcher'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({children}: LayoutProps) {
  return (
    <>
      <div className='container'>
        <Head>
          <title>Ross MacPhee</title>
        </Head>
        <Header />
        <main>{children}</main>
        <Footer />
        <ThemeSwitcher />
      </div>
    </>
  )
}
