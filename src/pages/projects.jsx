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
    <article className="w-full flex items-center justify-between rounded-2xl border border-solid border-dark bg-light shadow-2xl">
      <Link href={link} target="_blank">
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div>
        <span>{type}</span>
        <Link href={link} target="_blank">
          <h2> {title} </h2>
        </Link>
        <p> {summary} </p>
        <p> {languages} </p>

        <Link href={github} target="_blank">
          {" "}
          <GithubIcon />{" "}
        </Link>
        <Link href={link} target="_blank">
          {" "}
          Visit Project
        </Link>
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
      <main className="w-full mb-24 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText text="Rome wasn't built in a day" />

          <div className="grid grid-cols-12 gap-24">
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
            <div className="col-span-6">Project 1</div>
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
