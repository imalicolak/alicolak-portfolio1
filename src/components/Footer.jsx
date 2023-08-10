import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:border-light lg:py-8 sm:text-base ">
      <Layout className="py-8 flex items-center justify-between dark:text-light dark:border-light lg:flex-col lg:py-6  ">
        <span> {new Date().getFullYear()} &copy; All Rights Reserved. </span>
        <div className="flex items-center lg:py-3  ">
          <Link
            // target={"_blank"}
            className="underline underline-offset-2"
            href="/"
          >
            Built by Ali Colak
          </Link>
        </div>
        <Link
          href="mailto:19acolak99@gmail.com"
          target={"_blank"}
          className="underline underline-offset-2"
        >
          🇺🇸 Say Merhaba! 🇹🇷
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
