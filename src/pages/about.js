import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import profilePic from "../../public/images/profile/developer-pic-2.jpg"
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";

const about = () => {
  return (
    <>
      <Head>
        <title>Prashil Parekh | About Me</title>
      </Head>
      <main className="flex w-full flex-col items-center justify-center text-dark">
        <Layout className="pt-16">
          <AnimatedText text="Passion Fuels Purpose!" className="mb-16" />
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-5 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-xl font-bold uppercase text-dark/75">
                Biography
              </h2>
            <p className="font-medium text-justify text-lg">
               Hi, I&#39;m Prashil Parekh, a web developer and UI/UX designer with a
              passion for creating beautiful, functional, and user-centered
              digital experiences. With 7 Months of experience in the field. I am
              always looking for new and innovative ways to bring my clients&#39;
              visions to life.
            </p>
            <p className="my-4 font-medium text-justify text-lg">
               I believe that design is about more than just making things look
              pretty – it&#39;s about solving problems and creating intuitive,
              enjoyable experiences for users.
            </p>
            <p className="font-medium text-justify text-lg">
               Whether I&#39;m working on a website, mobile app, or other digital
              product, I bring my commitment to design excellence and
              user-centered thinking to every project I work on. I look forward
              to the opportunity to bring my skills and passion to your next
              project.
            </p>
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8">
                <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
                <Image src={profilePic} alt="Prashil Parekh" className="w-full h-auto rounded-2xl"></Image>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
