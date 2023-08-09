import React, { useEffect, useRef } from "react";
import Head from "next/head";
import Image from "next/image";

import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import {
  AnimatePresence,
  motion,
  useInView,
  useMotionValue,
  useSpring,
} from "framer-motion";
import aliMusic from "../../public/images/instagram/aliMusic.jpg";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";

//COMPONENT FOR NUMBER

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3500 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      console.log(latest);
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);
  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>About Me</title>
        <meta
          name="About Ali Colak"
          content="Ali Colak is a singer/songwriter & software engineer based out of Chicago Illinois. He holds a bachelors of science in Marketing & Product Management. He wants to change the world, one song, one project at a time"
        />
      </Head>
      <div className="grid w-full grid-cols-8 gap-16 sm:gap-8"></div>
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            className="mb-16 lg:!text-7xl sm:!text-6xl !xs:!text-4xl sm:mb-8 "
            text="You gotta want it!"
          />

          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biography
              </h2>
              <p className="font-medium">
                Whats up guys! Im Ali Colak, a software engineer, musician, and
                storyteller with a passion for creating beautiful, functional,
                and useful experiences. With around a year of experience in the
                field, I am always looking for new and innovative ways to bring
                visions to life.
              </p>
              <p className="font-medium my-4">
                Stories sell. I believe that software has to solve a problem
                while having good UI/UX in the process.
              </p>
              <p className="font-medium">
                Whether Im working on a website, mobile app, or other digital
                product, I bring my commitment to design excellence and
                user-centered thinking to every project I work on. Looking
                forward to helping you tell your story better.
              </p>
            </div>

            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border dark:border-light shadow-xl xl:col-span-4 md:order-1 md:col-span-8  ">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                src={aliMusic}
                alt="Ali Colak"
                className="w-full h-auto rounded-2xl "
                draggable="false"
                sizes="(max-width: 768px) 100vw, (max-width:1200px) 50vw, 33vw"
              />
            </div>

            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold ">
                  <AnimatedNumbers value={5} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75">
                  {" "}
                  satisfied Clients
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={10} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75">
                  {" "}
                  Projects Completed
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={1} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75">
                  {" "}
                  Years of Experience
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
