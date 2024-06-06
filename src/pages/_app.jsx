import '@/styles/scss/main.scss'
import { Fragment } from 'react';
import Head from 'next/head';
import Layout from '@/components/layout';

function App({ Component, pageProps }) {
  return (
    <Fragment>
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