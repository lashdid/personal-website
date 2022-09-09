import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import ThemeButton from "./ThemeButton";

export default function Navbar() {
  const profile = useRef<HTMLButtonElement>(null);
  const [isNavbarVisible, setNavbarVisible] = useState(false);
  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > profile.current?.offsetTop!) {
        setNavbarVisible(true);
      }
      else {
        setNavbarVisible(false);
      }
    };
  });
  return (
    <nav
      className={clsx(
        isNavbarVisible
          && "fixed w-full bg-white dark:bg-gray-800 top-0 py-3 z-10"
      )}
    >
      <div className="relative max-w-screen-xl flex justify-end items-center mx-auto px-10 md:px-20">
        <Link href="">
          <button
            ref={profile}
            className={clsx(
              "relative rounded-full transition-all",
              isNavbarVisible ? "w-10 h-10 mx-auto hover:brightness-90" : "w-32 h-32 cursor-default"
            )}
          >
            <Image
              className="rounded-full"
              src="https://avatars.githubusercontent.com/u/63824338?v=4"
              alt="profile"
              layout="fill"
            />
          </button>
        </Link>
        {isNavbarVisible && <ThemeButton className="absolute"/>}
      </div>
    </nav>
  );
}
