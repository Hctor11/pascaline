interface props {
  category: string;
}

import links from "../Navigation/Links";
import Link from "next/link";

const CategoryIterator = ({ category }: props) => {
  return (
    <div className="flex my-2 flex-col flex-wrap gap-2">
      {links.map((link) => (
        <>
          {link.name === category
            ? link.sublink.map((sublinks) => (
                <>
                  <h2 className="font-semibold">
                    {sublinks.head}
                  </h2>
                  <div className="flex gap-2">
                  {sublinks.mySubLinks.map((sublinks) => (
                    <>
                      <Link
                        href={sublinks.link}
                        className="p-1 rounded-md inline-flex border hover:bg-zinc-200"
                      >
                        {sublinks.name}
                      </Link>
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
