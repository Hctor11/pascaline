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
