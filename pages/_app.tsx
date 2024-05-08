import React from "react";
import "@/styles/globals.css";

import { ChakraProvider } from "@chakra-ui/react";
import { RecoilRoot } from "recoil";

import { theme } from "../styles/theme";

import type { AppProps } from "next/app";
import Script from "next/script";
import * as gtag from "lib/gtag";
import ViewTransition from "@/components/common/ViewTransition";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6093771403309017"
        crossOrigin="anonymous"
      ></Script>
      <ChakraProvider theme={theme}>
        <RecoilRoot>
          <ViewTransition>
            <Component {...pageProps} />
          </ViewTransition>
        </RecoilRoot>
        <meta
          http-equiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        ></meta>
      </ChakraProvider>
    </>
  );
}
