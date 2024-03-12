import Link from "next/link";
import links from "./MyLinks";
/*
Heads will be in case I made a lot of calculators in different branches
*/

const NavigationLinks = () => {
 
  return (
    <>
      {links.map((link,id) => (
        <>
          <div key={id} className="md:mb-0 mb-6 group hover:text-gray-500">
            <Link href={`/${link.mainLink}`} className="text-2xl p-1 md:text-sm cursor-pointer transition-all">{link.name}</Link>
            {link.submenu && (
              <div>
                <div className="absolute top-10 hidden group-hover:md:block hover:md:block rounded-md">
                  <div className="bg-white p-2 rounded-sm shadow-md">
                    {link.sublink?.map((sublinks,id) => (
                      <>
                        <div key={id} className="mb-2 px-2">
                          <h1 className="text-sm font-bold cursor-default">{sublinks.head}</h1>
                          {sublinks.mySubLinks.map((sublinks) => (
                            <>
                              <li key={sublinks.link}>
                                <Link
                                  href={sublinks.link}
                                  className="text-sm text-zinc-400 hover:text-zinc-500"
                                >
                                  {sublinks.name}
                                </Link>
                              </li>
                            </>
                          ))}
                        </div>
                      </>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </>
      ))}
    </>
  );
};

export default NavigationLinks;
