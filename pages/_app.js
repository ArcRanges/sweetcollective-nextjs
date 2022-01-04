import "../styles/globals.css";

import "containers/Footer/Footer.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"
        ></link>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
