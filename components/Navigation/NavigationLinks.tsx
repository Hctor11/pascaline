import Link from "next/link";
import links from "./Links";

const NavigationLinks = () => {

  return (
    <>
      {links.map((link, id) => (
        <>
          {/* dekstop menu */}
          <div key={id} className="md:mb-0 group z-10 hover:text-gray-500">
            <Link
              href={`/${link.mainLink}`}
              className="text-3xl p-1 font-semibold md:font-normal md:text-sm cursor-pointer transition-all"
            >
              {link.name}
            </Link>
            {link.submenu && (
              <div>
                <div className="absolute top-9 hidden group-hover:md:block hover:md:block">
                  <div className="bg-white p-3 rounded-xl shadow-md">
                    {link.sublink?.map((sublinks, id) => (
                      <>
                        <div key={id} className="mb-2 px-2">
                          <span className="text-sm font-bold cursor-default">
                            {sublinks.head}
                          </span>
                          {sublinks.mySubLinks.map((sublinks) => (
                            <>
                              <li key={sublinks.link}>
                                <Link
                                  href={sublinks.link}
                                  className="text-sm p-1 m-1 rounded-md hover:bg-zinc-200 text-zinc-400 hover:text-zinc-500"
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

          {/* mobile menu */}
          <div className="md:hidden mb-3 mt-1">
            {link.sublink?.map((sublinks) => (
              <>
                <div className="">
                  <div className="ml-3">
                    {/* <h1 className="text-2xl text-zinc-600 font-semibold cursor-default"
                    onClick={()=> setHeading(sublinks.head)}>
                      {sublinks.head}
                    </h1> */}
                    {sublinks.mySubLinks.map((MySublinks) => (
                      <>
                        <li key={MySublinks.link} className={'py-1'/*`py-1 ${heading === sublinks.head ? 'md:hidden' : 'hidden'}`*/}>
                          <Link
                            href={MySublinks.link}
                            className="text-xl text-zinc-400 hover:text-zinc-500"
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
    </>
  );
};

export default NavigationLinks;
