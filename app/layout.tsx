import '../styles/globals.css'

import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import {ReactNode} from 'react'
import ThemeSwitcher from '../components/theme-switcher/ThemeSwitcher'

export default function Layout({children}: { children: ReactNode }) {
    return (
        <html lang='en'>
        <body>
            <div className='container'>
                <Header/>
                <main>{children}</main>
                <Footer/>
                <ThemeSwitcher/>
            </div>
        </body>
        </html>
    )
}
