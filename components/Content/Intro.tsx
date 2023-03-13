import Navbar from "./components/Navbar";
import ThemeButton from "./components/ThemeButton";

export function Intro() {
  return (
    <div className="flex flex-col items-center pb-10">
      <ThemeButton className="absolute top-5 self-end" />
      <Navbar />
      <h1 className="text-3xl font-light mt-3">Hey, I&rsquo;m Lashdid</h1>
      <span className="w-full md:w-1/2 text-gray-700 dark:text-gray-500 mt-3 text-center">
        I build things, mostly websites. Sometimes I contribute to small projects and I love to
        learn something new.
      </span>
    </div>
  );
}
