import '@/styles/scss/main.scss'
import { Fragment } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '@/components/layout';

function App({ Component, pageProps }) {
  return (
    <Fragment>
      <Script 
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        strategy='afterInteractive'
      />
      <Script
      id='google-analytics-script'
      strategy='afterInteractive'
      >
       { `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}')`}
      </Script>

      <Head>
        <link rel="cinemate icon" href="/images/film-reel-svgrepo-com.svg" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Fragment>
  )
}

export default App;