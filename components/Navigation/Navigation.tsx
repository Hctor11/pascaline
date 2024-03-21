"use client";

import Image from "next/image";
import Link from "next/link";
import NavigationLinks from "./NavigationLinks";
import { useState } from "react";

const Navigation = () => {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <nav className=" w-full shadow-sm bg-white ">
      <div className="lg:w-[75%] lg:m-auto md:px-5 py-3 px-3 flex items-center justify-between">
        <div className="cursor-pointer z-10 md:w-auto flex w-full justify-between">
          <Link href="/">
            <Image src="/NewLogo.svg" className="hover:invert-[30%] transition-all" alt="LOGO DEATHCLASSIC" width={100} height={100} />
          </Link>
          <div className="md:hidden transition-all" onClick={() => setMenuActive(!menuActive)}>
            <Image
              src={menuActive ? "/close-outline.svg" : "/menu-outline.svg"}
              alt="icon menu"
              width={32}
              height={32}
              className="transition-all"
            />
          </div>
        </div>

        {/* dektop menu */}
        <ul className="md:flex hidden gap-5">
          <NavigationLinks />
        </ul>

        <Link href='/about' className="hidden md:inline-flex text-sm p-1 rounded-md hover:text-zinc-500 hover:bg-zinc-200 transition-all">
          About
        </Link>

        {/* responsive menu */}
        <ul
          className={`md:hidden gap-5 touch-pan-x bg-white fixed overflow-hidden w-full h-full bottom-0 pt-24 pl-4 duration-500 ${
            menuActive ? "left-1" : "left-[-100%]"
          }`}
        >
          <NavigationLinks />
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
