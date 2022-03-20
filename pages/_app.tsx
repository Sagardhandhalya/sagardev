import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import theme from "../styles/theme";
import Layout from "../components/Layout";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>Sagar Dev</title>
        <meta name="description" content="Portfolio of Sagar dhandhalya" />
      </Head>
      <Layout>
         <CSSReset />
        <Component {...pageProps} />
      </Layout>
     
    </ChakraProvider>
  );
}

export default MyApp;
