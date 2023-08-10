import "@/styles/globals.css";

import { ChakraProvider } from "@chakra-ui/react";
import { RecoilRoot } from "recoil";

import { theme } from "../styles/theme";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
      <meta
        http-equiv="Content-Security-Policy"
        content="upgrade-insecure-requests"
      ></meta>
    </ChakraProvider>
  );
}
