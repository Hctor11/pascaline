interface sublink {
  title: string;
  link: string;
}

interface treeLink {
  head: string;
  headlink: string;
  sublinks?: sublink[];
}

const footerLinks: treeLink[] = [
  {
    head: "Math",
    headlink: "/math",
    sublinks: [
      {
        title: "Matrix Operations",
        link: "/math/matrix",
      },
      {
        title: "Two points Solver",
        link: "/math/twopoints",
      },
      {
        title: "Perpendicular Equation",
        link: "/math/perpendicular",
      },
      {
        title: "Parallel Equation",
        link: "/math/parallel",
      },
    ],
  },
  {
    head: "Physics",
    headlink: "/phy",
    sublinks: [
      {
        title: "Free Fall",
        link: "/Phy/call",
      },
      {
        title: "Motion",
        link: "/Phy/cotion",
      },
      {
        title: "Coefficient",
        link: "/Phy/coefficient",
      },
    ],
  },{
    head: "Statistics",
    headlink: "/stats",
    sublinks: [
        {
            title: "Mean",
            link: "/Math/mean",
          },
          {
            title: "Geometric Mean",
            link: "/Math/geomean",
          },
          {
            title: "Standard Deviation",
            link: "/Math/std",
          },
    ]
  },{
    head: 'About',
    headlink: '/about'
  }
];

export default footerLinks