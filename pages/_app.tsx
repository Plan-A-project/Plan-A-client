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
    textStyles: {
      headline1: {
        fontSize: "24px",
        fontWeight: "semibold",
        lineHeight: "32px",
        letterSpacing: "0",
      },
      headline2: {
        fontSize: "20px",
        fontWeight: "semibold",
        lineHeight: "20px",
        letterSpacing: "0",
      },
      subtitle1: {
        fontSize: "18px",
        fontWeight: "semibold",
        lineHeight: "21px",
        letterSpacing: "0",
      },
      subtitle2: {
        fontSize: "16px",
        fontWeight: "semibold",
        lineHeight: "19px",
        letterSpacing: "0",
      },
      body1: {
        fontSize: "16px",
        fontWeight: "regular",
        lineHeight: "20px",
        letterSpacing: "0",
      },
      body2: {
        fontSize: "14px",
        fontWeight: "regular",
        lineHeight: "17px",
        letterSpacing: "0",
      },
      caption1: {
        fontSize: "12px",
        fontWeight: "semibold",
        lineHeight: "14px",
        letterSpacing: "0",
      },
      caption2: {
        fontSize: "12px",
        fontWeight: "regular",
        lineHeight: "14px",
        letterSpacing: "0",
      },
      overline: {
        fontSize: "10px",
        fontWeight: "regular",
        lineHeight: "12px",
        letterSpacing: "0",
      },
      timetable1: {
        fontSize: "9px",
        fontWeight: "medium",
        lineHeight: "11px",
        letterSpacing: "0",
      },
      timetable2: {
        fontSize: "7px",
        fontWeight: "regular",
        lineHeight: "8px",
        letterSpacing: "0",
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
