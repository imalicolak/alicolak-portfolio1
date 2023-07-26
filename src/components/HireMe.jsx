import React from "react";
import { CircularText } from "./Icons";
import Link from "next/link";

const HireMe = () => {
  return (
    <div className="fixed left-12 bottom-6 flex items-center justify-center overflow">
      <div className="w-48 h-auto flex items-center justify-center ">
        {/* <Image src="../../public/images/swe_circle.png" alt="Profile" /> */}
        {/* <CircularText className={"fill-dark animate-spin-slow"} /> */}
        <Link
          href="mailto:19acolak99@gmail.com"
          className="
          flex items-center justify-center
          absolute
          -translate-x-1/2
          -translate-y-1/2
          bg-dark
          text-light
          shadow-md border border-solid border-dark
          w-28 h-28 rounded-full font-semibold 
          dark:bg-light dark:text-dark 
          hover:bg-light hover:text-dark hover:dark:bg-dark hover:dark:text-light
          hover:dark:border-light "
        >
          Hire me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
