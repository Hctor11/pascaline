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
          <div key={id} className="md:mb-0 mb-6 group hover:text-gray-500 ">
            <h1 className="text-2xl md:text-sm cursor-default">{link.name}</h1>
            {link.submenu && (
              <div>
                <div className="absolute top-6 hidden group-hover:block hover:block rounded-md">
                  <div className="py-3">
                    <div className="w-2 h-2 left-3 absolute mt-2 bg-white rotate-45"></div>
                  </div>
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
