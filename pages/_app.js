import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Ethan Mathes</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/logo.png" />
        <meta property="og:image" content="/thumbnail.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
