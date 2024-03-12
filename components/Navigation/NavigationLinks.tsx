import Link from "next/link";

interface Link {
  name: string;
  submenu: boolean;
  sublink: SubLinksContainer[];
}

interface SubLinksContainer {
  head: string;
  mySubLinks: SubLinks[];
}

interface SubLinks {
  name: string;
  link: string;
}

/*
Heads will be in case I made a lot of calculators in different branches
*/

const NavigationLinks = () => {
  const links: Link[] = [
    {
      name: "Math",
      submenu: true,
      sublink: [
        {
          head: "Matrix",
          mySubLinks: [
            {
              name: "Matrix",
              link: "/Math/Matrix",
            },
            {
              name: "Matrix Determinant",
              link: "/Math/Determinant",
            }
          ],
        },{
          head: "Trigonometry",
          mySubLinks: [
            {
              name: "Triange Solver",
              link: "/Math/Triangle",
            },
          ]
        }
      ],
    },
    {
      name: "Physics",
      submenu: true,
      sublink: [
        {
          head: "Physics22",
          mySubLinks: [
            {
              name: "Free Fall",
              link: "/Phy/call",
            },
            {
              name: "Motion",
              link: "/Phy/cotion",
            },
            {
              name: "Coefficient",
              link: "/Phy/coefficient",
            },
          ],
        },
      ],
    },
    {
      name: "Statistics",
      submenu: true,
      sublink: [
        {
          head: "Statistics33", 
          mySubLinks: [
            {
              name: "Mean",
              link: "/Math/mean",
            },
            {
              name: "Geometric Mean",
              link: "/Math/geomean",
            },
            {
              name: "Standard Deviation",
              link: "/Math/std",
            },
          ],
        },
      ],
    },
  ];

  return (
    <>
      {links.map((link) => (
        <>
          <div className="md:mb-0 mb-6 group hover:text-gray-500 ">
            <h1 className="text-2xl md:text-sm cursor-default">{link.name}</h1>
            {link.submenu && (
              <div>
                <div className="absolute top-6 hidden group-hover:block hover:block rounded-md">
                  <div className="py-3">
                    <div className="w-2 h-2 left-3 absolute mt-2 bg-white rotate-45"></div>
                  </div>
                  <div className="bg-white p-2 rounded-sm shadow-md">
                    {link.sublink?.map((sublinks) => (
                      <>
                        <div className="mb-2 px-2">
                          <h1 className="text-sm font-bold cursor-default">{sublinks.head}</h1>
                          {sublinks.mySubLinks.map((sublinks) => (
                            <>
                              <li>
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
