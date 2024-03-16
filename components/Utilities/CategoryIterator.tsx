interface props {
  category: string;
}

import links from "../Navigation/Links";
import Link from "next/link";

const CategoryIterator = ({ category }: props) => {
  return (
    <div className="flex my-2 flex-wrap gap-2">
      {links.map((link) => (
        <>
          {link.name === category
            ? link.sublink.map((sublinks) => (
                <>
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
                </>
              ))
            : ""}
        </>
      ))}
    </div>
  );
};

export default CategoryIterator;
