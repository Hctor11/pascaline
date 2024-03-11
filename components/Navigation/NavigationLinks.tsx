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

const NavigationLinks = () => {
  const links: Link[] = [
    { name: "Math" , submenu: true, sublink: [
        {
            head: "Math11",
            mySubLinks: [
                {
                    name: 'Matrix',
                    link: "/Math/Matrix"
                },
                {
                    name: 'Matrix Determinant',
                    link: "/Math/Determinant"
                },
                {
                    name: 'Triange Solver',
                    link: "/Math/Triangle"
                }
            ]
        }
    ]},
    { name: "Physics" , submenu: true, sublink: [
        {
            head: "Physics22",
            mySubLinks: [
                {
                    name: 'Free Fall',
                    link: "/Phy/call"
                },
                {
                    name: 'Motion',
                    link: "/Phy/cotion"
                },
                {
                    name: 'Coefficient',
                    link: "/Phy/coefficient"
                }
            ]
        }
    ]},
    { name: "Statistics" , submenu: true, sublink: [
        {
            head: "Statistics33",
            mySubLinks: [
                {
                    name: 'Mean',
                    link: "/Math/mean"
                },
                {
                    name: 'Geometric Mean',
                    link: "/Math/geomean"
                },
                {
                    name: 'Standard Deviation',
                    link: "/Math/std"
                }
            ]
        }
    ]},
  ];

  return (
    <>
      {links.map((link) => (
        <>
          <div className="md:mb-0 mb-6 cursor-pointer hover:text-gray-500">
            <h1 className="text-2xl md:text-sm">{link.name}</h1>
          </div>
        </>
      ))}
    </>
  );
};

export default NavigationLinks;
