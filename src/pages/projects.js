import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Swal from "sweetalert2";
import React from "react";
import pgfinderimage from "../../public/images/projects/PGFinder.png";
import portfolio from "../../public/images/projects/PortfolioWebsite.png";
import carcorner from "../../public/images/projects/CarCorner.png";

const FeaturedProjects = ({ type, title, summary, img, github = "" }) => {
   const handleGithubClick = (e) => {
    if (!github || github === "#") {
      e.preventDefault();
      Swal.fire({
        icon: "warning",
        title: "No GitHub Link",
        text: "Sorry, this project does not have a GitHub link available.",
      });
    }
  };
  return (
    <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12">
      <Link href={github} target="_blank"
      className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      onClick={handleGithubClick} title="View Project on GitHub"
      >
        <Image src={img} alt={title} className="w-full h-auto " />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 ">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link href={github} target="_blank" onClick={handleGithubClick} title="View Project on GitHub" className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark text-justify">{summary}</p>
        <div className="mt-2 flex items-center justify-between w-full">
          <Link href={github} target="_blank" onClick={handleGithubClick} title="View Project on GitHub" className="w-10 ">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, github }) => {
  const handleGithubClick = (e) => {
    if (!github || github === "#") {
      e.preventDefault();
      Swal.fire({
        icon: "warning",
        title: "No GitHub Link",
        text: "Sorry, this project does not have a GitHub link available.",
      });
    }
  };
  return (
    <article className="w-full items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative flex">
      <Link href={github} target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
        onClick={handleGithubClick} title="View Project on GitHub"
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto"
          width={500}      // <-- Add width
          height={200}     // <-- Add height
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 ">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link href={github} target="_blank" onClick={handleGithubClick} title="View Project on GitHub" className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark text-justify"></p>
        <div className="mt-2 flex items-center justify-between w-full">
          <Link href={github} target="_blank" onClick={handleGithubClick} title="View Project on GitHub" className="w-10 ">
            <GithubIcon />
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
        <title>Prashil Parekh | Project Page</title>
      </Head>
      <main className="flex w-full flex-col items-center justify-center text-dark">
        <Layout className="pt-16">
          <AnimatedText text="Imagination Trumps Knowledge!" className="mb-16" />

          <div className="grid grid-cols-12 gap-24 ">
            <div className="col-span-12">
              <FeaturedProjects
                title="PG Finder"
                summary="Using the MERN stack (MongoDB, Express, React, and Node.js), a full-stack web application was created to
                         remove broker dependency in PG rentals for working professionals and students. With information like
                         rent, amenities, images, and a Google Maps-integrated address, the site enables property owners to sell PG
                         rooms directly. sophisticated search and filtering options for location, sharing type, and budget were added,
                         along with role-based access and secure JWT-based authentication for both owners and tenants. used React
                         and Material UI to create a responsive, mobile-friendly user interface that guarantees an easy-to-use
                         interface. The program, which helped users discover reasonably priced lodging without paying broker fees,
                         was set up in a cloud environment with a scalable backend and MongoDB Atlas for safe data storage."
                type="Full Stack Project"
                img={pgfinderimage}
                github='#'

              />
            </div>
            <div className="col-span-6">
              <Project
                title="Portfolio Website"
                type="NextJS Project"
                img={portfolio}
                github="https://github.com/parekhprashil/Portfolio_Website" />
            </div>
            <div className="col-span-6"><Project title="Car Corner" type="Full Stack Project" github="" img={carcorner} /></div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
