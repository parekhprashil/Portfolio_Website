"use client"; // required for hooks in App Router
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import LinkedinLogo, { GithubIcon, InstagramIcon } from "./Icons";
import {motion} from "framer-motion";

const CustomeLink = ({ href, title, className = "" }) => {
  const pathname = usePathname();

  return (
    <Link href={href} className={`group ${className} relative`}>
      {title}
      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 transition-[width] ease duration-300
          ${pathname === href ? "w-full" : "w-0"} group-hover:w-full`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const NavBar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between text-dark">
      <nav>
        <CustomeLink href="/" title="Home" className="mr-4" />
        <CustomeLink href="/about" title="About" className="mx-4" />
        <CustomeLink href="/projects" title="Projects" className="ml-4" />
      </nav>

      <nav className="flex items-center justify-center flex-wrap gap-4 text-xl">
        <motion.a href="https://www.linkedin.com/in/prashil-parekh-05b87a252" target="_blank"
        whileHover={{
          y: -2,}}
          whileTap={{ scale: 0.9 }}>
          <LinkedinLogo className="w-8 h-8" />
        </motion.a>
        <motion.a href="https://github.com/parekhprashil" target="_blank"
         whileHover={{
          y: -2,}}
          whileTap={{ scale: 0.9 }}>
          <GithubIcon className="w-6 h-6" />
        </motion.a>
        <motion.a href="https://www.instagram.com/prashil_parekh_99/" target="_blank"
         whileHover={{
          y: -2,}}
          whileTap={{ scale: 0.9 }}>
          <InstagramIcon className="w-6 h-6" />
        </motion.a>
      </nav>

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
