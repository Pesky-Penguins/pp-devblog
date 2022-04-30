import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import * as Fathom from 'fathom-client';

import '../styles/globals.css';

export default function PeskyPenguins({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    Fathom.load('CKJEQIGX', {
      includedDomains: ['blog.pesky-penguins.com'],
    });
    function onRouteChangeComplete() {
      Fathom.trackPageview();
    }
    // Record a pageview when route changes
    router.events.on('routeChangeComplete', onRouteChangeComplete);
    // Unassign event listener
    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <title>Pesky Penguins Devblog</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
