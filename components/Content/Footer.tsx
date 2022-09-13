import { FiGithub } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import NextLogo from "../../public/nextjs.svg";

export function Footer() {
  return (
    <footer className="max-w-screen-lg mx-auto flex justify-between items-center pb-5 px-5 sm:px-10 text-gray-600">
      <div className="flex items-center gap-5 text-xs">
        Made with{" "}
        <a
          href="https://nextjs.org/"
          className="w-20 text-black dark:text-white"
        >
          <NextLogo />
        </a>
      </div>
      <div className="flex space-x-5">
        <a
          className="hover:text-black dark:hover:text-white transition-all"
          href="https://github.com/lashdid"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FiGithub size={25} />
        </a>
        <a
          className="hover:text-black dark:hover:text-white transition-all"
          href="mailto:lashdid19@gmail.com"
        >
          <AiOutlineMail size={25} />
        </a>
      </div>
    </footer>
  );
}
