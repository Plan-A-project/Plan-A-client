import { ChakraProvider } from "@chakra-ui/react";

import { theme } from "../styles/theme";

import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </ChakraProvider>
  );
}
