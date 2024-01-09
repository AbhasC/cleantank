import Head from "next/head";
import { Fragment } from "react";
import HomeLanding from "./home-landing/home-landing";
import HomeAbout from "./home-about/home-about";
import HomeTestes from "@modules/homepage/home-testes/home-testes";

export default function HomeModule() {
  return (
    <Fragment>
      <Head>
        <title>CleanTank</title>
        <meta name="description" content="CleanTnk website" />
        <meta name="author" content="Abhas Chatterjee" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main className="main" id="main">
        <HomeLanding />
        <HomeAbout />
        <HomeTestes />
      </main>
    </Fragment>
  );
}
