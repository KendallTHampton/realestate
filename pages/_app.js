import Router from 'next/router';
import Head from 'next/head';
import NProgress from 'nprogress';
import {ChakraProvider} from '@chakra-ui/react';

import Layout from '../components/Layout';


/**
 * ! ***********  MAIN PAGE  *************
 */

/**
 * ? ----------- DESCRIPTION ------------
 */

// Where our app resides. We will be adding our loading animation



function MyApp({Component, pageProps})
{



  return (
    <>
      <Head>
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css' integrity='sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ==' crossOrigin='anonymous' referrerPolicy='no-referrer' />
      </Head>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  )
}

export default MyApp
