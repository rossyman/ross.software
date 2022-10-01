import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  const description = 'Building experiences; improving the lives of others one screen at a time. Full-stack Engineer at Inflow'
  const title = 'Ross MacPhee'
  return (
    <Html>
      <Head>
        <meta name='title' content={title} />
        <meta property='og:title' content={title} />
        <meta property='twitter:title' content={title} />
        <meta property='description' content={description} />
        <meta property='og:description' content={description} />
        <meta property='twitter:description' content={description} />
        <meta property='og:url' content='https://ross.software' />
        <meta property='twitter:url' content='https://ross.software' />
        <meta property='og:image' content='https://ross.software/og.png' />
        <meta property='twitter:image' content='https://ross.software/og.png' />
        <link rel='icon' href='/favicon.svg' type='image/svg+xml' />
        <link rel='icon' href='/favicon.ico' type='image/x-icon' sizes='any' />
        <link rel='apple-touch-icon' href='/apple-touch-icon.png' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
