import type { AppProps } from "next/app";
import { Global } from "@emotion/react";
import { Fragment } from "react";
import Header from "@modules/header/header";
import { globalCss } from "@/styles/globals";
import Footer from "@modules/footer/footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Global styles={globalCss} />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Fragment>
  );
}
