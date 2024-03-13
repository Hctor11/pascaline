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
        title: "Matrix",
        link: "/math/matrix",
      },
      {
        title: "Matrix Determinant",
        link: "/math/determinant",
      },
      {
        title: "Triange Solver",
        link: "/math/triangle",
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