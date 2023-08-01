import React from "react";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components/Icons/";
import jam from "../../public/images/projects/jam-login.png";

const FeaturedProject = ({
  type,
  title,
  summary,
  img,
  link,
  github,
  languages,
}) => {
  return (
    <article className="w-full flex p-12 items-center justify-between rounded-2xl border border-solid border-dark bg-light shadow-xl dark:bg-dark dark:border-light">
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 ">
        <span className="text-orange-700 font-medium text-xl dark:text-primaryDark">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-4"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light">
          {" "}
          {summary}{" "}
        </p>
        <p className="my-1 text-black/75"> {languages} </p>

        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            {" "}
            <GithubIcon />{" "}
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark "
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, languages, link, github }) => {
  return (
    // FOR PROJECT INDIVIDUAL
    <article className="w-full flex flex-col items-center justify-center rounded-xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light ">
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-orange-700 font-medium text-xl dark:text-primaryDark">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-4"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold ">{title}</h2>
        </Link>

        <p className="my-1 text-black/75"> {languages} </p>

        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className=" text-lg font-semibold underline underline-offset-4"
          >
            Website
          </Link>
          <Link href={github} target="_blank" className="w-8">
            {" "}
            <GithubIcon />{" "}
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title> Projects </title>
        <meta
          name="description"
          content="Ali Colak is a singer/songwriter & software engineer based out of Chicago Illinois. He holds a bachelors of science in Marketing & Product Management. He wants to change the world, one song, one project at a time"
        />
      </Head>
      <main className="w-full mb-24 flex flex-col items-center justify-center dark:text-light   ">
        <Layout className="pt-16">
          <AnimatedText text="Rome wasn't built in a day" className="mb-20 " />

          <div className="grid grid-cols-12 gap-24 ">
            <div className="col-span-12">
              <FeaturedProject
                type="Featured Project"
                title="Jam - Chat"
                img={jam}
                summary="Developed a chat app using ReactJS, NodeJS, ExpressJS, MongoDB, created a user registration and login system, and utilized
web sockets to include real-time chatting and user creation"
                languages="ReactJS, NodeJS, ExpressJS, MongoDB, Socket.io, JavaScript, HTML, CSS"
                link="https://github.com/imalicolak/Jam"
                github="/"
              />
            </div>
            <div className="col-span-6">
              <Project
                type="Featured Project"
                title="Jam - Chat"
                img={jam}
                languages="ReactJS, NodeJS, ExpressJS, MongoDB, Socket.io, JavaScript, HTML, CSS"
                link="https://github.com/imalicolak/Jam"
                github="/"
              />
            </div>
            <div className="col-span-6">Project 2</div>
            <div className="col-span-12">Other</div>
            <div className="col-span-6">Project 3</div>
            <div className="col-span-6">Project 4</div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
