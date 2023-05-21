// import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
  const theme = extendTheme({
    styles: {
      global: {},
    },
  });

  return (
    <ChakraProvider theme={theme}>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </ChakraProvider>
  );
}
