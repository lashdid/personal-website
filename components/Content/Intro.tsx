import Navbar from "./Navbar";
import dynamic from "next/dynamic";
const ThemeButton = dynamic(() => import("./ThemeButton"), { ssr: false });

export function Intro() {
  return (
    <div className="flex flex-col items-center pb-10">
      <ThemeButton className="absolute top-5 self-end" />
      <Navbar />
      <h1 className="text-3xl font-light mt-3">Hey, I&rsquo;m Lashdid</h1>
      <span className="w-2/3 md:w-1/2 text-gray-700 dark:text-gray-500 mt-3 text-center">
        I build websites. Sometimes i contribute to small projects and i love to
        learn new things.
      </span>
    </div>
  );
}