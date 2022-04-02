import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="facebook-domain-verification" content="nb0ijizladl5ynddwrenxsdu4fmu29" />
          {/* <!-- Google Tag Manager --> */}
          <script type="text/javascript" dangerouslySetInnerHTML={{
            __html: `(function (w, d, s, l, i) {
            w[l] = w[l] || []; w[l].push({
              'gtm.start':
                new Date().getTime(), event: 'gtm.js'
            }); var f = d.getElementsByTagName(s)[0],
              j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
                'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
          })(window, document, 'script', 'dataLayer', 'GTM-TS3S2N5');`}} />

          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=Maven+Pro:wght@700;800;900&display=swap'
            rel='stylesheet'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap'
            rel='stylesheet'
          />
          <link rel='shortcut icon' href='/favicon.png' type='image/png' />
        </Head>
        <body>
          {/* <!-- Google Tag Manager (noscript) --> */}
          <noscript>
            <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TS3S2N5"
              height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}>
            </iframe>
          </noscript>
          {/* <!-- End Google Tag Manager (noscript) --> */}
          <Main />
          <NextScript />
        </body>
      </Html >
    );
  }
}
