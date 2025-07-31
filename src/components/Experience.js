import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import LiIcone from "./LiIcone";

const Details = ({ postion, company, companylink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcone reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl">
          {postion}&nbsp;
          <a
            href={companylink}
            className="text-primary capitalize"
            target="_blank"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 ">
          {time} | {address}
        </span>
        <p className="font-medium w-full text-justify">{work}</p>
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
      <h2 className="font-bold text-8xl mb-32 w-full text-center">
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            postion="Web Developer"
            company="Communities Heritage Private Limited"
            time="JAN 2025 - JULY 2025"
            address="Ahmedabad , Gujarat"
            work="As a Web Developer, I built responsive websites using HTML, CSS, JavaScript, and PHP. I collaborated with senior developers to resolve issues and improve system performance. My contributions included front-end and back-end work on projects like MyCompany HRMS, Vanshdeep CRM, and Adani Mundra Smart Society. I supported live deployments and helped meet client goals through clean, maintainable code. This experience enhanced my practical skills in real-world web development."
            companylink="https://www.chplgroup.org/"
          />
          <Details
            postion="PHP Intern"
            company="Mehta WebSolution"
            time="May 2024 - June 2024"
            address="Jamnagar , Gujarat"
            work="As a PHP Intern, I developed and maintained web applications using PHP, MySQL, and JavaScript. I collaborated with the development team to implement new features and fix bugs. My role involved writing clean, efficient code and participating in code reviews. This internship provided me with hands-on experience in web development and improved my problem-solving skills."
            companylink="https://mehtawebsolution.com/"
          />
          <Details
            postion="ReactJS Intern"
            company="CyperSoft PVT LTD"
            time="May 2023 - June 2023"
            address="Morbi , Gujarat"
            work="As a ReactJS Intern, I worked on building user interfaces for web applications using ReactJS. I collaborated with designers to create responsive and interactive components. My responsibilities included writing reusable code, optimizing application performance, and debugging issues. This internship helped me gain practical experience in front-end development and improved my understanding of ReactJS."
            companylink="https://www.cypersoft.com/"
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
