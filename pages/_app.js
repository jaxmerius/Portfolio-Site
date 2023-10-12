import "../styles/globals.css";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Ethan Mathes</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/logo.svg" />
        <meta property="og:image" content="/thumbnail.png" />
      </Head>
      <Analytics />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
