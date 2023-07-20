import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl">
          {position}&nbsp;{" "}
          <a
            href={companyLink}
            target="_blank"
            className="text-orange-700 capitalize "
          >
            {" "}
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75">
          {time} | {address}
        </span>
        <p className="font-medium w-full"> {work} </p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 text-center w-full">
        Experience
      </h2>
      <div ref={ref} className=" p-2 w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-20 top-0 w-[4px] h-full bg-dark origin-top"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            position="Frontend Developer - Contract"
            company="Techmade"
            time="May 2023 - Present"
            address="Chicago, Illinois"
            work="Developed user interfaces with modern JavaScript frameworks, HTML5, and CSS, converting legacy class based components to
            function based components. Contributed to design and development of client and server database applications. Implemented Git pipelines to automate build, testing, and deployment processes, streamlining software development and ensuring code
            quality."
          />
          <Details
            position="Student Marketeer"
            company="Redbull"
            time="May 2022 - Feb 2023"
            address="Chicago, Illinois"
            work="Created youth-centric campaigns that led to multiple 2000 can distribution milestones by developing sampling events for student
            organizations.
            Represented Red Bull brand personality through  everyday interactions with young adults, resulting in 15% average new consumer consumption per mission.
            Designed roadmap for “Who Needs Wings” campaign for music festivals such as Lollapalooza; led to multiple successful can
            distribution missions with cans of over 15,000 in each mission."
          />
          <Details
            position="Digital Product Manager Intern"
            company="HERMAN MILLER"
            time="May 2022 - Aug 2022"
            address="Chicago, Illinois"
            work="Led a team of three to develop an international pilot internship program for MillerKnoll in Mexico. Improved Digital Asset Management (DAM) efficiency by developing filter methods tailored to company's in-use needs' for
            hermanmiller, dwr, and hay, saving MillerKnoll over $10,000 in storage space. Supported a data migration between HermanMiller and Knoll and synchronized DUNS numbers in Salesforce to make sure brand
            accounts were correct and easy to access.       Validated site launches in JIRA pre-launch for millerknoll.com, hermanmiller.com, and hay.com with a protocol driven approach"
          />

          <Details
            position="Product Manager & UI/UX Designer (Quarter Zero Fellow)"
            company="Letscook"
            time="May 2017 - May 2018"
            address="Chicago, Illinois"
            work="Led the product development of “LetsCook” app that allowed users to find recipes by implementing the food items users had. Joined a startup accelerator program, taking the product through multiple life cycles, to building out the business plan, utilizing the lean startup methodology to build, test, and learn. Led MVP testing to converse with over 200 people about their experience with cooking and observed their interactions with the app.
            Lead the UI/UX design of Letscook through analyzing user interactions."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
