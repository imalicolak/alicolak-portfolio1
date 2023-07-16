import React, { useRef } from "react";
import Head from "next/head";
import Image from "next/image";

import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import aliMusic from "../../public/images/instagram/aliMusic.jpg";

//COMPONENT FOR NUMBER

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView({ ref });
  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>Software engineer by day, singer/songwriter at night</title>
        <meta
          name="About Ali Colak"
          content="Ali Colak is a singer/songwriter & software engineer based out of Chicago Illinois. He holds a bachelors of science in Marketing & Product Management. He wants to change the world, one song, one project at a time"
        />
      </Head>

      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText className="mb-16" text="You gotta want it!" />
          <div className="grid w-full grid-cols-8 gap-16 ">
            <div className="col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
                {" "}
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
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 ">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark " />
              <Image
                src={aliMusic}
                alt="Ali Colak"
                className="w-full h-auto rounded-2xl"
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between">
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">10+</span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  {" "}
                  satisfied Clients
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">10+</span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  {" "}
                  Projects Completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">1+</span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  {" "}
                  Years of Experience
                </h2>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default about;
