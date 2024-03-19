import type { Link } from "./LinksTypes";

const links: Link[] = [
  {
    name: "Math",
    mainLink: "math",
    submenu: true,
    sublink: [
      {
        head: "Matrix",
        mySubLinks: [
          {
            name: "Matrix Operations",
            link: "/math/matrix",
          },
        ],
      },
      {
        head: "Linear Equations",
        mySubLinks: [
          {
            name: "Perpendicular Equation",
            link: "/math/perpendicular",
          },
          {
            name: "Parallel Equation",
            link: "/math/parallel",
          },
          {
            name: "Two points Solver",
            link: "/math/twopoints",
          },
        ],
      },
    ],
  },
  {
    name: "Physics",
    mainLink: "phy",
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
    mainLink: "stats",
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

export default links;
