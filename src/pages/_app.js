import Theme from "../styles/theme";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Zeeshan Khalid - ReactJS & Front End Dev</title>
        <script
          src="https://www.googletagmanager.com/gtag/js?id=G-LGDDFE3MG2"
          strategy="afterInteractive"
        />
        <script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-LGDDFE3MG2');
        `}
        </script>
      </Head>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
