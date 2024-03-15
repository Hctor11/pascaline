interface props {
  category: string;
}

import links from "../Navigation/Links";
import Link from "next/link";

const CategoryIterator = ({ category }: props) => {
  return (
    <div className="flex my-2">
      {links.map((link) => (
        <>
          {link.name === category
            ? link.sublink.map((sublinks) => (
                <>
                  <div className="">
                    {sublinks.mySubLinks.map((sublinks) => (
                      <>
                        <Link href={sublinks.link} className="p-1 rounded-md border hover:bg-zinc-200 m-1 first:m-0">{sublinks.name}</Link>
                      </>
                    ))}
                  </div>
                </>
              ))
            : ""}
        </>
      ))}
    </div>
  );
};

export default CategoryIterator;
