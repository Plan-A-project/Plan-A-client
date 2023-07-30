import { Html, Head, Main, NextScript } from "next/document";
import { resetServerContext } from "react-beautiful-dnd";

export default function Document() {
  resetServerContext();
  return (
    <Html lang="en">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard-dynamic-subset.css"
        />
       <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
