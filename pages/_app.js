import "../styles/globals.css";
import Head from "next/head";
import { useRouter } from "next/router";
import { Analytics } from "@vercel/analytics/react";
import Container from "../components/container";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Ethan Mathes</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/logo.svg" />
        <meta name="description" content="Portfolio Site for Ethan Mathes" />
        <meta property="og:image" content="/thumbnail.png" />
      </Head>
      <Analytics />
      <Container currentPage={router.pathname}>
        <Component {...pageProps} />
      </Container>
    </>
  );
}

export default MyApp;
