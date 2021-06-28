import Head from 'next/head';

import Layout from '../components/layout/layout.js';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>nextJS Tutorial Project</title>
        <meta name="description" content="Tutorial Project" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
  		<Component {...pageProps} />
  	</Layout>
  );
}

export default MyApp
