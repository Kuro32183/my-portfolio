/* eslint-disable react/no-unknown-property */
/* eslint-disable @next/next/no-script-in-document */
import Document, { Head, Html, Main, NextScript } from 'next/document'
// import getConfig from 'next/config'
import Script from 'next/script'

// const { publicRuntimeConfig, serverRuntimeConfig } = getConfig()
// const trackingId: string =
//   publicRuntimeConfig.TRACKING_ID || serverRuntimeConfig.TRACKING_ID

// import { GA_TRACKING_ID } from '~/libs/gtag'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja" dir="ltr">
        <Head>
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-C8BYSP297L"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-C8BYSP297L');
        `}
          </Script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
