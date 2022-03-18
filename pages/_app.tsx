import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import theme from "../styles/theme";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
         <CSSReset />
        <Component {...pageProps} />
      </Layout>
     
    </ChakraProvider>
  );
}

export default MyApp;
