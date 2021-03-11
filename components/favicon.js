import Head from "next/head";

export default function Favicon() {
  return (
    <Head>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
    </Head>
  );
}
