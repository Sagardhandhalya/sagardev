import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import theme from "../styles/theme";
import Layout from "../components/Layout";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-ETNNYD0N93"></Script>
      <Script id="google-analytics">
        {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-ETNNYD0N93');`}
      </Script>
      <Head>
        <title>Sagar Dev</title>
        <meta name="description" content="Portfolio of Sagar dhandhalya" />
        <meta
          name="google-adsense-account"
          content="ca-pub-2456006984415737"
        ></meta>
      </Head>
      <Layout>
        <CSSReset />
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
