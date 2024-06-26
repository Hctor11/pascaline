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
        title: "Units converter",
        link: "/phy/unit",
      }
    ],
  },{
    head: "Statistics",
    headlink: "/stats",
    sublinks: [
        {
            title: "Mean",
            link: "/stats/mean",
          }
    ]
  },{
    head: 'About',
    headlink: '/about'
  }
];

export default footerLinks