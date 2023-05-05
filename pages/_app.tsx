import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

export default function App({ Component, pageProps }: AppProps) {
  const theme = extendTheme({
    styles: {
      global: {
        "html, body": {
          color: "grey.900",
        },
        // a: {
        //   color: "teal.500",
        // },
      },
    },
    breakpoints: {
      sm: "375px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
  });

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
