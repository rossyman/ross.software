import '../styles/globals.css'
import type { Metadata, Viewport } from 'next'
import type { PropsWithChildren } from 'react'
import { Figtree, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { ThemeProvider } from '@wrksz/themes/next'
import { Header } from '@/lib/components/header/header'
import { Footer } from '@/lib/components/footer/footer'

const FIGTREE = Figtree({ subsets: ['latin'], variable: '--font' })
const JETBRAINS_MONO = JetBrains_Mono({ subsets: ['latin'], variable: '--stylized-font' })

const url = 'https://ross.software'
const title = 'Ross MacPhee'
const description =
  'Improving the lives of others, one piece of software at a time. Senior Software Engineer and DevOps / Infrastructure Engineer based out of Glasgow, Scotland.'

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL(url),
  alternates: {
    canonical: '/'
  },
  openGraph: { title, description, url },
  twitter: { card: 'summary', title, description }
}

export const viewport: Viewport = {
  themeColor: '#0a0a0b'
}

export default function Layout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${FIGTREE.variable} ${JETBRAINS_MONO.variable}`}>
        <ThemeProvider attribute="data-theme" storage="hybrid">
          <div className="container">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
