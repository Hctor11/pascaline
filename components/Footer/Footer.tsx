import React from "react";
import Image from "next/image";
import Link from "next/link";
import FooterLinks from "./Links";

const Footer = () => {
  return (
    <footer className="pt-8 border-t border-zinc-200 mt-auto">
      <div className="">
        <div className="lg:container flex-col overflow-hidden flex lg:flex-col md:justify-between lg:justify-between lg:w-[74%] m-auto">
          <Link href="/" className="mb-6 mx-3 lg:mx-0">
            <Image
              src="/NewLogo.svg"
              className="hover:invert-[0.5]"
              alt="LOGO DEATHCLASSIC"
              width={150}
              height={100}
            />
          </Link>
          <FooterLinks />
        </div>
        <div className="bg-black text-white ">
          <div className="lg:max-w-[75%] m-auto flex justify-between p-3">
            <p className="text-zinc-500">HR2024</p>
            <Link
              href="https://github.com/Hctor11/pascaline"
              target="_blank"
              className="hover:underline flex items-center gap-1"
            >
              <Image
                src="/gh.svg"
                className="hover:invert-[0.5]"
                alt="GH"
                width={18}
                height={18}
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
