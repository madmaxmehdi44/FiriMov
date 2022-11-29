import './globals.scss'
import { NextSeo } from 'next-seo';
import Script from 'next/script'
import Nav from '../components/Nav'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="manifest.json" />
        <NextSeo
          useAppDir={true}
          themeColor="#1c1c1c"
          titleTemplate="%s | MoviesPrix"
        />
      </head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-Y94T96FRD7"
        strategy="afterInteractive"
      />
      <Script
        strategy="afterInteractive"
        id="google-analytics"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Y94T96FRD7');
          `,
        }}
      />
      <body>
        < Nav />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
