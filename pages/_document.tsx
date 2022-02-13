import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ja" prefix="og: http://ogp.me/ns#">
      <Head>
        <meta property="og:url" key="url" content="https://ikmnjrd.github.io/" />
        <meta property="og:type" key="type" content="website" />
        <meta property="og:image" key="image" content="https://ikmnjrd.github.io/Untitled.png" />
        <meta property="og:title" key="title" content="ikmnjrd.github.io" />
        <meta name="author" content="ikmnjrd" />
        <meta charSet="utf-8" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        {/* Global site tag (gtag.js) - Google Analytics */}
        { process.env.NODE_ENV !== "development" ||
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_MEASUREMENT_ID}`}></script>
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.GA_MEASUREMENT_ID}', { page_path: window.location.pathname });
                `,
              }}
            />
          </>
        }
      </Head>
      <body className="dark:bg-newmo-800 text-newmo-400 dark:text-newmo-100">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}