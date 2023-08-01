("use client");

import React, { useState } from "react";
import Link from "next/link";
import Logo from "@/components/Logo";
import { useRouter } from "next/router";
import {
  YoutubeIcon,
  GithubIcon,
  LinkedInIcon,
  TwitterIcon,
  SunIcon,
  MoonIcon,
} from "./Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const CustomLink = ({ href, title, className = "" }) => {
  // Underline clicked link
  const router = useRouter();
  // console.log(router);
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[2px] inline-block bg-dark absolute left-0 -bottom-0.5 
      group-hover:w-full  transition-[width] ease duration-250 dark:bg-light ${
        router.asPath === href ? "w-full" : "w-0"
      }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  // Underline clicked link
  const router = useRouter();
  // console.log(router);

  const handleClick = () => {
    toggle();
    router.push(href);
  };
  return (
    <button
      href={href}
      className={`${className} relative group my-2  text-light dark:text-dark`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`h-[2px] inline-block bg-light absolute left-0 -bottom-0.5 
      group-hover:w-full  transition-[width] ease duration-250 dark:bg-dark ${
        router.asPath === href ? "w-full" : "w-0"
      }`}
      >
        &nbsp;
      </span>
    </button>
  );
};
const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher();

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative">
      {/* HAMBURGER MENU */}
      <button
        className=" flex-col justify-center items-center hidden lg:flex "
        onClick={handleClick}
      >
        <span
          className={`
        bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
          isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
        } `}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm m-0.5  ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm   ${
            isOpen ? "-rotate-45 -translate-y-1 " : " translate-y-0.5"
          }`}
        ></span>
      </button>

      {/* MOBILE NAVBAR  */}
      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw]  z-30 flex flex-col  justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 trnaslate-y-1/2 bg-dark/80 dark:bg-light/80 rounded-lg backdrop-blur-md py-32"
        >
          {/* NAVBAR */}
          <nav className="flex  flex-col justify-center items-center">
            <CustomMobileLink
              href="/"
              title="Home"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/about"
              title="About"
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/projects"
              title="Projects"
              className=""
              toggle={handleClick}
            />
            {/* <CustomMobileLink href="/articles" title="Articles" className="mx-4" /> */}
            <CustomMobileLink
              href="videos"
              title="Videos"
              className=""
              toggle={handleClick}
            />
          </nav>

          {/* SOCIAL MEDIA ICONS */}
          <nav className="flex items-center justify-center flex-wrap mt-2 ">
            <motion.a
              href="https://github.com/imalicolak"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 bg-light rounded-full dark:bg-dark sm:mx-1"
            >
              <GithubIcon className={undefined} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/imalicolak"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 sm:mx-1"
            >
              <LinkedInIcon className={undefined} />
            </motion.a>
            <motion.a
              href="https://youtube.com/alicolak"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 ml-3 sm:mx-1"
            >
              <YoutubeIcon className={undefined} />
            </motion.a>

            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={`ml-3 flex item-center justify-center rounded-full p-1 ${
                mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
              }
          `}
            >
              {mode === "dark" ? (
                <SunIcon className={"fill-dark"} />
              ) : (
                <MoonIcon className={"fill-dark"} />
              )}
            </button>
          </nav>
        </motion.div>
      ) : null}

      {/* DESKTOP NAVBAR  */}
      <div className="w-full flex justify-between items-center lg:hidden">
        {/* NAVBAR */}
        <nav>
          <CustomLink href="/" title="Home" className="mr-6" />
          <CustomLink href="/about" title="About" />
          <CustomLink href="/projects" title="Projects" className="mx-4" />
          {/* <CustomLink href="/articles" title="Articles" className="mx-4" /> */}
          <CustomLink href="videos" title="Videos" className="mr-4 " />
        </nav>

        {/* SOCIAL MEDIA ICONS */}
        <nav className="flex items-center justify-center flex-wrap">
          <motion.a
            href="https://github.com/imalicolak"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <GithubIcon className={undefined} />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/imalicolak"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <LinkedInIcon className={undefined} />
          </motion.a>
          <motion.a
            href="https://youtube.com/alicolak"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 ml-3"
          >
            <YoutubeIcon className={undefined} />
          </motion.a>

          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`ml-3 flex item-center justify-center rounded-full p-1 ${
              mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
            }
          `}
          >
            {mode === "dark" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </button>
        </nav>
      </div>

      <div className="absolute  left-[50%] translate-x-[-50%] top-2 ">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
