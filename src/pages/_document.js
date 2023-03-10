import Document, { Head, Html, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html lang="en-GB">
        <Head>
          <link rel="icon" type="image/png" sizes="32x32" href="/logo.jpeg" />
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <meta
            name="title"
            content="Zeeshan Khalid - ReactJS & Front End Dev"
          />
          <meta
            name="description"
            content="Hey there, This is Zeeshan Khalid. I am an ReactJS & Front End Developer."
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="Zeeshan Khalid - ReactJS & Front End Dev"
          />
          <meta
            property="og:description"
            content="Hey there, This is Zeeshan Khalid. I am an ReactJS & Front End Developer."
          />
          <meta property="og:image" content="" />
          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:title"
            content="Zeeshan Khalid - ReactJS & Front End Dev"
          />
          <meta
            property="twitter:description"
            content="Hey there, This is Zeeshan Khalid. I am an ReactJS & Front End Developer."
          />
          <meta property="twitter:image" content="" />
          <script
            src="//code.tidio.co/pwzub5dqskeabve5odwlaec6eisuw7px.js"
            async
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
