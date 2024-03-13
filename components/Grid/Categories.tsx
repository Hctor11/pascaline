import Link from "next/link";
import links from "../Navigation/MyLinks";

const Categories = () => {
  return (
    <div className="grid md:grid-cols-3 gap-2">
      {links.map((link) => (
        <>
          <div className="bg-zinc-100 border rounded-xl p-2">
            <Link className="text-2xl font-semibold hover:underline" href={link.mainLink}>
              {link.name}
            </Link>
            {link.sublink?.map((sublinks) => (
              <>
                <div className="">
                  <div className="ml-1">
                    {sublinks.mySubLinks.map((MySublinks) => (
                      <>
                        <li
                          key={MySublinks.link}
                          className="list-none"
                        >
                          <Link
                            href={MySublinks.link}
                            className="text-md text-zinc-500 hover:text-zinc-700 hover:underline"
                          >
                            {MySublinks.name}
                          </Link>
                        </li>
                      </>
                    ))}
                  </div>
                </div>
              </>
            ))}
          </div>
        </>
      ))}
    </div>
  );
};

export default Categories;
