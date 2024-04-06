"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface card {
  image: string;
  title: string;
  description: string;
  link: string;
}

const cardsData: card[] = [
  {
    image: "",
    title: "Two point solver",
    description: "Given two points find the linear equation.",
    link: "/math/twopoints",
  },
  {
    image: "",
    title: "Perpendicular equation finder",
    description: "Given a point and a slope find the perpendicular funtion.",
    link: "/math/twopoints",
  },
  {
    image: "",
    title: "Parallel equation finder",
    description: "Given a point and a slope find the parallel funtion.",
    link: "/math/parallel",
  },
  {
    image: "",
    title: "Unit converter",
    description: "Convert any unit to other.",
    link: "/phy/unit",
  },
];

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCards = cardsData.filter((card) =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="border p-2 rounded-xl hidden lg:flex lg:flex-col lg:justify-between">
      <div className="w-full flex justify-end items-center relative">
        <input
          placeholder="Search Calculator"
          className="border text-sm border-gray-400 rounded-lg p-2 w-full"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Image
          width={18}
          height={18}
          src="/icons/search.svg"
          className="absolute right-2"
          alt="Search Icon"
        />
      </div>
      <div className="flex my-2 rounded-md flex-col gap-2 w-full h-full">
        {searchTerm === "" ? null : filteredCards.map((card) => (
          <Link href={card.link} key={card.title}>
            <div className="p-2 max-h-20 bg-zinc-100 border hover:bg-zinc-200 rounded-md">
              <h3 className="font-semibold text-sm">{card.title}</h3>
              <p className="text-xs overflow-clip">{card.description}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex flex-col gap-2">
        <p className="cursor-default text-xs text-zinc-400">
          popular calculators
        </p>
        {cardsData.slice(0, 2).map((card) => (
          <>
            <Link href={card.link}>
              <div className="p-2 max-h-20 bg-zinc-100 border hover:bg-zinc-200 rounded-md">
                <h3 className="font-semibold text-sm">{card.title}</h3>
                <p className="text-xs overflow-clip">{card.description}</p>
              </div>
            </Link>
          </>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
