("use client");

import React from "react";
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

const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher();

  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light">
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
      <div className="absolute  left-[50%] translate-x-[-50%] top-2 ">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
