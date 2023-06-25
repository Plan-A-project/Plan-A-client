import { ChakraProvider } from "@chakra-ui/react";
import "@/styles/globals.css";
import Head from "next/head";
import { RecoilRoot } from "recoil";

import { theme } from "../styles/theme";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, user-scalable=no"
        />
      </Head>
      <ChakraProvider theme={theme}>
        <RecoilRoot>
          <Component {...pageProps} />
        </RecoilRoot>
      </ChakraProvider>
    </>
  );
}
