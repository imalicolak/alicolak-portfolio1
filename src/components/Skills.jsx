import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-xl font-semibold bg-dark text-light py-3 px-6 shadow-dark absolute dark:bg-light dark:text-dark "
      whileHover={{ scale: 1.1 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center"> Skills </h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded ">
        <motion.div
          className="flex items-center justify-center rounded-xl font-semibold bg-dark text-light p-6 shadow-dark dark:bg-light dark:text-dark"
          whileHover={{ scale: 1.1 }}
        >
          Web
        </motion.div>
        <Skill name="HTML" x="-30vw" y="-18vw" />
        <Skill name="CSS" x="-16vw" y="-18vw" />
        <Skill name="JAVASCRIPT" x="0vw" y="-18vw" />
        <Skill name="TypeScript" x="16vw" y="-18vw" />

        <Skill name="Web Design" x="-30vw" y="0vw" />
        <Skill name="ReactJS" x="-16vw" y="0vw" />
        <Skill name="NextJS" x="16vw" y="0vw" />
        <Skill name="Figma" x="30vw" y="-18vw" />
        <Skill name="NodeJS" x="-25vw" y="-9vw" />
        <Skill name="ExpressJS" x="-10vw" y="-9vw" />
        <Skill name="MongoDB" x="10vw" y="-9vw" />
        <Skill name="Firebase" x="25vw" y="-9vw" />

        <Skill name="GIT" x="0vw" y="12vw" />
        <Skill name="SQL" x="12vw" y="12vw" />
        <Skill name="PostGreSQL" x="30vw" y="12vw" />
        <Skill name="MySQL" x="20vw" y="20vw" />
        <Skill name="Supabase" x="30vw" y="0vw" />

        <Skill name="Python" x="-30vw" y="12vw" />
        <Skill name="Django" x="-16vw" y="12vw" />

        <Skill name="Sockets.io" x="0vw" y="20vw" />
        <Skill name="BCrypt" x="-20vw" y="20vw" />
        <Skill name="JIRA" x="-20vw" y="6vw" />
        <Skill name="AGILE" x="-4vw" y="6vw" />

        <Skill name="Redux" x="16vw" y="6vw" />
      </div>
    </>
  );
};

export default Skills;
