import React from "react";

import "@/styles/globals.css";
import Head from "next/head";
import { Montserrat } from "next/font/google";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import useThemeSwitcher from "@/components/hooks/useThemeSwitcher";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

//  Initialize Pages. Component is active page, pageProps is props of the active page
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/alicolakdev.png" />
      </Head>
      <main
        className={`${montserrat.variable} font-mont bg-light w-full min-h-screen dark:bg-dark `}
      >
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  );
}
