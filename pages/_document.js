/* eslint-disable */

import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Favicons */}
          <link rel="icon" type="image/png" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />

          {/* Fonts */}
          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link rel="preconnect" href="https://fonts.gstatic.com"></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Luckiest+Guy&family=Open+Sans:wght@300;400;700&display=swap"
            rel="stylesheet"
          />

          {/* Metadata */}
          <meta name="twitter:site" content="https://twitter.com/peskypenguins" />
          <meta name="twitter:title" content="Pesky Penguins" />
          <meta property="og:title" content="Pesky Penguins" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://blog.pesky-penguins.com" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
