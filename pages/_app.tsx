import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import "@/styles/globals.css";
import type { AppProps } from "next/app";

const DEFAULT_FONT =
  "Pretendard, ui-monospace, Menlo, Monaco, 'Cascadia Mono', 'Segoe UI Mono', 'Roboto Mono', 'Oxygen Mono', 'Ubuntu Monospace', 'Source Code Pro', 'Fira Mono', 'Droid Sans Mono', 'Courier New', monospace";

const theme = extendTheme({
  fonts: {
    body: DEFAULT_FONT,
    heading: DEFAULT_FONT,
    mono: DEFAULT_FONT,
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
