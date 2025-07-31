import React from "react";
import { motion } from "framer-motion";

const SkillsVariant = ({ name, x, y }) => (
  <motion.div
    className="flex items-center justify-center rounded-full bg-dark text-light font-semibold py-3 px-6 shadow-dark cursor-pointer absolute"
    whileHover={{ scale: 1.05 }}
    initial={{ x: 0, y: 0, opacity: 0 }}
    whileInView={{ x: x, y: y, opacity: 1 }}
    transition={{ duration: 1.5 }}
    viewport={{ once: true, amount: 0.5 }}
  >
    {name}
  </motion.div>
);

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center">Skills</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight">
        <motion.div
          className="flex items-center justify-center rounded-full bg-dark text-light font-semibold p-6 shadow-dark cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          Skills
        </motion.div>
        <SkillsVariant name ="HTML" x="-20vw" y="2vw" />
        <SkillsVariant name="CSS" x="-5vw" y="-10vw" />
        <SkillsVariant name="JavaScript" x="20vw" y="6vw" />
        <SkillsVariant name="JAVA" x="0vw" y="12vw" />
        <SkillsVariant name="ReactJS" x="-20vw" y="-15vw" />
        <SkillsVariant name="TypeScript" x="15vw" y="-12vw" />
        <SkillsVariant name="TailwindCSS" x="32vw" y="-5vw" />
        <SkillsVariant name="NodeJS" x="0vw" y="-20vw" />
        <SkillsVariant name="ExpressJS" x="-25vw" y="18vw" />
        <SkillsVariant name="MongoDB" x="18vw" y="18vw" />
        <SkillsVariant name="Git" x="-32vw" y="5vw" />
        <SkillsVariant name="GitHub" x="-5vw" y="20vw" />
        <SkillsVariant name="MySQL" x="25vw" y="-18vw" />

      </div>
    </>
  );
};

export default Skills;
