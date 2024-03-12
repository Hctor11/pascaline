"use client";

import Image from "next/image";
import Link from "next/link";
import NavigationLinks from "./NavigationLinks";
import { useState } from "react";

const Navigation = () => {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <nav className=" w-full shadow-sm bg-white ">
      <div className="lg:w-[70%] lg:m-auto md:px-5 py-3 px-3 flex items-center justify-between">
        <div className="cursor-pointer z-10 md:w-auto flex w-full justify-between">
          <Link href="/">
            <Image src="/NewLogo.svg" alt="" width={100} height={100} />
          </Link>
          <div className="md:hidden" onClick={() => setMenuActive(!menuActive)}>
            <Image
              src={menuActive ? "/close-outline.svg" : "/menu-outline.svg"}
              alt=""
              width={32}
              height={32}
            />
          </div>
        </div>

        {/* dektop menu */}
        <ul className="md:flex hidden gap-5">
          <NavigationLinks />
        </ul>

        <Link href='' className="text-sm p-1 text-zinc-300 bg-zinc-900 rounded-md">
          About
        </Link>

        {/* responsive menu */}
        <ul
          className={`md:hidden gap-5 bg-white absolute w-full h-full bottom-0 pt-24 pl-4 duration-500 ${
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
