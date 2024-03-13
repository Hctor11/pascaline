import React from "react";
import Image from "next/image";
import Link from "next/link";
import footerLinks from "./FooterLinks";

const Footer = () => {
  return (
    <footer className="pt-8 border-t border-zinc-200 mt-auto">
      <div className="">
        <div className="lg:container flex-col overflow-hidden flex lg:flex-col md:justify-between lg:justify-between lg:w-[70%] m-auto">
          <Link href="/" className="mb-6 mx-3 lg:mx-0">
            <Image
              src="/NewLogo.svg"
              className="hover:invert-[0.5]"
              alt="LOGO DEATHCLASSIC"
              width={150}
              height={100}
            />
          </Link>
          <div className="flex-col md:flex-row flex mx-3 lg:mx-0">
            {footerLinks.map((category) => (
              <>
                <div className="mr-12 mb-8">
                  <Link href={category.headlink}>
                    <h1 className="text-md font-semibold hover:underline">
                      {category.head}
                    </h1>
                  </Link>
                  <div className="">
                    {category.sublinks?.map((sublink) => (
                      <>
                        <Link
                          className="list-none text-sm text-zinc-500 hover:underline"
                          href={sublink.link}
                        >
                          <li>{sublink.title}</li>
                        </Link>
                      </>
                    ))}
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
        <div className="bg-black text-white ">
          <div className="lg:max-w-[75%] m-auto flex justify-between p-5">
            <p className="text-zinc-500">HR2024</p>
            <Link href="" className="hover:underline">
              Repository
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
