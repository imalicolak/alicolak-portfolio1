import React from "react";

import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/images/instagram/aliProfile.jpg";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Ali Colak</title>
        <meta
          name="description"
          content="Ali Colak, software engineer, product manager, data scientist, with a background in business and marketing. <Sneak Peak> "
        />
      </Head>
      <main className="flex items-center text-dark w-full dark:text-light  ">
        <Layout className="pt-0 lg:py-16 md:pt-16 sm:pt-8 ">
          <div className="flex items-center justify-between w-full lg:flex-col ">
            <div className="w-1/2 md:w-full ">
              <Image
                src={profilePic}
                alt="Ali Colak"
                className="w-full h-auto rounded-[1.75em] mt-12 lg:hidden md:inline-block md:w-full "
                draggable="false"
                priority
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center pl-16 lg:w-full lg:text-center lg:mt-12 lg:pl-0 ">
              <AnimatedText
                text="Im Ali Colak"
                className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                Your Chicago neighborhood software engineer, UI/UX designer,
                andd product manager. I spend my days learning by making new
                projects or taking courses.
                <br />
                <br />
                Im enrolled in a data science course to combine code with my
                background in business to hone in on trends and build the next
                big thing.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="/resume-july23.pdf"
                  alt="Resume"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                  border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base"
                  download={true}
                >
                  Resume
                  <LinkArrow className="w-6 ml-2" />
                </Link>
                <Link
                  href="mailto:19acolak99@gmail.com"
                  className="ml-4 text-lg font-medium capitalize text-dark hover:underline underline-offset-4 dark:text-light md:text-base"
                >
                  {" "}
                  Contact me
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        {/* <HireMe /> */}
        <div className="absolute right-8 bottom-8 inline-block w-16 ">
          {/* <Image
            src={lightBulb}
            alt="Ali Colak"
            className="w-full h-auto md:hidden"
          /> */}
        </div>
      </main>
    </>
  );
}
